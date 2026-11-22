export type DisciplineSlug =
  | "brand-identity"
  | "packaging"
  | "editorial"
  | "digital"
  | "art-direction"
  | "environmental";

export interface Discipline {
  slug: DisciplineSlug;
  label: string;
  description: string;
}

export interface ProjectImage {
  id: string;
  /** Labelled placeholder composition — replace with real assets */
  label: string;
  aspect: "hero" | "landscape" | "portrait" | "square" | "wide";
  tone: string;
  caption?: string;
}

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: number;
  disciplines: DisciplineSlug[];
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  hero: ProjectImage;
  gallery: ProjectImage[];
  applications?: ProjectImage[];
  credits: ProjectCredit[];
  featured: boolean;
  /** Layout variant for case study art direction */
  layout: "editorial" | "spread" | "stack" | "grid";
  /** All sample projects are fictional demo content */
  demo: true;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface Person {
  slug: string;
  name: string;
  role: string;
  bio: string;
  selectedWork: string[];
  socials?: { label: string; href: string }[];
  tone: string;
  demo: true;
}

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  author: string;
  date: string;
  readingTime: string;
  related: string[];
  demo: true;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactConfig {
  email: string;
  location: string;
  note: string;
  projectTypes: string[];
  budgetBands: string[];
  timelines: string[];
  /** Set to a form endpoint URL to enable real submissions */
  endpoint?: string;
}

export interface StudioContent {
  philosophy: string[];
  collaboration: string;
  capabilities: string[];
}

export interface SiteSettings {
  name: string;
  wordmark: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  socials: { label: string; href: string }[];
  copyright: string;
  demoNotice: string;
}
