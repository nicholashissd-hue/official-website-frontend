import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { statsData } from "@/contents/screens/home";
import Reveal, { EASE, Lift } from "@/components/ui/reveal";
import talentOne from "@/assets/png/talent-one.png";
import talentTwo from "@/assets/png/talent-two.png";
import talentThree from "@/assets/png/talent-three.png";

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

const AVATARS = [talentOne, talentTwo, talentThree];

/**
 * Asymmetric stat composition (not a banner row): one tall feature card
 * for the network, a varied grid for the rest.
 */
const Stats = () => {
  const [lead, second, third, fourth] = statsData;

  return (
    <section className="bg-bg-cream">
      <div className="container grid gap-5 pb-6 pt-10 md:pb-10 md:pt-14 lg:grid-cols-[1.05fr_1fr]">
        {/* Feature: the network */}
        <Reveal>
          <Lift className="grain relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_110%_at_100%_0%,#074527_0%,transparent_60%)]"
            />
            <p className="relative font-display text-[clamp(3.4rem,6vw,5.2rem)] font-semibold leading-none tracking-[-0.02em] text-bg-cream">
              <Counter
                prefix={lead.prefix}
                value={lead.value}
                suffix={lead.suffix}
                delay={0}
              />
            </p>
            <div className="relative mt-8 flex items-center justify-between gap-6">
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-accent-four">
                {lead.label}
              </p>
              <div className="flex shrink-0 -space-x-2.5">
                {AVATARS.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt=""
                    className="size-9 rounded-full border-2 border-primary object-cover"
                  />
                ))}
              </div>
            </div>
          </Lift>
        </Reveal>

        {/* Supporting stats — varied sizes */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.08}>
            <Lift className="rounded-3xl bg-bg-light p-7">
              <p className="font-display text-[clamp(2rem,3.2vw,2.8rem)] font-semibold leading-none tracking-[-0.02em] text-primary">
                <Counter
                  prefix={second.prefix}
                  value={second.value}
                  suffix={second.suffix}
                  delay={0.12}
                />
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-primary/60">
                {second.label}
              </p>
            </Lift>
          </Reveal>

          <Reveal delay={0.14}>
            <Lift className="rounded-3xl bg-success p-7">
              <p className="font-display text-[clamp(2rem,3.2vw,2.8rem)] font-semibold leading-none tracking-[-0.02em] text-deep">
                <Counter
                  prefix={third.prefix}
                  value={third.value}
                  suffix={third.suffix}
                  delay={0.2}
                />
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-deep/70">
                {third.label}
              </p>
            </Lift>
          </Reveal>

          <Reveal delay={0.2} className="sm:col-span-2">
            <Lift className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-white px-7 py-6 ring-1 ring-primary/10">
              <p className="font-display text-[clamp(2rem,3.2vw,2.8rem)] font-semibold leading-none tracking-[-0.02em] text-primary">
                <Counter
                  prefix={fourth.prefix}
                  value={fourth.value}
                  suffix={fourth.suffix}
                  delay={0.26}
                />
              </p>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-accent-three">
                {fourth.label}
              </p>
            </Lift>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Stats;
