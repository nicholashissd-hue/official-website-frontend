import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { coreSolutionsData, coreSolutionsText } from "@/contents/screens/home";
import SectionHeading from "@/components/ui/section-heading";
import Eyebrow from "@/components/ui/eyebrow";
import ArrowLink from "@/components/ui/arrow-link";
import Reveal, { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/**
 * "Engineering Expertise Across Your Most Critical Initiatives" —
 * an interactive index: hovering/selecting a discipline swaps the
 * detail panel beside it.
 */
const ExpertiseIndex = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="grain relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_85%_0%,#074527_0%,transparent_55%)]"
      />

      <div className="container section-space-block relative">
        <SectionHeading
          dark
          index="02"
          eyebrow="Expertise"
          title={coreSolutionsText.title}
          lede={coreSolutionsText.subtext}
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <Reveal className="flex flex-col border-t border-bg-cream/10">
            {coreSolutionsData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={cn(
                  "group flex cursor-pointer items-center justify-between gap-6 border-b border-bg-cream/10 py-8 text-left transition-opacity duration-400 md:py-10",
                  active === index ? "opacity-100" : "opacity-45 hover:opacity-75",
                )}
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-border-light">
                    0{index + 1}
                  </span>
                  <span className="font-display text-[clamp(1.45rem,2.6vw,2.15rem)] leading-tight tracking-[-0.01em] text-bg-cream">
                    {item.title}
                  </span>
                </span>

                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0 text-border-light transition-all duration-400",
                    active === index
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0",
                  )}
                >
                  <path
                    d="M1.5 8h12.5m0 0L9.2 3.2M14 8l-4.8 4.8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="border border-bg-cream/15 bg-bg-cream/[0.04] p-8 md:p-11"
              >
                <Eyebrow dark>Focus Area</Eyebrow>
                <p className="mt-7 text-[15px] leading-[1.9] text-bg-light/85 md:text-base">
                  {coreSolutionsData[active].description}
                </p>
                <ArrowLink dark to="/solutions" className="mt-9">
                  Explore this capability
                </ArrowLink>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseIndex;
