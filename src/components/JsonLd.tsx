/** Inline JSON-LD structured data. Rendered into the page markup (and
    therefore into the prerendered static HTML), so crawlers that do not
    execute JavaScript still see it. */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
