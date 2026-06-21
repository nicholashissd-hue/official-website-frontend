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
const BASELINE = 52;

/** Milestones climb from idea (low, left) to scale (high, right). */
const POINTS = [
  { x: 8, y: 48 },
  { x: 30, y: 38 },
  { x: 50, y: 29 },
  { x: 70, y: 19 },
  { x: 92, y: 9 },
];

/** Catmull-Rom → cubic-bezier for a smooth curve through the points. */
const smoothPath = (pts: { x: number; y: number }[]) => {
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
};

const CURVE = smoothPath(POINTS);
const AREA = `${CURVE} L ${POINTS[N - 1].x} ${BASELINE} L ${POINTS[0].x} ${BASELINE} Z`;

/**
 * "From Idea to Production" — an ascending launch trajectory. The path climbs
 * from idea to scale, drawing itself with a comet at the head while each
 * milestone ignites in turn. Plays on scroll-in; reduced motion shows the
 * completed climb.
 */
const IdeaToProduction = () => {
  const reduce = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cometRef = useRef<SVGCircleElement>(null);
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
    const controls = animate(draw, 1, { duration: 2.4, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, draw]);

  useMotionValueEvent(draw, "change", (v) => {
    const path = pathRef.current;
    const comet = cometRef.current;
    if (path && lenRef.current && comet) {
      const pt = path.getPointAtLength(v * lenRef.current);
      comet.setAttribute("cx", `${pt.x}`);
      comet.setAttribute("cy", `${pt.y}`);
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
        <SectionHeading
          title={timelineText.title}
          lede={timelineText.subtext}
        />

        <div ref={sectionRef}>
          {/* Chart */}
          <div className="relative w-full overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-primary/10 md:p-8">
            <div className="relative aspect-[100/56] w-full">
              <svg viewBox="0 0 100 56" className="absolute inset-0 size-full" fill="none">
                <defs>
                  <linearGradient id="trajArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#069c4e" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#069c4e" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* faint gridlines */}
                {[14, 28, 42].map((y) => (
                  <line key={y} x1={4} y1={y} x2={96} y2={y} stroke="rgba(2,54,27,0.06)" strokeWidth={0.3} />
                ))}
                <line x1={8} y1={BASELINE} x2={92} y2={BASELINE} stroke="rgba(2,54,27,0.12)" strokeWidth={0.4} />

                {/* area fill */}
                <motion.path d={AREA} fill="url(#trajArea)" style={{ opacity: areaOpacity }} />

                {/* the climbing curve */}
                <motion.path
                  ref={pathRef}
                  d={CURVE}
                  stroke="#069c4e"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength: draw }}
                />

                {/* milestone nodes */}
                {POINTS.map((p, i) => (
                  <g key={i}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={lit(i) ? 2.4 : 1.6}
                      fill={lit(i) ? "#069c4e" : "#ffffff"}
                      stroke={lit(i) ? "rgba(180,227,198,0.9)" : "rgba(2,54,27,0.25)"}
                      strokeWidth={0.6}
                      vectorEffect="non-scaling-stroke"
                      style={{
                        transition: "r 0.4s ease, fill 0.4s ease",
                        filter: lit(i) ? "drop-shadow(0 0 3px rgba(6,156,78,0.7))" : undefined,
                      }}
                    />
                  </g>
                ))}

                {/* comet riding the draw head */}
                <circle
                  ref={cometRef}
                  r={2.1}
                  fill="#b5e3c6"
                  style={{ opacity: 0, filter: "drop-shadow(0 0 4px rgba(6,156,78,0.95))" }}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* origin + summit tags */}
              <span className="absolute bottom-[7%] left-[2%] rounded-full bg-primary/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-one">
                Idea
              </span>
              <span
                className={cn(
                  "absolute right-[1%] top-[2%] rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] transition-colors duration-500",
                  reached >= N ? "bg-success text-deep" : "bg-primary/[0.06] text-accent-one",
                )}
              >
                In Production · Scaling
              </span>
            </div>
          </div>

          {/* Desktop: aligned milestone columns */}
          <div className="mt-8 hidden grid-cols-5 gap-4 lg:grid">
            {timelineSteps.map((step, i) => (
              <div key={step.title} className="text-center">
                <h3
                  className={cn(
                    "font-display text-lg font-semibold tracking-[-0.01em] transition-colors duration-500",
                    lit(i) ? "text-primary" : "text-primary/45",
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-[13px] leading-[1.6] transition-colors duration-500",
                    lit(i) ? "text-accent-one" : "text-accent-one/50",
                  )}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: stacked milestones */}
          <div className="mt-8 flex flex-col gap-4 lg:hidden">
            {timelineSteps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-1.5 size-2 shrink-0 rounded-full transition-colors duration-500",
                    lit(i) ? "bg-success" : "bg-primary/20",
                  )}
                />
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-primary">
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
