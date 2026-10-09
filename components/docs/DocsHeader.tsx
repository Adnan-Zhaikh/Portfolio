"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Repositories" },
  { href: "/docs/live", label: "Live Projects" },
  { href: "/lab", label: "Lab" },
];

export default function DocsHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-3 z-20 mx-auto max-w-[1100px] px-3 pt-3 sm:px-6">
      <div className="docs-card flex flex-col gap-2.5 px-3 py-3 backdrop-blur-md sm:flex-row sm:items-center sm:justify-start sm:gap-3 sm:px-4">
        <Link href="/" className="docs-text text-lg font-extrabold tracking-tight">
          Adnan.
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-1 text-sm font-medium sm:justify-start">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={pathname === l.href}
              className="docs-nav-link whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
