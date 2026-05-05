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

export interface Skill {
  name: string;
  iconKey?: string;
  iconVariant?: string;
  fallbackPath?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
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
  iconKey?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  verifyUrl?: string;
  imageUrl?: string;
  badgeColor?: string;
  badgeInitial?: string;
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

export interface Recommendation {
  name: string;
  headline: string;
  relationship: string;
  date: string;
  text: string;
  imageUrl: string;
}
