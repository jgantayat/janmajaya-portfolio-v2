---
description: The complete portfolio.data.ts content mapping all personal data from the resume to typed Angular data structures.
phase: 2
---

# 04 — Personal Data Mapping

## Context
All personal content lives in `src/app/data/portfolio.data.ts` as typed constants.
Components read from this file — no personal data is hardcoded in templates.
This makes the portfolio easy to update without touching component code.

---

## Prompt A — TypeScript interfaces

```
Create src/app/core/models/portfolio.model.ts with the following TypeScript interfaces for the Angular 21 portfolio:

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];           // array of paragraphs
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github?: string;
  resumeUrl: string;
  roles: string[];         // for typewriter animation in hero
}

export interface Stat {
  label: string;
  value: string;
}

export interface SkillCategory {
  category: string;
  icon: string;            // SVG path string
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
  tags: string[];
  score?: string;
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
  badgeColor?: string;     // fallback colour for initial badge
}

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: string;            // SVG path string
}

Show the complete file.
```

---

## Prompt B — Populate portfolio.data.ts

```
Create src/app/data/portfolio.data.ts and populate it with the following data for Janmajaya Gantayat.
Import all interfaces from portfolio.model.ts.

Use exactly the data below — do not invent or embellish:

PERSONAL INFO:
  name: "Janmajaya Gantayat"
  title: "Java Full Stack Developer"
  tagline: "Building scalable backends and intuitive UIs."
  bio: [
    "Experienced Java Developer with hands-on expertise in designing and developing robust Spring Boot–based applications that handle complex, real-world business use cases.",
    "Proficient in building scalable, high-performance backend systems using Java, Spring Boot, and Microservices, ensuring clean architecture and optimised API performance.",
    "Currently upskilling and exploring a transition into DevOps, gaining practical knowledge in Python, DSA, and Linux shell scripting to strengthen automation, deployment, and cloud integration capabilities."
  ]
  email: "gantayatjanmajaya@gmail.com"
  phone: "+91-8105953851"
  location: "Bengaluru, Karnataka, India"
  linkedIn: "https://linkedin.com/in/janmajaya"
  github: ""   ← leave blank, user to fill in later
  resumeUrl: "/assets/JANMAJAYA-GANTAYAT-Resume.pdf"
  roles: [
    "Java Full Stack Developer",
    "Spring Boot Engineer",
    "Angular Developer",
    "AWS Certified Developer"
  ]

STATS:
  { value: "3+", label: "Years Experience" }
  { value: "30+", label: "Microservices Built" }
  { value: "250+", label: "Vulnerabilities Fixed" }
  { value: "90%", label: "Code Coverage Achieved" }

SKILLS: (as per the categories defined in 03-sections-layout Prompt D)

EXPERIENCE:
  title: "Associate Developer"
  organisation: "Cognizant"
  period: "Jul 2022 – Present"
  location: "Bangalore, India"
  description: "Designed and developed healthcare solutions including billing, claims processing, and overpayment recovery systems using Java, Spring Boot, and Microservices. Built Angular 19+ UI dashboards for data visualisation. Improved code coverage to 90% across 30+ microservices using JUnit5 and Mockito. Resolved 250+ security vulnerabilities via SonarQube and JFrog. Deployed 10+ mission-critical microservices with JWT-based authentication and payload encryption. Enhanced 10+ legacy applications for performance and compliance."
  tags: ["Java", "Spring Boot", "Angular", "Microservices", "AWS", "Kafka", "JUnit5", "SonarQube", "Agile"]
  isCurrent: true

EDUCATION:
  degree: "Bachelor of Technology"
  field: "Electrical Engineering"
  institution: "Institute of Technical Education and Research, SOA University"
  period: "2018 – 2022"
  location: "Bhubaneswar, Odisha"
  description: "Graduated with a CGPA of 8.96. Built a strong engineering foundation while simultaneously developing programming and software development skills."
  score: "CGPA: 8.96"
  tags: ["Electrical Engineering", "SOA University", "CGPA 8.96"]

PROJECTS:
  // TODO: Add real personal projects — placeholders below
  {
    title: "Portfolio Website",
    description: "This portfolio website — built with Angular 21, SCSS, and deployed on [TBD]. Developed using Claude Code as an AI coding companion.",
    techStack: ["Angular 21", "SCSS", "TypeScript"],
    liveUrl: "",
    featured: true
  },
  {
    title: "TODO: Add Project 2",
    description: "TODO: Describe a personal or open-source project.",
    techStack: [],
    githubUrl: "",
    featured: false
  }

CERTIFICATIONS:
  { name: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", badgeColor: "#FF9900" }
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", badgeColor: "#FF9900" }
  { name: "GitHub Copilot Certified", issuer: "GitHub", badgeColor: "#24292e" }
  { name: "Introduction to Git and GitHub", issuer: "Google / Coursera", badgeColor: "#4285F4" }

CONTACT METHODS:
  { label: "Email", value: "gantayatjanmajaya@gmail.com", href: "mailto:gantayatjanmajaya@gmail.com" }
  { label: "LinkedIn", value: "@janmajaya", href: "https://linkedin.com/in/janmajaya" }
  { label: "Phone", value: "+91-8105953851", href: "tel:+918105953851" }

Show the complete portfolio.data.ts file with all exports as typed constants.
```

---

## Prompt C — Copy resume PDF to assets

```
Copy the resume PDF to the Angular assets folder so it can be linked from the portfolio:

1. Copy the file to: src/assets/JANMAJAYA-GANTAYAT-Resume.pdf
2. Verify in angular.json that the assets array includes "src/assets"
3. The Hero section's "Download Resume" button should link to /assets/JANMAJAYA-GANTAYAT-Resume.pdf with download attribute

Show the updated angular.json assets configuration and the Hero button markup.
```
