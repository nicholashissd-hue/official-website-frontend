import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/** Coordinate space is 0..100 (x) × 0..100 (y); rendered into any box. */
interface Node {
  x: number;
  y: number;
  r: number;
}

const BASE_NODES: Node[] = [
  { x: 16, y: 32, r: 3.2 }, // 0 hub
  { x: 30, y: 60, r: 2.2 }, // 1
  { x: 12, y: 76, r: 1.8 }, // 2
  { x: 44, y: 24, r: 2.2 }, // 3
  { x: 55, y: 50, r: 3.4 }, // 4 hub
  { x: 33, y: 86, r: 1.8 }, // 5
  { x: 69, y: 71, r: 2.4 }, // 6
  { x: 75, y: 33, r: 2.4 }, // 7
  { x: 89, y: 58, r: 3 }, //   8 hub
  { x: 61, y: 15, r: 1.8 }, // 9
];

const BASE_EDGES: [number, number][] = [
  [0, 3],
  [0, 1],
  [1, 2],
  [1, 4],
  [3, 4],
  [3, 9],
  [4, 6],
  [4, 7],
  [6, 8],
  [7, 8],
  [1, 5],
  [7, 9],
];

interface Joiner {
  x: number;
  y: number;
  links: number[];
  role: string;
  region: string;
}

const JOINERS: Joiner[] = [
  { x: 39, y: 45, links: [0, 4, 3], role: "Senior Engineer", region: "Remote · EU" },
  { x: 73, y: 52, links: [4, 8, 6], role: "Staff Engineer", region: "Remote · US" },
  { x: 24, y: 48, links: [0, 1], role: "Principal Engineer", region: "Remote · LATAM" },
  { x: 52, y: 72, links: [4, 6, 5], role: "Platform Engineer", region: "Remote · APAC" },
];

const BASE_COUNT = 244;
const STEP_MS = 2600;

/**
 * The Careers signature artifact: a living engineering network. A constellation
 * of vetted engineers, into which new members join one by one — each drawing
 * connections to the network and ticking the member count — then the network
 * fades and the cycle repeats. Compositor-friendly, pauses off-screen, and
 * renders a settled static state under reduced-motion.
 */
const NetworkConstellation = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  // How many joiners are currently part of the network (0..JOINERS.length).
  // Seeded to 0 and populated by the effect below — `reduceMotion` is null on
  // the first render, so we must not branch on it in the initial state.
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      // Async so the compiler-safe rule holds (no sync setState in effects).
      const t = window.setTimeout(() => setShown(JOINERS.length), 0);
      return () => window.clearTimeout(t);
    }
    if (!inView) return;

    const id = window.setInterval(() => {
      setShown((prev) => (prev >= JOINERS.length ? 0 : prev + 1));
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, inView]);

  const activeIndex = shown - 1;
  const active = activeIndex >= 0 ? JOINERS[activeIndex] : null;
  const memberCount = BASE_COUNT + shown;
  const shownJoiners = JOINERS.slice(0, shown);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl bg-deep/80 shadow-[0_40px_90px_rgba(1,20,10,0.45)] ring-1 ring-bg-cream/15"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-bg-cream/10 px-5 py-3.5">
        <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-accent-four">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
          ElderOps — Engineering Network
        </p>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-border-light">
          Live
        </span>
      </div>

      {/* Constellation field */}
      <div className="relative h-72 w-full sm:h-80">
        {/* faint dotted backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(139,163,150,0.14)_1px,transparent_1px)] bg-[size:22px_22px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_55%_45%,rgba(6,156,78,0.16)_0%,transparent_70%)]"
        />

        {/* Edges (SVG, non-scaling strokes so distortion-free) */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 size-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {BASE_EDGES.map(([a, b]) => (
            <line
              key={`e-${a}-${b}`}
              x1={BASE_NODES[a].x}
              y1={BASE_NODES[a].y}
              x2={BASE_NODES[b].x}
              y2={BASE_NODES[b].y}
              stroke="rgba(139,163,150,0.25)"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Joiner links — draw in on join, fade out together on reset */}
          <AnimatePresence>
            {shownJoiners.map((j, i) => (
              <motion.g
                key={`jg-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                {j.links.map((t, k) => (
                  <motion.line
                    key={`jl-${i}-${t}`}
                    x1={j.x}
                    y1={j.y}
                    x2={BASE_NODES[t].x}
                    y2={BASE_NODES[t].y}
                    stroke="rgba(15,180,94,0.7)"
                    strokeWidth={1.3}
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.1 + k * 0.12 }}
                  />
                ))}
              </motion.g>
            ))}
          </AnimatePresence>
        </svg>

        {/* Base nodes */}
        {BASE_NODES.map((n, i) => (
          <span
            key={`n-${i}`}
            aria-hidden="true"
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-border-light/80"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              width: `${n.r * 3}px`,
              height: `${n.r * 3}px`,
              boxShadow: "0 0 10px rgba(15,180,94,0.45)",
            }}
          />
        ))}

        {/* Joiner nodes — scale + pulse in on join, fade out on reset */}
        <AnimatePresence>
          {shownJoiners.map((j, i) => (
            <motion.span
              key={`jn-${i}`}
              aria-hidden="true"
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-success"
              style={{
                left: `${j.x}%`,
                top: `${j.y}%`,
                width: "12px",
                height: "12px",
                boxShadow: "0 0 16px rgba(6,156,78,0.9)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {!reduceMotion && (
                <motion.span
                  className="absolute inset-0 rounded-full ring-2 ring-success/70"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 3.4, opacity: 0 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
              )}
            </motion.span>
          ))}
        </AnimatePresence>

        {/* "Joined" chip near the most recent node */}
        <AnimatePresence>
          {active && (
            <motion.div
              key={`chip-${activeIndex}`}
              aria-hidden="true"
              className={cn(
                "absolute z-10 rounded-xl bg-bg-cream/95 px-3 py-2 shadow-lg backdrop-blur-sm",
                active.x > 55 ? "-translate-x-full" : "",
              )}
              style={{
                left: active.x > 55 ? `calc(${active.x}% - 14px)` : `calc(${active.x}% + 14px)`,
                top: `${active.y}%`,
              }}
              initial={{ opacity: 0, y: "-30%", scale: 0.9 }}
              animate={{ opacity: 1, y: "-50%", scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <p className="whitespace-nowrap font-display text-[13px] font-semibold leading-none text-primary">
                {active.role}
              </p>
              <p className="mt-1 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-success">
                <span className="size-1 rounded-full bg-success" />
                Joined · {active.region}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer stat */}
      <div className="flex items-center justify-between border-t border-bg-cream/10 px-5 py-4">
        <div>
          <p className="font-display text-2xl font-semibold leading-none text-bg-cream">
            <span className="tabular-nums">{memberCount}</span>
          </p>
          <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-four">
            Engineers in the network
          </p>
        </div>
        <span className="rounded-full bg-success/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-border-light">
          &lt;4% accepted
        </span>
      </div>
    </div>
  );
};

export default NetworkConstellation;
