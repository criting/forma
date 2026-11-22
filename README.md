# FORMA

Premium **independent creative studio** template — brand identity, art direction, packaging, editorial and digital. Built for Veltri / Criting marketplace quality: warm paper, deep ink, vermilion signal, typographic confidence.

> **Demo content is fictional.** Projects, people and journal posts are sample data for preview only.

## Stack

- Next.js 16 App Router · React 19 · TypeScript strict · Tailwind CSS v4
- Motion for React (with `prefers-reduced-motion`)
- Zod-validated enquiry form
- Typed local **ContentProvider** (`src/content/`) — **no CMS / Payload**
- Static export for **Cloudflare Pages** (`output: "export"`)

Future CMS: wire [Nextly](https://github.com/) (or your adapter) behind `ContentProvider` without rewriting UI.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Homepage |
| `/work` | Archive + filters |
| `/work/[slug]` | Case study |
| `/services` | Services + process |
| `/studio` | Philosophy & collaboration |
| `/people` · `/people/[slug]` | Demo team |
| `/journal` · `/journal/[slug]` | Demo articles |
| `/contact` | Enquiry form (demo state) |
| `/privacy` · `/terms` | Legal stubs |
| Custom 404 | Branded not-found |

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run lint
npm run build   # writes static site to out/
```

### Cloudflare Pages

1. Build command: `npm run build`
2. Output directory: `out`
3. Framework preset: Next.js (static) / None

Or drag `out/` into Pages. No Node server required for the default static export.

### Vercel (optional)

Works with `next build` + static export; Cloudflare is preferred for this template.

## Content

Edit typed files under `src/content/data/`:

- `site.ts` — name, nav, contact email, form endpoint
- `projects.ts` — case studies (mark `demo: true` until real)
- `people.ts` · `journal.ts` · `services.ts` · `disciplines.ts`

Connect a real form: set `contact.endpoint` in `site.ts` to Formspree, Basin, Getform, etc.

## Design

See [DESIGN.md](./DESIGN.md) for palette, type, motion and composition rules.

## Licence

Template licence governed by your Veltri / Criting purchase terms. Demo brand names are fictional.
