import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adnan | Portfolio",
  description: "Full-stack developer building Clovrr and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-amber-400 font-mono min-h-screen flex flex-col">
        <nav className="p-4 border-b border-amber-400/30 flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="p-4 border-t border-amber-400/30 text-sm text-amber-400/60">
          © 2026 Adnan — Clovrr
        </footer>
      </body>
    </html>
  );
}