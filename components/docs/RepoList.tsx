"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Search, Star } from "lucide-react";
import type { DocRepo } from "@/lib/github";
import RepoPanel from "./RepoPanel";
import RepoTile from "./RepoTile";
import EmptyState from "./EmptyState";

export default function RepoList({ repos }: { repos: DocRepo[] }) {
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("All");
  const [open, setOpen] = useState<string | null>(null);

  const languages = useMemo(
    () => ["All", ...Array.from(new Set(repos.map((r) => r.language).filter((l): l is string => !!l))).sort()],
    [repos],
  );

  const shown = repos.filter((r) => {
    const q = query.trim().toLowerCase();
    const matchesQ = !q || r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q);
    return matchesQ && (lang === "All" || r.language === lang);
  });

  // Lets /docs#repo-name open that repo (used by the "Documentation" button on the Live page).
  useEffect(() => {
    const h = decodeURIComponent(window.location.hash.slice(1));
    if (h && repos.some((r) => r.slug === h)) {
      setOpen(h);
      requestAnimationFrame(() => document.getElementById(h)?.scrollIntoView({ block: "start" }));
    }
  }, [repos]);

  if (repos.length === 0) return <EmptyState />;

  return (
    <section>
      <div className="docs-card mb-4 flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:p-4">
        <label className="docs-input flex flex-1 items-center gap-2 px-3 py-2">
          <Search size={15} aria-hidden="true" />
          <span className="sr-only">Search repositories</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search repositories..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {languages.map((l) => (
            <button key={l} type="button" data-active={l === lang} onClick={() => setLang(l)} className="docs-pill">
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {shown.length === 0 && <p className="docs-muted p-6 text-center text-sm">No repositories match.</p>}
        {shown.map((repo) => {
          const isOpen = open === repo.slug;
          return (
            <article key={repo.slug} id={repo.slug} className="docs-card scroll-mt-24">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : repo.slug)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 p-4 text-left sm:gap-4"
              >
                <RepoTile name={repo.name} />
                <span className="min-w-0 flex-1">
                  <span className="docs-text block text-base font-bold">{repo.name}</span>
                  <span className="docs-muted line-clamp-2 block text-sm">{repo.description}</span>
                </span>
                {repo.language && <span className="docs-badge hidden sm:inline-flex">{repo.language}</span>}
                <span className="docs-badge hidden sm:inline-flex">Public</span>
                <span className="docs-muted inline-flex items-center gap-1 text-sm">
                  <Star size={14} /> {repo.stars}
                </span>
                <ChevronDown size={18} className={`docs-muted shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                  <RepoPanel repo={repo} />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
