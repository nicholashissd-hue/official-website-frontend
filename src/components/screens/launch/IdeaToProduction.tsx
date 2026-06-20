import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { timelineSteps, timelineText } from "@/contents/screens/launch";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/util";

const N = timelineSteps.length;

/**
 * "From Idea to Production" — a scroll-linked timeline. As the section moves
 * through the viewport, a green line draws itself across the stages and each
 * node lights up in turn, so the journey reveals at the reader's own pace.
 */
const IdeaToProduction = () => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 62%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.3,
  });

  const [reached, setReached] = useState(reduceMotion ? N : 0);

  useMotionValueEvent(progress, "change", (v) => {
    if (reduceMotion) return;
    let count = 0;
    for (let i = 0; i < N; i++) {
      if (v >= (i / (N - 1)) * 0.9) count = i + 1;
    }
    setReached(count);
  });

  const lit = (i: number) => i < reached;

  return (
    <section className="bg-bg-light">
      <div className="container section-space-block">
        <SectionHeading
          index="03"
          eyebrow="The Path"
          title={timelineText.title}
          lede={timelineText.subtext}
        />

        <div ref={ref}>
          {/* ── Desktop: horizontal ───────────────────────────────── */}
          <div className="relative hidden lg:block">
            {/* base track */}
            <div className="absolute left-0 right-0 top-7 h-0.5 rounded-full bg-primary/12" />
            {/* progress fill */}
            <motion.div
              className="absolute left-0 top-7 h-0.5 origin-left rounded-full bg-success"
              style={{ right: 0, scaleX: reduceMotion ? 1 : progress }}
            />

            <div className="relative grid grid-cols-5 gap-5">
              {timelineSteps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <span
                    className={cn(
                      "relative z-10 grid size-14 place-items-center rounded-full font-display text-lg font-semibold transition-all duration-500",
                      lit(i)
                        ? "bg-success text-deep shadow-[0_0_22px_rgba(6,156,78,0.5)]"
                        : "bg-white text-primary/40 ring-1 ring-primary/15",
                    )}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className={cn(
                      "mt-6 font-display text-xl font-semibold tracking-[-0.01em] transition-colors duration-500",
                      lit(i) ? "text-primary" : "text-primary/55",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[200px] text-[14px] leading-[1.65] text-accent-one">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mobile / tablet: vertical ─────────────────────────── */}
          <div className="relative lg:hidden">
            <div className="absolute bottom-0 left-7 top-0 w-0.5 rounded-full bg-primary/12" />
            <motion.div
              className="absolute left-7 top-0 w-0.5 origin-top rounded-full bg-success"
              style={{ bottom: 0, scaleY: reduceMotion ? 1 : progress }}
            />

            <div className="flex flex-col gap-9">
              {timelineSteps.map((step, i) => (
                <div key={step.title} className="grid grid-cols-[3.5rem_1fr] items-start gap-5">
                  <span
                    className={cn(
                      "relative z-10 grid size-14 place-items-center rounded-full font-display text-lg font-semibold transition-all duration-500",
                      lit(i)
                        ? "bg-success text-deep shadow-[0_0_22px_rgba(6,156,78,0.5)]"
                        : "bg-white text-primary/40 ring-1 ring-primary/15",
                    )}
                  >
                    {i + 1}
                  </span>
                  <div className="pt-2">
                    <h3
                      className={cn(
                        "font-display text-xl font-semibold tracking-[-0.01em] transition-colors duration-500",
                        lit(i) ? "text-primary" : "text-primary/55",
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-accent-one">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaToProduction;
