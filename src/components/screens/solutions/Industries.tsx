import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { industriesData, industriesText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

const CaseStudyColumn = ({
  label,
  items,
  accent = false,
}: {
  label: string;
  items: string[];
  accent?: boolean;
}) => (
  <div>
    <p className="inline-block rounded-full bg-primary/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-three">
      {label}
    </p>
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-[1.7] text-accent-one">
          <span
            aria-hidden="true"
            className={cn(
              "mt-[0.5em] size-1.5 shrink-0 rounded-full",
              accent ? "bg-success" : "bg-primary/30",
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** "Industries We Support" — rounded card accordion with embedded case studies. */
const Industries = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="01"
          eyebrow="Industries"
          title={industriesText.title}
          lede={industriesText.subtext}
        />

        <Reveal className="space-y-4">
          {industriesData.map((industry, index) => {
            const isOpen = open === index;

            return (
              <div
                key={industry.id}
                className={cn(
                  "overflow-hidden rounded-3xl bg-white ring-1 transition-all duration-500",
                  isOpen ? "ring-success/40" : "ring-primary/10",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-center gap-5 px-6 py-6 text-left md:gap-6 md:px-8 md:py-7"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-success/10 font-display text-base font-semibold text-success">
                    {industry.number}
                  </span>
                  <span
                    className={cn(
                      "flex-1 font-display text-[1.35rem] font-semibold leading-snug tracking-[-0.01em] transition-all duration-400 md:text-[1.6rem]",
                      isOpen
                        ? "text-primary"
                        : "text-primary/75 group-hover:translate-x-1 group-hover:text-primary",
                    )}
                  >
                    {industry.title}
                  </span>

                  {/* Plus → minus inside a circled chip */}
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-full ring-1 ring-primary/15"
                    aria-hidden="true"
                  >
                    <span className="relative size-3.5">
                      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-primary/60" />
                      <span
                        className={cn(
                          "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/60 transition-transform duration-400",
                          isOpen && "scale-y-0",
                        )}
                      />
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <div className="rounded-2xl bg-bg-light/60 p-6 md:p-8">
                          <p className="inline-block rounded-full bg-primary/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-three">
                            Engagement Snapshot
                          </p>
                          <h4 className="mt-4 max-w-2xl font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary md:text-2xl">
                            {industry.caseStudy.headline}
                          </h4>
                          <p className="mt-4 max-w-3xl text-[15px] leading-[1.8] text-accent-one">
                            {industry.caseStudy.summary}
                          </p>

                          <div className="mt-9 grid gap-8 md:grid-cols-3 md:gap-10">
                            <CaseStudyColumn
                              label="Challenges"
                              items={industry.caseStudy.challenges}
                            />
                            <CaseStudyColumn
                              label="ElderOps Approach"
                              items={industry.caseStudy.approach}
                            />
                            <CaseStudyColumn
                              label="Potential Outcomes"
                              items={industry.caseStudy.outcomes}
                              accent
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default Industries;
