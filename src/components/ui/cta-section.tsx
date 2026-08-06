import { Link, useLocation } from "react-router";
import Reveal from "./reveal";

/**
 * The one end-of-page CTA band (Revision Brief): identical on every page,
 * no per-page label overrides. Fixed headline, subhead, single primary CTA.
 * The contact page (and legal pages) opt out.
 */
const EXCLUDED = new Set(["/contact-us", "/terms", "/privacy"]);

const CTASection = () => {
  const { pathname } = useLocation();

  if (EXCLUDED.has(pathname)) return null;

  return (
    <section className="bg-nearblack">
      <div className="container py-24 md:py-28">
        <Reveal>
          <div className="grid items-end gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="max-w-3xl font-display text-title font-bold tracking-[-0.03em] text-bg-cream">
                Senior engineering, embedded in your team.
              </h2>
              <p className="mt-6 max-w-xl text-base text-ondark md:text-lg">
                Tell us where your infrastructure or delivery is stuck. We will
                tell you how we would fix it and who would own the work.
              </p>
              <Link
                to="/contact-us"
                className="mt-9 inline-flex items-center rounded-[14px] bg-signal px-7 py-4 text-base font-bold text-nearblack transition-transform duration-300 hover:-translate-y-px"
              >
                Get in touch
              </Link>
            </div>

            <div className="flex flex-col gap-1.5 lg:items-end lg:text-right">
              <a
                href="mailto:contact@elderops.net"
                className="text-base text-bg-cream/80 transition-colors hover:text-bg-cream"
              >
                contact@elderops.net
              </a>
              <a
                href="tel:+18667977937"
                className="text-base text-bg-cream/80 transition-colors hover:text-bg-cream"
              >
                +1 (866) 797-7937
              </a>
              <p className="text-sm text-bg-cream/50">
                Typical response within one business day.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
