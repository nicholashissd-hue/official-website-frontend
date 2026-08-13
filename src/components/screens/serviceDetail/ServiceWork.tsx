import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";

/**
 * The page's core: what the engineers actually do, as numbered chapters.
 *
 * The same rhythm as the method chapters on /how-we-work — a rail carrying
 * the number and the name, the substance in the wide column, a hairline
 * between each. It is the one structure on this site that scales to eleven
 * items without turning into a wall or a grid of cards.
 */
const ServiceWork = ({ page }: { page: ServicePage }) => (
  <section id="what-we-do" className="scroll-mt-24 bg-paper">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>The work</Kicker>
        <h2 className="mt-3 max-w-3xl font-display text-title font-bold tracking-[-0.03em] text-ink">
          {page.work.title}
        </h2>
      </Reveal>

      <div className="mt-14">
        {page.work.groups.map((group, index) => (
          <Reveal key={group.title} delay={0.05} as="article">
            <div className="grid gap-x-16 gap-y-5 border-t border-hairline py-11 lg:grid-cols-[4fr_8fr]">
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-xs tracking-[0.1em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-subhead font-bold tracking-[-0.02em] text-ink">
                  {group.title}
                </h3>
              </div>

              <div>
                {group.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 max-w-2xl text-base text-sub first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceWork;
