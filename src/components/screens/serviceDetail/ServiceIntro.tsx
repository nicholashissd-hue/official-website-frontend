import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";

/**
 * The two sections between the hero and the work: the lead sentence and the
 * qualifying list.
 *
 * The lead is the hero's second paragraph, moved off the photograph. Two
 * paragraphs over an image is one too many, and the band gives the page its
 * first light surface at the same time.
 *
 * The argument that used to sit between them is gone (concise rewrite, Sept
 * 2026). Four paragraphs of framing said what the signal list says in six
 * lines, and said it slower: a reader scanning for whether we solve their
 * problem should meet their own symptom, not our thesis about it.
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
        <div className="grid items-start gap-x-16 gap-y-9 lg:grid-cols-[4fr_8fr]">
          <Reveal>
            <Kicker>When to call us</Kicker>
            <h2 className="mt-3 max-w-sm font-display text-heading font-bold tracking-[-0.03em] text-ink">
              {page.signals.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            {/* Two ruled columns rather than the bullet primitive: these are
                full sentences, and at this length a rule reads more clearly
                than a marker floating beside three lines of text. */}
            <ul className="grid gap-x-14 sm:grid-cols-2">
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
