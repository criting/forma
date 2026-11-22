# FORMA — Design System (commercial premium)

Independent creative studio template. Warm paper, deep ink, vermilion signal. Built to sell at commercial agency-template density — cinematic scroll, bold type, rich motion — without cloning Adon / Archidex / Antra / Orisa / Morph layouts or brands.

## Positioning

For branding studios and multidisciplinary teams. Proof-first homepage: show → claim → explain → enquire. Distinct from Atelier chalk, STILLFORM contact-sheet, NOIR fashion commerce.

## Palette

| Token | Hex | Role |
|-------|-----|------|
| Paper | `#EFE6D9` | Warm page ground |
| Paper raised | `#F7F1E7` | Elevated bands |
| Paper sunken | `#E4D9C8` | Marquee / footer wash |
| Ink | `#0F0D0C` | Hero plates / primary text |
| Muted | `#5F5850` | Supporting copy |
| Signal | `#E12F1C` | Single assertive accent |
| Signal soft | `#F6DDD7` | Soft washes |

Buyer alternates: electric blue `#1C4BFF`, chartreuse `#B6D200` — one signal at a time.

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Mega / wordmark | **Bricolage Grotesque** 700 | Hero `clamp(4.8rem, 18vw, 13.5rem)` |
| Display | **Bricolage Grotesque** 650 | Section titles, case titles |
| Body / UI | **Source Sans 3** | Long-form + controls |
| Meta | **IBM Plex Mono** | Labels, filters, credits only |

## Motion system

Shared springs in `src/lib/motion.ts` (`springSnappy` / `springSoft` / `springCinematic` / `easeOutExpo`).

| Pattern | Where |
|---------|--------|
| Curtain page enter | `src/app/template.tsx` + `PageTransition` |
| Scroll progress bar | Fixed vermilion scaleX |
| Hero plate parallax + mega type blur-in | Home hero |
| Sticky cinematic work plates | Homepage selected work |
| Word-fill manifesto | Studio POV |
| Discipline marquee | Below hero |
| Magnetic CTAs | Enquiry / primary actions |
| Hover media scale | Work tiles + sticky plates |
| `MotionConfig reducedMotion="user"` | Global |

No scroll-jacking. No forced horizontal scroll. Essential actions remain keyboard-accessible without hover.

## Composition

- Hero = one full-viewport ink plate, mega wordmark, one claim, CTA group
- Work = sticky chapter plates (not equal 3-card grids)
- Case studies keep layout variants (`editorial` / `spread` / `stack` / `grid`)
- Radius: media `0` · controls `2px` · never pill CTAs
- Materials: paper grain, ink glow on media, signal bars — not purple blobs or glassmorphism

## Content boundary

`src/content/provider.ts` — typed local ContentProvider. Sample projects / people / journal are **fictional demo**. No CMS/Payload; Nextly later.

## Do not

- Clone ThemeForest / Awwwards reference layouts or assets
- Invent testimonials, awards, metrics
- Quiet “polished but empty” spacing without cinematic beats
