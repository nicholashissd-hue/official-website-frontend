import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { buildLayers } from "@/contents/screens/launch";
import { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

const HUB = { x: 50, y: 50 };
const CYCLE_MS = 2900;

/** Place each discipline at a cardinal point with its items fanned outward. */
type Dir = "top" | "right" | "bottom" | "left";
const DIRS: Dir[] = ["top", "right", "bottom", "left"];

const nodeFor = (dir: Dir) =>
  ({
    top: { x: 50, y: 17 },
    right: { x: 83, y: 50 },
    bottom: { x: 50, y: 83 },
    left: { x: 17, y: 50 },
  })[dir];

/** Four item dots fanned just beyond a discipline node, away from the hub. */
const itemDots = (dir: Dir) => {
  const spread = [-15, -5, 5, 15];
  if (dir === "top") return spread.map((s) => ({ x: 50 + s, y: 5 }));
  if (dir === "bottom") return spread.map((s) => ({ x: 50 + s, y: 95 }));
  if (dir === "left") return spread.map((s) => ({ x: 5, y: 50 + s }));
  return spread.map((s) => ({ x: 95, y: 50 + s }));
};

const CATS = buildLayers.map((layer, i) => {
  const dir = DIRS[i];
  return { ...layer, dir, node: nodeFor(dir), dots: itemDots(dir) };
});

const SystemMap = () => {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const running = inView && !reduce && !paused;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % CATS.length),
      CYCLE_MS,
    );
    return () => window.clearInterval(id);
  }, [running]);

  const animate = inView && !reduce;
  const cat = CATS[active];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      {/* ── The map ─────────────────────────────────────────────── */}
      <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[460px]">
        {/* radar sweep */}
        {animate && (
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(6,156,78,0.18) 355deg, transparent 360deg)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          />
        )}

        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
          {/* concentric guides */}
          {[40, 28, 16].map((r) => (
            <circle key={r} cx={50} cy={50} r={r} fill="none" stroke="rgba(252,252,244,0.07)" strokeWidth={0.4} />
          ))}

          {CATS.map((c, i) => {
            const on = i === active;
            return (
              <g key={c.key}>
                {/* hub → discipline spoke */}
                <motion.line
                  x1={HUB.x}
                  y1={HUB.y}
                  x2={c.node.x}
                  y2={c.node.y}
                  stroke={on ? "rgba(15,180,94,0.85)" : "rgba(139,163,150,0.25)"}
                  strokeWidth={on ? 0.8 : 0.5}
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: animate || reduce ? 1 : 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.2 + i * 0.1 }}
                />
                {/* discipline → item stubs */}
                {c.dots.map((d, j) => (
                  <line
                    key={j}
                    x1={c.node.x}
                    y1={c.node.y}
                    x2={d.x}
                    y2={d.y}
                    stroke={on ? "rgba(15,180,94,0.5)" : "rgba(139,163,150,0.15)"}
                    strokeWidth={0.4}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                {/* item dots */}
                {c.dots.map((d, j) => (
                  <circle
                    key={`d${j}`}
                    cx={d.x}
                    cy={d.y}
                    r={on ? 1.3 : 0.9}
                    fill={on ? "#0fb45e" : "rgba(139,163,150,0.45)"}
                  />
                ))}
                {/* discipline node */}
                <circle
                  cx={c.node.x}
                  cy={c.node.y}
                  r={on ? 3.4 : 2.4}
                  fill={on ? "#069c4e" : "#0a3b22"}
                  stroke={on ? "rgba(180,227,198,0.9)" : "rgba(139,163,150,0.4)"}
                  strokeWidth={0.5}
                  style={on ? { filter: "drop-shadow(0 0 6px rgba(6,156,78,0.8))" } : undefined}
                />
                {/* travelling pulse on the active spoke */}
                {on && animate && (
                  <motion.circle
                    r={1.4}
                    fill="#b5e3c6"
                    initial={{ cx: HUB.x, cy: HUB.y, opacity: 0 }}
                    animate={{ cx: c.node.x, cy: c.node.y, opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1.1, ease: "easeOut", repeat: Infinity, repeatDelay: 0.4 }}
                  />
                )}
              </g>
            );
          })}

          {/* hub */}
          <circle cx={50} cy={50} r={6} fill="#02361b" stroke="rgba(15,180,94,0.6)" strokeWidth={0.6} />
          {animate && (
            <motion.circle
              cx={50}
              cy={50}
              r={6}
              fill="none"
              stroke="rgba(6,156,78,0.6)"
              strokeWidth={0.6}
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 2.6, opacity: 0 }}
              transition={{ duration: 2.4, ease: "easeOut", repeat: Infinity }}
              style={{ transformOrigin: "50px 50px" }}
            />
          )}
          <circle cx={50} cy={50} r={2} fill="#0fb45e" style={{ filter: "drop-shadow(0 0 5px rgba(6,156,78,0.9))" }} />
        </svg>

        {/* hub label */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[2.4rem] text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent-four">
            Your Product
          </p>
        </div>

        {/* discipline labels (interactive) */}
        {CATS.map((c, i) => (
          <button
            key={c.key}
            type="button"
            onMouseEnter={() => {
              setPaused(true);
              setActive(i);
            }}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => {
              setPaused(true);
              setActive(i);
            }}
            onBlur={() => setPaused(false)}
            aria-label={c.title}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-success",
              i === active
                ? "bg-success text-deep"
                : "bg-bg-cream/[0.08] text-bg-light/70 ring-1 ring-bg-cream/15",
            )}
            style={{ left: `${c.node.x}%`, top: `${c.node.y}%` }}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* ── Active discipline detail ────────────────────────────── */}
      <div className="min-h-[230px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-border-light">
              Layer 0{active + 1} — {cat.blurb}
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.01em] text-bg-cream">
              {cat.title}
            </h3>
            <ul className="mt-6 space-y-2.5">
              {cat.items.map((item, j) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.08 + j * 0.07 }}
                  className="flex items-center gap-3 text-[15px] text-bg-light/85"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-success" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* progress dots */}
        <div className="mt-8 flex gap-2">
          {CATS.map((c, i) => (
            <button
              key={c.key}
              type="button"
              aria-label={`Show ${c.title}`}
              onClick={() => {
                setActive(i);
                setPaused(true);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === active ? "w-7 bg-success" : "w-1.5 bg-bg-cream/25 hover:bg-bg-cream/50",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemMap;
