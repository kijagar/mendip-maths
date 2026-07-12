import { useEffect } from "react";
import { SITE } from "../site";

interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/fees". Used for the canonical URL. */
  path: string;
  /** Absolute or site-relative image for social cards. */
  image?: string;
  /** Extra JSON-LD for this page (rendered alongside the site-wide graph in index.html). */
  jsonLd?: object;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Per-route document metadata for a client-rendered SPA.
 * The static defaults live in index.html (what non-JS crawlers see);
 * this keeps title/description/canonical/OG in sync for Google & browsers.
 */
export default function Seo({ title, description, path, image, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${SITE.url}${path === "/" ? "/" : path}`;
    const img = image
      ? image.startsWith("http") ? image : `${SITE.url}${image}`
      : `${SITE.url}/assets/tor.jpg`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", img);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", img);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let ldScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.dataset.page = "true";
      ldScript.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(ldScript);
    }
    return () => {
      ldScript?.remove();
    };
  }, [title, description, path, image, jsonLd]);

  return null;
}
