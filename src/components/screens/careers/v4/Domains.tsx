import { Link } from "react-router";
import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { domains } from "@/contents/screens/careersV4";
import { SERVICES, serviceShortLabel } from "@/contents/taxonomy";

/** The buyer taxonomy as the engineer's domain grid: same eight, one truth. */
const Domains = () => (
  <section className="border-y border-hairline bg-bone">
    <div className="container section-space-block">
      <div className="grid items-start gap-x-20 gap-y-12 lg:grid-cols-[4fr_8fr]">
        <Reveal>
          <Kicker>{domains.kicker}</Kicker>
          <h2 className="mt-3 font-display text-heading font-bold tracking-[-0.03em] text-ink">
            {domains.title}
          </h2>
          <p className="mt-6 max-w-xs text-base text-sub">{domains.intro}</p>
        </Reveal>

        <div className="grid content-start gap-x-14 sm:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={(index % 4) * 0.06}>
              <Link
                to={`/services#${service.id}`}
                className="group flex items-baseline justify-between gap-4 border-b border-hairline py-4"
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
                  className="-translate-x-1.5 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Domains;
