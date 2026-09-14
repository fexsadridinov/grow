# GROW

A multilingual introduction to an agricultural intelligence platform in development. The website sells the vision; it does not run agricultural models, operate drones, or make validated forecasts.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm start
```

Next.js 16 App Router, strict TypeScript, Tailwind CSS, next-intl, Framer Motion, Lucide. Manrope and IBM Plex Mono include Cyrillic subsets. If a restricted local runtime prevents Turbopack workers from binding a port, `npm run build -- --webpack` produces the equivalent Next.js production build.

## Architecture

- `src/components/introduction/`: editorial hero, field-context diagram, interactive evidence trail, architecture overview, family-farming narrative.
- `src/components/sections/`: supporting agronomic explanations, roadmap, expert review, outcomes and contact. Deeper product examples live inside expandable technical notes.
- `messages/`: all six locale dictionaries. New introduction copy lives under `introduction`; existing technical content retains its namespaces.
- `src/config/brand.ts`: brand, public contact email and canonical site URL.
- `src/i18n/`: typed locales, English fallback, routing and preference cookie.

English is `/`. Ukrainian remains internally `uk`, displays **UA**, and uses the existing public `/ua` route; legacy `/uk` redirects to `/ua`. Other routes: `/ru`, `/es`, `/de`, `/fr`. Language switching preserves the section.

## Enquiries

The form validates fields and opens a visitor-reviewed email draft addressed to the configured public contact. The visitor must press Send in their own mail application. No form data is logged or stored on this website. The legacy POST endpoint returns 503 until a real submission service is connected. No email/API credentials are needed.

## Assets and claims

`public/images/grow-landscape.webp` is a Higgsfield-generated illustrative landscape, optimized locally to WebP (about 328 KiB). It depicts no verified farm or pilot. SVG field overlays and all scenario data are conceptual. The three-generation family-farming narrative comes from the project owner's brief. No customer logos, validation numbers, testimonials, yield gains or operational acreage are asserted.

## Production

The existing GitHub `main` branch drives the existing Vercel project. Use the Next.js framework preset and repository root; do not create a second deployment project. Canonical and alternate URLs use Vercel’s `VERCEL_PROJECT_PRODUCTION_URL` automatically; `NEXT_PUBLIC_SITE_URL` is an optional explicit override. Local development falls back to localhost. No secrets are required for this introduction site.

Future integration points: a consent-aware contact service, verified agronomic references, real field observations and expert reviews, weather/soil integrations, remote sensing, then operational machinery. Real-world capabilities require independent validation before replacing conceptual examples.
