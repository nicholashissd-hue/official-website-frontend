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
    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-three">
      {label}
    </p>
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-[1.7] text-accent-one">
          <span
            aria-hidden="true"
            className={cn(
              "mt-[0.55em] size-1 shrink-0 rotate-45",
              accent ? "bg-success" : "bg-primary/30",
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** "Industries We Support" — hairline accordion with embedded case studies. */
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

        <Reveal className="border-t border-primary/10">
          {industriesData.map((industry, index) => {
            const isOpen = open === index;

            return (
              <div key={industry.id} className="border-b border-primary/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-center gap-5 py-7 text-left md:gap-8 md:py-8"
                >
                  <span className="w-8 font-mono text-xs tracking-[0.2em] text-success">
                    {industry.number}
                  </span>
                  <span
                    className={cn(
                      "flex-1 font-display text-[1.35rem] leading-snug tracking-[-0.01em] transition-all duration-400 md:text-[1.6rem]",
                      isOpen
                        ? "text-primary"
                        : "text-primary/75 group-hover:translate-x-1 group-hover:text-primary",
                    )}
                  >
                    {industry.title}
                  </span>

                  {/* Plus → minus */}
                  <span className="relative size-4 shrink-0" aria-hidden="true">
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-primary/60" />
                    <span
                      className={cn(
                        "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/60 transition-transform duration-400",
                        isOpen && "scale-y-0",
                      )}
                    />
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
                      <div className="pb-10 md:pb-14 md:pl-16">
                        <div className="border-l-2 border-success/60 py-1 pl-6 md:pl-10">
                          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-three">
                            Engagement Snapshot
                          </p>
                          <h4 className="mt-3 max-w-2xl font-display text-xl leading-snug tracking-[-0.01em] text-primary md:text-2xl">
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
