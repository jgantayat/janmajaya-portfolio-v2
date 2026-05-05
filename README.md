# Janmajaya Gantayat — Portfolio

Personal portfolio for **Janmajaya Gantayat**, Java Full Stack Developer based in Bengaluru. A single-page Angular 21 site with a custom "Coder's Dark" design system, signal-driven state, and a persisted dark/light theme.

> **Live demo:** _add your deployment URL here_
> **Source plan:** [`_execution/portfolio-execution.md`](./_execution/portfolio-execution.md)

---

## Features

- **9 scrolling sections** — Hero, About, Skills, Experience, Education, Projects, Certifications, Recommendations, Contact
- **Matrix-rain canvas hero** — pure JS on `<canvas>` (no library), themed via the same accent CSS variable as the rest of the UI
- **Signal-driven typewriter** — cycles through role labels using `signal()` + `setTimeout`
- **Hero circular photo with floating stat chips** — 360 px circle frame, slowly-rotating dashed accent ring, 3 staggered floating stat cards
- **Scroll-spy navbar** — active link tracked with `IntersectionObserver`; mobile drawer with animated hamburger
- **Projects horizontal slider** — scroll-snap, 3 cards per page, Devicon branded background icons, hover lift + glow pop-up effect, wrap-around autoplay every 3 s
- **Project filter** — `signal()` + `computed()` filter chips reset the slider and restart the autoplay
- **Recommendations carousel** — 8 LinkedIn testimonials, CSS Grid stacking (no height flicker between long/short quotes), dot pagination, prev/next nav, 3 s autoplay
- **Alternating education timeline** — full journey from Secondary (2016) → Higher Secondary (2018) → B.Tech (2022), zig-zag centre-spine layout
- **Shared autoplay utility** — `createAutoplay(intervalMs, tick, destroyRef)` — interval, hover-pause, `DestroyRef` auto-cleanup, restart on manual interaction; used by both carousels
- **Persisted theme toggle** — dark / light, written to `localStorage`, syncs `data-theme` on `<html>`
- **Reveal-on-scroll** — custom `IntersectionObserver` directive with per-element delay
- **Accessible by default** — semantic HTML, ARIA labels on icon-only controls, visible focus rings, decorative SVGs marked `aria-hidden`, full keyboard nav
- **SEO-ready** — title, description, keywords, Open Graph and Twitter Card meta in `index.html`

## Tech stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [Angular](https://angular.dev) | 21.2 |
| Language | [TypeScript](https://www.typescriptlang.org/) (strict) | ~5.9 |
| State | Angular Signals (`signal`, `computed`, `effect`) | built-in |
| Styling | Plain CSS with custom properties | — |
| UI utilities | [Bootstrap 5](https://getbootstrap.com/) (CSS + JS bundle) | ^5.2 |
| Routing | `@angular/router` (single page; ready for lazy routes) | 21.2 |
| Build | `@angular/build:application` (esbuild + Vite dev server) | 21.2 |
| Tests | [Vitest](https://vitest.dev/) on `jsdom` | ^4.0 |
| Tooling | Prettier 3, npm 10.9 | — |

Fonts: **Inter** (UI) + **JetBrains Mono** (code accents), loaded from Google Fonts.

## Project structure

```
src/
├── index.html                 # SEO meta + font preconnects + data-theme="dark"
├── main.ts                    # bootstrapApplication(App, appConfig)
├── styles.css                 # design tokens, reset, utilities
└── app/
    ├── app.{ts,html,css}      # root shell — hosts <app-layout/>
    ├── app.config.ts          # router + global error listener
    ├── app.routes.ts          # routes (currently single-page)
    ├── core/
    │   ├── models/portfolio.model.ts
    │   └── services/
    │       ├── theme.service.ts   # signal + localStorage + matchMedia
    │       └── scroll.service.ts  # IntersectionObserver scroll-spy
    ├── data/
    │   └── portfolio.data.ts  # all content lives here (single source of truth)
    ├── shared/
    │   ├── directives/reveal-on-scroll.directive.ts
    │   ├── utils/autoplay.ts  # shared carousel autoplay utility
    │   └── components/        # SectionTitle, Tag, SkillBadge, TimelineItem, ProjectCard, ThemeToggle
    ├── layout/
    │   ├── layout.component.{ts,html}     # shell that composes the page
    │   ├── navbar/navbar.component.{ts,html,css}
    │   └── footer/footer.component.{ts,html,css}
    └── sections/
        ├── hero/             # matrix rain + typewriter + circular photo + floating stat chips
        ├── about/            # bio + stats + sticky quick-facts card
        ├── skills/           # 6 category cards
        ├── experience/       # timeline (current job pulses)
        ├── education/        # alternating centre-spine timeline (10th → 12th → B.Tech)
        ├── projects/         # horizontal scroll-snap slider, filter chips, autoplay
        ├── certifications/   # badge cards
        ├── recommendations/  # LinkedIn carousel, CSS Grid stacking, autoplay
        └── contact/          # icon grid + email CTA
```

## Getting started

### Prerequisites

- **Node.js** ≥ 20 (Angular 21 requirement)
- **npm** 10+

### Install & run

```bash
npm install
npm start          # dev server at http://localhost:4200
```

### Other scripts

```bash
npm run build      # production build → dist/janmajaya-portfolio/
npm run watch      # dev build in watch mode (no server)
npm test           # run unit tests via Vitest
```

To run a single test file:

```bash
npx vitest run src/app/app.spec.ts
```

## Personalising the content

All copy lives in **`src/app/data/portfolio.data.ts`** — the components import from there. Update the typed exports to change what the site shows:

- `personalInfo` — name, title, tagline, bio paragraphs, email, phone, location, social links, resume URL, typewriter roles
- `stats` — hero stat chips (value + label); first 3 are shown as floating chips on the hero photo
- `skillCategories` — six category groups with their tags
- `experience`, `education` — timeline entries (set `isCurrent: true` to add the pulsing dot on Experience)
- `projects` — slider cards; `iconKey` drives the Devicon background icon (e.g. `"angular"`, `"spring"`)
- `certifications` — badge colour, initial, optional `verifyUrl`, optional `imageUrl`
- `recommendations` — LinkedIn testimonials (`name`, `headline`, `relationship`, `date`, `text`, `imageUrl`)
- `contactMethods`, `navLinks`

**Resume PDF:** drop yours at `src/assets/JANMAJAYA-GANTAYAT-Resume.pdf` — the hero "Resume" button already points there.

## Architecture rules (Angular v21 dialect)

This project enforces the modern v21 conventions — see [`CLAUDE.md`](./CLAUDE.md) and [`.claude/skills/angular-best-practice/SKILL.md`](./.claude/skills/angular-best-practice/SKILL.md):

- **No `standalone: true`** — it's the default in v20+
- **`ChangeDetectionStrategy.OnPush`** on every component
- **`input()` / `output()`** functions instead of `@Input` / `@Output`
- **`inject()`** instead of constructor injection
- **`host` object** instead of `@HostBinding` / `@HostListener`
- **`[class.foo]` / `[style.foo]`** bindings instead of `ngClass` / `ngStyle`
- **Native control flow** (`@if`, `@for`, `@switch`)
- **`NgOptimizedImage`** for static raster images
- **WCAG AA** baseline accessibility

## Design system

CSS custom properties define both themes in `src/styles.css`. Brand tokens at a glance:

| Token | Value (dark) | Usage |
|---|---|---|
| `--color-accent` | `#FF6B35` | Primary orange-red |
| `--color-bg-primary` | `#0D0D1A` | Page background |
| `--color-bg-card` | `#161628` | Cards |
| `--color-border` | `#1E1E3E` | Borders |
| `--font-sans` | Inter | Body / UI |
| `--font-mono` | JetBrains Mono | Code accents |
| `--radius-sm` | `3px` | Sharp-modern radius |

Light mode swaps the same variable names with light equivalents — every component renders correctly in both themes without conditional code.

## Deployment

The production build outputs static assets to `dist/janmajaya-portfolio/browser/` — deploy anywhere that serves static files.

```bash
npm run build
```

Common targets:

- **Netlify** — drag `dist/janmajaya-portfolio/browser/` into the dashboard, or connect the repo and set publish dir to that path
- **Vercel** — `vercel --prod` from the repo root
- **GitHub Pages** — `ng deploy` (with [`@angular-builders/github-pages`](https://github.com/angular-schule/angular-cli-ghpages))
- **Firebase Hosting** — `firebase deploy`

## License

Personal project — no license declared. Code is shared for reference; please ask before reusing the design verbatim for your own site.

## Author

**Janmajaya Gantayat**
Java Full Stack Developer · Bengaluru, India

- GitHub — [@jgantayat](https://github.com/jgantayat)
- LinkedIn — [in/janmajaya](https://linkedin.com/in/janmajaya)
- Email — gantayatjanmajaya@gmail.com
