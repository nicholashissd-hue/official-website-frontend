import Reveal from "@/components/ui/reveal";
import { BulletList, Kicker } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";
import { sharedProof } from "@/contents/services";

/**
 * How the work is staffed, what it changes, and why this firm.
 *
 * The embedded section is the page's one dark beat. These pages carry a
 * single photograph, so the mid-page moment that a full-bleed image gives
 * the other pages is made typographically instead: near-black, one
 * statement, the engagement shapes beneath it.
 */
const ServiceEngagement = ({ page }: { page: ServicePage }) => (
  <>
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
            <BulletList
              items={page.embedded.models}
              onDark
              className="mt-5"
            />
          </Reveal>
        </div>
      </div>
    </section>

    <section className="bg-paper">
      <div className="container section-space-block">
        <div className="grid items-start gap-x-16 gap-y-9 lg:grid-cols-[4fr_8fr]">
          <Reveal>
            <Kicker>Outcomes</Kicker>
            <h2 className="mt-3 max-w-sm font-display text-heading font-bold tracking-[-0.03em] text-ink">
              {page.outcomes.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-2xl text-base font-semibold text-ink/70">
              {page.outcomes.intro}
            </p>
            {/* Numbered rather than marked, so this list is not mistaken for
                the "when to call us" list higher up the page. */}
            <ol className="mt-6 grid gap-x-14 sm:grid-cols-2">
              {page.outcomes.items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-5 border-t border-hairline py-4"
                >
                  <span className="mt-[0.35em] font-mono text-xs tracking-[0.1em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-sub">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="border-y border-hairline bg-bone">
      <div className="container section-space-block">
        <div className="grid gap-x-16 gap-y-9 lg:grid-cols-[4fr_8fr]">
          <Reveal>
            <h2 className="font-display text-heading font-bold tracking-[-0.03em] text-ink">
              {page.why.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            {page.why.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 max-w-2xl text-base text-sub first:mt-0"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 border-t border-ink/25 pt-10">
            <h3 className="max-w-3xl font-display text-subhead font-bold tracking-[-0.02em] text-ink">
              {sharedProof.title}
            </h3>
            <div className="mt-10 grid gap-x-12 gap-y-0 md:grid-cols-2 lg:grid-cols-4">
              {sharedProof.points.map((point) => (
                <div
                  key={point.label}
                  className="border-t border-hairline py-5"
                >
                  <p className="font-display text-base font-bold tracking-[-0.01em] text-ink">
                    {point.label}
                  </p>
                  <p className="mt-2 text-sm text-sub">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default ServiceEngagement;
