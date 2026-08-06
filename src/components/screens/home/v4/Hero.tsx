import { motion } from "framer-motion";
import heroImage from "@/assets/webp/v4/hero-home.webp";
import { hero } from "@/contents/screens/homeV4";
import { EASE } from "@/components/ui/reveal";
import { GhostLink, SignalButton } from "@/components/ui/v4";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/**
 * Cinematic opener: full-bleed documentary photograph under a near-black
 * scrim, headline seated low-left, one signal action beside a ghost link.
 * The photograph settles with a single slow Ken Burns move (no loops).
 */
const Hero = () => {
  return (
    <section className="relative flex min-h-[94svh] flex-col justify-end overflow-hidden bg-nearblack">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          fetchPriority="high"
          className="kenburns size-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(8_23_18/0.93)_0%,rgb(8_23_18/0.36)_48%,rgb(8_23_18/0.52)_100%)]" />
      </div>

      <div className="container relative pb-16 pt-40 md:pb-24">
        <motion.p
          {...rise(0)}
          className="font-display text-[16px] font-semibold tracking-[-0.01em] text-signal"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          {...rise(0.06)}
          className="mt-4 max-w-5xl font-display text-[clamp(3.4rem,7.8vw,6.75rem)] font-bold leading-none tracking-[-0.03em] text-bg-cream"
        >
          {hero.title}
        </motion.h1>

        <motion.div
          {...rise(0.14)}
          className="mt-9 flex flex-wrap items-end justify-between gap-x-12 gap-y-8"
        >
          <p className="max-w-xl text-[17px] leading-[1.6] text-bg-cream/80 md:text-[19px]">
            {hero.subtext}
          </p>
          <div className="flex items-center gap-7">
            <SignalButton to="/contact-us">{hero.primaryCta}</SignalButton>
            <GhostLink to="/services" onDark>
              {hero.secondaryCta} <span aria-hidden="true">↓</span>
            </GhostLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
