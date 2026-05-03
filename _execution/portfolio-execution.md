# JANMAJAYA GANTAYAT — PORTFOLIO WEBSITE
# 15-Day Complete Build Plan with Full Code
# Theme: Black + Orange Coder | Angular 21 | Sharp Modern
# Generated: May 03, 2026

---

# Janmajaya Portfolio — 15-Day Build Plan
## Days 1–3: Foundation, Design System & Core Services

---

## DESIGN BRIEF

**Theme:** Coder's Dark — Black + Orange  
**Accent:** `#FF6B35` (Orange-Red)  
**Base:** `#0D0D1A` (Dark Navy-Black)  
**Hero BG:** Matrix-style falling code characters (Canvas, pure JS)  
**Cards:** Sharp modern — flat, bold borders  
**Font:** Inter (UI) + JetBrains Mono (code/accents)  
**Style:** Professional developer portfolio, inspired by Nichol template aesthetics

---

## DAY 1 — Project Scaffold & Folder Structure

### Goal
Bootstrap the Angular 21 project with correct architecture, strict TypeScript, SCSS setup, and all empty components created.

### Terminal Commands
```bash
ng new janmajaya-portfolio --standalone --routing=false --style=scss
cd janmajaya-portfolio

# Generate all components
ng g c layout/layout --standalone
ng g c layout/navbar/navbar --standalone
ng g c layout/footer/footer --standalone
ng g c sections/hero/hero --standalone
ng g c sections/about/about --standalone
ng g c sections/skills/skills --standalone
ng g c sections/experience/experience --standalone
ng g c sections/education/education --standalone
ng g c sections/projects/projects --standalone
ng g c sections/certifications/certifications --standalone
ng g c sections/contact/contact --standalone
ng g c shared/components/section-title/section-title --standalone
ng g c shared/components/tag/tag --standalone
ng g c shared/components/timeline-item/timeline-item --standalone
ng g c shared/components/project-card/project-card --standalone
ng g c shared/components/theme-toggle/theme-toggle --standalone
ng g s core/services/theme
ng g s core/services/scroll
ng g d shared/directives/reveal-on-scroll
```

### Final Folder Structure
```
src/
  app/
    core/services/
      theme.service.ts
      scroll.service.ts
    core/models/
      portfolio.model.ts
    data/
      portfolio.data.ts
    layout/
      layout.component.ts / .html / .scss
      navbar/navbar.component.ts / .html / .scss
      footer/footer.component.ts / .html / .scss
    sections/
      hero / about / skills / experience /
      education / projects / certifications / contact
    shared/
      components/
        section-title / tag / timeline-item / project-card / theme-toggle
      directives/
        reveal-on-scroll.directive.ts
  styles/
    _tokens.scss
    _reset.scss
    _utilities.scss
  styles.scss
  index.html
```

### `src/index.html`
```html
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <title>Janmajaya Gantayat | Java Full Stack Developer</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Portfolio of Janmajaya Gantayat — Java Full Stack Developer specialising in Spring Boot, Angular, and AWS.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <base href="/">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

### `src/app/app.component.ts`
```typescript
import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `<app-layout />`
})
export class AppComponent {}
```

---

## DAY 2 — Design System: Tokens, Reset & Global Styles

### `src/styles/_tokens.scss`
```scss
// ─── THEME-INDEPENDENT TOKENS ─────────────────────────────────────────────
:root {
  // Fonts
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  // Type Scale
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  1.875rem;
  --text-4xl:  2.25rem;
  --text-5xl:  3rem;
  --text-6xl:  3.75rem;

  // Spacing (0.25rem steps)
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-5:  1.25rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  // Border Radius
  --radius-sm:   3px;
  --radius-md:   6px;
  --radius-lg:   12px;
  --radius-full: 9999px;

  // Transitions
  --transition-fast:   150ms ease;
  --transition-base:   300ms ease;
  --transition-slow:   500ms ease;

  // Navbar height
  --navbar-height: 64px;
}

// ─── DARK THEME (Default — Coder Theme) ──────────────────────────────────
[data-theme="dark"] {
  --color-bg-primary:    #0D0D1A;
  --color-bg-secondary:  #12122A;
  --color-bg-card:       #161628;
  --color-bg-card-hover: #1C1C38;
  --color-text-primary:  #F0F0FF;
  --color-text-secondary:#B8B8D4;
  --color-text-muted:    #5A5A88;
  --color-accent:        #FF6B35;
  --color-accent-hover:  #FF8555;
  --color-accent-dim:    rgba(255, 107, 53, 0.12);
  --color-accent-glow:   rgba(255, 107, 53, 0.25);
  --color-border:        #1E1E3E;
  --color-border-accent: #FF6B35;
  --color-shadow:        rgba(0, 0, 0, 0.5);
  --color-shadow-accent: rgba(255, 107, 53, 0.15);
  --color-matrix:        rgba(255, 107, 53, 0.6);
}

// ─── LIGHT THEME ──────────────────────────────────────────────────────────
[data-theme="light"] {
  --color-bg-primary:    #FAFAFA;
  --color-bg-secondary:  #F0F0F5;
  --color-bg-card:       #FFFFFF;
  --color-bg-card-hover: #F5F5FF;
  --color-text-primary:  #0D0D1A;
  --color-text-secondary:#3A3A5A;
  --color-text-muted:    #8A8AAA;
  --color-accent:        #E05520;
  --color-accent-hover:  #C44010;
  --color-accent-dim:    rgba(224, 85, 32, 0.10);
  --color-accent-glow:   rgba(224, 85, 32, 0.20);
  --color-border:        #E0E0EE;
  --color-border-accent: #E05520;
  --color-shadow:        rgba(0, 0, 0, 0.08);
  --color-shadow-accent: rgba(224, 85, 32, 0.12);
  --color-matrix:        rgba(224, 85, 32, 0.5);
}
```

### `src/styles/_reset.scss`
```scss
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
  transition:
    background-color var(--transition-base),
    color var(--transition-base);
  overflow-x: hidden;
}

img, video { max-width: 100%; display: block; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }

// Scrollbar
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-bg-secondary); }
::-webkit-scrollbar-thumb {
  background: var(--color-accent);
  border-radius: var(--radius-full);
}

// Selection
::selection {
  background: var(--color-accent-dim);
  color: var(--color-accent);
}

// Focus visible
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
```

### `src/styles/_utilities.scss`
```scss
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);

  @media (max-width: 768px) {
    padding: 0 var(--space-4);
  }
}

.section {
  padding: var(--space-24) 0;

  @media (max-width: 768px) {
    padding: var(--space-16) 0;
  }
}

// Mono font utility
.mono {
  font-family: var(--font-mono);
}

// Accent text
.accent {
  color: var(--color-accent);
}

// Gradient text
.gradient-text {
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// Reveal animation base
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--transition-slow),
    transform var(--transition-slow);

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }

// Sharp card base
.card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition:
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    transform var(--transition-base);

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 1px var(--color-accent), 0 8px 32px var(--color-shadow-accent);
  }
}
```

### `src/styles.scss`
```scss
@import 'styles/tokens';
@import 'styles/reset';
@import 'styles/utilities';
```

### `angular.json` — styles array
```json
"styles": [
  "src/styles.scss"
],
"assets": [
  "src/favicon.ico",
  "src/assets"
]
```

---

## DAY 3 — Core Services, Models & Data Layer

### `src/app/core/models/portfolio.model.ts`
```typescript
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github: string;
  resumeUrl: string;
  roles: string[];
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  organisation: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  score: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  verifyUrl?: string;
  badgeColor: string;
  badgeInitial: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  iconPath: string;
}

export interface NavLink {
  label: string;
  sectionId: string;
}
```

### `src/app/data/portfolio.data.ts`
```typescript
import {
  PersonalInfo, Stat, SkillCategory, ExperienceItem,
  EducationItem, Project, Certification, ContactMethod, NavLink
} from '../core/models/portfolio.model';

export const personalInfo: PersonalInfo = {
  name: 'Janmajaya Gantayat',
  title: 'Java Full Stack Developer',
  tagline: 'Building scalable backends and intuitive UIs.',
  bio: [
    'Experienced Java Developer with hands-on expertise in designing and developing robust Spring Boot–based applications that handle complex, real-world business use cases.',
    'Proficient in building scalable, high-performance backend systems using Java, Spring Boot, and Microservices, ensuring clean architecture and optimised API performance.',
    'Currently upskilling and exploring a transition into DevOps, gaining practical knowledge in Python, DSA, and Linux shell scripting to strengthen automation, deployment, and cloud integration capabilities.'
  ],
  email: 'gantayatjanmajaya@gmail.com',
  phone: '+91-8105953851',
  location: 'Bengaluru, Karnataka, India',
  linkedIn: 'https://linkedin.com/in/janmajaya',
  github: 'https://github.com/jgantayat',
  resumeUrl: '/assets/JANMAJAYA-GANTAYAT-Resume.pdf',
  roles: [
    'Java Full Stack Developer',
    'Spring Boot Engineer',
    'Angular Developer',
    'AWS Certified Developer',
    'Microservices Architect'
  ]
};

export const stats: Stat[] = [
  { value: '3+',   label: 'Years Experience',       icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { value: '30+',  label: 'Microservices Built',     icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' },
  { value: '250+', label: 'Vulnerabilities Fixed',   icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { value: '90%',  label: 'Code Coverage',           icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    skills: ['Java', 'Spring Boot', 'Microservices', 'Apache Kafka', 'RabbitMQ', 'REST API', 'JWT / OAuth2', 'Hibernate', 'Apache Camel']
  },
  {
    category: 'Frontend',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    skills: ['Angular 15+', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS']
  },
  {
    category: 'Cloud & DevOps',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Git', 'GitHub Actions', 'Jenkins', 'JFrog', 'SonarQube', 'Docker']
  },
  {
    category: 'Databases',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    skills: ['MySQL', 'SQL Scripting', 'JPA / Hibernate', 'Data Modelling']
  },
  {
    category: 'AI & Tools',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    skills: ['GitHub Copilot', 'Amazon Q', 'Prompt Engineering', 'AI Agent Mode']
  },
  {
    category: 'Soft Skills',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    skills: ['Agile / Scrum', 'Client Management', 'Technical Documentation', 'Problem-Solving', 'PI Planning']
  }
];

export const experience: ExperienceItem[] = [
  {
    title: 'Associate Developer',
    organisation: 'Cognizant',
    period: 'Jul 2022 – Present',
    location: 'Bangalore, India',
    description: 'Designed and developed healthcare solutions including billing, claims processing, and overpayment recovery systems using Java, custom Spring Boot starters, and microservices. Built Angular 19+ UI dashboards for data visualisation and enhanced user experience. Improved code coverage to 90% across 30+ microservices using JUnit5 and Mockito. Resolved 250+ security vulnerabilities via SonarQube and JFrog. Deployed 10+ mission-critical microservices with JWT-based authentication and payload encryption. Enhanced 10+ legacy applications for performance and compliance.',
    tags: ['Java', 'Spring Boot', 'Angular', 'Microservices', 'AWS', 'Kafka', 'JUnit5', 'SonarQube', 'Agile'],
    isCurrent: true
  }
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology',
    field: 'Electrical Engineering',
    institution: 'Institute of Technical Education and Research, SOA University',
    period: '2018 – 2022',
    location: 'Bhubaneswar, Odisha',
    description: 'Graduated with a CGPA of 8.96. Built a strong engineering foundation while simultaneously developing programming and software development skills through self-directed learning.',
    score: 'CGPA: 8.96',
    tags: ['Electrical Engineering', 'SOA University', 'CGPA 8.96']
  }
];

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'This portfolio — built with Angular 21, SCSS custom properties, Matrix rain hero, and smooth-scroll SPA navigation. Developed using Claude as an AI coding companion.',
    techStack: ['Angular 21', 'TypeScript', 'SCSS', 'Angular Signals'],
    liveUrl: '',
    featured: true
  },
  {
    // TODO: Replace with a real project
    title: 'Spring Boot Microservices Starter',
    description: 'TODO: Add description for a real personal or open-source project you have built.',
    techStack: ['Java', 'Spring Boot', 'Docker'],
    githubUrl: '',
    featured: false
  }
];

export const certifications: Certification[] = [
  { name: 'AWS Certified AI Practitioner',           issuer: 'Amazon Web Services', badgeColor: '#FF9900', badgeInitial: 'AWS' },
  { name: 'AWS Certified Cloud Practitioner',        issuer: 'Amazon Web Services', badgeColor: '#FF9900', badgeInitial: 'AWS' },
  { name: 'GitHub Copilot Certified',                issuer: 'GitHub',              badgeColor: '#24292e', badgeInitial: 'GH'  },
  { name: 'Introduction to Git and GitHub',          issuer: 'Google / Coursera',   badgeColor: '#4285F4', badgeInitial: 'G'   }
];

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    value: 'gantayatjanmajaya@gmail.com',
    href: 'mailto:gantayatjanmajaya@gmail.com',
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    label: 'LinkedIn',
    value: '@janmajaya',
    href: 'https://linkedin.com/in/janmajaya',
    iconPath: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z'
  },
  {
    label: 'GitHub',
    value: 'github.com/jgantayat',
    href: 'https://github.com/jgantayat',
    iconPath: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22'
  },
  {
    label: 'Phone',
    value: '+91-8105953851',
    href: 'tel:+918105953851',
    iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
  }
];

export const navLinks: NavLink[] = [
  { label: 'About',          sectionId: 'about'          },
  { label: 'Skills',         sectionId: 'skills'         },
  { label: 'Experience',     sectionId: 'experience'     },
  { label: 'Projects',       sectionId: 'projects'       },
  { label: 'Certifications', sectionId: 'certifications' },
  { label: 'Contact',        sectionId: 'contact'        }
];
```

### `src/app/core/services/theme.service.ts`
```typescript
import { Injectable, signal, computed, effect } from '@angular/core';

type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'jg-portfolio-theme';

  currentTheme = signal<Theme>(this.getInitialTheme());
  isDark = computed(() => this.currentTheme() === 'dark');

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(this.STORAGE_KEY, theme);
    });
  }

  toggle(): void {
    this.currentTheme.update(t => t === 'dark' ? 'light' : 'dark');
  }

  private getInitialTheme(): Theme {
    const stored = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
```

### `src/app/core/services/scroll.service.ts`
```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  activeSection = signal<string>('hero');

  private readonly sectionIds = [
    'hero', 'about', 'skills', 'experience',
    'education', 'projects', 'certifications', 'contact'
  ];

  private observer: IntersectionObserver | null = null;

  initObserver(): void {
    if (this.observer) this.observer.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: '-60px 0px -40% 0px' }
    );

    this.sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  destroy(): void {
    this.observer?.disconnect();
  }
}
```

### `src/app/shared/directives/reveal-on-scroll.directive.ts`
```typescript
import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.classList.add('reveal');
    if (this.revealDelay) {
      el.style.transitionDelay = `${this.revealDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
```

---

# Janmajaya Portfolio — 15-Day Build Plan
## Days 4–7: Shared Components, Layout Shell, Navbar & Hero

---

## DAY 4 — Shared UI Components

### `src/app/shared/components/section-title/section-title.component.ts`
```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-title" [class.center]="align === 'center'">
      <span class="section-label mono">{{ label }}</span>
      <h2 class="section-heading">{{ title }}</h2>
      @if (subtitle) {
        <p class="section-subtitle">{{ subtitle }}</p>
      }
      <div class="title-bar"></div>
    </div>
  `,
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() label = '';
  @Input() align: 'left' | 'center' = 'left';
}
```

### `src/app/shared/components/section-title/section-title.component.scss`
```scss
.section-title {
  margin-bottom: var(--space-12);

  &.center {
    text-align: center;

    .title-bar {
      margin: var(--space-4) auto 0;
    }
  }
}

.section-label {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
  margin-bottom: var(--space-2);
}

.section-heading {
  font-size: var(--text-4xl);
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-top: var(--space-3);
}

.title-bar {
  width: 48px;
  height: 3px;
  background: var(--color-accent);
  margin-top: var(--space-4);
  animation: expandBar 600ms ease forwards;

  @keyframes expandBar {
    from { width: 0; }
    to   { width: 48px; }
  }
}
```

---

### `src/app/shared/components/tag/tag.component.ts`
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  template: `
    <span class="tag" [class.accent]="variant === 'accent'">
      {{ label }}
    </span>
  `,
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() label = '';
  @Input() variant: 'default' | 'accent' = 'default';
}
```

### `src/app/shared/components/tag/tag.component.scss`
```scss
.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.03em;
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: border-color var(--transition-fast), color var(--transition-fast);
  white-space: nowrap;

  &.accent {
    background: var(--color-accent-dim);
    color: var(--color-accent);
    border-color: var(--color-accent);
  }

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
}
```

---

### `src/app/shared/components/timeline-item/timeline-item.component.ts`
```typescript
import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [TagComponent],
  template: `
    <div class="timeline-item" [class.current]="isCurrent">
      <div class="timeline-dot">
        @if (isCurrent) { <span class="pulse-ring"></span> }
      </div>
      <div class="timeline-content card">
        <div class="timeline-header">
          <div class="timeline-meta">
            <h3 class="timeline-title">{{ title }}</h3>
            <span class="timeline-org accent-text">{{ organisation }}</span>
          </div>
          <div class="timeline-info">
            <span class="timeline-period mono">{{ period }}</span>
            <span class="timeline-location">{{ location }}</span>
          </div>
        </div>
        @if (description) {
          <p class="timeline-description">{{ description }}</p>
        }
        @if (score) {
          <div class="timeline-score">
            <span class="score-badge">{{ score }}</span>
          </div>
        }
        @if (tags && tags.length) {
          <div class="timeline-tags">
            @for (tag of tags; track tag) {
              <app-tag [label]="tag" />
            }
          </div>
        }
      </div>
    </div>
  `,
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {
  @Input() title = '';
  @Input() organisation = '';
  @Input() period = '';
  @Input() location = '';
  @Input() description = '';
  @Input() score = '';
  @Input() tags: string[] = [];
  @Input() isCurrent = false;
}
```

### `src/app/shared/components/timeline-item/timeline-item.component.scss`
```scss
.timeline-item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0 var(--space-6);
  position: relative;
  padding-bottom: var(--space-8);

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 24px;
    bottom: 0;
    width: 2px;
    background: var(--color-border);
  }

  &.current::before {
    background: linear-gradient(to bottom, var(--color-accent), var(--color-border));
  }
}

.timeline-dot {
  position: relative;
  width: 24px;
  height: 24px;
  background: var(--color-accent);
  border: 2px solid var(--color-bg-primary);
  border-radius: 50%;
  margin-top: var(--space-5);
  flex-shrink: 0;
  z-index: 1;
}

.pulse-ring {
  position: absolute;
  inset: -6px;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.8; transform: scale(1); }
    50%       { opacity: 0;   transform: scale(1.5); }
  }
}

.timeline-content {
  padding: var(--space-5) var(--space-6);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-3);
}

.timeline-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

.timeline-org {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-accent);
  display: block;
  margin-top: var(--space-1);
}

.timeline-info {
  text-align: right;

  @media (max-width: 600px) { text-align: left; }
}

.timeline-period {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent);
  display: block;
}

.timeline-location {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  display: block;
  margin-top: var(--space-1);
}

.timeline-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.score-badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-accent-dim);
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
}
```

---

### `src/app/shared/components/project-card/project-card.component.ts`
```typescript
import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TagComponent],
  template: `
    <div class="project-card card">
      <div class="card-header">
        <div class="card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <div class="card-links">
          @if (githubUrl) {
            <a [href]="githubUrl" target="_blank" rel="noopener" class="icon-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
            </a>
          }
          @if (liveUrl) {
            <a [href]="liveUrl" target="_blank" rel="noopener" class="icon-link" aria-label="Live Demo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          }
        </div>
      </div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <div class="card-tags">
        @for (tech of techStack; track tech) {
          <app-tag [label]="tech" />
        }
      </div>
    </div>
  `,
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() techStack: string[] = [];
  @Input() githubUrl = '';
  @Input() liveUrl = '';
}
```

### `src/app/shared/components/project-card/project-card.component.scss`
```scss
.project-card {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  height: 100%;
  cursor: default;

  &:hover {
    transform: translateY(-4px);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-icon {
  color: var(--color-accent);
  display: flex;
  align-items: center;
}

.card-links {
  display: flex;
  gap: var(--space-3);
}

.icon-link {
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  transition: color var(--transition-fast);

  &:hover { color: var(--color-accent); }
}

.card-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

.card-description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.65;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: auto;
  padding-top: var(--space-3);
}
```

---

### `src/app/shared/components/theme-toggle/theme-toggle.component.ts`
```typescript
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      class="theme-toggle"
      (click)="theme.toggle()"
      [attr.aria-label]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      @if (theme.isDark()) {
        <!-- Sun icon -->
        <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1"  x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12"  x2="3"  y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78"  x2="5.64"  y2="18.36"/>
          <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
        </svg>
      } @else {
        <!-- Moon icon -->
        <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      }
    </button>
  `,
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  theme = inject(ThemeService);
}
```

### `src/app/shared/components/theme-toggle/theme-toggle.component.scss`
```scss
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  background: transparent;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
    transform: rotate(15deg);
  }

  .icon {
    transition: transform var(--transition-base);
  }
}
```

---

## DAY 5 — Layout Shell & Navbar

### `src/app/layout/layout.component.ts`
```typescript
import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { AboutComponent } from '../sections/about/about.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { EducationComponent } from '../sections/education/education.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { CertificationsComponent } from '../sections/certifications/certifications.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { ScrollService } from '../core/services/scroll.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent, FooterComponent,
    HeroComponent, AboutComponent, SkillsComponent,
    ExperienceComponent, EducationComponent, ProjectsComponent,
    CertificationsComponent, ContactComponent
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-education />
      <app-projects />
      <app-certifications />
      <app-contact />
    </main>
    <app-footer />
  `
})
export class LayoutComponent implements OnInit {
  private scroll = inject(ScrollService);

  ngOnInit(): void {
    setTimeout(() => this.scroll.initObserver(), 500);
  }
}
```

---

### `src/app/layout/navbar/navbar.component.ts`
```typescript
import { Component, inject, signal, HostListener, OnInit } from '@angular/core';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { ScrollService } from '../../core/services/scroll.service';
import { navLinks } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleComponent],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()" [class.menu-open]="menuOpen()">
      <div class="navbar-inner container">

        <!-- Logo -->
        <button class="logo" (click)="scrollTo('hero')" aria-label="Go to top">
          <span class="logo-bracket mono">&lt;</span>
          <span class="logo-name">JG</span>
          <span class="logo-bracket mono">/&gt;</span>
        </button>

        <!-- Desktop nav links -->
        <ul class="nav-links" role="list">
          @for (link of links; track link.sectionId) {
            <li>
              <button
                class="nav-link"
                [class.active]="scroll.activeSection() === link.sectionId"
                (click)="scrollTo(link.sectionId)"
              >
                {{ link.label }}
              </button>
            </li>
          }
        </ul>

        <!-- Right actions -->
        <div class="nav-actions">
          <app-theme-toggle />
          <button
            class="hamburger"
            (click)="toggleMenu()"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Toggle menu"
          >
            <span class="bar" [class.open]="menuOpen()"></span>
            <span class="bar" [class.open]="menuOpen()"></span>
            <span class="bar" [class.open]="menuOpen()"></span>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      @if (menuOpen()) {
        <div class="mobile-drawer">
          @for (link of links; track link.sectionId) {
            <button
              class="mobile-nav-link"
              [class.active]="scroll.activeSection() === link.sectionId"
              (click)="scrollTo(link.sectionId); toggleMenu()"
            >
              <span class="mono accent">// </span>{{ link.label }}
            </button>
          }
        </div>
      }
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scroll = inject(ScrollService);
  links = navLinks;
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  scrollTo(id: string): void {
    this.scroll.scrollTo(id);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
```

### `src/app/layout/navbar/navbar.component.scss`
```scss
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--navbar-height);
  transition: background-color var(--transition-base), border-color var(--transition-base);
  border-bottom: 1px solid transparent;

  &.scrolled {
    background: rgba(13, 13, 26, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom-color: var(--color-border);

    [data-theme="light"] & {
      background: rgba(250, 250, 250, 0.88);
    }
  }
}

.navbar-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

// Logo
.logo {
  display: flex;
  align-items: center;
  gap: 1px;
  font-size: var(--text-xl);
  font-weight: 800;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);

  &:hover { color: var(--color-accent); }
}

.logo-bracket {
  color: var(--color-accent);
  font-size: var(--text-lg);
}

.logo-name {
  letter-spacing: 0.05em;
}

// Desktop nav links
.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-1);

  @media (max-width: 768px) { display: none; }
}

.nav-link {
  position: relative;
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast);

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--color-accent);
    transition: width var(--transition-base);
  }

  &:hover, &.active {
    color: var(--color-accent);

    &::after { width: 80%; }
  }
}

// Right actions
.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

// Hamburger
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 28px;
  padding: 4px;

  @media (max-width: 768px) { display: flex; }
}

.bar {
  display: block;
  height: 2px;
  background: var(--color-text-secondary);
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-base), width var(--transition-base);

  &:nth-child(1) { width: 100%; }
  &:nth-child(2) { width: 75%; }
  &:nth-child(3) { width: 50%; }

  &.open {
    &:nth-child(1) { transform: translateY(7px) rotate(45deg); width: 100%; }
    &:nth-child(2) { opacity: 0; }
    &:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 100%; }
  }
}

// Mobile drawer
.mobile-drawer {
  position: absolute;
  top: var(--navbar-height);
  left: 0;
  right: 0;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-4) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  animation: slideDown 200ms ease forwards;

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}

.mobile-nav-link {
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  text-align: left;
  border-left: 2px solid transparent;
  transition: color var(--transition-fast), border-color var(--transition-fast);

  &:hover, &.active {
    color: var(--color-accent);
    border-left-color: var(--color-accent);
  }
}

.accent { color: var(--color-accent); }
.mono   { font-family: var(--font-mono); }
```

---

## DAY 6 — Hero Section (Matrix Rain + Typewriter)

### `src/app/sections/hero/hero.component.ts`
```typescript
import { Component, OnInit, OnDestroy, inject, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { personalInfo } from '../../data/portfolio.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section id="hero" class="hero">
      <!-- Matrix rain canvas -->
      <canvas #matrixCanvas class="matrix-canvas" aria-hidden="true"></canvas>

      <!-- Gradient overlay -->
      <div class="hero-overlay"></div>

      <div class="container hero-content">
        <div class="hero-text" appRevealOnScroll>

          <div class="hero-greeting mono">
            <span class="greeting-bracket">&gt; </span>Hello, I'm
          </div>

          <h1 class="hero-name">
            {{ info.name.split(' ')[0] }}<br>
            <span class="accent-name">{{ info.name.split(' ')[1] }}</span>
          </h1>

          <div class="hero-role">
            <span class="mono role-prefix accent">// </span>
            <span class="typewriter mono">{{ displayedText() }}<span class="cursor" [class.blink]="!isDeleting()">|</span></span>
          </div>

          <p class="hero-tagline">{{ info.tagline }}</p>

          <div class="hero-stats">
            <span class="stat-item mono">
              <span class="accent">3+</span> yrs exp
            </span>
            <span class="stat-divider">·</span>
            <span class="stat-item mono">
              <span class="accent">30+</span> microservices
            </span>
            <span class="stat-divider">·</span>
            <span class="stat-item mono">
              <span class="accent">AWS</span> certified
            </span>
          </div>

          <div class="hero-actions">
            <button class="btn-primary" (click)="scroll.scrollTo('projects')">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <a class="btn-secondary" [href]="info.resumeUrl" download aria-label="Download resume">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </div>

          <div class="hero-socials">
            <a [href]="info.github" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
            </a>
            <a [href]="info.linkedIn" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a [href]="'mailto:' + info.email" class="social-link" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" aria-hidden="true">
        <div class="scroll-line"></div>
        <span class="mono">scroll</span>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  scroll = inject(ScrollService);
  info = personalInfo;

  displayedText = signal('');
  isDeleting = signal(false);

  private roleIndex = 0;
  private charIndex = 0;
  private typeTimer: ReturnType<typeof setTimeout> | null = null;
  private matrixTimer: ReturnType<typeof setInterval> | null = null;
  private animFrame: number | null = null;

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngAfterViewInit(): void {
    this.initMatrix();
  }

  ngOnDestroy(): void {
    if (this.typeTimer)   clearTimeout(this.typeTimer);
    if (this.matrixTimer) clearInterval(this.matrixTimer);
    if (this.animFrame)   cancelAnimationFrame(this.animFrame);
  }

  private startTypewriter(): void {
    const roles = this.info.roles;
    const current = roles[this.roleIndex];
    const speed = this.isDeleting() ? 40 : 80;
    const pauseAt = this.info.roles[0].length;

    if (!this.isDeleting() && this.charIndex <= current.length) {
      this.displayedText.set(current.substring(0, this.charIndex));
      this.charIndex++;
      this.typeTimer = setTimeout(() => this.startTypewriter(), speed);
    } else if (!this.isDeleting() && this.charIndex > current.length) {
      this.typeTimer = setTimeout(() => {
        this.isDeleting.set(true);
        this.startTypewriter();
      }, 2000);
    } else if (this.isDeleting() && this.charIndex > 0) {
      this.charIndex--;
      this.displayedText.set(current.substring(0, this.charIndex));
      this.typeTimer = setTimeout(() => this.startTypewriter(), speed);
    } else {
      this.isDeleting.set(false);
      this.roleIndex = (this.roleIndex + 1) % roles.length;
      this.typeTimer = setTimeout(() => this.startTypewriter(), 400);
    }
  }

  private initMatrix(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|+=~`';
    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 13, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get computed accent colour from CSS variable
      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-matrix').trim() || 'rgba(255,107,53,0.6)';

      ctx.fillStyle = accent;
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      this.animFrame = requestAnimationFrame(draw);
    };

    draw();
  }
}
```

### `src/app/sections/hero/hero.component.scss`
```scss
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.matrix-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.35;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 20% 50%, rgba(255,107,53,0.06) 0%, transparent 70%),
    linear-gradient(to right, rgba(13,13,26,0.95) 40%, rgba(13,13,26,0.7) 100%);
  pointer-events: none;

  [data-theme="light"] & {
    background:
      radial-gradient(ellipse 70% 60% at 20% 50%, rgba(224,85,32,0.05) 0%, transparent 70%),
      linear-gradient(to right, rgba(250,250,250,0.96) 40%, rgba(250,250,250,0.75) 100%);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: var(--navbar-height);
}

.hero-text {
  max-width: 680px;
  padding: var(--space-16) 0;
}

.hero-greeting {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.greeting-bracket {
  color: var(--color-accent);
  font-weight: 700;
}

.hero-name {
  font-size: clamp(2.5rem, 7vw, var(--text-6xl));
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin-bottom: var(--space-4);
  color: var(--color-text-primary);
}

.accent-name {
  color: var(--color-accent);
}

.hero-role {
  font-size: var(--text-xl);
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 2rem;

  @media (max-width: 480px) { font-size: var(--text-base); }
}

.role-prefix {
  font-family: var(--font-mono);
  opacity: 0.7;
}

.typewriter {
  font-family: var(--font-mono);
  color: var(--color-text-secondary);
}

.cursor {
  color: var(--color-accent);
  font-weight: 700;

  &.blink {
    animation: blink 900ms step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
}

.hero-tagline {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  max-width: 480px;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.stat-item {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.stat-divider {
  color: var(--color-border);
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-8);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: var(--color-accent);
  color: #fff;
  font-weight: 600;
  font-size: var(--text-sm);
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);

  &:hover {
    background: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--color-accent-glow);
  }

  svg { transition: transform var(--transition-fast); }
  &:hover svg { transform: translateX(4px); }
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-weight: 600;
  font-size: var(--text-sm);
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast), transform var(--transition-fast);

  &:hover {
    background: var(--color-accent-dim);
    transform: translateY(-2px);
  }
}

.hero-socials {
  display: flex;
  gap: var(--space-4);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  transition: color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
    transform: translateY(-3px);
  }
}

// Scroll indicator
.scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  z-index: 2;

  @media (max-width: 768px) { display: none; }
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, var(--color-accent));
  animation: scrollPulse 1.8s ease-in-out infinite;

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
    50%       { opacity: 1;   transform: scaleY(1);   }
  }
}

.scroll-indicator .mono {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
}
```

---

## DAY 7 — Footer Component

### `src/app/layout/footer/footer.component.ts`
```typescript
import { Component, inject } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { personalInfo } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-inner">

        <div class="footer-brand">
          <span class="mono accent">&lt;</span>
          <span class="footer-name">{{ info.name }}</span>
          <span class="mono accent">/&gt;</span>
        </div>

        <p class="footer-copy mono">
          © 2025 · Built with
          <span class="accent">Angular 21</span>
          &amp; Claude
        </p>

        <div class="footer-actions">
          <div class="footer-socials">
            <a [href]="info.github" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
            </a>
            <a [href]="info.linkedIn" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a [href]="'mailto:' + info.email" class="social-link" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>

          <button class="back-to-top mono" (click)="scroll.scrollTo('hero')" aria-label="Back to top">
            ↑ top
          </button>
        </div>

      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  scroll = inject(ScrollService);
  info = personalInfo;
}
```

### `src/app/layout/footer/footer.component.scss`
```scss
.footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-8) 0;
  background: var(--color-bg-secondary);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
}

.footer-brand {
  font-size: var(--text-base);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.footer-name {
  color: var(--color-text-primary);
}

.footer-copy {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.footer-socials {
  display: flex;
  gap: var(--space-3);
}

.social-link {
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  transition: color var(--transition-fast), transform var(--transition-fast);

  &:hover {
    color: var(--color-accent);
    transform: translateY(-2px);
  }
}

.back-to-top {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  border: 1px solid var(--color-border);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast), border-color var(--transition-fast);

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
}

.accent { color: var(--color-accent); }
.mono   { font-family: var(--font-mono); }
```

---

# Janmajaya Portfolio — 15-Day Build Plan
## Days 8–11: Content Sections

---

## DAY 8 — About Section

### `src/app/sections/about/about.component.ts`
```typescript
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { personalInfo, stats } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent, RevealOnScrollDirective],
  template: `
    <section id="about" class="section about-section">
      <div class="container">

        <div class="about-grid">

          <!-- Left: Bio -->
          <div class="about-bio" appRevealOnScroll [revealDelay]="0">
            <app-section-title
              title="About Me"
              label="01. about"
              subtitle="A developer who loves clean architecture."
            />

            @for (para of info.bio; track $index) {
              <p class="bio-paragraph">{{ para }}</p>
            }

            <!-- Stats row -->
            <div class="stats-grid">
              @for (stat of stats; track stat.label) {
                <div class="stat-card">
                  <div class="stat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path [attr.d]="stat.icon"/>
                    </svg>
                  </div>
                  <div class="stat-value mono accent">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              }
            </div>
          </div>

          <!-- Right: Quick facts card -->
          <div class="about-card card" appRevealOnScroll [revealDelay]="150">
            <div class="card-header-bar">
              <span class="mono">quick_facts.json</span>
              <div class="window-dots">
                <span></span><span></span><span></span>
              </div>
            </div>

            <div class="facts-list">
              <div class="fact-item">
                <span class="fact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </span>
                <div class="fact-content">
                  <span class="fact-key mono">location</span>
                  <span class="fact-value">{{ info.location }}</span>
                </div>
              </div>

              <div class="fact-item">
                <span class="fact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                  </svg>
                </span>
                <div class="fact-content">
                  <span class="fact-key mono">role</span>
                  <span class="fact-value">{{ info.title }}</span>
                </div>
              </div>

              <div class="fact-item">
                <span class="fact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                    <path d="M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </span>
                <div class="fact-content">
                  <span class="fact-key mono">company</span>
                  <span class="fact-value">Cognizant</span>
                </div>
              </div>

              <div class="fact-item">
                <span class="fact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                  </svg>
                </span>
                <div class="fact-content">
                  <span class="fact-key mono">languages</span>
                  <span class="fact-value">English · Hindi · Odia</span>
                </div>
              </div>

              <div class="fact-item">
                <span class="fact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </span>
                <div class="fact-content">
                  <span class="fact-key mono">interests</span>
                  <span class="fact-value">Web Dev · Reading · Badminton</span>
                </div>
              </div>

              <div class="fact-item">
                <span class="fact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <div class="fact-content">
                  <span class="fact-key mono">status</span>
                  <span class="fact-value available">
                    <span class="available-dot"></span>
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  info = personalInfo;
  stats = stats;
}
```

### `src/app/sections/about/about.component.scss`
```scss
.about-section { background: var(--color-bg-secondary); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: var(--space-12);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

.bio-paragraph {
  color: var(--color-text-secondary);
  font-size: var(--text-base);
  line-height: 1.8;
  margin-bottom: var(--space-4);
}

// Stats
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  margin-top: var(--space-8);

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
}

.stat-card {
  padding: var(--space-4) var(--space-5);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: border-color var(--transition-fast);

  &:hover { border-color: var(--color-accent); }
}

.stat-icon {
  color: var(--color-accent);
  margin-bottom: var(--space-2);
}

.stat-value {
  font-family: var(--font-mono);
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
}

.stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: var(--space-1);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

// Quick-facts card
.about-card {
  overflow: hidden;
  position: sticky;
  top: calc(var(--navbar-height) + var(--space-6));
}

.card-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-5);
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}

.card-header-bar .mono {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
}

.window-dots {
  display: flex;
  gap: 5px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-border);

    &:nth-child(1) { background: #ff5f57; }
    &:nth-child(2) { background: #febc2e; }
    &:nth-child(3) { background: #28c840; }
  }
}

.facts-list {
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.fact-item {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
}

.fact-icon {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
  display: flex;
}

.fact-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fact-key {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: lowercase;

  &::before { content: '"'; }
  &::after  { content: '": '; }
}

.fact-value {
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  font-weight: 500;
}

.available {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: #22c55e;
}

.available-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
    50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
  }
}

.accent { color: var(--color-accent); }
.mono   { font-family: var(--font-mono); }
```

---

## DAY 9 — Skills Section

### `src/app/sections/skills/skills.component.ts`
```typescript
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { skillCategories } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitleComponent, TagComponent, RevealOnScrollDirective],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <div appRevealOnScroll>
          <app-section-title
            title="Skills"
            label="02. skills"
            subtitle="Technologies I work with every day."
          />
        </div>

        <div class="skills-grid">
          @for (cat of categories; track cat.category; let i = $index) {
            <div class="skill-card card" appRevealOnScroll [revealDelay]="i * 80">
              <div class="skill-card-header">
                <div class="skill-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path [attr.d]="cat.icon"/>
                  </svg>
                </div>
                <h3 class="skill-category">{{ cat.category }}</h3>
              </div>
              <div class="skill-tags">
                @for (skill of cat.skills; track skill) {
                  <app-tag [label]="skill" />
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  categories = skillCategories;
}
```

### `src/app/sections/skills/skills.component.scss`
```scss
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.skill-card {
  padding: var(--space-6);

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-accent);
    box-shadow: 0 0 0 1px var(--color-accent), 0 8px 24px var(--color-shadow-accent);
  }
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-accent-dim);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  color: var(--color-accent);
  flex-shrink: 0;
}

.skill-category {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
```

---

## DAY 10 — Experience & Education Sections

### `src/app/sections/experience/experience.component.ts`
```typescript
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TimelineItemComponent } from '../../shared/components/timeline-item/timeline-item.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { experience } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionTitleComponent, TimelineItemComponent, RevealOnScrollDirective],
  template: `
    <section id="experience" class="section experience-section">
      <div class="container">
        <div appRevealOnScroll>
          <app-section-title
            title="Experience"
            label="03. experience"
            subtitle="Where I've worked and what I've built."
          />
        </div>

        <div class="timeline">
          @for (item of jobs; track item.title; let i = $index) {
            <div appRevealOnScroll [revealDelay]="i * 100">
              <app-timeline-item
                [title]="item.title"
                [organisation]="item.organisation"
                [period]="item.period"
                [location]="item.location"
                [description]="item.description"
                [tags]="item.tags"
                [isCurrent]="item.isCurrent ?? false"
              />
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  jobs = experience;
}
```

### `src/app/sections/experience/experience.component.scss`
```scss
.experience-section { background: var(--color-bg-secondary); }

.timeline {
  max-width: 800px;
}
```

---

### `src/app/sections/education/education.component.ts`
```typescript
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TimelineItemComponent } from '../../shared/components/timeline-item/timeline-item.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { education } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SectionTitleComponent, TimelineItemComponent, RevealOnScrollDirective],
  template: `
    <section id="education" class="section">
      <div class="container">
        <div appRevealOnScroll>
          <app-section-title
            title="Education"
            label="04. education"
            subtitle="The foundation that got me here."
          />
        </div>

        <div class="timeline">
          @for (item of edu; track item.institution; let i = $index) {
            <div appRevealOnScroll [revealDelay]="i * 100">
              <app-timeline-item
                [title]="item.degree + ' · ' + item.field"
                [organisation]="item.institution"
                [period]="item.period"
                [location]="item.location"
                [description]="item.description"
                [score]="item.score"
                [tags]="item.tags"
              />
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  edu = education;
}
```

### `src/app/sections/education/education.component.scss`
```scss
.timeline {
  max-width: 800px;
}
```

---

## DAY 11 — Projects Section

### `src/app/sections/projects/projects.component.ts`
```typescript
import { Component, signal, computed } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { projects } from '../../data/portfolio.data';

const FILTERS = ['All', 'Angular', 'Java', 'Spring Boot', 'AWS', 'TypeScript'];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitleComponent, ProjectCardComponent, RevealOnScrollDirective],
  template: `
    <section id="projects" class="section projects-section">
      <div class="container">
        <div appRevealOnScroll>
          <app-section-title
            title="Projects"
            label="05. projects"
            subtitle="Things I've designed and built."
          />
        </div>

        <!-- Filter chips -->
        <div class="filter-row" appRevealOnScroll [revealDelay]="100">
          @for (f of filters; track f) {
            <button
              class="filter-chip mono"
              [class.active]="activeFilter() === f"
              (click)="setFilter(f)"
            >
              {{ f }}
            </button>
          }
        </div>

        <!-- Cards grid -->
        <div class="projects-grid">
          @for (proj of filteredProjects(); track proj.title; let i = $index) {
            <div appRevealOnScroll [revealDelay]="i * 80">
              <app-project-card
                [title]="proj.title"
                [description]="proj.description"
                [techStack]="proj.techStack"
                [githubUrl]="proj.githubUrl ?? ''"
                [liveUrl]="proj.liveUrl ?? ''"
              />
            </div>
          }
        </div>

        @if (filteredProjects().length === 0) {
          <div class="no-projects mono">
            <span class="accent">// </span>No projects match that filter yet.
          </div>
        }
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  allProjects = projects;
  filters = FILTERS;
  activeFilter = signal('All');

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'All') return this.allProjects;
    return this.allProjects.filter(p =>
      p.techStack.some(t => t.toLowerCase().includes(f.toLowerCase()))
    );
  });

  setFilter(f: string): void {
    this.activeFilter.set(f);
  }
}
```

### `src/app/sections/projects/projects.component.scss`
```scss
.projects-section { background: var(--color-bg-secondary); }

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-10);
}

.filter-chip {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-muted);
  background: transparent;
  letter-spacing: 0.05em;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast);

  &:hover, &.active {
    color: var(--color-accent);
    border-color: var(--color-accent);
    background: var(--color-accent-dim);
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.no-projects {
  font-family: var(--font-mono);
  font-size: var(--text-base);
  color: var(--color-text-muted);
  padding: var(--space-12) 0;
  text-align: center;
}

.accent { color: var(--color-accent); }
.mono   { font-family: var(--font-mono); }
```

---

# Janmajaya Portfolio — 15-Day Build Plan
## Days 12–15: Final Sections, Polish & Deployment Prep

---

## DAY 12 — Certifications & Contact Sections

### `src/app/sections/certifications/certifications.component.ts`
```typescript
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { certifications } from '../../data/portfolio.data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionTitleComponent, RevealOnScrollDirective],
  template: `
    <section id="certifications" class="section">
      <div class="container">
        <div appRevealOnScroll>
          <app-section-title
            title="Certifications"
            label="06. certifications"
            subtitle="Verified skills and credentials."
          />
        </div>

        <div class="cert-grid">
          @for (cert of certs; track cert.name; let i = $index) {
            <div class="cert-card card" appRevealOnScroll [revealDelay]="i * 80">

              <!-- Badge -->
              <div class="cert-badge" [style.background]="cert.badgeColor + '22'" [style.border-color]="cert.badgeColor + '66'">
                <span class="badge-initial mono" [style.color]="cert.badgeColor">{{ cert.badgeInitial }}</span>
              </div>

              <div class="cert-info">
                <h3 class="cert-name">{{ cert.name }}</h3>
                <span class="cert-issuer mono">{{ cert.issuer }}</span>
              </div>

              @if (cert.verifyUrl) {
                <a [href]="cert.verifyUrl" target="_blank" rel="noopener" class="verify-link mono" aria-label="Verify certification">
                  verify ↗
                </a>
              } @else {
                <span class="verified-badge mono">✓ verified</span>
              }

            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certs = certifications;
}
```

### `src/app/sections/certifications/certifications.component.scss`
```scss
.cert-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.cert-card {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-5) var(--space-6);

  &:hover {
    transform: translateX(4px);
    border-color: var(--color-accent);
  }
}

.cert-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border: 1px solid;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.badge-initial {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.cert-info {
  flex: 1;
  min-width: 0;
}

.cert-name {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.3;
  margin-bottom: var(--space-1);
}

.cert-issuer {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  display: block;
}

.verify-link {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
  white-space: nowrap;
  transition: opacity var(--transition-fast);

  &:hover { opacity: 0.7; }
}

.verified-badge {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: #22c55e;
  white-space: nowrap;
  flex-shrink: 0;
}

.mono { font-family: var(--font-mono); }
```

---

### `src/app/sections/contact/contact.component.ts`
```typescript
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { contactMethods, personalInfo } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitleComponent, RevealOnScrollDirective],
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="contact-inner">

          <div appRevealOnScroll>
            <app-section-title
              title="Get In Touch"
              label="07. contact"
              subtitle="Open to opportunities and collaborations."
              align="center"
            />
          </div>

          <p class="contact-intro" appRevealOnScroll [revealDelay]="100">
            Whether it's a project, a new opportunity, or just to say hello — my inbox is always open.
          </p>

          <div class="contact-grid" appRevealOnScroll [revealDelay]="200">
            @for (method of methods; track method.label) {
              <a [href]="method.href" class="contact-card card" target="_blank" rel="noopener noreferrer">
                <div class="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path [attr.d]="method.iconPath"/>
                  </svg>
                </div>
                <div class="contact-info">
                  <span class="contact-label mono">{{ method.label }}</span>
                  <span class="contact-value">{{ method.value }}</span>
                </div>
                <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            }
          </div>

          <div class="contact-cta" appRevealOnScroll [revealDelay]="300">
            <span class="mono muted">or just send a direct email →</span>
            <a [href]="'mailto:' + info.email" class="email-link accent mono">{{ info.email }}</a>
          </div>

        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  methods = contactMethods;
  info = personalInfo;
}
```

### `src/app/sections/contact/contact.component.scss`
```scss
.contact-section {
  background: var(--color-bg-secondary);
}

.contact-inner {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.contact-intro {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-10);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  text-align: left;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.contact-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5);
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-accent);

    .arrow-icon {
      transform: translate(2px, -2px);
      color: var(--color-accent);
    }
  }
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--color-accent-dim);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  color: var(--color-accent);
  flex-shrink: 0;
}

.contact-info {
  flex: 1;
  min-width: 0;
}

.contact-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 3px;
}

.contact-value {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.arrow-icon {
  color: var(--color-text-muted);
  flex-shrink: 0;
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.contact-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  font-size: var(--text-sm);
}

.email-link {
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  transition: opacity var(--transition-fast);

  &:hover { opacity: 0.7; }
}

.muted { color: var(--color-text-muted); }
.accent { color: var(--color-accent); }
.mono   { font-family: var(--font-mono); }
```

---

## DAY 13 — Assets, Wiring & Full Integration

### Copy resume PDF
```bash
# Terminal — from project root
mkdir -p src/assets
cp /path/to/JANMAJAYA-GANTAYAT-Resume.pdf src/assets/
```

### `angular.json` — assets config
```json
"assets": [
  "src/favicon.ico",
  "src/assets"
]
```

### Run & verify
```bash
ng serve --open
```

### Integration checklist
- [ ] All 8 section IDs match scroll service: `hero, about, skills, experience, education, projects, certifications, contact`
- [ ] Navbar active state highlights correctly while scrolling
- [ ] Matrix rain canvas renders in hero
- [ ] Typewriter cycles through all 5 roles
- [ ] Light/dark toggle works and persists on refresh
- [ ] Resume PDF downloads from hero button
- [ ] All reveal animations trigger on scroll
- [ ] Mobile hamburger menu opens/closes
- [ ] Footer "Back to top" scrolls to hero

---

## DAY 14 — Responsive Polish & Cross-Breakpoint Testing

### Breakpoints to test
```
375px  — iPhone SE / small phones
390px  — iPhone 14
768px  — iPad portrait
1024px — iPad landscape / small laptop
1280px — Standard laptop
1440px — Wide desktop
```

### `src/styles/_responsive.scss` — Add to styles.scss
```scss
// Fine-tuned responsive overrides

// Hero mobile
@media (max-width: 480px) {
  .hero-name {
    font-size: 2.25rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: flex-start;

    .btn-primary, .btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }

  .hero-stats {
    font-size: var(--text-xs);
    gap: var(--space-2);
  }
}

// Section title mobile
@media (max-width: 480px) {
  .section-heading {
    font-size: var(--text-2xl) !important;
  }
}

// Navbar mobile: hide logo name on very small screens
@media (max-width: 360px) {
  .logo-name { display: none; }
}
```

### Performance checks
```bash
# Build production
ng build --configuration production

# Check bundle size in dist/
ls -lh dist/janmajaya-portfolio/browser/

# Target: main bundle < 500KB gzipped
```

### Accessibility checklist
- [ ] All images have `alt` attributes (or `aria-hidden` for decorative)
- [ ] All icon-only buttons have `aria-label`
- [ ] All interactive elements reachable by Tab key
- [ ] Focus-visible ring visible on all focusable elements
- [ ] Colour contrast ratio ≥ 4.5:1 for normal text
- [ ] Canvas has `aria-hidden="true"`
- [ ] `lang="en"` on `<html>`
- [ ] Logical heading hierarchy: h1 (hero name) → h2 (section titles) → h3 (card titles)

---

## DAY 15 — Final Polish, SEO & Deployment Prep

### `src/index.html` — Final meta tags
```html
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <title>Janmajaya Gantayat | Java Full Stack Developer</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Portfolio of Janmajaya Gantayat — Java Full Stack Developer specialising in Spring Boot, Angular 21, and AWS. Based in Bengaluru.">
  <meta name="keywords" content="Java Developer, Spring Boot, Angular, AWS, Microservices, Full Stack, Bengaluru">
  <meta name="author" content="Janmajaya Gantayat">

  <!-- Open Graph -->
  <meta property="og:title" content="Janmajaya Gantayat | Java Full Stack Developer">
  <meta property="og:description" content="Building scalable backends and intuitive UIs.">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Janmajaya Gantayat | Java Full Stack Developer">
  <meta name="twitter:description" content="Building scalable backends and intuitive UIs.">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <base href="/">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

### `src/assets/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Production build
```bash
ng build --configuration production
```

### Deployment options (future)
```
Netlify:       drag & drop dist/janmajaya-portfolio/browser/
Vercel:        vercel --prod (from project root)
GitHub Pages:  ng deploy (with @angular-builders/github-pages)
Firebase:      firebase deploy
```

### Final build verification
```bash
ng build --configuration production && echo "Build succeeded"

# Expected output
# ✓ Browser bundles
# Initial total: < 500 kB
```

---

## COMPLETE 15-DAY SCHEDULE SUMMARY

| Day | Focus | Deliverable |
|-----|-------|-------------|
| 1   | Scaffold + folder structure | Angular 21 project, all empty components |
| 2   | Design system | `_tokens.scss`, `_reset.scss`, `styles.scss` |
| 3   | Core services + data layer | ThemeService, ScrollService, models, portfolio.data.ts |
| 4   | Shared components | SectionTitle, Tag, TimelineItem, ProjectCard, ThemeToggle, RevealDirective |
| 5   | Layout shell + Navbar | LayoutComponent, NavbarComponent (responsive) |
| 6   | Hero section | Matrix rain canvas, typewriter, CTA buttons |
| 7   | Footer | FooterComponent, back-to-top |
| 8   | About section | Bio, stats grid, quick-facts card |
| 9   | Skills section | Category cards with tag grids |
| 10  | Experience + Education | Timeline components, pulsing dot |
| 11  | Projects section | Card grid, signal-based filter |
| 12  | Certifications + Contact | Cert cards, contact method grid |
| 13  | Full integration + wiring | All sections assembled, assets copied |
| 14  | Responsive polish | All breakpoints tested, accessibility fixes |
| 15  | SEO + deployment prep | Meta tags, production build, deploy-ready |

---

## QUICK REFERENCE: DESIGN TOKENS

| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent` | `#FF6B35` | Primary orange-red brand colour |
| `--color-bg-primary` | `#0D0D1A` | Page background (dark) |
| `--color-bg-card` | `#161628` | Card backgrounds |
| `--color-border` | `#1E1E3E` | All card/element borders |
| `--font-sans` | Inter | Body and UI text |
| `--font-mono` | JetBrains Mono | Code labels, stats, mono text |
| `--radius-sm` | `3px` | Buttons, cards, tags (sharp modern) |
| `--transition-base` | `300ms ease` | Standard hover transitions |

---

## NOTES FOR CLAUDE CODE SESSIONS

When using Claude Code to implement each day's work, paste the relevant day's section as a prompt. Example for Day 6:

```
I'm building a personal portfolio in Angular 21. Today's task is the Hero section.
Please implement the HeroComponent exactly as specified in my plan:
- Matrix rain canvas background using requestAnimationFrame
- Typewriter animation using Angular Signals (no libraries)
- Orange-red accent #FF6B35 on a dark navy #0D0D1A background
- CTA buttons and social links as specified
Here is the component code to write: [paste hero code from plan]
```

Each day's session is self-contained. Always confirm `ng serve` still runs cleanly before ending the session.