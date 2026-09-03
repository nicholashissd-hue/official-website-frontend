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
    <section
      id="client-work"
      className="scroll-mt-24 border-t border-hairline bg-paper"
    >
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
              <div className="group relative -mx-4 grid scroll-mt-28 gap-y-3 border-t border-hairline px-4 py-7 transition-colors duration-300 hover:bg-ink/[0.028]">
                {/* Sentence case, in the display face, the same eyebrow
                    language as every Kicker on the site. This row used to set
                    the capability in tracked-out mono capitals, which is the
                    one eyebrow treatment this site does not use, and eight of
                    them stacked read as a directory listing rather than as an
                    index of work. The numeral stays: it is the taxonomy's, and
                    it is what lets a reader match a row to the schematic. */}
                <div className="flex items-baseline gap-3.5">
                  <span className="font-mono text-xs text-ink/40">
                    {service.num}
                  </span>
                  <span className="font-display text-sm font-semibold text-ink/60">
                    {service.label}
                  </span>
                </div>

                {/* An article title, not a headline. It was set bold and
                    tracked tight against a narrow measure, so three of the
                    eight broke to three lines and the column read as eight
                    slogans shouting in sequence. Semibold on a wider measure at
                    the same step of the scale is a title you read rather than
                    one that is announced at you. */}
                <h3 className="max-w-md font-display text-lede font-semibold leading-[1.28] text-ink">
                  <Link
                    to={`/services/${service.slug}#case-study`}
                    className="transition-colors duration-300 after:absolute after:inset-0 group-hover:text-primary"
                  >
                    {caseStudy.title}
                    {/* The affordance rides the title. Eight bold green
                        "Read the case" lines were eight calls to action on a
                        page whose actual call to action is at the bottom, and
                        the row is already entirely clickable.

                        On a pointer device it arrives on hover. A touch device
                        has no hover, so hiding it there left eight rows that
                        looked like plain text and gave a reader nothing to
                        tell them the titles open anything: it is shown at rest
                        wherever hover does not exist. Keyed on the input, not
                        on width, because a tablet is wide and still cannot
                        hover. */}
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 [@media(hover:none)]:translate-x-0 [@media(hover:none)]:opacity-100"
                    >
                      &#8594;
                    </span>
                  </Link>
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseFiles;
