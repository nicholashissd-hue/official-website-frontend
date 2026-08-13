import { Link } from "react-router";
import Reveal from "@/components/ui/reveal";
import { Kicker, signalButtonClass } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";
import { otherCapabilities } from "@/contents/services";
import { SERVICES, serviceShortLabel } from "@/contents/taxonomy";
import { cn } from "@/lib/util";

/**
 * Cross-navigation to the other seven capabilities, then the page's own
 * closing action.
 *
 * These pages opt out of the site-wide CTA band (see ui/cta-section) because
 * they carry their own: the headline and sentence are specific to the
 * capability the reader has just spent five minutes on, and a generic band
 * underneath would read as a second, weaker ask.
 */
const ServiceClose = ({ page }: { page: ServicePage }) => {
  const others = SERVICES.filter((service) => service.id !== page.id);

  return (
    <>
      <section className="border-t border-hairline bg-bone">
        <div className="container section-space-block">
          <Reveal>
            <Kicker>{otherCapabilities.kicker}</Kicker>
            <h2 className="mt-3 font-display text-heading font-bold tracking-[-0.03em] text-ink">
              {otherCapabilities.title}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-x-14 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((service, index) => (
              <Reveal key={service.id} delay={(index % 3) * 0.05}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group -mx-3 flex items-baseline justify-between gap-4 border-t border-hairline px-3 py-4 transition-colors duration-300 hover:bg-ink/[0.035]"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs tracking-[0.1em] text-primary">
                      {service.num}
                    </span>
                    <span className="text-base font-bold text-ink transition-colors duration-300 group-hover:text-primary">
                      {serviceShortLabel(service)}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="-translate-x-2 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nearblack">
        <div className="container py-24 md:py-28">
          <Reveal>
            <h2 className="max-w-3xl font-display text-title font-bold tracking-[-0.03em] text-bg-cream">
              {page.finalCta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base text-ondark md:text-lg">
              {page.finalCta.body}
            </p>
            <Link
              to="/contact-us"
              className={cn(signalButtonClass, "mt-9")}
            >
              {page.finalCta.primaryCta}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ServiceClose;
