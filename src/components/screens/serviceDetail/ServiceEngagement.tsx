import Reveal from "@/components/ui/reveal";
import { BulletList, Kicker } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";

/**
 * How the work is staffed. The page's one dark beat.
 *
 * These pages carry a single photograph, so the mid-page moment that a
 * full-bleed image gives the other pages is made typographically instead:
 * near-black, one statement, the engagement shapes beneath it.
 *
 * This section stayed per page through the concise rewrite. It looks repeated
 * and is not: FinOps argues "engineers who implement, not just identify,
 * savings", cloud argues presence in the room. Flattening the eight into one
 * would have cost each page the sentence that answers its own objection.
 */
const ServiceEngagement = ({ page }: { page: ServicePage }) => (
  <section className="bg-nearblack">
    <div className="container section-space-block">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[5fr_7fr]">
        <Reveal>
          <Kicker onDark>How we staff it</Kicker>
          <h2 className="mt-3 max-w-md font-display text-heading font-bold tracking-[-0.03em] text-bg-cream">
            {page.embedded.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          {page.embedded.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-2xl text-base text-ondark first:mt-0 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-9 text-base font-semibold text-bg-cream/70">
            {page.embedded.modelsIntro}
          </p>
          <BulletList items={page.embedded.models} onDark className="mt-5" />
        </Reveal>
      </div>
    </div>
  </section>
);

export default ServiceEngagement;
