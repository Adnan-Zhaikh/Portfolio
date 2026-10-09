import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import DocsHeader from "@/components/docs/DocsHeader";
import ThemeToggle from "@/components/docs/ThemeToggle";
import "./docs.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-docs",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Documentation | Adnan Shaikh",
  description: "Code repositories, documentation, and live projects.",
};

// Runs before paint so the saved theme doesn't flash. Targets its own parent (.docs-root).
const themeScript = `(function(){try{var t=localStorage.getItem("docs-theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.currentScript.parentElement.setAttribute("data-docs-theme",t)}catch(e){}})();`;

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`docs-root ${jakarta.variable}`} suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <DocsHeader />
      <ThemeToggle />
      <main className="mx-auto max-w-[1100px] px-4 pb-24 sm:px-6">{children}</main>
    </div>
  );
}
