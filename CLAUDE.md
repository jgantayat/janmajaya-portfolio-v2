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

Angular 21 portfolio app using **standalone components** (no NgModules) and **signals** for reactive state.

**Entry point**: `src/main.ts` → `bootstrapApplication(App, appConfig)`. Providers (router, etc.) are registered in `src/app/app.config.ts`.

**Routing**: `src/app/app.routes.ts`. The root `App` component hosts `<router-outlet>`. All feature routes must use lazy loading (`loadComponent`).

**State**: Use Angular Signals (`signal()`, `computed()`, `effect()`) for all reactive state — not RxJS subjects or NgRx. Never call `signal.mutate()`; use `update()` or `set()`.

**Styling**: Bootstrap 5 is the CSS framework for all components (CSS loaded via `angular.json` styles, JS bundle via scripts — both already wired). Use Bootstrap utility classes and grid system as the first resort; write custom CSS only when Bootstrap cannot achieve the design. Custom styles go in the component's `.css` file; global overrides go in `src/styles.css`. The existing OKLCh CSS custom properties (`--bright-blue`, `--electric-violet`, etc.) in `src/app/app.html` can be used alongside Bootstrap for brand colours.

**Testing**: Vitest (not Jest). Test files live alongside source as `*.spec.ts`. jsdom is the DOM environment.

**TypeScript**: All strict flags enabled (`strict`, `noImplicitOverride`, `noImplicitReturns`, `noFallthroughCasesInSwitch`). Avoid `any`; use `unknown` when the type is uncertain.

## Angular coding rules

These are non-obvious constraints that override default instincts:

- **No `standalone: true`** — it is the default in Angular v20+ and must not be set explicitly
- **`ChangeDetectionStrategy.OnPush`** on every component
- **`input()` / `output()` functions** instead of `@Input` / `@Output` decorators
- **`inject()`** instead of constructor injection in services and components
- **`host` object** in `@Component`/`@Directive` instead of `@HostBinding` / `@HostListener`
- **`[class.foo]` / `[style.foo]`** bindings instead of `ngClass` / `ngStyle`
- **Native control flow** (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- **`NgOptimizedImage`** for all static images (does not work for inline base64)
- **WCAG AA** accessibility minimum on all components (AXE checks, color contrast, ARIA, focus management)

## Workflow

Before implementing any feature or component, write a plan under `_plan/<feature-name>.md` and wait for approval. Only implement after the plan is confirmed.

## Project context

See `planning/Design.md` for goals and the phased plan. Phase 1 is design/layout; Phase 2 integrates real personal data. The app is fully client-side with no backend or environment files.
