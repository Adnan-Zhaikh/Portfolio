"use client";

import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import type { DocRepo } from "@/lib/github";
import Markdown from "./Markdown";

export default function RepoPanel({ repo }: { repo: DocRepo }) {
  const [active, setActive] = useState(repo.sections[0].id);
  const section = repo.sections.find((s) => s.id === active) ?? repo.sections[0];

  return (
    <div className="docs-panel grid gap-4 p-3 sm:p-4 md:grid-cols-[200px_1fr]">
      <nav
        aria-label={`${repo.name} sections`}
        className="flex gap-1 overflow-x-auto md:flex-col md:overflow-visible"
      >
        {repo.sections.map((s) => (
          <button
            key={s.id}
            type="button"
            data-active={s.id === active}
            onClick={() => setActive(s.id)}
            className="docs-tab"
          >
            {s.title}
          </button>
        ))}
      </nav>

      <div className="min-w-0 md:border-l md:pl-6 docs-divider">
        <div className="mb-4 flex flex-wrap gap-2">
          <a href={repo.htmlUrl} target="_blank" rel="noreferrer" className="docs-btn docs-btn-soft">
            <Github size={14} /> GitHub Repo <ArrowUpRight size={14} />
          </a>
          {repo.liveUrl && (
            <a href={repo.liveUrl} target="_blank" rel="noreferrer" className="docs-btn docs-btn-ghost">
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}
        </div>
        <h3 className="docs-text mb-3 text-xl font-bold">{section.title}</h3>
        <Markdown repoUrl={repo.htmlUrl}>{section.body}</Markdown>
      </div>
    </div>
  );
}
