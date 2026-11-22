import type { ProcessStep, Service } from "@/content/types";

export const services: Service[] = [
  {
    slug: "brand-strategy",
    title: "Brand strategy",
    summary:
      "Positioning, narrative and naming support that gives the visual system something real to carry.",
    outcomes: [
      "Clear audience and competitive framing",
      "Verbal identity foundations",
      "Briefs designers can actually use",
    ],
  },
  {
    slug: "visual-identity",
    title: "Visual identity",
    summary:
      "Marks, typography, colour, motion principles and guidelines built as a living system.",
    outcomes: [
      "Primary and flexible mark architectures",
      "Type and colour rules with examples",
      "Production-ready asset kits",
    ],
  },
  {
    slug: "art-direction",
    title: "Art direction",
    summary:
      "Campaign worlds and image systems that keep every channel on the same wavelength.",
    outcomes: [
      "Photography and motion briefs",
      "Campaign look & feel",
      "Cross-channel consistency",
    ],
  },
  {
    slug: "packaging",
    title: "Packaging",
    summary:
      "Structural and graphic packaging that feels considered in the hand and on the shelf.",
    outcomes: [
      "Dieline-aware design",
      "Material and finish recommendations",
      "Series systems that scale",
    ],
  },
  {
    slug: "editorial",
    title: "Editorial",
    summary:
      "Print and digital editorial with rhythm, hierarchy and a point of view — not template filler.",
    outcomes: [
      "Grid and typographic systems",
      "Layouts for long-form content",
      "Print-ready production files",
    ],
  },
  {
    slug: "digital-design",
    title: "Digital design",
    summary:
      "Websites and product experiences with editorial pacing and restrained, meaningful motion.",
    outcomes: [
      "Art-directed page compositions",
      "Component systems for growth",
      "Handoff-ready design specs",
    ],
  },
  {
    slug: "creative-development",
    title: "Creative development",
    summary:
      "Front-end builds that protect the design intent — static-first, performant, accessible.",
    outcomes: [
      "Production Next.js implementations",
      "Motion that respects reduced-motion",
      "Maintainable content boundaries",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Listen & frame",
    body: "We gather context, constraints and ambition, then write a brief the whole team can argue with productively.",
  },
  {
    number: "02",
    title: "Explore & provoke",
    body: "Multiple directions with clear theses — not moodboards for moodboards’ sake. We pick a spine early.",
  },
  {
    number: "03",
    title: "Systematise",
    body: "Rules, exceptions, applications. The identity has to work on a press sheet and a phone screen.",
  },
  {
    number: "04",
    title: "Produce & hand over",
    body: "Assets, guidelines and build support. We leave you able to run the system without us in the room.",
  },
];
