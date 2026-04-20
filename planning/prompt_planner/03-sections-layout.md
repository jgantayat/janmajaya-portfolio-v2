---
description: Prompts for building each portfolio section component — Hero, About, Skills, Experience, Education, Projects, Certifications, Contact, Navbar, Footer.
phase: 1
---

# 03 — Sections & Layout

## Context
Single-page portfolio. All sections stack vertically in this order:
`Navbar → Hero → About → Skills → Experience → Education → Projects → Certifications → Contact → Footer`

The design is inspired by the Nichol portfolio template: clean sections with generous whitespace, animated entries, card-based grids, and a timeline pattern for experience/education.

---

## Prompt A — Navbar

```
Build the NavbarComponent for the Angular 21 portfolio with the following spec:

Layout: fixed top bar, full width, height 64px
Left: Logo — "JG" monogram in --color-accent, bold, font-size var(--text-xl)
Centre (desktop): navigation links — About, Skills, Experience, Projects, Contact
Right: ThemeToggleComponent

Behaviour:
- Transparent background when at top of page; becomes --color-bg-primary with a bottom border and backdrop-filter: blur(12px) after scrolling 60px
- Navigation links scroll to their respective section via ScrollService
- Active link highlighted with --color-accent colour and a bottom underline
- Mobile (<768px): hide centre links, show a hamburger menu button that opens a full-width dropdown drawer

Use Angular HostListener to detect scroll position.
Use @if / @for (Angular 17+ control flow) throughout — no *ngIf or *ngFor.

Show the complete component with SCSS.
```

---

## Prompt B — Hero section

```
Build the HeroComponent for the Angular 21 portfolio (section id="hero"):

Layout: full viewport height (100vh), vertically and horizontally centred content
Content (left-aligned on desktop, centred on mobile):
  - Small label: "Hello, I'm"
  - Name: "Janmajaya Gantayat" — large heading (var(--text-5xl)), bold
  - Animated role: a typewriter-effect that cycles through:
      "Java Full Stack Developer"
      "Spring Boot Engineer"
      "Angular Developer"
      "AWS Certified Developer"
    Implement typewriter using a pure Angular Signals-based interval (no external libraries).
    Show a blinking cursor character after the text.
  - One-line tagline: "Building scalable backends and intuitive UIs."
  - Two CTA buttons:
      Primary: "View My Work" → scrolls to #projects
      Secondary: "Download Resume" → links to the PDF file
  - Social icon links: GitHub, LinkedIn, Email — use inline SVG icons

Background: subtle animated gradient or geometric pattern (CSS only, no canvas)
Add appRevealOnScroll to the hero content block.

Show the complete implementation.
```

---

## Prompt C — About section

```
Build the AboutComponent for the Angular 21 portfolio (section id="about"):

Layout: two columns on desktop (60% text / 40% visual), stacked on mobile

Left column:
  - <app-section-title title="About Me">
  - 2-3 paragraph bio (use content from portfolio.data.ts — do not hardcode in template)
  - A short row of stat chips:
      "3+ Years Experience"
      "30+ Microservices Built"
      "AWS Certified"

Right column:
  - A stylised card/box with a decorative accent border
  - Quick-facts list: Location, Current Role, Company, Languages, Interests
  - Each item has a small label and value, with an icon (inline SVG)

Apply appRevealOnScroll to both columns with a slight stagger delay on the right column.

Show the complete component with SCSS.
```

---

## Prompt D — Skills section

```
Build the SkillsComponent for the Angular 21 portfolio (section id="skills"):

Layout: <app-section-title title="Skills" subtitle="Technologies I work with">
Below: a grid of skill category cards (2 columns desktop, 1 column mobile)

Categories and their items (source from portfolio.data.ts):
  Backend:        Java, Spring Boot, Microservices, Apache Kafka, RabbitMQ, REST API, JWT/OAuth2, Hibernate
  Frontend:       Angular 15+, HTML5, CSS3/SCSS, JavaScript, TypeScript
  Cloud & DevOps: AWS (EC2, S3, Lambda), Git, GitHub Actions, Jenkins, JFrog, SonarQube, Docker (basic)
  Databases:      MySQL, SQL scripting
  AI & Tools:     GitHub Copilot, Amazon Q, Prompt Engineering
  Soft Skills:    Agile/Scrum, Client Management, Technical Documentation, Problem-Solving

Each category card:
  - Card header with category name and a relevant icon (inline SVG)
  - Skills rendered as <app-tag> components in a flex-wrap row
  - Subtle hover: card lifts slightly (translateY -3px), border turns --color-accent

Apply appRevealOnScroll with staggered delay to each card.

Show the complete implementation.
```

---

## Prompt E — Experience section

```
Build the ExperienceComponent for the Angular 21 portfolio (section id="experience"):

Layout: <app-section-title title="Experience">
Below: a vertical timeline using <app-timeline-item> for each role

Timeline entries (source from portfolio.data.ts):
  - Associate Developer, Cognizant | Jul 2022 – Present | Bangalore
    Description: Designing and developing healthcare solutions (billing, claims processing, overpayment recovery) using Java, Spring Boot, and Microservices. Built Angular 19+ UI dashboards for data visualisation. Achieved 90% code coverage across 30+ microservices. Resolved 250+ security vulnerabilities. Deployed 10+ mission-critical microservices with JWT-based auth.
    Tags: Java, Spring Boot, Angular, Microservices, AWS, JUnit5, SonarQube

The timeline should have:
  - A vertical accent-coloured line on the left
  - A filled dot at each entry point
  - The most recent entry dot should pulse (CSS animation)

Apply appRevealOnScroll to each timeline item.

Show the complete component with SCSS.
```

---

## Prompt F — Education section

```
Build the EducationComponent for the Angular 21 portfolio (section id="education"):

Layout: <app-section-title title="Education">
Below: vertical timeline using <app-timeline-item>

Entry (source from portfolio.data.ts):
  - B.Tech in Electrical Engineering | SOA University (ITER) | 2018–2022 | Bhubaneswar, Odisha
    Description: Bachelor of Technology with a CGPA of 8.96. Built a strong foundation in engineering principles while simultaneously developing programming skills.
    Tags: Electrical Engineering, CGPA 8.96

Same timeline style as the Experience section.

Show the complete component.
```

---

## Prompt G — Projects section

```
Build the ProjectsComponent for the Angular 21 portfolio (section id="projects"):

Layout: <app-section-title title="Projects" subtitle="Things I have built">
Below: a responsive card grid (3 columns desktop / 2 tablet / 1 mobile) using <app-project-card>

Note: Specific personal projects beyond work experience are to be added in portfolio.data.ts later.
For now, generate 2 placeholder project entries in portfolio.data.ts with clearly marked TODO comments.

Add a "Filter by technology" pill button row above the grid:
  - Buttons: All | Java | Angular | AWS | Spring Boot
  - Clicking a button filters the visible cards
  - Implement filtering using computed() signals — no manual DOM manipulation

Apply appRevealOnScroll with stagger to cards.

Show the complete component with filtering logic.
```

---

## Prompt H — Certifications section

```
Build the CertificationsComponent for the Angular 21 portfolio (section id="certifications"):

Layout: <app-section-title title="Certifications">
Below: a grid of certification badge cards (2 columns desktop / 1 mobile)

Entries (source from portfolio.data.ts):
  - AWS Certified AI Practitioner (Amazon Web Services)
  - AWS Certified Cloud Practitioner (Amazon Web Services)
  - GitHub Copilot Certified (GitHub)
  - Introduction to Git and GitHub (Google / Coursera)

Each card:
  - Issuer logo placeholder (coloured initial badge if no logo image)
  - Certification name (bold)
  - Issuing organisation
  - Optional: verify link (leave as # placeholder until user provides URLs)

Show the complete component.
```

---

## Prompt I — Contact section

```
Build the ContactComponent for the Angular 21 portfolio (section id="contact"):

Layout: <app-section-title title="Get In Touch" subtitle="I'm open to opportunities and collaborations" align="center">
Below: centred layout, max-width 600px

Content:
  - A short paragraph: "Feel free to reach out whether it's a project, opportunity, or just to say hello."
  - Three contact method cards in a row:
      Email: gantayatjanmajaya@gmail.com → mailto link
      LinkedIn: @janmajaya → link to linkedin.com/in/janmajaya
      Phone: +91-8105953851
    Each card has an icon, label, and value.
  - No contact form (client-side only, no backend to handle submissions)

Show the complete component.
```

---

## Prompt J — Footer

```
Build the FooterComponent for the Angular 21 portfolio:

Layout: full-width, centred content, padding var(--space-8) 0
Content:
  - "Janmajaya Gantayat" in --color-accent
  - Copyright line: "© 2025 · Built with Angular 21 & Claude Code"
  - Social icon links (GitHub, LinkedIn, Email) using inline SVGs
  - "Back to top" button that calls ScrollService.scrollTo('hero')

Keep it minimal — single row on desktop, stacked on mobile.
```
