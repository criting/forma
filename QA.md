# FORMA — QA report

Tests actually run on this build. No claimed coverage beyond the list below.

## Commands

| Check | Result |
|-------|--------|
| `npm run typecheck` | Pass |
| `npm run lint` | Pass (fixed header setState-in-effect) |
| `npm run build` (static `out/`) | Pass — 29 static routes |

## Route smoke (static `out/` via `python3 -m http.server`)

| Route | Result |
|-------|--------|
| `/` | Pass — hero, selected work, POV, capabilities, journal, enquiry |
| `/work/` | Pass — discipline + year filters |
| `/work/north-ledger/` | Pass — case study + gallery placeholders |
| `/services/` | Pass |
| `/studio/` | Pass |
| `/people/` · `/people/mira-ellison/` | Pass |
| `/journal/` · `/journal/identity-as-system/` | Pass |
| `/contact/` | Pass — demo form banner present |
| `/privacy/` · `/terms/` | Pass |
| Unknown → `/_not-found/` | Pass (custom 404 in build) |

## Fixes during QA

- Primary CTA text invisible: unlayered `a { color: inherit }` overrode `@layer utilities`. Moved base resets into `@layer base`.
- Mobile nav: replaced pathname `useEffect` setState with render-time path sync (eslint).

## Interaction / a11y checks performed

- Mobile nav open/close (390px screenshot)
- Contact form Zod validation + demo submission state (no endpoint)
- `MotionConfig reducedMotion="user"` present
- Keyboard focus-visible styles in CSS
- Button contrast verified via Playwright computed styles after cascade fix

## Media captured

Project store:

- `media/forma-01-home-hero.png`
- `media/forma-02-home-scroll.png`
- `media/forma-03-work-archive.png`
- `media/forma-04-case-study.png`
- `media/forma-05-services.png`
- `media/forma-06-studio.png`
- `media/forma-07-journal.png`
- `media/forma-08-contact.png`
- `media/forma-09-mobile-hero.png`
- `media/forma-hero-scroll.webm`

## Not tested

- Real form provider round-trip
- Full cross-browser matrix
- Lighthouse CI thresholds
