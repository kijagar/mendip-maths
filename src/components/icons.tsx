import type { SVGProps } from "react";

/* Shared stroke-icon set. All icons are decorative (aria-hidden);
   accessible names come from the surrounding text or aria-label. */

function base(props: SVGProps<SVGSVGElement>): SVGProps<SVGSVGElement> {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true,
    ...props,
  };
}

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
);

export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>
);

export const Plus = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 2v20M2 12h20" /></svg>
);

export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

export const GradCap = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 7l9-4 9 4-9 4-9-4zM21 10v6M7 9v5c0 1 2 3 5 3s5-2 5-3V9" /></svg>
);

export const Pin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 21s-7-4.4-7-10a7 7 0 0114 0c0 5.6-7 10-7 10z" /><circle cx="12" cy="11" r="2.5" /></svg>
);

export const Target = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg>
);

export const House = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 11l9-7 9 7M5 10v9h14v-9" /></svg>
);

export const Notebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 19V5a2 2 0 012-2h11l3 3v13a2 2 0 01-2 2H6a2 2 0 01-2-2z" /><path d="M8 8h7M8 12h7M8 16h4" /></svg>
);

export const TrendUp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 17l5-5 4 4 8-9" /><path d="M21 7h-4M21 7v4" /></svg>
);

export const School = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 8l9-4 9 4-9 4-9-4z" /><path d="M7 10v5c0 1 2.2 3 5 3s5-2 5-3v-5" /></svg>
);

export const BookOpen = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 19V5a2 2 0 012-2h12a2 2 0 012 2v14" /><path d="M4 19a2 2 0 002 2h12a2 2 0 002-2" /><path d="M8 7h8M8 11h8" /></svg>
);

export const Calendar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></svg>
);

export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);

export const Globe = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></svg>
);

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" /></svg>
);
