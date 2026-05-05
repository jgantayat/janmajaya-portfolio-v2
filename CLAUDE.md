# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200
npm run build      # Production build → dist/
npm run watch      # Dev build in watch mode
npm test           # Run all unit tests via Vitest
```

To run a single test file: `npx vitest run src/app/app.spec.ts`

## Architecture

Angular 21 portfolio — a fully client-side, single-page application. There is no routing: `App` imports `LayoutComponent` directly, which renders all sections sequentially inside `<main>`. `app.routes.ts` is intentionally empty.

**Section order** (defined in `layout.component.html`):
`hero → about → skills → experience → education → projects → certifications → recommendations → contact`

**Data layer**: All personal content lives in `src/app/data/portfolio.data.ts`. This is the single source of truth for every section. Interfaces for all data shapes are in `src/app/core/models/portfolio.model.ts`.

**State**: Angular Signals only (`signal()`, `computed()`, `effect()`). Never use RxJS subjects, NgRx, or `signal.mutate()` — use `update()` or `set()`.

**Testing**: Vitest (not Jest). Test files live alongside source as `*.spec.ts`. jsdom is the DOM environment.

**TypeScript**: All strict flags enabled. Avoid `any`; use `unknown` when the type is uncertain.

## Styling

All section components use **pure custom CSS** with design tokens. Bootstrap 5 is wired in (`angular.json` styles/scripts) but in practice all components are styled with CSS custom properties from `src/styles.css`.

**Always use design tokens — never hardcode colours, sizes, or transitions:**

| Group | Examples |
|-------|---------|
| Colours | `--color-accent`, `--color-bg-primary`, `--color-bg-card`, `--color-text-primary`, `--color-text-muted`, `--color-border`, `--color-shadow`, `--color-accent-glow` |
| Spacing | `--space-1` … `--space-24` (0.25 rem steps) |
| Typography | `--text-xs` … `--text-6xl`, `--font-sans`, `--font-mono` |
| Radii | `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full` |
| Motion | `--transition-fast` (150ms), `--transition-base` (300ms), `--transition-slow` (500ms) |

**Theming**: `ThemeService` sets `data-theme="dark|light"` on `<html>` and persists to `localStorage`. Component CSS uses `[data-theme="light"]` selectors to override dark defaults. Dark is the default.

## Core services

| Service | Purpose |
|---------|---------|
| `ScrollService` | `IntersectionObserver` tracks the active section; `scrollTo(id)` smooth-scrolls. **When adding a new section, add its `id` to `sectionIds` in this service.** |
| `ThemeService` | Dark/light toggle, persists via `localStorage` key `jg-portfolio-theme`. |

## Shared building blocks

**Directives**
- `appRevealOnScroll` — adds `.reveal` on init, `.revealed` when 12% visible. Optional `[revealDelay]="ms"` staggers siblings. CSS for `.reveal`/`.revealed` lives in `src/styles.css`.

**Components** (`src/app/shared/components/`)
- `SectionTitle` — consistent `label` + `title` + accent line used by every section header.
- `Tag` — small pill label for tech tags.
- `SkillBadge` — icon + name tile used in the Skills section.
- `TimelineItem` — card used by the Experience section timeline (not Education, which has its own alternating layout).
- `ProjectCard` — card with `iconKey` input; computes a Devicon CDN URL automatically.
- `ThemeToggle` — button wired to `ThemeService`.

**Utilities** (`src/app/shared/utils/`)
- `createAutoplay(intervalMs, tick, destroyRef)` — shared carousel autoplay. Returns `{ start, pause, resume, stop, restart }`. `DestroyRef` auto-clears the interval. Used by both Projects and Recommendations carousels. Manual nav clicks should call `restart()`; the internal tick should call the private `advance()` directly to avoid restart cascades.

**Devicon CDN pattern** (for tech icons):
```
https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/<key>/<key>-<variant>.svg
```
Common variants: `original`, `plain`. Pass `iconKey` to `ProjectCard`; it computes the URL via `computed()`.

## Angular coding rules

Non-obvious constraints that override default instincts:

- **No `standalone: true`** — default in Angular v20+, must not be set explicitly
- **`ChangeDetectionStrategy.OnPush`** on every component
- **`input()` / `output()` functions** instead of `@Input` / `@Output` decorators
- **`inject()`** instead of constructor injection
- **`host` object** in `@Component`/`@Directive` instead of `@HostBinding` / `@HostListener`
- **`[class.foo]` / `[style.foo]`** bindings instead of `ngClass` / `ngStyle`
- **Native control flow** (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- **`NgOptimizedImage`** for all static images (does not work for inline base64)
- **WCAG AA** on all components (colour contrast, ARIA labels, focus management)

## Workflow

Before implementing any feature or component, write a plan under `_plan/<feature-name>.md` and wait for approval. Only implement after the plan is confirmed.
