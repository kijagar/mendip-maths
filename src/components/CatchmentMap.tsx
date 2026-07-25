import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const BASE: [number, number] = [51.193, -2.546]; // Shepton Mallet

const AREAS: { name: string; pos: [number, number] }[] = [
  { name: "Pilton", pos: [51.163, -2.59] },
  { name: "Evercreech", pos: [51.149, -2.503] },
  { name: "Bruton", pos: [51.113, -2.453] },
  { name: "Wells", pos: [51.209, -2.647] },
  { name: "Castle Cary", pos: [51.089, -2.514] },
  { name: "Oakhill", pos: [51.222, -2.522] },
  { name: "Chilcompton", pos: [51.263, -2.508] },
  { name: "Stoke St. Michael", pos: [51.229, -2.47] },
  { name: "Leigh upon Mendip", pos: [51.23, -2.425] },
  { name: "Radstock", pos: [51.293, -2.448] },
  { name: "Midsomer Norton", pos: [51.284, -2.482] },
  { name: "Frome", pos: [51.231, -2.32] },
  { name: "Glastonbury", pos: [51.148, -2.714] },
  { name: "Street", pos: [51.126, -2.74] },
];

/** Interactive map of the in-person catchment, centred on Shepton Mallet. */
export default function CatchmentMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    // Dynamic import keeps Leaflet (which touches `window` on load)
    // out of the build-time prerender pass.
    void import("leaflet").then(({ default: L }) => {
      if (cancelled || !el) return;

      map = L.map(el, { scrollWheelZoom: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 17,
      }).addTo(map);

      const home = L.circleMarker(BASE, {
        radius: 9, color: "#ffffff", weight: 3, fillColor: "#1e3a29", fillOpacity: 1,
      }).bindTooltip("Shepton Mallet, my base", {
        permanent: true, direction: "top", offset: [0, -10],
      });

      const markers = AREAS.map((area) =>
        L.circleMarker(area.pos, {
          radius: 7, color: "#ffffff", weight: 2, fillColor: "#4a7a59", fillOpacity: 0.95,
        }).bindTooltip(area.name, { direction: "top", offset: [0, -8] })
      );

      const group = L.featureGroup([home, ...markers]).addTo(map);
      map.fitBounds(group.getBounds().pad(0.12));
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div
      className="catch-map"
      ref={ref}
      role="region"
      aria-label="Map of the areas covered for in-person lessons around Shepton Mallet"
    />
  );
}
