/**
 * Primary nav per the Revision Brief: logo is the home link (no "Home" item),
 * Careers lives in the utility slot + footer, and the one styled element in
 * the bar is the "Get in touch" button. Industries joins in second position
 * only once three real industry pages exist.
 */
export const NAV_LINKS = [
  { label: "Services", path: "/services" },
  { label: "How We Work", path: "/how-we-work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact-us" },
];

/** Small, lighter-weight link kept out of the buyer path. */
export const UTILITY_LINK = { label: "Careers", path: "/careers" };
