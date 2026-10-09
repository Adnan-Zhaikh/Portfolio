"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MAX_PROBE = 8;

function exists(src: string) {
  return new Promise<boolean>((resolve) => {
    const im = new Image();
    im.onload = () => resolve(true);
    im.onerror = () => resolve(false);
    im.src = src;
  });
}

/**
 * Shows one or more screenshots for a repo.
 * Without config it looks for /docs/<slug>.png, /docs/<slug>-2.png, -3.png ...
 * and stops at the first number that is missing. `images` overrides that.
 */
export default function RepoGallery({ slug, name, images }: { slug: string; name: string; images: string[] | null }) {
  const [list, setList] = useState<string[]>(images ?? []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images) return;
    let cancelled = false;
    (async () => {
      const out: string[] = [];
      for (let n = 1; n <= MAX_PROBE; n++) {
        const src = n === 1 ? `/docs/${slug}.png` : `/docs/${slug}-${n}.png`;
        if (!(await exists(src))) break;
        out.push(src);
      }
      if (!cancelled) setList(out);
    })();
    return () => {
      cancelled = true;
    };
  }, [slug, images]);

  const count = list.length;
  const go = (d: number) => setIndex((i) => (i + d + count) % count);

  return (
    <div className="docs-shot relative aspect-[16/10] w-full overflow-hidden rounded-xl">
      {count === 0 ? (
        <div className="docs-muted flex h-full w-full items-center justify-center px-4 text-center text-sm font-semibold">
          Add a screenshot: public/docs/{slug}.png
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={list[index]}
          alt={`${name} screenshot ${index + 1} of ${count}`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      )}

      {count > 1 && (
        <>
          <button type="button" onClick={() => go(-1)} aria-label="Previous screenshot" className="docs-icon-btn absolute left-2 top-1/2 -translate-y-1/2">
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next screenshot" className="docs-icon-btn absolute right-2 top-1/2 -translate-y-1/2">
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {list.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1}`}
                className="h-2 w-2 rounded-full"
                style={{ background: i === index ? "var(--d-accent)" : "var(--d-border)" }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
