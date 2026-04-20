---
description: Prompts for scaffolding the Angular 21 project with correct architecture, routing, theming, and folder structure.
phase: 1
---

# 01 — Architecture & Project Setup

## Context
We are building a fully client-side personal portfolio SPA using Angular 21.
- No backend, no SSR
- Light/Dark mode toggle
- Single-page with smooth-scroll sections (no multi-page routing needed)
- Inspired by the Nichol Tailwind portfolio design — clean, animated, modern developer portfolio

---

## Prompt A — Scaffold the Angular 21 project

```
Create a new Angular 21 project for a personal portfolio website with the following requirements:

1. Use the Angular CLI: `ng new janmajaya-portfolio --standalone --routing=false --style=scss`
2. Use standalone components throughout (no NgModules)
3. Use Angular Signals for any reactive state
4. Enable strict mode in tsconfig
5. Set up SCSS with a global tokens file at src/styles/_tokens.scss defining:
   - CSS custom properties for light and dark theme colour palettes
   - Font size scale
   - Spacing scale
   - Transition/animation durations
6. Configure a ThemeService (injectable at root) using Angular Signals that:
   - Reads the user's OS preference on load (prefers-color-scheme)
   - Persists the chosen theme to localStorage
   - Toggles a `data-theme="light"` or `data-theme="dark"` attribute on <html>
7. The root AppComponent should be minimal — just a shell that renders a <app-layout> component

Show the full file tree after setup and the content of each generated/modified file.
```

---

## Prompt B — Folder structure and component plan

```
For the Angular 21 portfolio project, establish the following folder structure and generate empty standalone components for each:

src/
  app/
    core/
      services/
        theme.service.ts        ← ThemeService (already created)
        scroll.service.ts       ← Handles smooth scroll to sections
      models/
        portfolio.model.ts      ← TypeScript interfaces for all data types
    layout/
      layout.component.ts       ← Main shell: navbar + main content + footer
      navbar/
        navbar.component.ts     ← Top nav with logo, links, theme toggle
      footer/
        footer.component.ts     ← Simple footer with copyright + social links
    sections/
      hero/
        hero.component.ts       ← Full-screen opening section
      about/
        about.component.ts      ← Bio and profile summary
      skills/
        skills.component.ts     ← Skills grouped by category with visual indicators
      experience/
        experience.component.ts ← Work timeline
      education/
        education.component.ts  ← Education timeline
      projects/
        projects.component.ts   ← Project cards grid
      certifications/
        certifications.component.ts
      contact/
        contact.component.ts    ← Contact links and form
    shared/
      components/
        section-title/
          section-title.component.ts  ← Reusable section heading
        tag/
          tag.component.ts            ← Pill/badge for skills/tech tags
        timeline-item/
          timeline-item.component.ts  ← Reusable timeline entry
    data/
      portfolio.data.ts         ← All personal content as typed constants (no hardcoding in templates)

Generate each component as a standalone component with the correct imports.
```

---

## Prompt C — Routing / scroll navigation

```
In this Angular 21 portfolio, navigation should scroll to sections on the same page rather than use the Angular Router.

1. Create a ScrollService that:
   - Has a scrollTo(sectionId: string) method
   - Uses native scrollIntoView with `behavior: 'smooth'`
   - Tracks the currently active section using IntersectionObserver
   - Exposes activeSection as an Angular Signal

2. Update NavbarComponent to:
   - Render navigation links as buttons (not <a href>)
   - Call ScrollService.scrollTo() on click
   - Apply an "active" CSS class to the link matching the current activeSection signal

3. Sections to link to (use these IDs on each section's host element):
   #hero, #about, #skills, #experience, #education, #projects, #certifications, #contact

Show the complete implementation of ScrollService and the updated NavbarComponent.
```

---

## Prompt D — Animation setup

```
Add page-level scroll animations to the Angular 21 portfolio using only the Angular Animations module (no external libraries).

1. Create a reusable `fadeInUp` animation trigger that:
   - Starts with opacity: 0 and translateY(30px)
   - Animates to opacity: 1 and translateY(0)
   - Duration: 500ms ease-out

2. Create an IntersectionObserver-based directive called `appRevealOnScroll` that:
   - Observes the host element
   - Adds a CSS class `revealed` when the element enters the viewport (threshold: 0.15)
   - Can be applied to any section or card component

3. Apply `appRevealOnScroll` to all section wrapper divs

Show the directive implementation and an example of it applied to a section component.
```
