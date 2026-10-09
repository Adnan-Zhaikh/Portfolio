// Settings for the Documentation section.
// Which repos appear: any public repo on GitHub that has the topic below.
// Which repos are "live": any of those that has a Website URL set on GitHub
// (repo page -> gear icon next to "About" -> Website), or a liveUrl override here.

export const GITHUB_USER = process.env.GITHUB_USERNAME ?? "Adnan-Zhaikh";
export const DOCS_TOPIC = "portfolio-docs";

export type DocsOverride = {
  /** Use this instead of the repo's GitHub "Website" field. */
  liveUrl?: string;
  /**
   * Screenshots, as paths under /public. Only needed for other extensions or names.
   * Default: /public/docs/<repo>.png, <repo>-2.png, <repo>-3.png ... (repo name lowercase)
   */
  images?: string[];
  /** Use this instead of the repo's GitHub description. */
  description?: string;
};

// Keys are lowercase repo names. Everything here is optional.
export const docsOverrides: Record<string, DocsOverride> = {
  // shrunkpy: { images: ["/docs/shrunkpy-home.webp", "/docs/shrunkpy-tools.jpg"] },
};
