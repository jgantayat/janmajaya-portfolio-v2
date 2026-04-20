---
description: Prompts for establishing the visual design system — colour tokens, typography, spacing, light/dark theme, and reusable shared components.
phase: 1
---

# 02 — Design System

## Context
The portfolio visual design is inspired by the **Nichol** Tailwind CSS portfolio template:
- Clean, modern, minimal developer aesthetic
- Strong typographic hierarchy
- Accent colour pops against a neutral background
- Smooth micro-animations
- Full light/dark mode support

---

## Prompt A — Colour tokens and theme

```
Define the complete colour system for the Angular 21 portfolio in src/styles/_tokens.scss.

Requirements:
- Use CSS custom properties (variables) scoped to [data-theme="light"] and [data-theme="dark"]
- Do NOT use Tailwind — use SCSS with CSS custom properties

Colour palette to implement:

LIGHT THEME:
  --color-bg-primary: #ffffff
  --color-bg-secondary: #f5f5f5
  --color-bg-card: #ffffff
  --color-text-primary: #1a1a2e
  --color-text-secondary: #4a4a68
  --color-text-muted: #9090a8
  --color-accent: #6c63ff       ← primary brand/accent (purple-blue)
  --color-accent-hover: #574fd6
  --color-border: #e2e2ef
  --color-shadow: rgba(0,0,0,0.08)

DARK THEME:
  --color-bg-primary: #0d0d1a
  --color-bg-secondary: #13132a
  --color-bg-card: #1a1a35
  --color-text-primary: #f0f0ff
  --color-text-secondary: #b0b0cc
  --color-text-muted: #6060a0
  --color-accent: #7c73ff
  --color-accent-hover: #9c95ff
  --color-border: #2a2a4a
  --color-shadow: rgba(0,0,0,0.4)

Also define in :root (theme-independent):
  --font-sans: 'Inter', system-ui, sans-serif
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace

  --text-xs: 0.75rem
  --text-sm: 0.875rem
  --text-base: 1rem
  --text-lg: 1.125rem
  --text-xl: 1.25rem
  --text-2xl: 1.5rem
  --text-3xl: 1.875rem
  --text-4xl: 2.25rem
  --text-5xl: 3rem

  --space-1: 0.25rem  through --space-20: 5rem (multiples of 0.25rem)

  --radius-sm: 4px
  --radius-md: 8px
  --radius-lg: 16px
  --radius-full: 9999px

  --transition-fast: 150ms ease
  --transition-base: 300ms ease
  --transition-slow: 500ms ease

Also add Google Fonts import to styles.scss for Inter and JetBrains Mono.
```

---

## Prompt B — Global base styles

```
Write the global base styles in src/styles.scss for the Angular 21 portfolio:

1. CSS reset / normalise (box-sizing, margin resets, base font)
2. Apply --font-sans to body, --color-bg-primary as background, --color-text-primary as default text colour
3. Smooth scroll behaviour: html { scroll-behavior: smooth }
4. Scrollbar styling for dark mode (thin, accent-coloured thumb)
5. Selection highlight using --color-accent at 30% opacity
6. Focus-visible outline using --color-accent (accessibility)
7. A .container utility class: max-width 1200px, horizontal padding var(--space-6), centred with margin auto
8. A .section utility class: padding var(--space-20) 0
9. Transition the background-color and color properties on body for smooth theme switching

Show the complete styles.scss file.
```

---

## Prompt C — Shared UI components

```
Build the following reusable standalone Angular 21 components for the portfolio:

### 1. SectionTitleComponent (app-section-title)
Inputs:
  - title: string
  - subtitle?: string
  - align?: 'left' | 'center' (default: 'left')

Template:
  <div class="section-title" [class.center]="align === 'center'">
    <h2>{{ title }}</h2>
    <p *ngIf="subtitle">{{ subtitle }}</p>
    <div class="title-underline"></div>   ← animated accent underline
  </div>

The underline should be a 3px tall bar in --color-accent that animates from width 0 to 60px on load.

### 2. TagComponent (app-tag)
Inputs:
  - label: string
  - variant?: 'default' | 'accent' (default: 'default')

Renders a pill badge styled with --color-bg-secondary and --color-text-secondary.
Accent variant uses --color-accent background at 15% opacity with --color-accent text.

### 3. TimelineItemComponent (app-timeline-item)
Inputs:
  - title: string
  - organisation: string
  - period: string
  - description?: string
  - tags?: string[]

Template: left-border accent line, dot marker, content block with title, org, period, optional description, optional tag list (using app-tag).

### 4. ProjectCardComponent (app-project-card)
Inputs:
  - title: string
  - description: string
  - techStack: string[]
  - githubUrl?: string
  - liveUrl?: string

Renders a card with --color-bg-card background, subtle border, hover shadow lift effect (transform: translateY(-4px)), tech stack tags, and action link buttons.

Show the complete implementation for all four components including SCSS.
```

---

## Prompt D — Theme toggle button

```
Build a ThemeToggleComponent (app-theme-toggle) for the Angular 21 portfolio:

1. Inject ThemeService
2. Display a sun icon (light mode) or moon icon (dark mode) — use inline SVG, no icon library dependency
3. On click, call ThemeService.toggle()
4. Animate the icon swap with a 180-degree rotation + fade
5. Add an aria-label that reflects the current action ("Switch to dark mode" / "Switch to light mode")

Show the complete component with inline SVG icons and SCSS.
```
