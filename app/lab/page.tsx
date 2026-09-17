"use client";

import Image from "next/image";
import { Mail, Linkedin, Github, Code2 } from "lucide-react";
import ParallaxScene from "@/components/lab/ParallaxScene";
import TechPath from "@/components/lab/TechPath";
import { projects } from "@/lib/projects";

const nav = [
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const navLinkClass =
  "shrink-0 whitespace-nowrap font-mono text-xs text-[#A6A9C4] transition-colors hover:text-[#ECEEF5] sm:text-sm";

const linkClass =
  "underline decoration-[#2A2D4A] decoration-1 underline-offset-[3px] transition-[color,text-decoration-color] hover:decoration-[#4FD1B3]";

export default function LabPage() {
  return (
    <div className="text-[#ECEEF5]">
      <div
        className="fixed inset-0 -z-20 bg-[#14162A]"
        aria-hidden="true"
      />
      <ParallaxScene />

      <div className="relative z-10">
        <header className="border-b border-[#2A2D4A] bg-[#14162A]/90">
          <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-4 sm:flex-nowrap sm:px-6 md:px-10">
            <a href="#hero" className="shrink-0 font-mono text-sm font-medium">
              Adnan Shaikh
            </a>
            <nav className="flex flex-wrap gap-x-4 gap-y-1 sm:flex-nowrap sm:gap-6">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              ))}
              <a href="/" className={navLinkClass}>
                Classic version
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-content px-4 sm:px-6 md:px-10">
          {/* ---------- Hero ---------- */}
          <section
            id="hero"
            className="flex flex-col gap-8 border-t-0 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-28"
          >
            <div>
              <h1 className="font-mono text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[4.25rem]">
                Adnan Shaikh
              </h1>
              <p className="mt-4 font-mono text-base text-[#A6A9C4] sm:text-lg md:text-xl">
                Computer science student
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-[1em] w-[0.5ch] animate-pulse bg-[#4FD1B3] align-middle"
                />
              </p>
              <p className="mt-6 max-w-prose text-base leading-[1.7] text-[#ECEEF5]/90 sm:text-[1.0625rem]">
                I'm a BSc Computer Science student working mostly in
                TypeScript and Python, with React, Next.js, and PostgreSQL as
                my usual stack. This page is the same portfolio, rebuilt as a
                scroll-driven 3D scene.
              </p>
            </div>
            <div className="w-20 shrink-0 sm:w-28">
              <div className="border border-[#2A2D4A] p-1">
                <Image
                  src="https://avatars.githubusercontent.com/u/271157250?v=4"
                  alt="Adnan Shaikh"
                  width={120}
                  height={120}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </section>

          {/* ---------- Stack ---------- */}
          <section
            id="stack"
            className="border-t border-[#2A2D4A] py-20 sm:py-28"
          >
            <h2 className="font-mono text-sm font-semibold text-[#A6A9C4]">
              Stack
            </h2>
            <div className="mt-6">
              <TechPath />
            </div>
          </section>

          {/* ---------- Experience ---------- */}
          <section
            id="experience"
            className="border-t border-[#2A2D4A] py-20 sm:py-28"
          >
            <h2 className="font-mono text-sm font-semibold text-[#A6A9C4]">
              Experience
            </h2>
            <div className="mt-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                <h3 className="font-mono text-base font-semibold sm:text-lg">
                  Faculty and Assistant In-Charge at CareerCreators
                </h3>
                <span className="shrink-0 font-mono text-xs text-[#6E7191]">
                  Apr 2024 &ndash; May 2026
                </span>
              </div>
              <p className="mt-3 max-w-prose text-base leading-[1.7] text-[#ECEEF5]/90 sm:text-[1.0625rem]">
                Taught practical computer skills to students, covering MS
                Office, design software, and the fundamentals of web
                development and programming. Also helped run the center as
                assistant in-charge alongside teaching.
              </p>
              <p className="mt-3 font-mono text-xs text-[#6E7191]">
                MS Office, Photoshop, Illustrator, CorelDraw, Canva, HTML5,
                CSS, JavaScript, Python basics
              </p>
            </div>
          </section>

          {/* ---------- Work ---------- */}
          <section
            id="work"
            className="border-t border-[#2A2D4A] py-20 sm:py-28"
          >
            <h2 className="font-mono text-sm font-semibold text-[#A6A9C4]">
              Things I've built
            </h2>
            <ol className="mt-6 space-y-5">
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="font-mono text-base font-semibold sm:text-lg">
                      {project.name}
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-[#6E7191]">
                      {project.date}
                    </span>
                  </div>
                  <p className="mt-3 max-w-prose text-[1rem] leading-[1.65] text-[#ECEEF5]/90">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono text-xs text-[#6E7191]">
                    {project.stack}
                  </p>
                  <a
                    href={project.linkHref}
                    target="_blank"
                    rel="noreferrer"
                    className={`${linkClass} mt-3 inline-block text-[0.9375rem] text-[#4FD1B3]`}
                  >
                    {project.linkLabel}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------- Contact ---------- */}
          <section
            id="contact"
            className="border-t border-[#2A2D4A] py-20 sm:py-28"
          >
            <h2 className="font-mono text-sm font-semibold text-[#A6A9C4]">
              Get in touch
            </h2>
            <ul className="mt-6 space-y-3 text-[0.9375rem]">
              <li>
                <a
                  href="mailto:adnanibrahimshaikh@gmail.com"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <Mail size={15} strokeWidth={1.75} className="shrink-0 text-[#6E7191]" />
                  adnanibrahimshaikh@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adnan-shaikh-4763233b2"
                  className={`${linkClass} inline-flex items-center gap-2`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={15} strokeWidth={1.75} className="shrink-0 text-[#6E7191]" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Adnan-Zhaikh"
                  className={`${linkClass} inline-flex items-center gap-2`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={15} strokeWidth={1.75} className="shrink-0 text-[#6E7191]" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/AdnanZhaikh"
                  className={`${linkClass} inline-flex items-center gap-2`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={15} strokeWidth={1.75} className="shrink-0 text-[#6E7191]" />
                  LeetCode
                </a>
              </li>
            </ul>
          </section>
        </main>

        <footer className="border-t border-[#2A2D4A] bg-[#14162A]">
          <div className="mx-auto max-w-content px-4 py-6 font-mono text-xs text-[#6E7191] sm:px-6 sm:py-8 md:px-10">
            Built with Next.js and Three.js.
          </div>
        </footer>
      </div>
    </div>
  );
}