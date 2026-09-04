import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { engagements } from "@/contents/screens/aboutV4";

/**
 * The half of the business the site never said out loud.
 *
 * Every page here described engineers embedded inside a client's team, which
 * is most of the work but not all of it: ElderOps also builds products
 * outright, and a reader who needed a dashboard rather than a hire had no way
 * to know that. This section says both, on paper between the narrative and
 * the principles, so the About page carries the whole shape of the firm.
 *
 * Two columns rather than the four the principles use: there are exactly two
 * ways in, and a two-up grid says that without a count.
 */
const Engagements = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <div className="grid items-start gap-x-20 gap-y-8 lg:grid-cols-[5fr_7fr]">
        <Reveal>
          <Kicker>{engagements.kicker}</Kicker>
          <h2 className="mt-3 max-w-md font-display text-heading font-bold tracking-[-0.03em] text-ink">
            {engagements.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="max-w-2xl text-lg leading-[1.7] text-sub">
            {engagements.intro}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
        {engagements.items.map((item, index) => (
          <Reveal key={item.lead} delay={index * 0.08}>
            <div className="border-t border-ink/30 pt-5">
              <p className="font-display text-subhead font-bold tracking-[-0.02em] text-ink">
                {item.lead}
              </p>
              <p className="mt-3 max-w-md text-base leading-[1.7] text-sub">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.16}>
        <p className="mt-12 max-w-2xl text-lg leading-[1.7] text-ink">
          {engagements.closing}
        </p>
      </Reveal>
    </div>
  </section>
);

export default Engagements;
