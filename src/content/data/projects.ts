import type { Project } from "@/content/types";

/**
 * All projects below are fictional demo content for the FORMA template.
 * Replace with real case studies before shipping a live studio site.
 */
export const projects: Project[] = [
  {
    slug: "north-ledger",
    title: "North Ledger",
    client: "North Ledger (demo)",
    year: 2025,
    disciplines: ["brand-identity", "editorial", "digital"],
    summary:
      "A financial research imprint that needed the gravity of print without looking like a bank.",
    challenge:
      "The founders wanted authority and warmth at once — something that could sit next to academic journals and still feel contemporary online.",
    approach:
      "We built a typographic identity around a custom-feeling display pairing, a restrained vermilion signal, and editorial layouts that treat research as culture, not spreadsheet chrome.",
    outcome:
      "A coherent system across report covers, a reading site and event collateral. Demo narrative only — no fabricated metrics.",
    hero: {
      id: "nl-hero",
      label: "North Ledger cover system",
      aspect: "hero",
      tone: "#2A3344",
      caption: "Placeholder — report cover family",
    },
    gallery: [
      { id: "nl-1", label: "Masthead lockups", aspect: "landscape", tone: "#1E2430" },
      { id: "nl-2", label: "Interior spread", aspect: "wide", tone: "#3D4656" },
      { id: "nl-3", label: "Digital reading view", aspect: "portrait", tone: "#C4B8A8" },
    ],
    applications: [
      { id: "nl-a1", label: "Stationery set", aspect: "square", tone: "#F2EBE1" },
      { id: "nl-a2", label: "Event badge", aspect: "square", tone: "#E23D28" },
    ],
    credits: [
      { role: "Creative direction", name: "FORMA (demo)" },
      { role: "Typography", name: "Studio team (demo)" },
    ],
    featured: true,
    layout: "editorial",
    demo: true,
  },
  {
    slug: "kiln-goods",
    title: "Kiln Goods",
    client: "Kiln Goods (demo)",
    year: 2024,
    disciplines: ["packaging", "brand-identity"],
    summary:
      "Ceramic tableware packaging that feels fired, not printed — material-first brand system.",
    challenge:
      "Existing packaging looked like lifestyle wallpaper. The makers needed a system that respected clay, glaze and shipping reality.",
    approach:
      "We designed a modular carton language with stamped type, pulp inserts and a colour logic pulled from kiln temperature charts rather than trend decks.",
    outcome:
      "A packaging kit that scales from single bowls to gift sets. Demo narrative only.",
    hero: {
      id: "kg-hero",
      label: "Kiln carton stack",
      aspect: "hero",
      tone: "#8B5A3C",
    },
    gallery: [
      { id: "kg-1", label: "Stamp mark studies", aspect: "square", tone: "#5C3A28" },
      { id: "kg-2", label: "Unbox sequence", aspect: "landscape", tone: "#D4C4B0" },
      { id: "kg-3", label: "Shelf set", aspect: "wide", tone: "#A87850" },
    ],
    credits: [
      { role: "Packaging design", name: "FORMA (demo)" },
      { role: "Photography direction", name: "Guest (demo)" },
    ],
    featured: true,
    layout: "spread",
    demo: true,
  },
  {
    slug: "atlas-room",
    title: "Atlas Room",
    client: "Atlas Room (demo)",
    year: 2025,
    disciplines: ["digital", "art-direction", "brand-identity"],
    summary:
      "A cultural membership platform designed like a printed programme, not a SaaS dashboard.",
    challenge:
      "The product team had strong content but a UI that felt like every other membership tool.",
    approach:
      "We rebuilt the visual system around issue-based navigation, oversized type and crop-framed photography — treating each season like an editorial release.",
    outcome:
      "A digital experience with clear hierarchy and calmer conversion paths. Demo narrative only.",
    hero: {
      id: "ar-hero",
      label: "Atlas Room season cover",
      aspect: "hero",
      tone: "#1A3A5C",
    },
    gallery: [
      { id: "ar-1", label: "Programme grid", aspect: "landscape", tone: "#0F2740" },
      { id: "ar-2", label: "Member view", aspect: "portrait", tone: "#E8DFD2" },
      { id: "ar-3", label: "Poster series", aspect: "square", tone: "#E23D28" },
    ],
    credits: [
      { role: "Art direction", name: "FORMA (demo)" },
      { role: "UI design", name: "FORMA (demo)" },
    ],
    featured: true,
    layout: "grid",
    demo: true,
  },
  {
    slug: "press-twenty",
    title: "Press Twenty",
    client: "Press Twenty (demo)",
    year: 2023,
    disciplines: ["editorial", "brand-identity"],
    summary:
      "An independent imprint identity built from registration marks, paper specs and stubborn type.",
    challenge:
      "A new press needed presence without looking like a tech startup or a heritage museum.",
    approach:
      "Identity as print ephemera: colophons, sheet marks, spine logic and a website that reads like a catalogue.",
    outcome:
      "A recognisable house style across first three titles. Demo narrative only.",
    hero: {
      id: "pt-hero",
      label: "Press Twenty spine wall",
      aspect: "hero",
      tone: "#2C241C",
    },
    gallery: [
      { id: "pt-1", label: "Colophon system", aspect: "portrait", tone: "#F2EBE1" },
      { id: "pt-2", label: "Title page", aspect: "landscape", tone: "#4A3F34" },
      { id: "pt-3", label: "Catalogue cover", aspect: "square", tone: "#E23D28" },
    ],
    credits: [{ role: "Identity & editorial", name: "FORMA (demo)" }],
    featured: true,
    layout: "editorial",
    demo: true,
  },
  {
    slug: "signal-festival",
    title: "Signal Festival",
    client: "Signal Festival (demo)",
    year: 2024,
    disciplines: ["art-direction", "environmental", "digital"],
    summary:
      "Festival identity that behaves like a live broadcast — bold type, shifting crop frames, wayfinding that moves.",
    challenge:
      "Previous years looked like generic music posters. Organisers wanted something sharper and more systemic.",
    approach:
      "A modular graphic kit: signal bars, mono captions, oversized numerals and spatial applications for stages and streets.",
    outcome:
      "Unified look across posters, site and venue. Demo narrative only.",
    hero: {
      id: "sf-hero",
      label: "Signal key visual",
      aspect: "hero",
      tone: "#0D0D0D",
    },
    gallery: [
      { id: "sf-1", label: "Stage banners", aspect: "wide", tone: "#E23D28" },
      { id: "sf-2", label: "Wayfinding", aspect: "portrait", tone: "#1A1A1A" },
      { id: "sf-3", label: "Site hero", aspect: "landscape", tone: "#F2EBE1" },
    ],
    credits: [
      { role: "Art direction", name: "FORMA (demo)" },
      { role: "Environmental", name: "Partner (demo)" },
    ],
    featured: false,
    layout: "stack",
    demo: true,
  },
  {
    slug: "grove-apothecary",
    title: "Grove Apothecary",
    client: "Grove Apothecary (demo)",
    year: 2024,
    disciplines: ["packaging", "brand-identity", "art-direction"],
    summary:
      "Small-batch apothecary line with labels that feel botanical without soft-focus wellness clichés.",
    challenge:
      "Category visuals were saturated with sage greens and serif romance. Grove needed something drier and more precise.",
    approach:
      "Cool paper fields, scientific-adjacent mono labels, and a single verdant ink used sparingly as specimen marks.",
    outcome:
      "Label system and photography direction for launch SKUs. Demo narrative only.",
    hero: {
      id: "ga-hero",
      label: "Grove bottle line",
      aspect: "hero",
      tone: "#3D4A3A",
    },
    gallery: [
      { id: "ga-1", label: "Label close-up", aspect: "square", tone: "#E8E2D6" },
      { id: "ga-2", label: "Box set", aspect: "landscape", tone: "#2F3A2C" },
      { id: "ga-3", label: "Campaign still", aspect: "portrait", tone: "#A8B59A" },
    ],
    credits: [{ role: "Identity & packaging", name: "FORMA (demo)" }],
    featured: false,
    layout: "spread",
    demo: true,
  },
  {
    slug: "civic-type",
    title: "Civic Type",
    client: "Civic Type (demo)",
    year: 2023,
    disciplines: ["environmental", "brand-identity"],
    summary:
      "Wayfinding and civic identity for a cultural campus — clear at distance, interesting up close.",
    challenge:
      "Legacy signage was inconsistent and hard to navigate for first-time visitors.",
    approach:
      "A typographic wayfinding system with modular panels, strong contrast and a signal colour reserved for decision points.",
    outcome:
      "Campus map, exterior and interior applications. Demo narrative only.",
    hero: {
      id: "ct-hero",
      label: "Civic Type totem",
      aspect: "hero",
      tone: "#1C4BFF",
    },
    gallery: [
      { id: "ct-1", label: "Directory panel", aspect: "portrait", tone: "#14110F" },
      { id: "ct-2", label: "Map legend", aspect: "landscape", tone: "#F2EBE1" },
      { id: "ct-3", label: "Exterior mark", aspect: "square", tone: "#E23D28" },
    ],
    credits: [
      { role: "Environmental graphics", name: "FORMA (demo)" },
      { role: "Architecture liaison", name: "Partner (demo)" },
    ],
    featured: false,
    layout: "grid",
    demo: true,
  },
  {
    slug: "orbit-radio",
    title: "Orbit Radio",
    client: "Orbit Radio (demo)",
    year: 2025,
    disciplines: ["digital", "art-direction", "brand-identity"],
    summary:
      "Independent radio brand and listening site designed around schedule as graphic form.",
    challenge:
      "The station had a strong voice on air and almost no visual identity online.",
    approach:
      "We treated the weekly grid as a design object — mono timestamps, bold show titles, and motion that echoes dial tuning without gimmicks.",
    outcome:
      "Brand system, site and social templates. Demo narrative only.",
    hero: {
      id: "or-hero",
      label: "Orbit schedule graphic",
      aspect: "hero",
      tone: "#2A1A40",
    },
    gallery: [
      { id: "or-1", label: "Show cards", aspect: "landscape", tone: "#1A1028" },
      { id: "or-2", label: "Player UI", aspect: "portrait", tone: "#F2EBE1" },
      { id: "or-3", label: "Sticker set", aspect: "square", tone: "#E23D28" },
    ],
    credits: [
      { role: "Brand & digital", name: "FORMA (demo)" },
      { role: "Motion", name: "FORMA (demo)" },
    ],
    featured: true,
    layout: "stack",
    demo: true,
  },
];
