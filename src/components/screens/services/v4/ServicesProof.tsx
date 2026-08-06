import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { proof } from "@/contents/screens/homeV4";
import { outcomes } from "@/contents/screens/servicesV4";

/**
 * Compact proof strip: the same flagged sample figures as Home (one source,
 * no drift), scaled down to a supporting band. One lead number, two
 * subordinates, the sample flag.
 */
const ServicesProof = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{outcomes.kicker}</Kicker>
      </Reveal>

      <div className="mt-10 grid items-end gap-x-16 gap-y-10 lg:grid-cols-[6fr_6fr]">
        <Reveal>
          <p className="font-display text-stat font-bold tracking-[-0.05em] text-primary">
            {proof.headline.value}
            <span className="opacity-50">{proof.headline.unit}</span>
          </p>
          <p className="mt-4 text-lg font-bold text-ink">
            {proof.headline.label}
          </p>
          <p className="mt-1 text-sm text-sub">{proof.headline.qualifier}</p>
        </Reveal>

        <div className="flex flex-col gap-7">
          {proof.secondary.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="border-t border-hairline pt-4">
                <p className="font-display text-stat-sm font-bold tracking-[-0.03em] text-primary">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-sub">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-11 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-5">
          <p className="text-sm text-sub">{proof.trustLine}</p>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-sub/70">
            {proof.sampleNote}
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ServicesProof;
