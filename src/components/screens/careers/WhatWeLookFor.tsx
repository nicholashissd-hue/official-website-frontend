import { motion } from "framer-motion";
import { lookForData, lookForText } from "@/contents/screens/careers";
import Reveal, { EASE } from "@/components/ui/reveal";

/** A check that draws itself in when its row scrolls into view. */
const DrawnCheck = ({ delay }: { delay: number }) => (
  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-success/10 text-success transition-colors duration-500 group-hover:bg-success group-hover:text-bg-cream">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <motion.path
        d="M5 12.5l4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE, delay }}
      />
    </svg>
  </span>
);

/**
 * "What We Look For" — an assessment scorecard. Deliberately distinct from the
 * site's card decks: an editorial criteria ledger where each non-negotiable is
 * a full-width row with a ghost numeral and a check that draws in.
 */
const WhatWeLookFor = () => {
  return (
    <section id="the-bar" className="scroll-mt-24 bg-bg-cream">
      <div className="container section-space-block">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left — editorial statement (sticky on desktop) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-primary">
                {lookForText.title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-accent-one md:text-[17px]">
                {lookForText.subtext}
              </p>
              <p className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                <span className="size-1.5 rounded-full bg-success" />
                Five non-negotiables
              </p>
            </Reveal>
          </div>

          {/* Right — the scorecard ledger */}
          <div>
            {lookForData.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="group flex items-center gap-5 rounded-2xl px-4 py-6 transition-colors duration-500 hover:bg-white sm:gap-7 sm:px-6">
                  <span className="w-10 shrink-0 font-display text-4xl font-semibold leading-none text-primary/15 transition-colors duration-500 group-hover:text-success/40 sm:w-14 sm:text-5xl">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-accent-one">
                      {item.description}
                    </p>
                  </div>
                  <DrawnCheck delay={index * 0.08 + 0.2} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeLookFor;
