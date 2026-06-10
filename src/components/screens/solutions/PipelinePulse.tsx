import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/util";

const STAGES = [
  { label: "Plan", status: "plan — ok" },
  { label: "Build", status: "build — ok" },
  { label: "Test", status: "test — passed" },
  { label: "Deploy", status: "deploy — ok" },
  { label: "Operate", status: "operate — live" },
];

/** Loop duration in seconds — the pulse crosses the pipeline then holds briefly. */
const LOOP_SECONDS = 6;
const LOOP_MS = LOOP_SECONDS * 1000;

/** The pulse covers the track in 92% of the loop, then holds at OPERATE. */
const TRAVEL_FRACTION = 0.92;

/** Node i (of 5, evenly spaced) is reached at this point in the loop. */
const stageAtMs = (index: number) => (LOOP_MS * TRAVEL_FRACTION * index) / 4;

/**
 * Code-built artifact in the Delivery-Console family: a horizontal
 * pipeline whose bright pulse ships PLAN → OPERATE on a loop, lighting
 * each station as it arrives and rolling the status chip per stage.
 */
const PipelinePulse = () => {
  const reduceMotion = useReducedMotion();
  // Index of the latest station the pulse has reached this cycle.
  const [stage, setStage] = useState(reduceMotion ? 3 : 0);

  useEffect(() => {
    if (reduceMotion) {
      // Async so the compiler-safe rule holds (no sync setState in effects).
      const timer = window.setTimeout(() => setStage(3), 0);
      return () => window.clearTimeout(timer);
    }

    let timers: number[] = [];

    const cycle = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      timers = STAGES.map((_, index) =>
        window.setTimeout(() => setStage(index), stageAtMs(index)),
      );
    };

    cycle();
    const interval = window.setInterval(cycle, LOOP_MS);

    return () => {
      window.clearInterval(interval);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [reduceMotion]);

  return (
    <div className="rounded-2xl bg-deep/70 p-5 ring-1 ring-bg-cream/15">
      {/* Console header — the chip pill keeps fixed bounds so nothing reflows */}
      <div className="flex min-h-7 items-center justify-between gap-4">
        <p className="flex items-center gap-2.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-accent-four">
          <span
            aria-hidden="true"
            className="animate-pulse-dot size-1.5 shrink-0 rounded-full bg-success"
          />
          <span className="max-sm:hidden">ElderOps — </span>Delivery Pipeline
        </p>

        <span className="relative flex h-[26px] min-w-[128px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-success/15 px-3">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={stage}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.16em] text-success"
            >
              {STAGES[stage].status}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>

      {/* Pipeline */}
      <div className="relative mt-6">
        {/* Connecting line (node centers sit at 10% / 30% / 50% / 70% / 90%) */}
        <div
          aria-hidden="true"
          className="absolute left-[10%] right-[10%] top-[5px] h-0.5 rounded-full bg-bg-cream/15"
        />

        {reduceMotion ? (
          <>
            <div
              aria-hidden="true"
              className="absolute left-[10%] top-[5px] h-0.5 w-[60%] rounded-full bg-success/50"
            />
            <div
              aria-hidden="true"
              className="absolute left-[70%] top-[6px] z-20 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-success shadow-[0_0_12px_rgba(6,156,78,0.9)]"
            />
          </>
        ) : (
          <>
            {/* Lit trail behind the pulse (scaleX keeps it compositor-only) */}
            <motion.div
              aria-hidden="true"
              className="absolute left-[10%] top-[5px] h-0.5 w-[80%] origin-left rounded-full bg-success/50"
              animate={{ scaleX: [0, 1, 1] }}
              transition={{
                duration: LOOP_SECONDS,
                times: [0, TRAVEL_FRACTION, 1],
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* The travelling pulse — holds at OPERATE before looping */}
            <motion.div
              aria-hidden="true"
              className="absolute top-[6px] z-20 size-3 rounded-full bg-success shadow-[0_0_12px_rgba(6,156,78,0.9)]"
              style={{ x: "-50%", y: "-50%" }}
              animate={{ left: ["10%", "90%", "90%"] }}
              transition={{
                duration: LOOP_SECONDS,
                times: [0, TRAVEL_FRACTION, 1],
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </>
        )}

        <div className="relative z-10 grid grid-cols-5">
          {STAGES.map((station, index) => {
            const lit = index <= stage;

            return (
              <div key={station.label} className="flex flex-col items-center gap-3">
                <span
                  aria-hidden="true"
                  className={cn(
                    "size-3 rounded-full bg-deep ring-2 transition-all duration-500",
                    lit
                      ? "bg-success ring-success/60 shadow-[0_0_10px_rgba(6,156,78,0.7)]"
                      : "ring-bg-cream/25",
                  )}
                />
                <span
                  className={cn(
                    "font-mono text-[9px] uppercase tracking-[0.18em] transition-colors duration-500",
                    lit ? "text-border-light" : "text-accent-four",
                  )}
                >
                  {station.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PipelinePulse;
