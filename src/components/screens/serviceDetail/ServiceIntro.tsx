import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";

/**
 * The three sections between the hero and the offer: the lead sentence, the
 * argument, and the qualifying list.
 *
 * The lead is the hero's second paragraph, moved off the photograph. Two
 * paragraphs over an image is one too many, and the band gives the page its
 * first light surface at the same time.
 */
const ServiceIntro = ({ page }: { page: ServicePage }) => (
  <>
    <section className="border-b border-hairline bg-bone">
      <div className="container py-12 md:py-14">
        <Reveal>
          <p className="max-w-5xl font-display text-lede font-semibold tracking-[-0.015em] text-ink">
            {page.lead}
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-paper">
      <div className="container section-space-block">
        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[4fr_8fr]">
          <Reveal>
            <h2 className="max-w-md font-display text-heading font-bold tracking-[-0.03em] text-ink">
              {page.thesis.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            {page.thesis.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 max-w-2xl text-base text-sub first:mt-0"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>

    <section className="border-y border-hairline bg-bone">
      <div className="container section-space-block">
        <div className="grid items-start gap-x-16 gap-y-9 lg:grid-cols-[4fr_8fr]">
          <Reveal>
            <Kicker>When to call us</Kicker>
            <h2 className="mt-3 max-w-sm font-display text-heading font-bold tracking-[-0.03em] text-ink">
              {page.signals.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base font-semibold text-ink/70">
              {page.signals.intro}
            </p>
            {/* Two ruled columns rather than the bullet primitive: these are
                full sentences, and at this length a rule reads more clearly
                than a marker floating beside three lines of text. */}
            <ul className="mt-6 grid gap-x-14 sm:grid-cols-2">
              {page.signals.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-t border-hairline py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] size-1.5 shrink-0 bg-signal"
                  />
                  <span className="text-base text-sub">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default ServiceIntro;
