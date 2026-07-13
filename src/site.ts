/* Single source of truth for business details & site metadata.
   Change the domain here (and in index.html / public/*) if it differs. */

export const SITE = {
  name: "Mendip Maths Tutoring",
  url: "https://mendip-maths.com",
  tagline: "Confident maths. Real progress.",
  email: "ryan@mendipmaths.com",
  phoneDisplay: "07889 733 873",
  phoneHref: "tel:07889733873",
  location: "Shepton Mallet, Somerset",
  founder: "Ryan Garvey",
} as const;

/** Resolve a public/ asset path against the deploy base (works at "/" or a subpath). */
export const asset = (path: string) =>
  import.meta.env.BASE_URL + path.replace(/^\//, "");

export interface NavItem {
  to: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/what-i-offer", label: "What I offer" },
  { to: "/fees", label: "Fees" },
  { to: "/catchment", label: "Catchment" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const CATCHMENT_AREAS = [
  "Pilton",
  "Evercreech",
  "Bruton",
  "Wells",
  "Castle Cary",
  "Oakhill",
  "Chilcompton",
  "Stoke St. Michael",
  "Leigh upon Mendip",
  "Radstock",
  "Midsomer Norton",
  "Frome",
  "Glastonbury",
  "Street",
];
