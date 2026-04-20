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

**Bootstrap**: `src/main.ts` → `bootstrapApplication(App, appConfig)`. Providers (router, etc.) are registered in `src/app/app.config.ts`.

**Routing**: `src/app/app.routes.ts` (currently empty). The root `App` component hosts `<router-outlet>`.

**State**: Use Angular Signals (`signal()`, `computed()`, `effect()`) for all reactive state — not RxJS subjects or NgRx.

**Styling**: Pure CSS, no framework. CSS custom properties are defined in `src/app/app.css` using OKLCh color space (`--bright-blue`, `--electric-violet`, `--vivid-pink`, etc.) with Inter/Inter Tight fonts. Mobile breakpoint is 650px. Each component has its own `.css` file; global rules go in `src/styles.css`.

**Testing**: Vitest (not Jest). Test files live alongside source as `*.spec.ts`. jsdom is the DOM environment.

**TypeScript**: All strict flags enabled (`strict`, `noImplicitOverride`, `noImplicitReturns`, `noFallthroughCasesInSwitch`). Avoid `any`.

## Project context

See `planning/Design.md` for goals and the phased plan. Phase 1 is design/layout; Phase 2 integrates real personal data. The app is fully client-side with no backend or environment files.
