import { BookOpen } from "lucide-react";

export default function DocsHero({ title, accent, text }: { title: string; accent: string; text: string }) {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="docs-orb" aria-hidden="true" />
      <span className="docs-chip inline-flex items-center gap-1.5">
        <BookOpen size={12} /> / Documentation
      </span>
      <h1 className="docs-text mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
        {title} <span className="docs-accent">{accent}</span>
      </h1>
      <p className="docs-muted mt-4 max-w-xl text-base leading-relaxed">{text}</p>
    </section>
  );
}
