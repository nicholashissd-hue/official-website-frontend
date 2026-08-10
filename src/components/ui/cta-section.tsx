import { Link, useLocation } from "react-router";
import { signalButtonClass } from "./v4";
import Reveal from "./reveal";
import { cn } from "@/lib/util";

/**
 * The one end-of-page CTA band (Revision Brief): identical on every page,
 * no per-page label overrides. Fixed headline, subhead, single primary CTA.
 *
 * Careers opts out alongside contact and the legal pages: it is the one page
 * addressed to engineers, and the band fired a buyer pitch directly beneath
 * JoinProcess's own "Apply to join the network", putting two actions for
 * opposite audiences in the same viewport.
 *
 * The email, phone and response time live in the footer, which sits directly
 * below this band on every page. They were printed in both.
 */
const EXCLUDED = new Set(["/contact-us", "/careers", "/terms", "/privacy"]);

const CTASection = () => {
  const { pathname } = useLocation();

  if (EXCLUDED.has(pathname)) return null;

  return (
    <section className="bg-nearblack">
      <div className="container py-24 md:py-28">
        <Reveal>
          <h2 className="max-w-3xl font-display text-title font-bold tracking-[-0.03em] text-bg-cream">
            Senior engineering, embedded in your team.
          </h2>
          <p className="mt-6 max-w-xl text-base text-ondark md:text-lg">
            Tell us where your infrastructure or delivery is stuck. We will tell
            you how we would fix it and who would run it. You keep the
            assessment and the roadmap either way.
          </p>
          <Link to="/contact-us" className={cn(signalButtonClass, "mt-9")}>
            Get in touch
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
