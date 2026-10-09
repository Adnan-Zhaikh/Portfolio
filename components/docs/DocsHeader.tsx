"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Repositories" },
  { href: "/docs/live", label: "Live Projects" },
  { href: "/lab", label: "Lab" },
];

export default function DocsHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-3 z-20 mx-auto max-w-[1100px] px-4 pt-3 sm:px-6">
      <div className="docs-card flex items-center justify-between gap-3 px-4 py-2.5 backdrop-blur-md">
        <Link href="/" className="docs-text text-lg font-extrabold tracking-tight">Adnan.</Link>
        <nav className="flex items-center gap-1 overflow-x-auto text-sm font-medium">
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
        <ThemeToggle />
      </div>
    </header>
  );
}
