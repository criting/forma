import type { ContactConfig, NavItem, SiteSettings, StudioContent } from "@/content/types";

export const site: SiteSettings = {
  name: "FORMA",
  wordmark: "FORMA",
  tagline: "Identity systems with graphic spine",
  description:
    "FORMA is an independent creative studio template for brand identity, art direction, packaging, editorial and digital experiences.",
  url: "https://forma.example",
  ogImage: "/og.svg",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Are.na", href: "https://www.are.na/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
  copyright: "© FORMA demo template",
  demoNotice:
    "Sample projects, people and journal posts are fictional demo content for template preview.",
};

export const navigation: NavItem[] = [
  { label: "Work", href: "/work/" },
  { label: "Services", href: "/services/" },
  { label: "Studio", href: "/studio/" },
  { label: "People", href: "/people/" },
  { label: "Journal", href: "/journal/" },
  { label: "Contact", href: "/contact/" },
];

export const contact: ContactConfig = {
  email: "hello@forma.example",
  location: "Studio — configurable city",
  note: "Tell us about the brief. We reply with next steps, not a brochure.",
  projectTypes: [
    "Brand identity",
    "Packaging",
    "Editorial",
    "Digital experience",
    "Art direction",
    "Environmental graphics",
    "Other",
  ],
  budgetBands: ["Under €10k", "€10–25k", "€25–50k", "€50k+", "Not sure yet"],
  timelines: ["ASAP", "1–2 months", "3–6 months", "Flexible"],
  // Leave undefined for demo submission state. Set e.g. Formspree URL to connect.
  endpoint: undefined,
};

export const studio: StudioContent = {
  philosophy: [
    "We treat identity as a working system — not a logo drop. Type, colour, material and behaviour have to hold under real production pressure.",
    "Print logic informs the screen. Crop, registration, paper grain and pacing are tools, not decoration.",
    "We stay close to making: proofs, prototypes, press sheets and prototypes before polish.",
  ],
  collaboration:
    "We partner with founders, cultural organisations and product teams who want a clear point of view and a team that can execute across print and digital. Engagements are scoped around outcomes, not retainers by default.",
  capabilities: [
    "Brand strategy & naming support",
    "Visual identity systems",
    "Art direction & campaigns",
    "Packaging & material systems",
    "Editorial design",
    "Digital design & creative development",
    "Environmental graphics",
  ],
};
