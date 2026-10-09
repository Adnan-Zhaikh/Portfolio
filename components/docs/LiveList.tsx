"use client";

import { useState } from "react";
import { ArrowUpRight, FileText, ExternalLink } from "lucide-react";
import type { DocRepo } from "@/lib/github";
import RepoPanel from "./RepoPanel";
import RepoTile from "./RepoTile";
import RepoGallery from "./RepoGallery";
import EmptyState from "./EmptyState";

export default function LiveList({ repos }: { repos: DocRepo[] }) {
  const [open, setOpen] = useState<string | null>(null);
  if (repos.length === 0) return <EmptyState live />;

  return (
    <div className="space-y-5">
      {repos.map((repo) => {
        const isOpen = open === repo.slug;
        return (
          <article key={repo.slug} id={repo.slug} className="docs-card p-4 sm:p-5">
            <div className="grid gap-5 md:grid-cols-[320px_1fr]">
              <RepoGallery slug={repo.slug} name={repo.name} images={repo.images} />
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <RepoTile name={repo.name} />
                  <a
                    href={repo.liveUrl ?? repo.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="docs-text inline-flex items-center gap-2 text-xl font-bold"
                  >
                    {repo.name} <ExternalLink size={14} className="docs-muted" />
                  </a>
                </div>
                <p className="docs-muted mt-3 text-sm leading-relaxed">{repo.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {repo.language && <span className="docs-chip">{repo.language}</span>}
                  {repo.topics.slice(0, 4).map((t) => (
                    <span key={t} className="docs-chip">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={repo.liveUrl!} target="_blank" rel="noreferrer" className="docs-btn docs-btn-primary">
                    View Live <ArrowUpRight size={14} />
                  </a>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : repo.slug)}
                    className="docs-btn docs-btn-ghost"
                  >
                    <FileText size={14} /> Documentation
                  </button>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className="mt-5">
                <RepoPanel repo={repo} />
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
