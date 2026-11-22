# FORMA — Design System

Independent creative studio / branding template. Print-studio paper, deep ink, vermilion signal. Typographic confidence over decoration.

## Positioning

For branding studios, art directors and multidisciplinary teams. Feels like a contemporary design practice — not ATELIER chalk architecture, not a generic agency landing page, not STILLFORM contact-sheet photography, not NOIR fashion commerce.

## Palette

| Token | Hex | Role |
|-------|-----|------|
| Paper | `#F2EBE1` | Warm page ground |
| Paper raised | `#FAF6F0` | Elevated bands, forms |
| Paper sunken | `#E8E0D4` | Footer / banner wash |
| Ink | `#14110F` | Primary text / wordmark |
| Ink soft | `#2A2520` | Secondary body |
| Muted | `#6B645C` | Supporting copy |
| Meta | `#8A8278` | Captions, mono labels |
| Rule | `#D6CFC4` | Fine rules |
| Signal | `#E23D28` | Single assertive accent |
| Signal soft | `#F8E4DF` | Soft signal wash |

Buyer alternates (document only — switch CSS variables): electric blue `#1C4BFF`, acidic chartreuse `#B6D200`. Keep one signal at a time.

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Display / wordmark | **Bricolage Grotesque** | Oversized headlines, section titles |
| Body / UI | **Source Sans 3** | Readable long-form and controls |
| Metadata | **IBM Plex Mono** | Labels, filters, credits, dates only |

Avoid Inter / Roboto / Arial / system UI stacks as primary. Never use mono for body paragraphs.

## Layout

- Editorial crops, fine rules, registration-mark accents, asymmetric work sequences
- Hero budget: brand + one statement + one art-directed graphic plane + CTA group
- Case studies use layout variants (`editorial` · `spread` · `stack` · `grid`) — not one repeated card stack
- Radius: media `0` · controls `2px` · never pill CTAs
- No device mockups, bento grids, gradient blobs, glassmorphism, or fake metrics

## Motion

- Hero: masked line rise, parallax graphic shift, restrained registration drift
- Archive: staggered tile reveals, hover scale on media (disabled under reduced motion)
- Shared springs / ease in `src/lib/motion.ts`
- `MotionConfig reducedMotion="user"` globally
- No scroll-jacking, forced horizontal scroll, or hover-only essential behaviour

## Atmosphere

Warm paper wash + subtle SVG grain (`.grain`). Signal colour used sparingly — links on hover, filter active states, enquiry CTAs, registration accents.

## Content boundary

`src/content/provider.ts` is the typed local ContentProvider. All sample projects, people and journal posts are **fictional demo** content. Replace assets with labelled placeholders until real photography exists — never fabricate client screenshots or metrics.

## Do not

- Copy Atelier / Maison / NÉROLI / MONOGRAPH / NOIR / STILLFORM compositions
- Invent testimonials, awards, client logos or conversion stats
- Ship Payload/CMS in this template (Nextly noted in README for later)
