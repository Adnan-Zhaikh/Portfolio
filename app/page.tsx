import Image from "next/image";
import { projects } from "@/lib/projects";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
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
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="font-mono text-sm font-medium">
            Adnan Shaikh
          </a>
          <nav className="flex gap-6 font-mono text-sm text-ink-soft">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="link-underline">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-content px-6 md:px-10">
        {/* ---------- Hero ---------- */}
        <section id="top" className="grid gap-10 pb-16 pt-16 md:grid-cols-[1fr_120px] md:gap-16 md:pb-24 md:pt-24">
          <div>
            <h1 className="font-mono text-[2.5rem] font-semibold leading-[1.05] tracking-tight md:text-[4.25rem]">
              Adnan Shaikh
            </h1>
            <p className="mt-4 font-mono text-lg text-ink-soft md:text-xl">
              Computer science student
              <span className="caret" aria-hidden="true" />
            </p>
            <p className="mt-8 max-w-prose text-[1.0625rem] leading-[1.7] text-ink">
              I'm a BSc Computer Science student working mostly in TypeScript
              and Python, with React, Next.js, and PostgreSQL as my usual
              stack. Most of what I build starts as a way to get better at
              data structures and algorithms, then turns into something I
              actually use myself. Java shows up too, mainly through
              coursework.
            </p>
          </div>
          <div className="hidden md:block">
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
        <section id="experience" className="border-t border-line py-12 md:py-16">
          <h2 className="font-mono text-sm font-semibold text-ink-soft">
            Experience
          </h2>
          <div className="mt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-mono text-lg font-semibold">
                Faculty and Assistant In-Charge at CareerCreators
              </h3>
              <span className="shrink-0 font-mono text-xs text-ink-faint">
                Apr 2024 &ndash; May 2026
              </span>
            </div>
            <p className="mt-3 max-w-prose text-[1.0625rem] leading-[1.7] text-ink">
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
        <section id="now" className="border-t border-line py-12 md:py-16">
          <h2 className="font-mono text-xl font-semibold">Right now</h2>
          <p className="mt-4 max-w-prose text-[1.0625rem] leading-[1.7] text-ink">
            Working through LeetCode most days, going deeper into data
            structures, and starting to pick up data science. Longer term,
            the plan is to ship real products and eventually start a small
            studio of my own.
          </p>
        </section>

        {/* ---------- Work + Sidebar ---------- */}
        <div className="grid gap-12 border-t border-line py-12 md:grid-cols-[240px_1fr] md:gap-16 md:py-16">
          <aside className="md:sticky md:top-20 md:self-start">
            <div>
              <h2 className="font-mono text-sm font-semibold text-ink-soft">
                Stack
              </h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-mono text-xs text-ink-faint">Languages</dt>
                  <dd className="mt-1 text-[0.9375rem] leading-[1.5]">
                    Python, Java, C++, JavaScript, TypeScript
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-faint">Frameworks</dt>
                  <dd className="mt-1 text-[0.9375rem] leading-[1.5]">
                    React, Next.js
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-faint">Databases</dt>
                  <dd className="mt-1 text-[0.9375rem] leading-[1.5]">
                    PostgreSQL, MySQL
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10" id="contact">
              <h2 className="font-mono text-sm font-semibold text-ink-soft">
                Get in touch
              </h2>
              <ul className="mt-4 space-y-3 text-[0.9375rem]">
                <li>
                  <a
                    href="mailto:adnanibrahimshaikh@gmail.com"
                    className="link-underline"
                  >
                    adnanibrahimshaikh@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/adnan-shaikh-4763233b2"
                    className="link-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Adnan-Zhaikh"
                    className="link-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/AdnanZhaikh"
                    className="link-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div id="work">
            <h2 className="font-mono text-sm font-semibold text-ink-soft">
              Things I've built
            </h2>
            <ol className="mt-6">
              {projects.map((project, index) => (
                <li
                  key={project.name}
                  className={`py-8 ${index !== 0 ? "border-t border-line" : ""}`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-mono text-lg font-semibold">
                      {project.name}
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-ink-faint">
                      {project.date}
                    </span>
                  </div>
                  <p className="mt-3 max-w-prose text-[1rem] leading-[1.65] text-ink">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono text-xs text-ink-faint">
                    {project.stack}
                  </p>
                  <a
                    href={project.linkHref}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-3 inline-block text-[0.9375rem] text-accent"
                  >
                    {project.linkLabel}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-8 font-mono text-xs text-ink-faint md:px-10">
          Built with Next.js. Last updated September 2026.
        </div>
      </footer>
    </>
  );
}
