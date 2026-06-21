import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/**
 * The Startup Launch showpiece: a product assembling itself, on loop.
 *   0 concept   — a single idea node pulses on the grid
 *   1 wireframe — the layout draws itself in as outlines
 *   2 build     — surfaces fill, the chart draws, KPIs count up
 *   3 live      — a deploy ripple fires and the build goes to production
 * Then it resets and repeats. useInView-gated, reduced-motion shows the
 * finished live state, fixed bounds so nothing reflows.
 */
const PHASES = ["Concept", "Wireframe", "Build", "Live"] as const;
const PHASE_MS = [1200, 1700, 2100, 2400];

const CHART_PATH = "M2 40 L14 34 L26 37 L38 24 L50 28 L62 14 L74 18 L86 7";

const KPIS = [
  { label: "Users", value: 12480, suffix: "" },
  { label: "Uptime", value: 99, suffix: "%" },
  { label: "Latency", value: 112, suffix: "ms" },
];

/** Compact figure so values never overflow the small KPI cards on mobile. */
const compact = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : String(n);

/** Mounts only during the build phase, so it count-ups fresh each loop. */
const Kpi = ({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 900;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <div className="min-w-0 flex-1 overflow-hidden rounded-lg border border-bg-cream/12 bg-bg-cream/[0.05] px-2.5 py-2">
      <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-accent-four">
        {label}
      </p>
      <p className="mt-1 font-display text-[13px] font-semibold leading-none tracking-tight text-bg-cream sm:text-[15px]">
        <span className="tabular-nums">{compact(display)}</span>
        {suffix}
      </p>
    </div>
  );
};

const BuildWindow = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      if (phase === 3) return;
      const t = window.setTimeout(() => setPhase(3), 0);
      return () => window.clearTimeout(t);
    }
    if (!inView) return;
    const t = window.setTimeout(
      () => setPhase((p) => (p + 1) % PHASES.length),
      PHASE_MS[phase],
    );
    return () => window.clearTimeout(t);
  }, [phase, inView, reduceMotion]);

  const wire = phase >= 1;
  const build = phase >= 2;
  const live = phase >= 3;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl bg-deep/80 shadow-[0_40px_90px_rgba(1,20,10,0.45)] ring-1 ring-bg-cream/15"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-bg-cream/10 px-5 py-3.5">
        <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-accent-four">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
          ElderOps — Build
        </p>
        <AnimatePresence mode="wait">
          <motion.span
            key={phase}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "font-mono text-[9px] uppercase tracking-[0.2em]",
              live ? "text-success" : "text-border-light",
            )}
          >
            {PHASES[phase]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Build surface */}
      <div className="relative h-72 w-full p-4 sm:h-80">
        {/* blueprint grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(252,252,244,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(252,252,244,0.05)_1px,transparent_1px)] bg-[size:28px_28px]"
        />

        {/* Phase 0 — concept node */}
        <AnimatePresence>
          {!wire && (
            <motion.div
              key="concept"
              className="absolute inset-0 grid place-items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col items-center gap-3">
                <span className="relative grid size-12 place-items-center">
                  <span className="absolute inset-0 animate-pulse-dot rounded-full bg-success/30" />
                  <span className="size-3 rounded-full bg-success shadow-[0_0_18px_rgba(6,156,78,0.9)]" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent-four">
                  An idea
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The assembling product (wireframe → built) */}
        <motion.div
          className="relative grid h-full grid-cols-[1fr_2.4fr] grid-rows-[auto_1fr] gap-2.5"
          animate={{ opacity: wire ? 1 : 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {/* Top bar */}
          <div
            className={cn(
              "col-span-2 flex h-9 items-center justify-between rounded-lg border px-3 transition-colors duration-700",
              build
                ? "border-bg-cream/12 bg-bg-cream/[0.05]"
                : "border-dashed border-border-light/40",
            )}
          >
            <motion.div
              className="flex items-center gap-2"
              animate={{ opacity: build ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="size-2.5 rounded-[3px] bg-success" />
              <span className="h-1.5 w-16 rounded-full bg-bg-cream/30" />
            </motion.div>
            <motion.div
              className="flex items-center gap-1"
              animate={{ opacity: build ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} className="size-4 rounded-full bg-border-light/70" />
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div
            className={cn(
              "row-start-2 flex flex-col gap-2 rounded-lg border p-3 transition-colors duration-700",
              build
                ? "border-bg-cream/12 bg-bg-cream/[0.05]"
                : "border-dashed border-border-light/40",
            )}
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className={cn(
                  "h-1.5 rounded-full",
                  i === 0 ? "bg-success/80" : "bg-bg-cream/20",
                )}
                style={{ width: `${[80, 60, 70, 50][i]}%` }}
                animate={{ opacity: build ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              />
            ))}
          </div>

          {/* Main */}
          <div className="row-start-2 flex flex-col gap-2.5">
            {/* KPI row */}
            <div className="flex gap-2.5">
              {KPIS.map((k, i) => (
                <motion.div
                  key={k.label}
                  className="flex-1"
                  animate={{ opacity: build ? 1 : 0, y: build ? 0 : 6 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1, ease: EASE }}
                >
                  {build ? (
                    <Kpi label={k.label} value={k.value} suffix={k.suffix} />
                  ) : (
                    <div className="h-[42px] rounded-lg border border-dashed border-border-light/40" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Chart card */}
            <div
              className={cn(
                "relative flex-1 overflow-hidden rounded-lg border p-3 transition-colors duration-700",
                build
                  ? "border-bg-cream/12 bg-bg-cream/[0.05]"
                  : "border-dashed border-border-light/40",
              )}
            >
              <svg
                viewBox="0 0 88 46"
                fill="none"
                preserveAspectRatio="none"
                className="absolute inset-x-3 bottom-3 top-3"
              >
                <defs>
                  <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0fb45e" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#0fb45e" stopOpacity="0" />
                  </linearGradient>
                  {/* Reveal the chart with a left→right wipe — the line stays a
                      single continuous path, so no dash gaps are possible. */}
                  <clipPath id="chartReveal">
                    <motion.rect
                      x="0"
                      y="0"
                      height="46"
                      initial={false}
                      animate={{ width: build ? 88 : 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 1.1,
                        ease: EASE,
                        delay: reduceMotion ? 0 : 0.2,
                      }}
                    />
                  </clipPath>
                </defs>
                <motion.g
                  clipPath="url(#chartReveal)"
                  animate={{ opacity: build ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <path d={`${CHART_PATH} L86 46 L2 46 Z`} fill="url(#area)" stroke="none" />
                  <path
                    d={CHART_PATH}
                    stroke="#0fb45e"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </motion.g>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Phase 3 — live badge + deploy ripple + toast */}
        <AnimatePresence>
          {live && (
            <motion.span
              key="livebadge"
              className="absolute right-4 top-7 z-10 flex items-center gap-1.5 rounded-full bg-success px-2.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-deep"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 16 }}
            >
              <span className="size-1 rounded-full bg-deep" />
              Live
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {live && (
            <motion.div
              key="toast"
              className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-bg-cream/95 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-primary shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              ✓ Deployed to production
            </motion.div>
          )}
        </AnimatePresence>

        {live && !reduceMotion && (
          <motion.span
            key={`ripple-${phase}`}
            aria-hidden="true"
            className="absolute bottom-7 left-1/2 z-0 size-16 -translate-x-1/2 rounded-full border border-success/60"
            initial={{ scale: 0.3, opacity: 0.7 }}
            animate={{ scale: 5, opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-bg-cream/10 px-5 py-3.5">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent-four">
          Concept → Production
        </p>
        <div className="flex gap-1.5">
          {PHASES.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i <= phase ? "w-5 bg-success" : "w-1.5 bg-bg-cream/25",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildWindow;
