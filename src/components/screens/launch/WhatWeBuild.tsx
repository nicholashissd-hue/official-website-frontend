import { useState } from "react";
import { buildLayers, buildText } from "@/contents/screens/launch";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/**
 * "What We Build" — an interactive full-stack diagram. Four layers stack from
 * the surface customers see down to the foundations; hovering a layer brings it
 * into focus while the rest recede, communicating "we build the whole stack."
 */
const WhatWeBuild = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="grain relative overflow-hidden bg-pine">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_85%_0%,#02361b_0%,transparent_60%)]"
      />

      <div className="container section-space-block relative">
        <SectionHeading
          dark
          index="02"
          eyebrow="The Stack"
          title={buildText.title}
          lede={buildText.subtext}
        />

        <div
          className="mx-auto flex max-w-4xl flex-col gap-3"
          onMouseLeave={() => setActive(null)}
        >
          {buildLayers.map((layer, index) => {
            const isActive = active === index;
            const dimmed = active !== null && !isActive;

            return (
              <Reveal key={layer.key} delay={index * 0.1}>
                <div
                  tabIndex={0}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onBlur={() => setActive(null)}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl p-6 outline-none ring-1 transition-all duration-500 focus-visible:ring-2 focus-visible:ring-success md:p-7",
                    "grid items-center gap-5 md:grid-cols-[260px_1fr]",
                    isActive
                      ? "bg-bg-cream/[0.1] ring-success/40"
                      : "bg-bg-cream/[0.04] ring-bg-cream/12",
                    dimmed ? "opacity-50" : "opacity-100",
                    isActive && "md:translate-x-1.5",
                  )}
                >
                  {/* glow sweep on the active layer */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-[radial-gradient(50%_140%_at_0%_50%,rgba(6,156,78,0.18)_0%,transparent_60%)] transition-opacity duration-500",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />

                  <div className="relative flex items-center gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-border-light">
                      L{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-bg-cream md:text-2xl">
                        {layer.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-snug text-accent-four">
                        {layer.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="relative flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className={cn(
                          "rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-500",
                          isActive
                            ? "bg-success/15 text-border-light"
                            : "bg-bg-cream/[0.06] text-bg-light/70",
                        )}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
