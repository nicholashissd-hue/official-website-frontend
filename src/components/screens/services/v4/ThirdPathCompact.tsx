import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { thirdPath } from "@/contents/screens/homeV4";

/**
 * The positioning statement, compact: same single-source copy as Home,
 * without the photograph. Statement left, pillar rows right.
 */
const ThirdPathCompact = () => (
  <section className="border-t border-hairline bg-bone">
    <div className="container section-space-block">
      <div className="grid items-start gap-x-20 gap-y-10 lg:grid-cols-[6fr_6fr]">
        <Reveal>
          <Kicker>{thirdPath.eyebrow}</Kicker>
          <h2 className="mt-3 max-w-xl font-display text-heading font-bold tracking-[-0.03em] text-ink">
            {thirdPath.title}
          </h2>
          <p className="mt-6 max-w-xl text-base text-sub">{thirdPath.body}</p>
        </Reveal>

        <div>
          {thirdPath.pillars.map((pillar, index) => (
            <Reveal key={pillar.num} delay={index * 0.08}>
              <div className="flex gap-6 border-t border-hairline py-5.5 first:border-t-0 first:pt-1">
                <span className="pt-1 font-mono text-xs tracking-[0.1em] text-primary">
                  {pillar.num}
                </span>
                <p className="text-base">
                  <span className="font-bold text-ink">{pillar.title}</span>
                  <span className="text-sub">: {pillar.body}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ThirdPathCompact;
