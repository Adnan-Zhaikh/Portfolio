"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const root = () => document.querySelector(".docs-root");

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    let t = root()?.getAttribute("data-docs-theme") as Theme | null;
    if (!t) {
      try {
        t = localStorage.getItem("docs-theme") as Theme | null;
      } catch {}
    }
    if (!t) t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    root()?.setAttribute("data-docs-theme", t);
    setTheme(t);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    root()?.setAttribute("data-docs-theme", next);
    try {
      localStorage.setItem("docs-theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button 
      type="button" 
      onClick={toggle} 
      aria-label="Toggle dark mode" 
      className="docs-icon-btn fixed bottom-6 right-4 z-30 sm:bottom-8 sm:right-6"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
