import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { initiativesData, initiativesText } from "@/contents/screens/launch";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { Lift, EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/* ── Bespoke animated glyphs (line-art, brand green) ─────────────────── */

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

interface GlyphProps {
  /** In view — drives the one-shot reveal (replays on re-entry). */
  on: boolean;
  /** Honor reduced motion — when true, show the resolved state, no loops. */
  reduce: boolean;
}

/** Reveal transition: instant under reduced motion, eased otherwise. */
const revealTx = (reduce: boolean, delay = 0) =>
  reduce ? { duration: 0 } : { duration: 0.9, ease: EASE, delay };

/** Lead-gen funnel — prospects fall in, one converts out the bottom. */
const FunnelGlyph = ({ on, reduce }: GlyphProps) => {
  const loop = on && !reduce;
  return (
    <svg viewBox="0 0 64 64" className="size-14 text-border-light" aria-hidden="true">
      <motion.path
        d="M14 16 H50 L38 34 V48 L26 42 V34 Z"
        {...stroke}
        animate={{ pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }}
        transition={revealTx(reduce)}
      />
      {loop &&
        [20, 32, 44].map((cx, i) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy={10}
            r={2.2}
            fill="currentColor"
            stroke="none"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: [0, 1, 1, 0], y: [-6, 6, 6, 10] }}
            transition={{ duration: 1.6, ease: "easeIn", delay: 0.6 + i * 0.25, repeat: Infinity, repeatDelay: 1.4 }}
          />
        ))}
      {loop && (
        <motion.circle
          cx={32}
          cy={56}
          r={3}
          className="text-success"
          fill="currentColor"
          stroke="none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0, 0, 1, 1, 0.6] }}
          transition={{ duration: 1.6, delay: 0.6, repeat: Infinity, repeatDelay: 1.4 }}
        />
      )}
      {reduce && (
        <circle cx={32} cy={56} r={3} className="text-success" fill="currentColor" />
      )}
    </svg>
  );
};

/** Customer portal — a browser window resolving to a dashboard. */
const PortalGlyph = ({ on, reduce }: GlyphProps) => (
  <svg viewBox="0 0 64 64" className="size-14 text-border-light" aria-hidden="true">
    <motion.rect
      x={10}
      y={14}
      width={44}
      height={36}
      rx={4}
      {...stroke}
      animate={{ pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }}
      transition={revealTx(reduce)}
    />
    <motion.path
      d="M10 24 H54"
      {...stroke}
      animate={{ pathLength: on ? 1 : 0 }}
      transition={revealTx(reduce, 0.5)}
    />
    {[16, 20, 24].map((cx) => (
      <circle key={cx} cx={cx} cy={19} r={1.3} fill="currentColor" stroke="none" />
    ))}
    {[0, 1, 2].map((i) => (
      <motion.rect
        key={i}
        x={16}
        y={30 + i * 6}
        width={i === 0 ? 22 : 32}
        height={3}
        rx={1.5}
        className={i === 0 ? "text-success" : ""}
        fill="currentColor"
        stroke="none"
        style={{ transformOrigin: "16px 0" }}
        animate={{ opacity: on ? 1 : 0, scaleX: on ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: 0.7 + i * 0.15 }}
      />
    ))}
  </svg>
);

/** Mobile app — a phone with content and a notification ping. */
const MobileGlyph = ({ on, reduce }: GlyphProps) => {
  const loop = on && !reduce;
  return (
    <svg viewBox="0 0 64 64" className="size-14 text-border-light" aria-hidden="true">
      <motion.rect
        x={22}
        y={10}
        width={20}
        height={44}
        rx={4}
        {...stroke}
        animate={{ pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }}
        transition={revealTx(reduce)}
      />
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={27}
          y={20 + i * 7}
          width={i === 1 ? 6 : 10}
          height={3}
          rx={1.5}
          fill="currentColor"
          stroke="none"
          animate={{ opacity: on ? 1 : 0, y: on ? 0 : 6 }}
          transition={reduce ? { duration: 0 } : { duration: 0.4, ease: EASE, delay: 0.6 + i * 0.14 }}
        />
      ))}
      {loop && (
        <motion.circle
          cx={42}
          cy={14}
          r={4}
          className="text-success"
          fill="currentColor"
          stroke="none"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatDelay: 1.8 }}
        />
      )}
      {reduce && (
        <circle cx={42} cy={14} r={4} className="text-success" fill="currentColor" />
      )}
    </svg>
  );
};

/** Internal systems — scattered tools unified into one linked grid. */
const UnifyGlyph = ({ on, reduce }: GlyphProps) => {
  const nodes = [
    [18, 20],
    [46, 18],
    [18, 46],
    [46, 46],
    [32, 32],
  ];
  return (
    <svg viewBox="0 0 64 64" className="size-14 text-border-light" aria-hidden="true">
      {nodes.slice(0, 4).map(([x, y], i) => (
        <motion.line
          key={i}
          x1={x}
          y1={y}
          x2={32}
          y2={32}
          {...stroke}
          animate={{ pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, ease: EASE, delay: 0.5 + i * 0.12 }}
        />
      ))}
      {nodes.map(([x, y], i) => {
        const hub = i === 4;
        return (
          <motion.rect
            key={`n${i}`}
            x={x - 4}
            y={y - 4}
            width={8}
            height={8}
            rx={2}
            className={hub ? "text-success" : ""}
            fill="currentColor"
            stroke="none"
            animate={{ opacity: on ? 1 : 0, scale: on ? 1 : 0.4 }}
            transition={reduce ? { duration: 0 } : { duration: 0.4, ease: EASE, delay: hub ? 1 : i * 0.1 }}
          />
        );
      })}
    </svg>
  );
};

const GLYPHS: Record<string, (p: GlyphProps) => React.ReactNode> = {
  marketing: FunnelGlyph,
  portals: PortalGlyph,
  mobile: MobileGlyph,
  internal: UnifyGlyph,
};

const TONES = [
  "bg-white ring-1 ring-primary/10",
  "bg-bg-light",
  "bg-bg-light",
  "bg-white ring-1 ring-primary/10",
];

const LaunchInitiatives = () => {
  const reduce = useReducedMotion() ?? false;
  const gridRef = useRef<HTMLDivElement>(null);
  const on = useInView(gridRef, { amount: 0.3 });

  return (
    <section id="initiatives" className="scroll-mt-24 bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="01"
          eyebrow="What Founders Launch"
          title={initiativesText.title}
          lede={initiativesText.subtext}
        />

        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2">
          {initiativesData.map((item, index) => {
            const Glyph = GLYPHS[item.key];
            return (
              <Reveal key={item.key} delay={index * 0.08}>
                <Lift
                  className={cn(
                    "flex h-full items-start gap-6 rounded-3xl p-8 hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)] md:p-9",
                    TONES[index % TONES.length],
                  )}
                >
                  <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-primary">
                    <Glyph on={on} reduce={reduce} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.8] text-accent-one">
                      {item.description}
                    </p>
                  </div>
                </Lift>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LaunchInitiatives;
