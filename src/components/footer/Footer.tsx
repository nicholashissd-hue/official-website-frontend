import { Link } from "react-router";
import elderOpsLogo from "@/assets/svg/elderOps-white-logo.svg";
import { NAV_LINKS } from "@/contents/nav";
import Button from "../ui/button";
import Reveal from "../ui/reveal";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590638164928",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
        <path d="M13.5 21v-7h2.5l.5-3h-3V9.05c0-.87.24-1.55 1.65-1.55h1.55V4.85c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.04 1.48-4.04 4.2V11H7.5v3h2.7v7z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/elder_ops",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.1" cy="6.9" r="1.25" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/elder_ops",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-primary text-bg-cream">
      {/* Tonal depth at the base of the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,#01220f_0%,transparent_60%)]"
      />

      <div className="container relative">
        <Reveal className="flex flex-col gap-10 border-b border-bg-cream/10 py-16 md:py-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="max-w-2xl font-display text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              Senior engineering expertise.{" "}
              <span className="text-border-light">Accountable delivery.</span>
            </p>
          </div>

          <Button to="/contact-us" variant="primary" withArrow className="shrink-0">
            Start the Conversation
          </Button>
        </Reveal>

        <div className="grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-16">
          <div>
            <img src={elderOpsLogo} alt="ElderOps" className="w-12" />
            <p className="mt-6 max-w-xs text-sm leading-[1.8] text-accent-four">
              Strategy, execution, and accountability in a single engineering
              model — senior expertise that integrates directly into your team
              and owns outcomes.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ElderOps on ${social.label}`}
                  className="grid size-9 place-items-center rounded-full text-bg-cream/75 ring-1 ring-inset ring-bg-cream/25 transition-all duration-300 hover:bg-success hover:text-deep hover:ring-success"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-four">
              Menu
            </p>
            <ul className="mt-6 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="u-line pb-0.5 text-sm text-bg-cream/85 transition-colors hover:text-bg-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-four">
              Contact
            </p>
            <ul className="mt-6 space-y-3.5 text-sm">
              <li>
                <a
                  href="mailto:contact@elderops.net"
                  className="u-line pb-0.5 text-bg-cream/85 transition-colors hover:text-bg-cream"
                >
                  contact@elderops.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+16285550147"
                  className="u-line pb-0.5 text-bg-cream/85 transition-colors hover:text-bg-cream"
                >
                  +1 (628) 555-0147
                </a>
              </li>
            </ul>
            <p className="mt-8 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-accent-four">
              Typical response
              <br />
              <span className="text-border-light">within one business day</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-bg-cream/10 py-8 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-four sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} ElderOps — Senior Engineering Partners</p>
          <div className="flex gap-8">
            <Link
              to="/terms"
              className="u-line pb-0.5 transition-colors hover:text-bg-cream"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="u-line pb-0.5 transition-colors hover:text-bg-cream"
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
