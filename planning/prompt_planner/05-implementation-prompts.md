---
description: Ordered Claude Code execution prompts for building the full portfolio step by step. Run these in sequence in your Angular project workspace.
phase: 1 & 2
---

# 05 — Claude Code Execution Prompts

## How to use this file
These prompts are designed to be run **in order** inside your Angular 21 project directory using Claude Code.
Each prompt builds on the previous one. Do not skip steps.

Start a Claude Code session inside your Angular project folder, then paste each prompt in sequence.

---

## Step 1 — Create the Angular 21 project

```
Create a new Angular 21 portfolio project with these exact settings:
- Project name: janmajaya-portfolio
- Standalone components (no NgModules)
- No routing module (we'll use scroll navigation)
- SCSS styles
- Strict TypeScript mode enabled

After scaffolding:
- Update the `<title>` in src/index.html to: `Janmajaya Portfolio`
- Update the `name` field in package.json to: `janmajaya-portfolio`

Run the Angular CLI command and show me the complete output and generated file tree.
After creation, install no additional dependencies yet.
```

---

## Step 2 — Design system foundation

```
We are building a personal portfolio in Angular 21. Set up the design system:

1. Create src/styles/_tokens.scss with the full CSS custom properties for light and dark themes (see 02-design-system.md Prompt A for exact values)
2. Update src/styles.scss with global base styles, .container and .section utility classes (see 02-design-system.md Prompt B)
3. Add Google Fonts (Inter + JetBrains Mono) import
4. Add the @import for _tokens.scss into styles.scss
5. Register both stylesheets in angular.json

Show each file's complete content after changes.
```

---

## Step 3 — Core services

```
In the Angular 21 portfolio project, create the following core services:

1. ThemeService (src/app/core/services/theme.service.ts):
   - Uses Angular Signals
   - Reads OS colour preference on init
   - Persists to localStorage
   - Sets data-theme attribute on <html>
   - Exposes: currentTheme signal, toggle() method, isDark computed signal

2. ScrollService (src/app/core/services/scroll.service.ts):
   - scrollTo(sectionId: string) using scrollIntoView({ behavior: 'smooth' })
   - Tracks activeSection using IntersectionObserver on all 8 section IDs
   - Exposes activeSection as a Signal<string>

Show the complete implementation of both services.
```

---

## Step 4 — TypeScript models and data

```
In the Angular 21 portfolio project:

1. Create src/app/core/models/portfolio.model.ts with all interfaces (PersonalInfo, SkillCategory, ExperienceItem, EducationItem, Project, Certification, ContactMethod, Stat)

2. Create src/app/data/portfolio.data.ts with Janmajaya Gantayat's complete data populated from the resume:
   - personalInfo, stats, skillCategories, experience, education, projects (2 items, one placeholder), certifications, contactMethods

(Full data values are in 04-personal-data-mapping.md Prompt B)

Show both complete files.
```

---

## Step 5 — Shared components

```
Build the four reusable shared components for the Angular 21 portfolio:

1. SectionTitleComponent (app-section-title) — title, subtitle, align inputs
2. TagComponent (app-tag) — label, variant inputs
3. TimelineItemComponent (app-timeline-item) — title, organisation, period, description, tags inputs
4. ProjectCardComponent (app-project-card) — title, description, techStack, githubUrl, liveUrl inputs

All must be:
- Standalone components
- Use @if / @for (Angular 17+ control flow, not *ngIf/*ngFor)
- Include complete SCSS

Also create the appRevealOnScroll directive (src/app/shared/directives/reveal-on-scroll.directive.ts) using IntersectionObserver.

Show all files.
```

---

## Step 6 — Layout shell and Navbar

```
Build the layout shell for the Angular 21 portfolio:

1. LayoutComponent (app-layout): shell that renders navbar, <ng-content>, and footer stacked vertically
2. NavbarComponent (app-navbar):
   - Fixed top bar with logo "JG", nav links, ThemeToggleComponent
   - Transparent → blurred background on scroll (HostListener)
   - Active link tracking via ScrollService.activeSection signal
   - Mobile hamburger menu with drawer
3. ThemeToggleComponent (app-theme-toggle): sun/moon SVG icons, calls ThemeService.toggle()

Update AppComponent to use LayoutComponent.
Show all files including SCSS.
```

---

## Step 7 — Hero section

```
Build the HeroComponent for the Angular 21 portfolio:

- Full viewport height hero
- Typewriter animation cycling through: "Java Full Stack Developer", "Spring Boot Engineer", "Angular Developer", "AWS Certified Developer"
- Implement typewriter using Angular Signals + interval (no external libraries)
- CTA buttons: "View My Work" (scroll to #projects) and "Download Resume" (/assets/JANMAJAYA-GANTAYAT-Resume.pdf)
- Social links: Email, LinkedIn
- Subtle animated CSS background (gradient or geometric pattern)
- Apply appRevealOnScroll

All text content sourced from portfolio.data.ts personalInfo.
Show the complete component.
```

---

## Step 8 — About section

```
Build the AboutComponent for the Angular 21 portfolio:

- Two-column layout: bio paragraphs + stat chips (left) | quick-facts card (right)
- Bio from portfolio.data.ts personalInfo.bio array
- Stats from portfolio.data.ts stats array
- Quick-facts: location, role, company, languages, interests — inline SVG icons for each
- appRevealOnScroll with stagger on right column

Show the complete component with SCSS.
```

---

## Step 9 — Skills section

```
Build the SkillsComponent for the Angular 21 portfolio:

- Grid of skill category cards (2 columns desktop / 1 mobile)
- Data sourced from portfolio.data.ts skillCategories
- Each card uses <app-tag> for individual skills
- Hover lift effect on cards
- appRevealOnScroll with stagger

Show the complete component.
```

---

## Step 10 — Experience and Education sections

```
Build ExperienceComponent and EducationComponent for the Angular 21 portfolio:

Both use the same vertical timeline layout with <app-timeline-item>:
  - Left accent line
  - Dot markers (pulsing dot for current role)
  - Data sourced from portfolio.data.ts experience and education arrays

Build both components and show the complete files.
```

---

## Step 11 — Projects section

```
Build the ProjectsComponent for the Angular 21 portfolio:

- Responsive card grid using <app-project-card>
- Technology filter buttons (All, Java, Angular, AWS, Spring Boot) using computed() signals
- Data sourced from portfolio.data.ts projects array
- appRevealOnScroll with stagger on cards

Show the complete component with filtering logic.
```

---

## Step 12 — Certifications and Contact sections

```
Build two final sections for the Angular 21 portfolio:

1. CertificationsComponent:
   - 2-column card grid
   - Each card: colour initial badge, cert name, issuer
   - Data from portfolio.data.ts certifications

2. ContactComponent:
   - Centred layout
   - Three contact method cards (Email, LinkedIn, Phone) with inline SVG icons
   - Data from portfolio.data.ts contactMethods
   - No form (static links only)

Show both complete components.
```

---

## Step 13 — Footer and final assembly

```
Build the FooterComponent and assemble the full portfolio:

1. FooterComponent: copyright line, social icons, "Back to top" button
2. Update LayoutComponent to include all sections in order:
   Hero → About → Skills → Experience → Education → Projects → Certifications → Contact → Footer
3. Ensure all section host elements have the correct IDs (#hero, #about, #skills, etc.)
4. Run `ng serve` and confirm the app loads without errors

Show the updated LayoutComponent and any final wiring needed.
```

---

## Step 14 — Polish and responsive fixes

```
Final polish pass for the Angular 21 portfolio:

1. Test all breakpoints: 375px mobile, 768px tablet, 1024px desktop, 1440px wide desktop
2. Verify light/dark theme switching works and persists on refresh
3. Verify smooth scroll navigation highlights the correct nav link
4. Check all appRevealOnScroll animations trigger correctly
5. Ensure the resume PDF downloads correctly
6. Run `ng build` and confirm zero build errors and zero TypeScript errors
7. Check Lighthouse accessibility score — fix any obvious issues (aria-labels, contrast ratios, focus states)

List any issues found and fix them.
```
