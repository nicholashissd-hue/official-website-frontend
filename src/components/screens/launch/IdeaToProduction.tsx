import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { timelineSteps, timelineText } from "@/contents/screens/launch";
import SectionHeading from "@/components/ui/section-heading";
import { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

const N = timelineSteps.length;
const BASE = 88;

/** Milestones climb from idea (low/left) to scale (high/right). 0..100 space. */
const POINTS = [
  { x: 9, y: 80 },
  { x: 31, y: 64 },
  { x: 50, y: 48 },
  { x: 70, y: 31 },
  { x: 91, y: 15 },
];

/** Catmull-Rom → cubic-bezier for a smooth curve through the points. */
const smoothPath = (pts: { x: number; y: number }[]) => {
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    d += ` C ${p1.x + (p2.x - p0.x) / 6} ${p1.y + (p2.y - p0.y) / 6}, ${p2.x - (p3.x - p1.x) / 6} ${p2.y - (p3.y - p1.y) / 6}, ${p2.x} ${p2.y}`;
  }
  return d;
};

const CURVE = smoothPath(POINTS);
const AREA = `${CURVE} L ${POINTS[N - 1].x} ${BASE} L ${POINTS[0].x} ${BASE} Z`;

/**
 * "From Idea to Production" — a compact, annotated launch trajectory. The path
 * climbs from idea to scale, drawing in with a comet at the head while each
 * milestone ignites with its label. Plays on scroll-in; reduced motion shows
 * the completed climb. Nodes/labels are HTML positioned in the same 0..100
 * space as the SVG (preserveAspectRatio: none), so they sit exactly on the
 * curve at any size.
 */
const IdeaToProduction = () => {
  const reduce = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cometRef = useRef<HTMLDivElement>(null);
  const lenRef = useRef(0);
  const inView = useInView(sectionRef, { amount: 0.4, once: true });

  const draw = useMotionValue(reduce ? 1 : 0);
  const areaOpacity = useTransform(draw, [0, 0.15, 1], [0, 0.4, 1]);
  const [reached, setReached] = useState(reduce ? N : 0);

  useEffect(() => {
    if (pathRef.current) lenRef.current = pathRef.current.getTotalLength();
  }, []);

  useEffect(() => {
    if (reduce) {
      const t = window.setTimeout(() => setReached(N), 0);
      return () => window.clearTimeout(t);
    }
    if (!inView) return;
    const controls = animate(draw, 1, { duration: 2.2, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, draw]);

  useMotionValueEvent(draw, "change", (v) => {
    const path = pathRef.current;
    const comet = cometRef.current;
    if (path && lenRef.current && comet) {
      const pt = path.getPointAtLength(v * lenRef.current);
      comet.style.left = `${pt.x}%`;
      comet.style.top = `${pt.y}%`;
      comet.style.opacity = v > 0.03 && v < 0.985 ? "1" : "0";
    }
    let count = 0;
    for (let i = 0; i < N; i++) if (v >= (i / (N - 1)) * 0.985) count = i + 1;
    setReached((prev) => (prev === count ? prev : count));
  });

  const lit = (i: number) => i < reached;

  return (
    <section className="bg-bg-light">
      <div className="container section-space-block">
        <SectionHeading title={timelineText.title} lede={timelineText.subtext} />

        <div ref={sectionRef} className="mx-auto max-w-5xl">
          <div className="relative h-[280px] w-full overflow-hidden rounded-3xl bg-white p-5 ring-1 ring-primary/10 sm:h-[320px] md:p-6">
            <div className="relative size-full">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 size-full"
                fill="none"
              >
                <defs>
                  <linearGradient id="trajArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#069c4e" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#069c4e" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* gridlines + baseline */}
                {[24, 44, 64].map((y) => (
                  <line key={y} x1={4} y1={y} x2={96} y2={y} stroke="rgba(2,54,27,0.05)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                ))}
                <line x1={9} y1={BASE} x2={91} y2={BASE} stroke="rgba(2,54,27,0.12)" strokeWidth={1} vectorEffect="non-scaling-stroke" />

                {/* droplines from each node to baseline */}
                {POINTS.map((p, i) => (
                  <line
                    key={i}
                    x1={p.x}
                    y1={p.y}
                    x2={p.x}
                    y2={BASE}
                    stroke={lit(i) ? "rgba(6,156,78,0.35)" : "rgba(2,54,27,0.08)"}
                    strokeWidth={1}
                    strokeDasharray="2 3"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}

                <motion.path d={AREA} fill="url(#trajArea)" style={{ opacity: areaOpacity }} />
                <motion.path
                  ref={pathRef}
                  d={CURVE}
                  stroke="#069c4e"
                  strokeWidth={2}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength: draw }}
                />
              </svg>

              {/* nodes + in-graph labels (HTML, aligned to the same 0..100 space) */}
              {POINTS.map((p, i) => (
                <div
                  key={i}
                  className="absolute z-10"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  {/* label above the node */}
                  <span
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 -translate-y-[calc(100%+10px)] whitespace-nowrap rounded-full px-2.5 py-1 font-display text-[12px] font-semibold leading-none tracking-[-0.01em] transition-all duration-500 sm:text-[13px]",
                      lit(i)
                        ? "bg-success/12 text-primary opacity-100"
                        : "text-primary/40 opacity-70",
                    )}
                  >
                    {timelineSteps[i].title}
                  </span>
                  {/* node */}
                  <span
                    className={cn(
                      "absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-500",
                      lit(i)
                        ? "border-border-light bg-success shadow-[0_0_10px_rgba(6,156,78,0.6)]"
                        : "border-primary/25 bg-white",
                    )}
                  />
                </div>
              ))}

              {/* comet */}
              <div
                ref={cometRef}
                aria-hidden="true"
                className="absolute z-20 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border-light opacity-0 shadow-[0_0_10px_rgba(6,156,78,0.95)]"
              />

              {/* origin tag */}
              <span className="absolute bottom-1.5 left-1.5 rounded-full bg-primary/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-one">
                Idea
              </span>
            </div>
          </div>

          {/* Desktop: compact descriptions aligned under the milestones */}
          <div className="mt-6 hidden grid-cols-5 gap-4 lg:grid">
            {timelineSteps.map((step, i) => (
              <p
                key={step.title}
                className={cn(
                  "text-center text-[12.5px] leading-[1.55] transition-colors duration-500",
                  lit(i) ? "text-accent-one" : "text-accent-one/45",
                )}
              >
                {step.description}
              </p>
            ))}
          </div>

          {/* Mobile: stacked milestones */}
          <div className="mt-7 flex flex-col gap-4 lg:hidden">
            {timelineSteps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-1.5 size-2 shrink-0 rounded-full transition-colors duration-500",
                    lit(i) ? "bg-success" : "bg-primary/20",
                  )}
                />
                <div>
                  <h3 className="font-display text-base font-semibold tracking-[-0.01em] text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.6] text-accent-one">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaToProduction;
