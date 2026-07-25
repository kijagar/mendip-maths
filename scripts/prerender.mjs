/* Build-time prerendering.
   Runs after `vite build` (client) and `vite build --ssr` (server bundle):
   renders every route to static HTML with its own title/description/canonical,
   so search engines, social scrapers and AI crawlers see full page content
   without executing JavaScript. Keep the title/description values in sync
   with the <Seo> props in src/pages/. */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://mendip-maths.com";

const ROUTES = [
  {
    path: "/",
    title: "Mendip Maths Tutoring | Maths Tutor in Somerset & Online (GCSE, A-Level, IB)",
    description:
      "One-to-one maths tutoring across the Mendips and Somerset, plus online lessons worldwide. GCSE, IGCSE, A-Level and IB, tailored learning plans, and specialist support for ADHD, autism and dyslexia. Free taster lesson.",
  },
  {
    path: "/about",
    title: "About Ryan Garvey | Mendip Maths Tutoring",
    description:
      "Meet Ryan Garvey, founder of Mendip Maths Tutoring, a maths graduate with 15 years' teaching experience and a specialism in supporting students with ADHD, autism and dyslexia.",
  },
  {
    path: "/what-i-offer",
    title: "What I Offer | Mendip Maths Tutoring",
    description:
      "Tailored learning plans, in-home lessons across Somerset, online lessons worldwide, reinforced learning with feedback, and measurable progress: maths tuition designed around your child.",
  },
  {
    path: "/fees",
    title: "Fees | Mendip Maths Tutoring",
    description:
      "Transparent maths tutoring fees: £40 per hour up to GCSE and IGCSE, £45 per hour up to A-Level and IB, plus my cancellation policy.",
  },
  {
    path: "/catchment",
    title: "Catchment Area | Mendip Maths Tutoring",
    description:
      "In-person maths tuition around Shepton Mallet: Wells, Frome, Glastonbury, Street, Midsomer Norton and the surrounding Mendip villages, plus online lessons worldwide.",
  },
  {
    path: "/blog",
    title: "Blog | Mendip Maths Tutoring",
    description:
      "Maths tips, revision advice and insights from Ryan Garvey at Mendip Maths Tutoring. New articles coming soon.",
  },
  {
    path: "/contact",
    title: "Contact | Mendip Maths Tutoring",
    description:
      "Get in touch with Mendip Maths Tutoring. Email learning@mendipmaths.com or call 07889 733 873 to arrange a free taster lesson.",
  },
];

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const template = readFileSync(resolve(root, "dist/index.html"), "utf8");
const { render } = await import(
  new URL("../dist-server/entry-server.js", import.meta.url).href
);

// The 404 fallback stays a plain SPA shell: it is served for unknown URLs,
// so baked-in content from some other page would be wrong there.
writeFileSync(resolve(root, "dist/404.html"), template);

for (const route of ROUTES) {
  const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
  const body = render(route.path);

  const page = template
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${escapeAttr(route.description)}$2`
    )
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(route.title)}$2`)
    .replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${escapeAttr(route.description)}$2`
    )
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escapeAttr(route.title)}$2`)
    .replace(
      /(<meta name="twitter:description" content=")[^"]*(")/,
      `$1${escapeAttr(route.description)}$2`
    )
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  // Flat .html files: GitHub Pages serves dist/fees.html at /fees directly,
  // so route URLs return 200 with no trailing-slash redirect.
  const outFile =
    route.path === "/"
      ? resolve(root, "dist/index.html")
      : resolve(root, `dist${route.path}.html`);
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, page);
  console.log(`prerendered ${route.path} (${(page.length / 1024).toFixed(1)} kB)`);
}
