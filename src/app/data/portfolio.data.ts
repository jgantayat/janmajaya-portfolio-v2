import {
  Certification,
  ContactMethod,
  EducationItem,
  ExperienceItem,
  NavLink,
  PersonalInfo,
  Project,
  SkillCategory,
  Stat,
} from '../core/models/portfolio.model';

export const personalInfo: PersonalInfo = {
  name: 'Janmajaya Gantayat',
  title: 'Java Full Stack Developer',
  tagline: 'Building scalable backends and intuitive UIs.',
  bio: [
    'Experienced Java Developer with hands-on expertise in designing and developing robust Spring Boot–based applications that handle complex, real-world business use cases.',
    'Proficient in building scalable, high-performance backend systems using Java, Spring Boot, and Microservices, ensuring clean architecture and optimised API performance.',
    'Currently upskilling and exploring a transition into DevOps, gaining practical knowledge in Python, DSA, and Linux shell scripting to strengthen automation, deployment, and cloud integration capabilities.',
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
    'Microservices Architect',
  ],
};

export const stats: Stat[] = [
  { value: '3+', label: 'Years Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { value: '30+', label: 'Microservices Built', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' },
  { value: '250+', label: 'Vulnerabilities Fixed', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { value: '90%', label: 'Code Coverage', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    skills: ['Java', 'Spring Boot', 'Microservices', 'Apache Kafka', 'RabbitMQ', 'REST API', 'JWT / OAuth2', 'Hibernate', 'Apache Camel'],
  },
  {
    category: 'Frontend',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    skills: ['Angular 15+', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Git', 'GitHub Actions', 'Jenkins', 'JFrog', 'SonarQube', 'Docker'],
  },
  {
    category: 'Databases',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    skills: ['MySQL', 'SQL Scripting', 'JPA / Hibernate', 'Data Modelling'],
  },
  {
    category: 'AI & Tools',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    skills: ['GitHub Copilot', 'Amazon Q', 'Prompt Engineering', 'AI Agent Mode'],
  },
  {
    category: 'Soft Skills',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    skills: ['Agile / Scrum', 'Client Management', 'Technical Documentation', 'Problem-Solving', 'PI Planning'],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Associate Developer',
    organisation: 'Cognizant',
    period: 'Jul 2022 – Present',
    location: 'Bangalore, India',
    description:
      'Designed and developed healthcare solutions including billing, claims processing, and overpayment recovery systems using Java, custom Spring Boot starters, and microservices. Built Angular 19+ UI dashboards for data visualisation and enhanced user experience. Improved code coverage to 90% across 30+ microservices using JUnit5 and Mockito. Resolved 250+ security vulnerabilities via SonarQube and JFrog. Deployed 10+ mission-critical microservices with JWT-based authentication and payload encryption. Enhanced 10+ legacy applications for performance and compliance.',
    tags: ['Java', 'Spring Boot', 'Angular', 'Microservices', 'AWS', 'Kafka', 'JUnit5', 'SonarQube', 'Agile'],
    isCurrent: true,
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology',
    field: 'Electrical Engineering',
    institution: 'Institute of Technical Education and Research, SOA University',
    period: '2018 – 2022',
    location: 'Bhubaneswar, Odisha',
    description:
      'Graduated with a CGPA of 8.96. Built a strong engineering foundation while simultaneously developing programming and software development skills through self-directed learning.',
    score: 'CGPA: 8.96',
    tags: ['Electrical Engineering', 'SOA University', 'CGPA 8.96'],
  },
];

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'This portfolio — built with Angular 21, CSS custom properties, Matrix rain hero, and smooth-scroll SPA navigation. Developed using Claude as an AI coding companion.',
    techStack: ['Angular 21', 'TypeScript', 'CSS', 'Angular Signals'],
    liveUrl: '',
    featured: true,
  },
  {
    title: 'Spring Boot Microservices Starter',
    description:
      'Reusable Spring Boot starter scaffolding microservices with JWT auth, OpenAPI docs, structured logging, and Docker — pulled from patterns refined across 30+ production services.',
    techStack: ['Java', 'Spring Boot', 'Docker'],
    githubUrl: '',
    featured: false,
  },
];

export const certifications: Certification[] = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', badgeColor: '#FF9900', badgeInitial: 'AWS' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', badgeColor: '#FF9900', badgeInitial: 'AWS' },
  { name: 'GitHub Copilot Certified', issuer: 'GitHub', badgeColor: '#24292e', badgeInitial: 'GH' },
  { name: 'Introduction to Git and GitHub', issuer: 'Google / Coursera', badgeColor: '#4285F4', badgeInitial: 'G' },
];

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    value: 'gantayatjanmajaya@gmail.com',
    href: 'mailto:gantayatjanmajaya@gmail.com',
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    label: 'LinkedIn',
    value: '@janmajaya',
    href: 'https://linkedin.com/in/janmajaya',
    iconPath: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
  },
  {
    label: 'GitHub',
    value: 'github.com/jgantayat',
    href: 'https://github.com/jgantayat',
    iconPath: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
  },
  {
    label: 'Phone',
    value: '+91-8105953851',
    href: 'tel:+918105953851',
    iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
];

export const navLinks: NavLink[] = [
  { label: 'About', sectionId: 'about' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Certifications', sectionId: 'certifications' },
  { label: 'Contact', sectionId: 'contact' },
];
