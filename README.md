# Adnan Shaikh — portfolio

Built with Next.js (App Router) and Tailwind CSS. Content is pulled from
the real GitHub repos at github.com/Adnan-Zhaikh

## Design notes

- Fonts: IBM Plex Mono (headlines, labels, dates) and IBM Plex Sans (body
  text) — loaded through `next/font/google` in `app/layout.tsx`.
- Colors and spacing tokens live in `tailwind.config.ts`.
- Project data lives in `lib/projects.ts`. Update dates, descriptions, or
  add new entries there and they'll flow into the log automatically.
- The only motion on the page is the blinking caret next to "Computer
  science student" — it respects `prefers-reduced-motion`.
