import { motion } from "framer-motion";
import { EASE } from "@/components/ui/reveal";

const PanelLabel = ({ children }: { children: string }) => (
  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-four">
    {children}
  </p>
);

const LOG_LINES = [
  { text: "▸ build — ok", meta: "42s" },
  { text: "▸ tests — 312 passed", meta: "1m 04s" },
  { text: "▸ deploy ⇢ production — ok", meta: "18s" },
  { text: "▸ healthcheck — 200", meta: "" },
];

const BARS = [34, 52, 41, 60, 47, 38, 44];

const ENGAGEMENTS = [
  { name: "Cloud Migration — FinTech", status: "On Track" },
  { name: "Data Platform — SaaS", status: "On Track" },
  { name: "MLOps Rollout — HealthTech", status: "Launching" },
];

/**
 * The Talent hero visual: a designed "delivery console" — uptime, pipeline,
 * latency, engagements — rendered in code instead of stock photography.
 */
const CommandCenter = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-deep/70 shadow-[0_40px_90px_rgba(1,20,10,0.45)] ring-1 ring-bg-cream/15">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-bg-cream/10 px-5 py-3.5">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-four">
          ElderOps — Delivery Console
        </p>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-bg-cream/20" />
          <span className="size-1.5 rounded-full bg-bg-cream/20" />
          <span className="size-1.5 rounded-full bg-success/80" />
        </span>
      </div>

      <div className="grid gap-px bg-bg-cream/10 sm:grid-cols-2">
        {/* Uptime */}
        <div className="bg-deep p-5 md:p-6">
          <PanelLabel>Platform Uptime</PanelLabel>
          <p className="mt-3 font-mono text-3xl tracking-tight text-bg-cream">
            99.98<span className="text-lg text-accent-four">%</span>
          </p>
          <svg viewBox="0 0 120 32" fill="none" className="mt-4 h-8 w-full">
            <motion.path
              d="M0 22 L14 20 L28 23 L42 14 L56 17 L70 9 L84 13 L98 6 L112 10 L120 7"
              stroke="#069c4e"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.4 }}
            />
          </svg>
          <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-success">
            <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
            All systems operational
          </p>
        </div>

        {/* Pipeline */}
        <div className="bg-deep p-5 md:p-6">
          <PanelLabel>Deploy Pipeline</PanelLabel>
          <div className="mt-4 space-y-2.5">
            {LOG_LINES.map((line, index) => (
              <motion.p
                key={line.text}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.5 + index * 0.22 }}
                className="flex items-baseline justify-between gap-3 font-mono text-[11px] text-bg-light/80"
              >
                <span>{line.text}</span>
                <span className="text-accent-four">{line.meta}</span>
              </motion.p>
            ))}
            <p className="font-mono text-[11px] text-success">
              ready
              <span className="animate-blink ml-1 inline-block h-3 w-[6px] translate-y-[2px] bg-success/80" />
            </p>
          </div>
        </div>

        {/* Latency */}
        <div className="bg-deep p-5 md:p-6">
          <PanelLabel>Latency — P95</PanelLabel>
          <p className="mt-3 font-mono text-3xl tracking-tight text-bg-cream">
            112<span className="text-lg text-accent-four">ms</span>
          </p>
          <div className="mt-4 flex h-12 items-end gap-1.5" aria-hidden="true">
            {BARS.map((height, index) => (
              <motion.span
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.5 + index * 0.07 }}
                className={
                  index === BARS.length - 1
                    ? "w-full bg-border-light/80"
                    : "w-full bg-success/40"
                }
              />
            ))}
          </div>
        </div>

        {/* Engagements */}
        <div className="bg-deep p-5 md:p-6">
          <PanelLabel>Active Engagements</PanelLabel>
          <div className="mt-4 space-y-3">
            {ENGAGEMENTS.map((engagement) => (
              <div
                key={engagement.name}
                className="flex items-center justify-between gap-3 border-b border-bg-cream/8 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="flex items-center gap-2.5 font-mono text-[11px] text-bg-light/80">
                  <span className="animate-pulse-dot size-1.5 shrink-0 rounded-full bg-success" />
                  {engagement.name}
                </span>
                <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-four">
                  {engagement.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandCenter;
