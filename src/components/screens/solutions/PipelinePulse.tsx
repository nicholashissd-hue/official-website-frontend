import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
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
 * The pulse moves on the compositor (transform, not `left`) and the
 * whole machine pauses while off-screen.
 */
const PipelinePulse = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.2 });
  const [trackWidth, setTrackWidth] = useState(0);
  // Index of the latest station the pulse has reached this cycle.
  const [stage, setStage] = useState(reduceMotion ? 3 : 0);

  // Measure the track so the pulse can travel via transform only.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setTrackWidth(track.offsetWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      // Async so the compiler-safe rule holds (no sync setState in effects).
      const timer = window.setTimeout(() => setStage(3), 0);
      return () => window.clearTimeout(timer);
    }
    if (!inView) return;

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
  }, [reduceMotion, inView]);

  const animating = !reduceMotion && inView && trackWidth > 0;

  return (
    <div
      ref={containerRef}
      className="rounded-2xl bg-deep/70 p-5 ring-1 ring-bg-cream/15"
    >
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
        {/* Track spans the node centers (10% → 90%) */}
        <div
          ref={trackRef}
          aria-hidden="true"
          className="absolute left-[10%] right-[10%] top-0 h-3"
        >
          <div className="absolute inset-x-0 top-[5px] h-0.5 rounded-full bg-bg-cream/15" />

          {reduceMotion ? (
            <>
              <div className="absolute left-0 top-[5px] h-0.5 w-3/4 rounded-full bg-success/50" />
              <div className="absolute left-3/4 top-[6px] z-20 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-success shadow-[0_0_12px_rgba(6,156,78,0.9)]" />
            </>
          ) : (
            animating && (
              <>
                {/* Lit trail behind the pulse (compositor-only scaleX) */}
                <motion.div
                  className="absolute inset-x-0 top-[5px] h-0.5 origin-left rounded-full bg-success/50"
                  animate={{ scaleX: [0, 1, 1] }}
                  transition={{
                    duration: LOOP_SECONDS,
                    times: [0, TRAVEL_FRACTION, 1],
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* The travelling pulse — transform only, holds at OPERATE */}
                <motion.div
                  className="absolute left-0 top-0 z-20 size-3 rounded-full bg-success shadow-[0_0_12px_rgba(6,156,78,0.9)]"
                  animate={{
                    x: [-6, trackWidth - 6, trackWidth - 6],
                  }}
                  transition={{
                    duration: LOOP_SECONDS,
                    times: [0, TRAVEL_FRACTION, 1],
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </>
            )
          )}
        </div>

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
