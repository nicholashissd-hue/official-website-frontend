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

/** Inner padding (px) reserved for labels / tags around the plot. */
const PAD = { t: 54, r: 58, b: 48, l: 46 };

/** Height of each milestone above the baseline, climbing left → right. */
const YFRAC = [0.06, 0.31, 0.53, 0.75, 0.96];

/** Catmull-Rom → cubic-bezier: a smooth curve through the points. */
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

/**
 * "From Idea to Production" — an ascending launch trajectory. Drawn in real
 * pixel space (measured via ResizeObserver) so the stroke renders as one clean
 * continuous line and the dots/labels sit exactly on the curve at any size.
 * The path draws in with a comet at the head while each milestone ignites with
 * its label. Plays on scroll-in; reduced motion shows the completed climb.
 */
const IdeaToProduction = () => {
  const reduce = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLDivElement>(null);
  const plotRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cometRef = useRef<HTMLDivElement>(null);
  const lenRef = useRef(0);
  const playedRef = useRef(false);
  const inView = useInView(sectionRef, { amount: 0.4, once: true });

  const [size, setSize] = useState({ w: 0, h: 0 });
  const draw = useMotionValue(reduce ? 1 : 0);
  const areaOpacity = useTransform(draw, [0, 0.2, 1], [0, 0.5, 1]);
  const dashOffset = useTransform(draw, (v) => (lenRef.current || 9999) * (1 - v));
  const [reached, setReached] = useState(reduce ? N : 0);

  // Measure the plot box in real pixels.
  useEffect(() => {
    const el = plotRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      setSize({ w: Math.round(r.width), h: Math.round(r.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Geometry (pixel space).
  const { w, h } = size;
  const ready = w > 0 && h > 0;
  const baseY = h - PAD.b;
  const innerW = Math.max(0, w - PAD.l - PAD.r);
  const xs = timelineSteps.map((_, i) => PAD.l + (N === 1 ? 0 : i / (N - 1)) * innerW);
  const ys = YFRAC.map((f) => baseY - f * (baseY - PAD.t));
  const pts = xs.map((x, i) => ({ x, y: ys[i] }));
  const curveD = ready ? smoothPath(pts) : "";
  const areaD = ready ? `${curveD} L ${xs[N - 1]} ${baseY} L ${xs[0]} ${baseY} Z` : "";

  // Keep the dash length matched to the measured path (imperative → no flash, no
  // synchronous setState in an effect).
  useEffect(() => {
    const p = pathRef.current;
    if (!p || !curveD) return;
    const l = p.getTotalLength();
    lenRef.current = l;
    p.style.strokeDasharray = `${l}`;
  }, [curveD]);

  // Play once when visible and measured.
  useEffect(() => {
    if (reduce) {
      const t = window.setTimeout(() => setReached(N), 0);
      return () => window.clearTimeout(t);
    }
    if (!inView || !ready || playedRef.current) return;
    playedRef.current = true;
    const controls = animate(draw, 1, { duration: 2.2, ease: EASE });
    return () => controls.stop();
  }, [inView, ready, reduce, draw]);

  useMotionValueEvent(draw, "change", (v) => {
    const path = pathRef.current;
    const comet = cometRef.current;
    if (path && lenRef.current && comet) {
      const pt = path.getPointAtLength(v * lenRef.current);
      comet.style.left = `${pt.x}px`;
      comet.style.top = `${pt.y}px`;
      comet.style.opacity = v > 0.02 && v < 0.99 ? "1" : "0";
    }
    let count = 0;
    for (let i = 0; i < N; i++) if (v >= (i / (N - 1)) * 0.99) count = i + 1;
    setReached((prev) => (prev === count ? prev : count));
  });

  const lit = (i: number) => i < reached;
  const gridYs = ready ? [0.28, 0.55, 0.82].map((f) => PAD.t + f * (baseY - PAD.t)) : [];

  return (
    <section className="bg-bg-light">
      <div className="container section-space-block">
        <SectionHeading title={timelineText.title} lede={timelineText.subtext} />

        <div ref={sectionRef}>
          <div className="relative h-[340px] w-full overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-primary/10 sm:h-[400px] md:p-6 lg:h-[440px]">
            <div ref={plotRef} className="relative size-full">
              {ready && (
                <svg
                  viewBox={`0 0 ${w} ${h}`}
                  width={w}
                  height={h}
                  className="absolute inset-0"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="trajArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#069c4e" stopOpacity="0.26" />
                      <stop offset="100%" stopColor="#069c4e" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* gridlines + baseline */}
                  {gridYs.map((y) => (
                    <line key={y} x1={PAD.l} y1={y} x2={w - PAD.r} y2={y} stroke="rgba(2,54,27,0.05)" strokeWidth={1} />
                  ))}
                  <line x1={xs[0]} y1={baseY} x2={xs[N - 1]} y2={baseY} stroke="rgba(2,54,27,0.12)" strokeWidth={1} />

                  {/* droplines */}
                  {pts.map((p, i) => (
                    <line
                      key={i}
                      x1={p.x}
                      y1={p.y}
                      x2={p.x}
                      y2={baseY}
                      stroke={lit(i) ? "rgba(6,156,78,0.3)" : "rgba(2,54,27,0.08)"}
                      strokeWidth={1}
                      strokeDasharray="2 4"
                    />
                  ))}

                  {/* area + curve */}
                  <motion.path d={areaD} fill="url(#trajArea)" style={{ opacity: areaOpacity }} />
                  <motion.path
                    ref={pathRef}
                    d={curveD}
                    stroke="#069c4e"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={9999}
                    style={{ strokeDashoffset: dashOffset }}
                  />
                </svg>
              )}

              {/* nodes + labels (pixel-positioned, exactly on the curve) */}
              {ready &&
                pts.map((p, i) => (
                  <div key={i} className="absolute" style={{ left: p.x, top: p.y }}>
                    <span
                      className={cn(
                        "absolute left-1/2 hidden -translate-x-1/2 -translate-y-[calc(100%+14px)] whitespace-nowrap rounded-full px-3 py-1 font-display text-[15px] font-semibold leading-none tracking-[-0.01em] transition-all duration-500 lg:block",
                        lit(i) ? "bg-success/12 text-primary opacity-100" : "text-primary/40 opacity-70",
                      )}
                    >
                      {timelineSteps[i].title}
                    </span>
                    <span
                      className={cn(
                        "absolute left-1/2 top-0 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-500",
                        lit(i)
                          ? "border-border-light bg-success shadow-[0_0_12px_rgba(6,156,78,0.6)]"
                          : "border-primary/25 bg-white",
                      )}
                    />
                  </div>
                ))}

              {/* comet */}
              <div
                ref={cometRef}
                aria-hidden="true"
                className="pointer-events-none absolute z-20 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border-light opacity-0 shadow-[0_0_12px_rgba(6,156,78,0.95)]"
              />

              {/* origin tag */}
              <span className="absolute bottom-2 left-2 rounded-full bg-primary/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-one">
                Idea
              </span>
            </div>
          </div>

          {/* Desktop: compact descriptions aligned under the milestones */}
          <div className="mt-7 hidden grid-cols-5 gap-4 lg:grid">
            {timelineSteps.map((step, i) => (
              <p
                key={step.title}
                className={cn(
                  "text-center text-[13px] leading-[1.55] transition-colors duration-500",
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
