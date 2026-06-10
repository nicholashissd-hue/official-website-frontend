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

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-3">
            {coreSolutionsData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={cn(
                  "group flex cursor-pointer items-center justify-between gap-6 rounded-2xl px-6 py-7 text-left transition-all duration-400 md:px-8",
                  active === index
                    ? "bg-bg-cream/[0.08] ring-1 ring-bg-cream/20"
                    : "opacity-55 hover:bg-bg-cream/[0.04] hover:opacity-85",
                )}
              >
                <span className="flex items-center gap-5">
                  <span
                    className={cn(
                      "grid size-9 shrink-0 place-items-center rounded-full font-mono text-[11px] transition-colors duration-400",
                      active === index
                        ? "bg-success text-deep"
                        : "bg-bg-cream/10 text-border-light",
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span className="font-display text-[clamp(1.3rem,2.3vw,1.85rem)] font-semibold leading-tight tracking-[-0.01em] text-bg-cream">
                    {item.title}
                  </span>
                </span>

                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0 text-success transition-all duration-400",
                    active === index
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0",
                  )}
                >
                  <path
                    d="M1.5 8h12.5m0 0L9.2 3.2M14 8l-4.8 4.8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                className="h-full rounded-3xl bg-bg-cream/[0.06] p-8 ring-1 ring-bg-cream/15 md:p-10"
              >
                <Eyebrow dark>Focus Area</Eyebrow>
                <p className="mt-6 text-[15px] leading-[1.85] text-bg-light/85 md:text-[17px]">
                  {coreSolutionsData[active].description}
                </p>
                <ArrowLink dark to="/solutions" className="mt-8">
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
