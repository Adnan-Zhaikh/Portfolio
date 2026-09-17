# Adnan Shaikh

Personal portfolio site. Built with Next.js and Tailwind CSS, content pulled
from real projects at github.com/Adnan-Zhaikh.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- IBM Plex Mono and IBM Plex Sans, loaded via `next/font/google`
- `lucide-react` for the small icons next to each contact link

## Getting started

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx      root layout, fonts, page metadata
  page.tsx         the entire page: hero, experience, stack, work, contact
  globals.css      base styles, focus states, the blinking caret animation
lib/
  projects.ts      project data shown in the "Things I've built" section
tailwind.config.ts  colors and font tokens
```

## Updating content

Everything on the page is either plain text in `app/page.tsx` or data in
`lib/projects.ts`.

- New project, or an update to an existing one: edit `lib/projects.ts`.
  Each entry needs a name, date, description, tech stack line, and a link.
- Experience, bio, or contact details: edit directly in `app/page.tsx`,
  they're plain JSX, no templating layer to work around.
- Colors and spacing: `tailwind.config.ts`.

## Deploying

Push to a GitHub repo and import it on vercel.com. No extra configuration
needed, it's a standard Next.js app.

## A note on motion

There's exactly one animated thing on this page: the blinking caret next
to "Computer science student" in the hero. It respects
`prefers-reduced-motion` and turns off for anyone with that setting on.