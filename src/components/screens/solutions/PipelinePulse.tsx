import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/util";

const STAGES = ["Plan", "Build", "Test", "Deploy", "Operate"];

/** Loop duration in seconds — the pulse crosses the full pipeline once. */
const LOOP_SECONDS = 6;

/** Deploy sits at the 4th of 5 evenly spaced nodes → 75% of the run. */
const DEPLOY_AT_MS = LOOP_SECONDS * 1000 * 0.75;

/**
 * Code-built artifact in the Delivery-Console family: a horizontal
 * pipeline whose bright pulse ships PLAN → OPERATE on a loop, flashing
 * a "deploy — ok" confirmation as it clears DEPLOY.
 */
const PipelinePulse = () => {
  const reduceMotion = useReducedMotion();
  const [pulseAtDeploy, setPulseAtDeploy] = useState(false);
  // Static mode simply shows the shipped state.
  const deployOk = reduceMotion || pulseAtDeploy;

  useEffect(() => {
    if (reduceMotion) return;

    let showTimer: number | undefined;
    let hideTimer: number | undefined;

    const cycle = () => {
      showTimer = window.setTimeout(() => setPulseAtDeploy(true), DEPLOY_AT_MS);
      hideTimer = window.setTimeout(
        () => setPulseAtDeploy(false),
        LOOP_SECONDS * 1000 - 100,
      );
    };

    cycle();
    const interval = window.setInterval(cycle, LOOP_SECONDS * 1000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [reduceMotion]);

  return (
    <div className="rounded-2xl bg-deep/70 p-5 ring-1 ring-bg-cream/15">
      {/* Console header */}
      <div className="flex min-h-7 items-center justify-between gap-4">
        <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-four">
          <span
            aria-hidden="true"
            className="animate-pulse-dot size-1.5 shrink-0 rounded-full bg-success"
          />
          ElderOps — Delivery Pipeline
        </p>

        <AnimatePresence>
          {deployOk && (
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: reduceMotion ? 1 : [0, 1, 0.35, 1],
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45 }}
              className="rounded-full bg-success/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-success"
            >
              deploy — ok
            </motion.span>
          )}
        </AnimatePresence>
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
            {/* Lit trail behind the pulse */}
            <motion.div
              aria-hidden="true"
              className="absolute left-[10%] top-[5px] h-0.5 rounded-full bg-success/50"
              animate={{ width: ["0%", "80%"] }}
              transition={{
                duration: LOOP_SECONDS,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* The travelling pulse */}
            <motion.div
              aria-hidden="true"
              className="absolute top-[6px] z-20 size-3 rounded-full bg-success shadow-[0_0_12px_rgba(6,156,78,0.9)]"
              style={{ x: "-50%", y: "-50%" }}
              animate={{ left: ["10%", "90%"] }}
              transition={{
                duration: LOOP_SECONDS,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </>
        )}

        <div className="relative z-10 grid grid-cols-5">
          {STAGES.map((stage) => (
            <div key={stage} className="flex flex-col items-center gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  "size-3 rounded-full bg-deep ring-2 transition-colors duration-500",
                  stage === "Deploy" && deployOk
                    ? "bg-success ring-success/60"
                    : "ring-bg-cream/25",
                )}
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent-four">
                {stage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PipelinePulse;
