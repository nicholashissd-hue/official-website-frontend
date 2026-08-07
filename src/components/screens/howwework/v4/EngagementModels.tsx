import Reveal from "@/components/ui/reveal";
import { BulletList, Kicker } from "@/components/ui/v4";
import { models } from "@/contents/screens/howWeWorkV4";

/**
 * The three stage-agnostic engagement models as asymmetric editorial rows.
 * The third row is the old Startup Launch page, folded in per the brief.
 */
const EngagementModels = () => (
  <section className="border-t border-hairline bg-bone">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{models.kicker}</Kicker>
        <h2 className="mt-3 font-display text-heading font-bold tracking-[-0.03em] text-ink">
          {models.title}
        </h2>
        <p className="mt-6 max-w-xl text-base text-sub">{models.intro}</p>
      </Reveal>

      <div className="mt-14">
        {models.items.map((model) => (
          <Reveal key={model.num} delay={0.05} as="article">
            <div className="grid gap-x-16 gap-y-4 border-t border-hairline py-11 lg:grid-cols-[5fr_7fr]">
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-xs tracking-[0.1em] text-primary">
                  {model.num}
                </span>
                <div>
                  <h3 className="font-display text-subhead font-bold tracking-[-0.02em] text-ink">
                    {model.title}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-ink/60">
                    {model.who}
                  </p>
                </div>
              </div>

              <div>
                <p className="max-w-2xl text-base text-sub">{model.body}</p>
                <BulletList items={model.includes} className="mt-6" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default EngagementModels;
