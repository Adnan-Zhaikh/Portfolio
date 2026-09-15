import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EEEDE6",
        ink: "#15171A",
        "ink-soft": "#5A5D61",
        "ink-faint": "#8B8D8F",
        line: "#D8D6CC",
        accent: "#1F6F5C",
        "accent-dim": "#EAE9DF",
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-plex-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
        prose: "62ch",
      },
    },
  },
  plugins: [],
};

export default config;
