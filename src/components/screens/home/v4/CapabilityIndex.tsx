import { Link } from "react-router";
import Reveal from "@/components/ui/reveal";
import { Kicker, GhostLink } from "@/components/ui/v4";
import { capabilities } from "@/contents/screens/homeV4";
import { SERVICES, serviceShortLabel } from "@/contents/taxonomy";

/**
 * The capability catalog as a compact two-column index beside its heading:
 * number, name, one line, hairline. The whole set fits in a
 * viewport; the arrow appears on hover. Never a tile wall.
 */
const CapabilityIndex = () => (
  <section
    id="capabilities"
    className="scroll-mt-24 border-y border-hairline bg-bone"
  >
    <div className="container section-space-block">
      <div className="grid items-start gap-x-20 gap-y-12 lg:grid-cols-[4fr_8fr]">
        <div>
          <Reveal>
            <Kicker>{capabilities.eyebrow}</Kicker>
            <h2 className="mt-3 font-display text-heading font-bold tracking-[-0.03em] text-ink">
              {capabilities.title}
            </h2>
            <p className="mt-6 max-w-xs text-base text-sub">
              {capabilities.intro}
            </p>
            <GhostLink to="/services" className="mt-7">
              {capabilities.cta} <span aria-hidden="true">→</span>
            </GhostLink>
          </Reveal>
        </div>

        <div className="grid content-start gap-x-14 sm:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={(index % 4) * 0.06}>
              <Link
                to={`/services#${service.id}`}
                className="group block border-b border-hairline py-5"
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs tracking-[0.1em] text-primary">
                      {service.num}
                    </span>
                    <span className="text-lg font-bold text-ink transition-colors duration-300 group-hover:text-primary">
                      {serviceShortLabel(service)}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="-translate-x-1.5 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    →
                  </span>
                </span>
                <span className="mt-1.5 block pl-8 text-sm text-sub">
                  {service.gerund}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CapabilityIndex;
