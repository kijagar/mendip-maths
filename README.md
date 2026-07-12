# Mendip Maths Tutoring website

The Mendip Maths Tutoring website as a **Vite + React 19 + TypeScript** single-page app
(converted from the static HTML site in `../mendip-maths`).

## Commands

```bash
npm install     # once
npm run dev     # local dev server
npm run build   # typecheck + production build into dist/ (also creates dist/404.html for GitHub Pages)
npm run preview # serve the production build locally
```

## Structure

| Path | Purpose |
|------|---------|
| `src/site.ts` | Single source of truth: business details, nav items, catchment list |
| `src/components/Seo.tsx` | Per-route title/description/canonical/Open Graph/JSON-LD |
| `src/components/Layout.tsx` | Skip link, header, footer, scroll-to-top on navigation |
| `src/components/Reveal.tsx` | Scroll-reveal animation (respects `prefers-reduced-motion`) |
| `src/pages/` | One component per page + `NotFound` |
| `index.html` | Static default metadata + site-wide JSON-LD (what non-JS crawlers see) |
| `public/robots.txt`, `public/sitemap.xml` | Google crawl metadata |
| `public/llms.txt` | Business summary for AI assistants/LLM crawlers |

## SEO & metadata

- **Google**: full default metadata + schema.org JSON-LD (`LocalBusiness`, `Person`,
  `WebSite`) is baked into `index.html`, so it's visible without JavaScript. The `Seo`
  component then keeps title, description, canonical and Open Graph tags in sync per route.
- **LLMs**: most AI crawlers don't run JavaScript, so the static `index.html` metadata,
  JSON-LD and `public/llms.txt` are what they read.
- The canonical domain is `https://www.mendipmaths.com`. If that changes, update it in
  `src/site.ts`, `index.html`, `public/sitemap.xml`, `public/robots.txt` and `public/llms.txt`.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and
publishes `dist/` to GitHub Pages. In the repo settings, **Settings > Pages > Source**
must be set to **GitHub Actions** (not "Deploy from a branch").

Details:

- `vite.config.ts` sets `base: "/mendip-maths/"` for the project-site URL
  (`https://kijagar.github.io/mendip-maths/`). If the site moves to a custom domain,
  change it to `"/"`.
- The build copies `index.html` to `404.html` so deep links (e.g. `/fees`) resolve on Pages.
- Any other static host also works: serve `dist/` with a catch-all rewrite to `/index.html`.

For the strongest SEO, consider prerendering each route to static HTML at build time
(e.g. `vite-plugin-prerender` or migrating to a framework with SSG). Google renders
JS fine, but prerendered HTML helps non-JS crawlers see per-page content.
