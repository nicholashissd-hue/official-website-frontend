import { Link } from "react-router";
import elderOpsLogo from "@/assets/svg/elderOps-white-logo.svg";
import { SERVICES, serviceShortLabel } from "@/contents/taxonomy";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590638164928",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-4"
      >
        <path d="M13.5 21v-7h2.5l.5-3h-3V9.05c0-.87.24-1.55 1.65-1.55h1.55V4.85c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.04 1.48-4.04 4.2V11H7.5v3h2.7v7z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/elder_ops",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-4"
      >
        <rect
          x="3.2"
          y="3.2"
          width="17.6"
          height="17.6"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.1" cy="6.9" r="1.25" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/elder_ops",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-3.5"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const COMPANY_LINKS = [
  { label: "About", path: "/about" },
  { label: "How We Work", path: "/how-we-work" },
  { label: "Careers", path: "/careers" },
];

// The mono-caps + wide-tracking eyebrow is the banned AI-tell pattern, and it
// survived here on every page. Column heads follow the Kicker instead: quiet
// sentence case in the display family.
const columnHeading =
  "font-display text-sm font-semibold tracking-[-0.01em] text-bg-cream/60";
// inline-block, so the generous leading becomes the tap target rather than
// just visual spacing: as inline anchors these were 18px tall, under the 24px
// minimum, on the surface most often read on a phone.
const columnLink =
  "inline-block text-sm leading-[2.1] text-bg-cream/75 transition-colors hover:text-bg-cream";

/** Three-column footer per the Revision Brief: Services / Company / Contact. */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-cream/10 bg-nearblack text-bg-cream">
      <div className="container">
        <div className="grid gap-x-12 gap-y-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.6fr_1.1fr_0.8fr_1fr]">
          <div>
            <img src={elderOpsLogo} alt="ElderOps" className="w-12" />
            <p className="mt-6 max-w-xs text-base font-bold">
              The embedded senior engineering partner.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ElderOps on ${social.label}`}
                  className="grid size-9 place-items-center rounded-full text-bg-cream/70 ring-1 ring-inset ring-bg-cream/25 transition-all duration-300 hover:bg-signal hover:text-nearblack hover:ring-signal"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services">
            <p className={columnHeading}>Services</p>
            <ul className="mt-5">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`} className={columnLink}>
                    {serviceShortLabel(service)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border-b border-bg-cream/35 pb-0.5 text-sm font-semibold text-bg-cream/85 transition-colors hover:text-bg-cream"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className={columnHeading}>Company</p>
            <ul className="mt-5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={columnLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={columnHeading}>Contact</p>
            <ul className="mt-5">
              <li>
                <a href="mailto:contact@elderops.net" className={columnLink}>
                  contact@elderops.net
                </a>
              </li>
              <li>
                <a href="tel:+18667977937" className={columnLink}>
                  +1 (866) 797-7937
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-bg-cream/50">
              Typical response within one business day.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-bg-cream/10 py-7 text-xs text-bg-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} ElderOps</p>
          <div className="flex gap-8">
            <Link
              to="/terms"
              className="inline-block py-1.5 transition-colors hover:text-bg-cream"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="inline-block py-1.5 transition-colors hover:text-bg-cream"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
