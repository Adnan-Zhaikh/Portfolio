export type ReadmeSection = { id: string; title: string; body: string };

function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

/**
 * Splits a README into sections at each "## " heading.
 * Text before the first "## " (minus the "# Title" line) becomes "Overview".
 */
export function parseReadme(raw: string | null): ReadmeSection[] {
  if (!raw || !raw.trim()) {
    return [
      {
        id: "overview",
        title: "Overview",
        body: "_This repository has no README yet._",
      },
    ];
  }

  const lines = raw
    .replace(/\r\n/g, "\n")
    .replace(/<!--[\s\S]*?-->/g, "")
    .split("\n");

  const parts: { title: string; body: string[] }[] = [];
  let current = { title: "Overview", body: [] as string[] };
  let inFence = false;
  let droppedTitle = false;

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;

    if (!inFence) {
      if (
        !droppedTitle &&
        /^# [^#]/.test(line) &&
        current.body.every((l) => !l.trim())
      ) {
        droppedTitle = true;
        continue;
      }
      const m = line.match(/^## +(.+?)\s*#*\s*$/);
      if (m) {
        parts.push(current);
        current = { title: m[1].replace(/[`*_]/g, "").trim(), body: [] };
        continue;
      }
    }
    current.body.push(line);
  }
  parts.push(current);

  const used = new Set<string>();
  const sections = parts
    .map((p) => ({ title: p.title, body: p.body.join("\n").trim() }))
    .filter((p) => p.body.length > 0)
    .map((p) => {
      let id = slugify(p.title);
      while (used.has(id)) id += "-2";
      used.add(id);
      return { id, title: p.title, body: p.body };
    });

  return sections.length
    ? sections
    : [{ id: "overview", title: "Overview", body: "_This README is empty._" }];
}
