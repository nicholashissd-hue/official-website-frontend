import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { integrationText, testimonyData } from "@/contents/screens/talents";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

const ROLES = Object.keys(testimonyData);

/**
 * "Engineers Who Feel Like They've Been on Your Team for Years" —
 * pick a role, and five pillars of client feedback animate in
 * (the brief's "What Clients Notice First" pattern).
 */
const Testimony = () => {
  const [activeRole, setActiveRole] = useState(ROLES[0]);

  return (
    <section className="grain relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_90%_at_90%_100%,#074527_0%,transparent_55%)]"
      />

      <div className="container section-space-block relative">
        <SectionHeading
          dark
          index="02"
          eyebrow="Integration"
          title={integrationText.title}
          lede={integrationText.subtext}
        />

        {/* Role selector */}
        <Reveal className="inline-flex w-fit max-w-full flex-wrap gap-px overflow-hidden border border-bg-cream/20 bg-bg-cream/20">
          {ROLES.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setActiveRole(role)}
              aria-pressed={activeRole === role}
              className={cn(
                "h-11 cursor-pointer px-5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300",
                activeRole === role
                  ? "bg-bg-cream text-primary"
                  : "bg-primary text-bg-cream/65 hover:text-bg-cream",
              )}
            >
              {role}
            </button>
          ))}
        </Reveal>

        {/* Feedback feed */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {testimonyData[activeRole].map((entry, index) => (
              <motion.figure
                key={`${activeRole}-${entry.pillar}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: EASE, delay: index * 0.07 }}
                className="flex flex-col border border-bg-cream/15 bg-bg-cream/[0.04] p-7"
              >
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.22em] text-border-light">
                  {entry.pillar}
                </figcaption>
                <blockquote className="mt-4 flex-1 font-display text-[1.1rem] italic leading-[1.55] text-bg-cream">
                  “{entry.quote}”
                </blockquote>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-four">
                  {entry.source}
                </p>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-9 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-four/80">
            Representative feedback themes from engagement reviews
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimony;
