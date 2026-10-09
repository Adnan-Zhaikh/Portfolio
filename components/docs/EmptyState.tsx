import { DOCS_TOPIC } from "@/lib/docs-config";

export default function EmptyState({ live = false }: { live?: boolean }) {
  return (
    <div className="docs-card p-8 text-center">
      <p className="docs-text font-bold">{live ? "No live projects yet" : "No repositories to show yet"}</p>
      <p className="docs-muted mx-auto mt-2 max-w-md text-sm leading-relaxed">
        {live
          ? "A project appears here once its repo has the topic below and a Website URL set on GitHub."
          : "Add the topic below to a public repo on GitHub and it will appear here within an hour. If you already did, check that GITHUB_TOKEN is set."}
      </p>
      <code className="docs-chip mt-3 inline-block">{DOCS_TOPIC}</code>
    </div>
  );
}
