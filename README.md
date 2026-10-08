# Adnan Shaikh — Portfolio

My personal portfolio, and the project I enjoyed building most. It has two sides: a clean, simple site, and **the Lab**, where I experiment with animations, a dark theme, 3D, and creative components.

**Live:** [adnan-portfolio-olive-one.vercel.app](https://adnan-portfolio-olive-one.vercel.app)

<!-- Add screenshots: the simple version and the Lab side by side. -->

## Two versions

### The simple version
A fast, readable one-page site: hero, experience, stack, the things I've built, and contact. It uses a monospace look (IBM Plex Mono and Plex Sans), restrained colors, and almost no motion. The only animation is a blinking caret in the hero, and it turns off for anyone with `prefers-reduced-motion` enabled.

### The Lab
My experimenting page. This is where I try things I wouldn't put on a professional page yet:
- Animations
- A dark theme
- Creative, custom components
- 3D with Three.js

<!-- Add the Lab's route (for example /lab) and a one-line description of your favorite component. -->

## Why I built it

A portfolio should show real work, so the project list is pulled from the actual projects on my GitHub. I wanted one version that is clear and quick for anyone who visits, and one version that is just for me to play with and learn from.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Three.js (the Lab)
- IBM Plex Mono and IBM Plex Sans via `next/font/google`
- `lucide-react` for icons
- Deployed on Vercel

## What I learned

- **Three.js:** this was my first time using it, and it was a great experience. It was also the hardest part. Sometimes I got the wrong object, or a different object rendered than the one I meant. That taught me to slow down and check what is actually in the scene (what was created, what was added, and what is being rendered) instead of guessing.
- **Designing two experiences:** the same content can feel completely different depending on motion, color, and layout. Restraint is a design choice too.
- **Accessibility basics:** respecting `prefers-reduced-motion` and keeping visible focus states.
- **Content as data:** projects live in `lib/projects.ts`, so adding a new one means editing a single file, not hunting through JSX.
- **Next.js in practice:** I'd used it before, but this time I made real decisions about layout, fonts, and metadata.

<!-- Optional: add one specific Three.js bug story, for example what the wrong object was and how you found it. -->

## Project structure

```
app/
  layout.tsx        root layout, fonts, page metadata
  page.tsx          the simple page: hero, experience, stack, work, contact
  globals.css       base styles, focus states, caret animation
components/
  lab/              Lab components (animations, 3D, creative UI)
lib/
  projects.ts       project data for "Things I've built"
tailwind.config.ts  colors and font tokens
```

## Run it locally

```bash
git clone https://github.com/Adnan-Zhaikh/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

- **Projects:** edit `lib/projects.ts`. Each entry needs a name, date, description, tech stack line, and link.
- **Bio, experience, contact:** edit `app/page.tsx`. It's plain JSX.
- **Colors and fonts:** `tailwind.config.ts`.

## Roadmap

- [ ] **Documentation site for each project.** A dedicated docs page for every project I showcase, with what it does, how it works, and what I learned. This is the main next step.

## Author

**Adnan** — [@Adnan-Zhaikh](https://github.com/Adnan-Zhaikh)