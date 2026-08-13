import { Link } from "react-router";
import Reveal from "@/components/ui/reveal";
import { BulletList, Kicker } from "@/components/ui/v4";
import { capabilities, pain } from "@/contents/screens/servicesV4";
import { SERVICES } from "@/contents/taxonomy";

/**
 * The page's core: all eight capabilities as anchored chapters. Footer and
 * home-index links target the #ids, so each row carries its taxonomy id and
 * a scroll margin for the fixed header. Hierarchy comes from the type scale,
 * never from tiles.
 */
const CapabilityChapters = () => (
  <>
    <section className="border-b border-hairline bg-bone">
      <div className="container py-12 md:py-14">
        <Reveal>
          <p className="max-w-5xl font-display text-lede font-semibold tracking-[-0.015em] text-ink">
            {pain.lead} <span className="text-sub">{pain.tail}</span>
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-paper">
      <div className="container section-space-block">
        <Reveal>
          <Kicker>{capabilities.kicker}</Kicker>
          <h2 className="mt-3 font-display text-title font-bold tracking-[-0.03em] text-ink">
            {capabilities.title}
          </h2>
          <p className="mt-6 max-w-xl text-base text-sub">
            {capabilities.intro}
          </p>
        </Reveal>

        <div className="mt-14">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={(index % 2) * 0.06} as="article">
              {/* The whole row is the target, but only the capability name is
                  the link. A stretched pseudo-element carries the hit area
                  over the row, so a screen reader announces "Cloud &
                  Infrastructure" rather than the hundred words around it. */}
              <div
                id={service.id}
                className="group relative -mx-4 grid scroll-mt-28 gap-x-16 gap-y-5 border-t border-hairline px-4 py-11 transition-colors duration-300 hover:bg-ink/[0.028] lg:grid-cols-[5fr_7fr]"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs tracking-[0.1em] text-primary">
                    {service.num}
                  </span>
                  <h3 className="font-display text-subhead font-bold tracking-[-0.02em] text-ink">
                    <Link
                      to={`/services/${service.slug}`}
                      className="transition-colors duration-300 after:absolute after:inset-0 group-hover:text-primary"
                    >
                      {service.label}
                    </Link>
                    <span
                      aria-hidden="true"
                      className="ml-3 inline-block -translate-x-2 align-baseline text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100"
                    >
                      →
                    </span>
                  </h3>
                </div>

                <div>
                  <p className="text-lg font-semibold text-ink">
                    {service.gerund}
                  </p>
                  <p className="mt-3 max-w-2xl text-base text-sub">
                    {service.body}
                  </p>
                  <BulletList items={service.subs} className="mt-6" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default CapabilityChapters;
