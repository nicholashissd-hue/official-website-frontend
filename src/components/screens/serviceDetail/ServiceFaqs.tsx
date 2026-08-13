import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";
import { faqLabel } from "@/contents/services";

/**
 * The questions, as native disclosure elements.
 *
 * `<details>` rather than a JavaScript accordion: the answers stay in the
 * document for crawlers and for find-on-page, keyboard support and the
 * open/closed state come from the browser, and there is no state to get
 * wrong. The marker is suppressed and replaced with a rule-aligned glyph.
 */
const ServiceFaqs = ({ page }: { page: ServicePage }) => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <div className="grid items-start gap-x-16 gap-y-9 lg:grid-cols-[4fr_8fr]">
        <Reveal>
          <Kicker>{faqLabel.kicker}</Kicker>
          <h2 className="mt-3 max-w-sm font-display text-heading font-bold tracking-[-0.03em] text-ink">
            {faqLabel.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            {page.faqs.map((faq) => (
              <details
                key={faq.q}
                name={`faq-${page.id}`}
                className="group border-t border-hairline last:border-b"
              >
                <summary className="flex list-none items-start justify-between gap-8 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="max-w-2xl font-display text-lg font-bold tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-primary">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative mt-2 size-3 shrink-0"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink/60" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/60 transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-base text-sub">{faq.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ServiceFaqs;
