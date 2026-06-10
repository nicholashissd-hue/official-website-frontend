import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { statsData } from "@/contents/screens/home";
import Reveal, { EASE, Lift } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

interface CounterProps {
  prefix: string;
  value: number;
  suffix: string;
  delay: number;
}

const Counter = ({ prefix, value, suffix, delay }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      delay,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

/** Color rotation for the stat blocks — Andela-style card deck. */
const TONES = [
  { card: "grain relative bg-primary", number: "text-bg-cream", label: "text-accent-four" },
  { card: "bg-border-light", number: "text-primary", label: "text-primary/60" },
  { card: "bg-success", number: "text-deep", label: "text-deep/70" },
  { card: "bg-white ring-1 ring-primary/10", number: "text-primary", label: "text-accent-three" },
];

const Stats = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container pb-4 pt-14 md:pb-8 md:pt-20">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {statsData.map((stat, index) => {
            const tone = TONES[index % TONES.length];

            return (
              <Reveal key={stat.id} delay={index * 0.08}>
                <Lift
                  className={cn("overflow-hidden rounded-3xl p-6 md:p-8", tone.card)}
                >
                <p
                  className={cn(
                    "font-display text-[clamp(2.1rem,4vw,3.3rem)] font-semibold leading-none tracking-[-0.02em]",
                    tone.number,
                  )}
                >
                  <Counter
                    prefix={stat.prefix}
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={index * 0.12}
                  />
                </p>
                <p
                  className={cn(
                    "mt-3.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em]",
                    tone.label,
                  )}
                >
                  {stat.label}
                </p>
                </Lift>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
