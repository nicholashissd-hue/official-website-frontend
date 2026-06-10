import { Link } from "react-router";
import elderOpsLogo from "@/assets/svg/elderOps-white-logo.svg";
import { NAV_LINKS } from "@/contents/nav";
import Button from "../ui/button";
import Reveal from "../ui/reveal";

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
            <a href="/" className="u-line pb-0.5 transition-colors hover:text-bg-cream">
              Terms
            </a>
            <a href="/" className="u-line pb-0.5 transition-colors hover:text-bg-cream">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
