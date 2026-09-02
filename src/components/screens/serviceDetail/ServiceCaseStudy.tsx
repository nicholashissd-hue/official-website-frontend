import Reveal from "@/components/ui/reveal";
import { Keep, Kicker } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";
import { caseStudyLabel } from "@/contents/services";

/**
 * The page's case study, one per capability, above the shared closing blocks.
 *
 * Two rules are enforced here rather than in the copy, so a page cannot ship
 * without them. The "Illustrative example" kicker and the note beneath it come
 * from `caseStudyLabel`, not from page data: a composite engagement has to say
 * so on the page, every time, and a label that lives in eight files is a label
 * that eventually goes missing from one of them.
 *
 * The results are sentences, not figures. Home's case files were stripped of
 * bracketed placeholders for the same reason: this site publishes numbers only
 * when it can attribute them, and a precise figure ("down 30 percent") beside
 * a company profile ("a Series B data company") reads as a real client result
 * that no tag undoes. The shape is built so a real engagement, with real
 * numbers, drops into it unchanged.
 */
const ServiceCaseStudy = ({ page }: { page: ServicePage }) => {
  const { caseStudy } = page;

  return (
    <section className="bg-bone">
      <div className="container section-space-block">
        <div className="grid items-start gap-x-16 gap-y-9 lg:grid-cols-[4fr_8fr]">
          <Reveal>
            <Kicker>{caseStudyLabel.kicker}</Kicker>
            <h2 className="mt-3 max-w-sm font-display text-heading font-bold tracking-[-0.03em] text-ink">
              {caseStudy.title}
            </h2>
            <p className="mt-5 max-w-xs text-sm text-sub">
              {caseStudyLabel.note}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="max-w-2xl">
              <dt className="font-display text-base font-bold tracking-[-0.01em] text-ink">
                The client
              </dt>
              <dd className="mt-2 text-base text-sub">{caseStudy.client}</dd>

              <dt className="mt-8 font-display text-base font-bold tracking-[-0.01em] text-ink">
                The problem
              </dt>
              <dd className="mt-2 text-base text-sub">{caseStudy.problem}</dd>

              <dt className="mt-8 font-display text-base font-bold tracking-[-0.01em] text-ink">
                What we did
              </dt>
              <dd className="mt-2 text-base text-sub">{caseStudy.whatWeDid}</dd>
            </dl>

            <p className="mt-12 font-display text-base font-bold tracking-[-0.01em] text-ink">
              The result
            </p>
            <ul className="mt-4 grid gap-x-14 sm:grid-cols-3">
              {caseStudy.results.map((result) => (
                <li
                  key={result}
                  className="flex gap-4 border-t border-hairline py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] size-1.5 shrink-0 bg-signal"
                  />
                  <span className="text-base text-sub">{result}</span>
                </li>
              ))}
            </ul>

            <Keep>{caseStudy.kept}</Keep>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ServiceCaseStudy;
