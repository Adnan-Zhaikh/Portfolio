import { DOCS_TOPIC, GITHUB_USER, docsOverrides } from "./docs-config";
import { parseReadme, type ReadmeSection } from "./readme";

const API = "https://api.github.com";
const REVALIDATE = 3600; // seconds: GitHub is re-checked at most once an hour

export type DocRepo = {
  name: string;
  slug: string;
  description: string;
  language: string | null;
  stars: number;
  topics: string[];
  htmlUrl: string;
  liveUrl: string | null;
  images: string[] | null;
  updatedAt: string;
  sections: ReadmeSection[];
};

type GhRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  html_url: string;
  homepage: string | null;
  fork: boolean;
  private: boolean;
  updated_at: string;
};

function headers(accept = "application/vnd.github+json"): Record<string, string> {
  const h: Record<string, string> = {
    Accept: accept,
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

// If the token is expired or revoked (401), retry without it so the site keeps working
// (unauthenticated GitHub allows 60 requests/hour, which is enough with hourly caching).
async function ghFetch(url: string, accept?: string): Promise<Response> {
  const res = await fetch(url, { headers: headers(accept), next: { revalidate: REVALIDATE } });
  if (res.status === 401 && process.env.GITHUB_TOKEN) {
    const { Authorization: _drop, ...plain } = headers(accept);
    return fetch(url, { headers: plain, next: { revalidate: REVALIDATE } });
  }
  return res;
}

async function getReadme(name: string): Promise<string | null> {
  try {
    const res = await ghFetch(
      `${API}/repos/${GITHUB_USER}/${name}/readme`,
      "application/vnd.github.raw+json",
    );
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

function normalizeUrl(u: string | null | undefined): string | null {
  const v = u?.trim();
  if (!v) return null;
  return /^https?:\/\//i.test(v) ? v : `https://${v}`;
}

export async function getDocRepos(): Promise<DocRepo[]> {
  let all: GhRepo[];
  try {
    const res = await ghFetch(`${API}/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) return [];
    all = (await res.json()) as GhRepo[];
  } catch {
    return [];
  }

  const picked = all.filter(
    (r) => !r.fork && !r.private && r.topics?.includes(DOCS_TOPIC),
  );

  return Promise.all(
    picked.map(async (r) => {
      const key = r.name.toLowerCase();
      const o = docsOverrides[key] ?? {};
      return {
        name: r.name,
        slug: key,
        description: o.description ?? r.description ?? "",
        language: r.language,
        stars: r.stargazers_count,
        topics: (r.topics ?? []).filter((t) => t !== DOCS_TOPIC),
        htmlUrl: r.html_url,
        liveUrl: normalizeUrl(o.liveUrl ?? r.homepage),
        images: o.images ?? null,
        updatedAt: r.updated_at,
        sections: parseReadme(await getReadme(r.name)),
      } satisfies DocRepo;
    }),
  );
}
