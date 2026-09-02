import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";

/**
 * The page's core: what the engineers actually do.
 *
 * A two-column grid of a heading and one line, not the numbered chapters this
 * used to be. Each block carried one to three paragraphs, which is where most
 * of the page's length lived; the heading already says what the thing is, so
 * the line only has to say why it matters. At one line each, numbering is
 * noise and the rail that carried it is dead weight.
 */
const ServiceWork = ({ page }: { page: ServicePage }) => (
  <section id="what-we-do" className="scroll-mt-24 bg-bone">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>The work</Kicker>
        <h2 className="mt-3 max-w-3xl font-display text-title font-bold tracking-[-0.03em] text-ink">
          {page.work.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-x-16 sm:grid-cols-2">
        {page.work.groups.map((group) => (
          <Reveal key={group.title} delay={0.05} as="article">
            <div className="border-t border-hairline py-7">
              <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-ink">
                {group.title}
              </h3>
              <p className="mt-2 max-w-md text-base text-sub">{group.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceWork;
