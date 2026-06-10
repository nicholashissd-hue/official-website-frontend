import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { statsData } from "@/contents/screens/home";
import Reveal, { EASE } from "@/components/ui/reveal";

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

const Stats = () => {
  return (
    <section className="border-b border-primary/10 bg-bg-cream">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-primary/10">
          {statsData.map((stat, index) => (
            <Reveal
              key={stat.id}
              delay={index * 0.08}
              className="px-2 py-10 max-lg:[&:nth-child(even)]:border-l max-lg:[&:nth-child(even)]:border-primary/10 max-lg:[&:nth-child(n+3)]:border-t max-lg:[&:nth-child(n+3)]:border-t-primary/10 sm:px-6 lg:px-10 lg:py-16"
            >
              <p className="font-display text-[clamp(2.6rem,4.6vw,4rem)] leading-none tracking-[-0.02em] text-primary">
                <Counter
                  prefix={stat.prefix}
                  value={stat.value}
                  suffix={stat.suffix}
                  delay={index * 0.12}
                />
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-accent-three">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
