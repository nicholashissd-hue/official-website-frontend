import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";
import talentOne from "@/assets/png/talent-one.png";
import talentTwo from "@/assets/png/talent-two.png";
import talentThree from "@/assets/png/talent-three.png";

interface Scenario {
  requirement: string;
  signals: string[];
  role: string;
  meta: string;
  photo: string;
  stats: string[];
}

const SCENARIOS: Scenario[] = [
  {
    requirement: "We need to scale our data platform for HIPAA workloads…",
    signals: ["Data Platforms", "HIPAA", "Snowflake", "dbt"],
    role: "Staff Data Engineer",
    meta: "Vetted — Network",
    photo: talentOne,
    stats: ["9 yrs experience", "Available in 48h"],
  },
  {
    requirement: "Deploys fail weekly. CI/CD needs a complete rebuild…",
    signals: ["DevOps", "CI/CD", "Kubernetes", "SRE"],
    role: "Senior Platform Engineer",
    meta: "Vetted — Network",
    photo: talentTwo,
    stats: ["11 yrs experience", "Cloud certified"],
  },
  {
    requirement: "Our ML prototype works. Now it has to run in production…",
    signals: ["MLOps", "Python", "AWS", "Monitoring"],
    role: "Principal ML Architect",
    meta: "Vetted — Network",
    photo: talentThree,
    stats: ["13 yrs experience", "Exec advisory"],
  },
];

type Phase = "typing" | "signals" | "match";

const Label = ({ children }: { children: string }) => (
  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent-four">
    {children}
  </p>
);

/**
 * The hero artifact: a looping "matching engine" — a requirement types in,
 * skill signals are extracted as chips, and a vetted engineer card locks in.
 */
const MatchingEngine = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  // Pause the whole machine while off-screen — no idle re-renders.
  const inView = useInView(containerRef, { amount: 0.25 });
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const scenario = SCENARIOS[index];

  // Type the requirement, character by character.
  useEffect(() => {
    if (reduceMotion) {
      setTyped(scenario.requirement);
      setPhase("match");
      return;
    }
    if (!inView) return;

    setTyped("");
    setPhase("typing");
    let characters = 0;
    const timer = setInterval(() => {
      characters++;
      setTyped(scenario.requirement.slice(0, characters));
      if (characters >= scenario.requirement.length) {
        clearInterval(timer);
        setPhase("signals");
      }
    }, 24);

    return () => clearInterval(timer);
  }, [index, scenario.requirement, reduceMotion, inView]);

  // Advance signals → match → next scenario.
  useEffect(() => {
    if (!inView && !reduceMotion) return;
    if (phase === "signals") {
      const timer = setTimeout(() => setPhase("match"), 1200);
      return () => clearTimeout(timer);
    }
    if (phase === "match" && !reduceMotion) {
      const timer = setTimeout(
        () => setIndex((current) => (current + 1) % SCENARIOS.length),
        3800,
      );
      return () => clearTimeout(timer);
    }
  }, [phase, reduceMotion, inView]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl bg-deep/80 shadow-[0_40px_90px_rgba(1,20,10,0.45)] ring-1 ring-bg-cream/15"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-bg-cream/10 px-6 py-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-four">
          ElderOps — Matching Engine
        </p>
        <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-success">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
          Live
        </p>
      </div>

      <div className="space-y-5 px-6 py-6">
        {/* Requirement */}
        <div>
          <Label>Your requirement</Label>
          <p className="mt-2.5 min-h-[3.2em] text-[15px] font-medium leading-[1.6] text-bg-cream sm:min-h-[2.6em]">
            {typed}
            {phase === "typing" && (
              <span className="animate-blink ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[0.18em] rounded-[1px] bg-success/90" />
            )}
          </p>
        </div>

        {/* Extracted signals */}
        <div>
          <Label>Signals detected</Label>
          <div className="mt-2.5 flex min-h-9 flex-wrap gap-2">
            <AnimatePresence mode="popLayout">
              {(phase === "signals" || phase === "match") &&
                scenario.signals.map((signal, signalIndex) => (
                  <motion.span
                    key={`${index}-${signal}`}
                    initial={{ opacity: 0, scale: 0.6, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      ease: EASE,
                      delay: signalIndex * 0.12,
                    }}
                    className="rounded-full bg-border-light px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-primary"
                  >
                    {signal}
                  </motion.span>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Matched engineer */}
        <div className="min-h-[120px]">
          <Label>Matched from the network</Label>
          <AnimatePresence mode="wait">
            {phase === "match" && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="mt-3 rounded-2xl bg-bg-cream p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={scenario.photo}
                    alt=""
                    className="size-12 shrink-0 rounded-full object-cover ring-2 ring-success/60"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-[17px] font-semibold leading-tight text-primary">
                      {scenario.role}
                    </p>
                    <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-three">
                      {scenario.meta}
                    </p>
                  </div>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.3 }}
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-success text-deep"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="size-4" aria-hidden="true">
                      <path
                        d="m3 8.5 3.2 3.2L13 4.8"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                </div>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {scenario.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full bg-primary/[0.07] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-primary"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-bg-cream/10 px-6 py-3.5">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent-four">
          Avg time to shortlist — <span className="text-border-light">48h</span>
        </p>
        <div className="flex gap-1.5">
          {SCENARIOS.map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                dotIndex === index ? "w-5 bg-success" : "w-1.5 bg-bg-cream/25",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchingEngine;
