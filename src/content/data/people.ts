import type { Person } from "@/content/types";

/** Fictional demo profiles for template preview — replace with real team or hide the section. */
export const people: Person[] = [
  {
    slug: "mira-ellison",
    name: "Mira Ellison",
    role: "Creative director",
    bio: "Leads art direction and identity systems. Background in editorial design and print production. Demo profile.",
    selectedWork: ["north-ledger", "press-twenty", "signal-festival"],
    socials: [{ label: "Are.na", href: "https://www.are.na/" }],
    tone: "#2A3344",
    demo: true,
  },
  {
    slug: "jonah-park",
    name: "Jonah Park",
    role: "Design lead — brand & packaging",
    bio: "Specialises in packaging systems and material-led identities. Demo profile.",
    selectedWork: ["kiln-goods", "grove-apothecary"],
    tone: "#8B5A3C",
    demo: true,
  },
  {
    slug: "ada-vesa",
    name: "Ada Vesa",
    role: "Digital designer",
    bio: "Designs editorial web experiences and motion systems with accessibility in mind. Demo profile.",
    selectedWork: ["atlas-room", "orbit-radio"],
    socials: [{ label: "LinkedIn", href: "https://linkedin.com/" }],
    tone: "#1A3A5C",
    demo: true,
  },
  {
    slug: "theo-nair",
    name: "Theo Nair",
    role: "Creative technologist",
    bio: "Builds front-end systems that protect design intent — static-first, performant. Demo profile.",
    selectedWork: ["atlas-room", "civic-type", "orbit-radio"],
    tone: "#1C4BFF",
    demo: true,
  },
];
