import { Link } from "react-router";
import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { caseFiles } from "@/contents/screens/homeV4";
import { SERVICE_PAGES } from "@/contents/services";
import { SERVICES } from "@/contents/taxonomy";

const FileRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-4 border-t border-hairline py-2.5">
    <p className="w-[92px] shrink-0 pt-0.5 font-mono text-xs uppercase tracking-[0.14em] text-primary">
      {label}
    </p>
    <p className="text-sm text-sub">{value}</p>
  </div>
);

/**
 * Client work on Home: three of the eight capability case studies, rendered from
 * the same data the capability pages use.
 *
 * Nothing is authored here. The section reads `caseFiles.featured` (taxonomy ids)
 * and pulls the case study off SERVICE_PAGES, so a case study exists in exactly
 * one place and the card and the full page can never disagree. The illustrative
 * tag and its note are off here too (see ServiceCaseStudy for the reasoning and
 * what that leaves uncovered).
 */
const CaseFiles = () => {
  const featured = caseFiles.featured
    .map((id) => {
      const page = SERVICE_PAGES[id];
      const service = SERVICES.find((entry) => entry.id === id);
      return page && service ? { page, service } : null;
    })
    .filter((entry) => entry !== null);

  if (!featured.length) return null;

  return (
    <section className="border-t border-hairline bg-paper">
      <div className="container section-space-block">
        <Reveal>
          <Kicker>{caseFiles.eyebrow}</Kicker>
          <h2 className="mt-3 max-w-3xl font-display text-heading font-bold tracking-[-0.03em] text-ink">
            {caseFiles.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-9 gap-y-14 md:grid-cols-3">
          {featured.map(({ page, service }, index) => {
            const { caseStudy } = page;
            return (
              <Reveal key={service.id} delay={index * 0.08} as="article">
                <div className="group flex h-full flex-col border-t border-ink/35 pt-6">
                  <h3 className="mb-4 max-w-xs font-display text-lg font-bold tracking-[-0.01em] text-ink">
                    {caseStudy.title}
                  </h3>

                  <FileRow label="Client" value={caseStudy.client} />
                  <FileRow label="Problem" value={caseStudy.problem} />
                  <FileRow label="What we did" value={caseStudy.whatWeDid} />

                  <div className="border-t border-hairline py-2.5">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                      Result
                    </p>
                    <ul className="mt-2.5 grid gap-2">
                      {caseStudy.results.map((result) => (
                        <li key={result} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.55em] size-1.5 shrink-0 bg-signal"
                          />
                          <span className="text-sm text-sub">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* The handoff line is the argument the whole site makes, so it
                      gets the weight here rather than being folded into Result. */}
                  <p className="mt-5 border-t border-hairline pt-4 text-sm font-semibold text-ink">
                    {caseStudy.kept}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-baseline gap-2 self-start text-sm font-bold text-primary transition-colors duration-300 hover:text-signal"
                  >
                    {caseFiles.cta}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      &#8594;
                    </span>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseFiles;
