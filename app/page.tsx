import Image from "next/image";
import { Mail, Linkedin, Github, Code2 } from "lucide-react";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "/docs", label: "Documentation" },
  { href: "#now", label: "Now" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>

      <header className="border-b border-line">
        <div className="mx-auto flex max-w-content flex-col gap-2.5 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 md:px-10">
          <a href="#top" className="shrink-0 font-mono text-sm font-medium sm:text-base">
            Adnan Shaikh
          </a>
          <nav className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs text-ink-soft sm:flex-nowrap sm:gap-6 sm:text-sm">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link shrink-0 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-content px-3 sm:px-6 md:px-10">
        {/* ---------- Hero ---------- */}
        <section
          id="top"
          className="grid gap-4 pb-8 pt-8 sm:gap-6 sm:pb-12 sm:pt-12 md:grid-cols-[1fr_120px] md:items-start md:gap-16 md:pb-24 md:pt-24"
        >
          <div className="order-2 md:order-none">
            <h1 className="font-mono text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-[4.25rem]">
              Adnan Shaikh
            </h1>
            <p className="mt-3 font-mono text-sm text-ink-soft sm:mt-4 sm:text-base md:text-lg">
              Computer science student
              <span className="caret" aria-hidden="true" />
            </p>
            <p className="mt-4 max-w-prose text-sm leading-[1.6] text-ink sm:mt-6 sm:text-base md:text-[1.0625rem]">
              I'm a BSc Computer Science student working mostly in TypeScript
              and Python, with React, Next.js, and PostgreSQL as my usual
              stack. Most of what I build starts as a way to get better at
              data structures and algorithms, then turns into something I
              actually use myself. Java shows up too, mainly through
              coursework.
            </p>
          </div>
          <div className="order-1 w-14 sm:w-16 md:order-none md:w-auto">
            <div className="border border-line p-1">
              <Image
                src="https://avatars.githubusercontent.com/u/271157250?v=4"
                alt="Adnan Shaikh"
                width={120}
                height={120}
                className="h-auto w-full grayscale"
              />
            </div>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience" className="border-t border-line py-8 sm:py-10 md:py-16">
          <h2 className="font-mono text-xs font-semibold text-ink-soft sm:text-sm">
            Experience
          </h2>
          <div className="mt-4 sm:mt-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
              <h3 className="font-mono text-sm font-semibold sm:text-base md:text-lg">
                Faculty and Assistant In-Charge at CareerCreators
              </h3>
              <span className="shrink-0 font-mono text-xs text-ink-faint">
                Apr 2024 &ndash; May 2026
              </span>
            </div>
            <p className="mt-3 max-w-prose text-sm leading-[1.6] text-ink sm:text-base md:text-[1.0625rem]">
              Taught practical computer skills to students, covering MS
              Office, design software, and the fundamentals of web
              development and programming. Also helped run the center as
              assistant in-charge alongside teaching.
            </p>
            <p className="mt-3 font-mono text-xs text-ink-faint">
              MS Office, Photoshop, Illustrator, CorelDraw, Canva, HTML5,
              CSS, JavaScript, Python basics
            </p>
          </div>
        </section>

        {/* ---------- Now ---------- */}
        <section id="now" className="border-t border-line py-8 sm:py-10 md:py-16">
          <h2 className="font-mono text-sm font-semibold sm:text-base">Right now</h2>
          <p className="mt-4 max-w-prose text-sm leading-[1.6] text-ink sm:text-base md:text-[1.0625rem]">
            Working through LeetCode most days, going deeper into data
            structures, and starting to pick up data science. Longer term,
            the plan is to ship real products and eventually start a small
            studio of my own.
          </p>
        </section>

        {/* ---------- Work + Sidebar ---------- */}
        <div className="grid gap-6 border-t border-line py-8 sm:gap-8 sm:py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-16 lg:grid-cols-[240px_1fr] lg:gap-16">
          <aside className="order-2 md:order-none md:sticky md:top-20 md:self-start">
            <div>
              <h2 className="font-mono text-xs font-semibold text-ink-soft sm:text-sm">
                Stack
              </h2>
              <dl className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                <div>
                  <dt className="font-mono text-xs text-ink-faint">Languages</dt>
                  <dd className="mt-1 text-sm leading-[1.5] sm:text-[0.9375rem]">
                    Python, Java, C++, JavaScript, TypeScript
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-faint">Frameworks</dt>
                  <dd className="mt-1 text-sm leading-[1.5] sm:text-[0.9375rem]">
                    React, Next.js
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-faint">Databases</dt>
                  <dd className="mt-1 text-sm leading-[1.5] sm:text-[0.9375rem]">
                    PostgreSQL, MySQL
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 sm:mt-10" id="contact">
              <h2 className="font-mono text-xs font-semibold text-ink-soft sm:text-sm">
                Get in touch
              </h2>
              <ul className="mt-3 space-y-2 text-sm sm:mt-4 sm:space-y-3 sm:text-[0.9375rem]">
                <li>
                  <a
                    href="mailto:adnanibrahimshaikh@gmail.com"
                    className="link-underline inline-flex items-center gap-2"
                  >
                    <Mail size={14} strokeWidth={1.75} className="shrink-0 text-ink-faint sm:size-[15px]" />
                    <span className="truncate">adnanibrahimshaikh@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/adnan-shaikh-4763233b2"
                    className="link-underline inline-flex items-center gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={14} strokeWidth={1.75} className="shrink-0 text-ink-faint sm:size-[15px]" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Adnan-Zhaikh"
                    className="link-underline inline-flex items-center gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={14} strokeWidth={1.75} className="shrink-0 text-ink-faint sm:size-[15px]" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/AdnanZhaikh"
                    className="link-underline inline-flex items-center gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 size={14} strokeWidth={1.75} className="shrink-0 text-ink-faint sm:size-[15px]" />
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div id="work" className="order-1 md:order-none">
            <h2 className="font-mono text-xs font-semibold text-ink-soft sm:text-sm">
              Project archive
            </h2>
            <div className="mt-4 rounded-2xl border border-line bg-[#f6f4ee] p-4 sm:p-6">
              <p className="max-w-prose text-sm leading-[1.6] text-ink sm:text-base">
                I keep the full project list, search, and documentation in one place so the portfolio stays focused and the docs stay easier to explore.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="/docs"
                  className="inline-flex items-center rounded-full bg-ink px-4 py-2 font-mono text-xs font-medium text-paper transition-colors hover:bg-ink/90"
                >
                  Browse projects
                </a>
                <a
                  href="/docs/live"
                  className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 font-mono text-xs font-medium text-ink transition-colors hover:border-ink-soft"
                >
                  Live projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-content px-3 py-4 font-mono text-xs text-ink-faint sm:px-6 sm:py-6 md:px-10 md:py-8">
          Last updated September 2026.
        </div>
      </footer>
    </>
  );
}