import { Link } from "react-router";
import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { caseFiles } from "@/contents/screens/homeV4";
import { SERVICE_PAGES } from "@/contents/services";
import { SERVICES } from "@/contents/taxonomy";

/**
 * The eight case studies, as an index.
 *
 * Every entry is a door, never the room: the title and the shape of the client
 * are enough to make a reader choose one, and the story itself is told once, on
 * the capability page that owns it. Home previously rendered three of them in
 * full, which meant a reader met the same words twice and the other five were
 * invisible.
 *
 * Nothing here is authored. The rows read the taxonomy for order and
 * SERVICE_PAGES for the case study, so this section cannot fall out of step with
 * the pages it points at.
 */
const CaseFiles = () => {
  const cases = SERVICES.map((service) => {
    const page = SERVICE_PAGES[service.id];
    return page ? { service, caseStudy: page.caseStudy } : null;
  }).filter((entry) => entry !== null);

  if (!cases.length) return null;

  return (
    <section id="client-work" className="scroll-mt-24 border-t border-hairline bg-paper">
      <div className="container section-space-block">
        <Reveal>
          <Kicker>{caseFiles.eyebrow}</Kicker>
          <h2 className="mt-3 max-w-3xl font-display text-heading font-bold tracking-[-0.03em] text-ink">
            {caseFiles.title}
          </h2>
          <p className="mt-6 max-w-xl text-base text-sub">{caseFiles.intro}</p>
        </Reveal>

        {/* Two ruled columns, the same row language as the capability index, so a
            reader who has met one list already knows how to read this one.
            The client descriptor is deliberately not repeated here: eight of them
            wrapped to four lines each and turned an index into a wall. The title
            is the hook and the capability page carries the detail. */}
        <div className="mt-14 grid gap-x-16 md:grid-cols-2">
          {cases.map(({ service, caseStudy }, index) => (
            <Reveal key={service.id} delay={(index % 2) * 0.06} as="article">
              {/* The whole row is the hit area, but only the title is the link,
                  so a screen reader announces the case and not the row around it. */}
              <div className="group relative -mx-4 grid scroll-mt-28 gap-y-3.5 border-t border-hairline px-4 py-7 transition-colors duration-300 hover:bg-ink/[0.028]">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs tracking-[0.1em] text-primary">
                    {service.num}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-sub">
                    {service.label}
                  </span>
                </div>

                <h3 className="max-w-sm font-display text-lede font-bold leading-[1.2] tracking-[-0.015em] text-ink">
                  <Link
                    to={`/services/${service.slug}#case-study`}
                    className="transition-colors duration-300 after:absolute after:inset-0 group-hover:text-primary"
                  >
                    {caseStudy.title}
                  </Link>
                </h3>

                <p className="inline-flex items-baseline gap-2 text-sm font-bold text-primary">
                  {caseFiles.cta}
                  <span
                    aria-hidden="true"
                    className="inline-block -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100"
                  >
                    &#8594;
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseFiles;
