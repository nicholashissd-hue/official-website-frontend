import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
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
          <p className="max-w-5xl font-display text-[clamp(1.3rem,2.3vw,1.8rem)] font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
            {pain.lead} <span className="text-sub">{pain.tail}</span>
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-paper">
      <div className="container section-space-block">
        <Reveal>
          <Kicker>{capabilities.kicker}</Kicker>
          <h2 className="mt-3 font-display text-[clamp(2.75rem,4.8vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-ink">
            {capabilities.title}
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-sub">
            {capabilities.intro}
          </p>
        </Reveal>

        <div className="mt-14">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={(index % 2) * 0.06} as="article">
              <div
                id={service.id}
                className="grid scroll-mt-28 gap-x-16 gap-y-5 border-t border-hairline py-11 lg:grid-cols-[5fr_7fr]"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[11px] tracking-[0.1em] text-primary">
                    {service.num}
                  </span>
                  <h3 className="font-display text-[clamp(1.7rem,2.6vw,2.15rem)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
                    {service.label}
                  </h3>
                </div>

                <div>
                  <p className="text-[17px] font-semibold leading-[1.5] text-ink">
                    {service.gerund}
                  </p>
                  <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.62] text-sub">
                    {service.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.subs.map((sub) => (
                      <li
                        key={sub}
                        className="rounded-[14px] border border-hairline px-3.5 py-1.5 text-[13px] font-semibold text-ink/75"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
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
