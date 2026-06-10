import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { heroText, heroTickerItems } from "@/contents/screens/home";
import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";
import NetworkCanvas from "@/components/ui/network-canvas";
import Reveal, { EASE } from "@/components/ui/reveal";

/** One masked line of the display headline, rising into view. */
const HeroLine = ({ children, delay }: { children: ReactNode; delay: number }) => (
  <span className="-mb-[0.08em] block overflow-hidden pb-[0.08em]">
    <motion.span
      className="block"
      initial={{ y: "112%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.05, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  return (
    <section className="grain relative flex min-h-svh flex-col overflow-hidden bg-primary">
      {/* Layered depth: base gradient, living lattice, focus vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#02361b_0%,#012112_100%)]"
      />
      <NetworkCanvas />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(72%_64%_at_30%_44%,rgba(1,33,18,0.86)_0%,transparent_72%)]"
      />

      <div className="container relative z-10 flex flex-1 flex-col justify-center pb-20 pt-36 md:pt-40">
        <Reveal immediate delay={0.1} y={16}>
          <Eyebrow dark>Senior Engineering Partners</Eyebrow>
        </Reveal>

        <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.7rem,7vw,5.4rem)] leading-[1.04] tracking-[-0.02em] text-bg-cream">
          <HeroLine delay={0.2}>Your Company Deserves</HeroLine>
          <HeroLine delay={0.32}>
            <em className="italic text-border-light">Senior Engineering</em>
          </HeroLine>
          <HeroLine delay={0.44}>Leadership.</HeroLine>
        </h1>

        <Reveal immediate delay={0.62} y={20}>
          <p className="mt-9 max-w-xl text-[15px] leading-[1.85] text-accent-four md:text-[17px]">
            {heroText.subtext}
          </p>
        </Reveal>

        <Reveal immediate delay={0.78} y={20}>
          <div className="mt-11 flex flex-wrap items-center gap-4">
            <Button to="/contact-us" variant="light" withArrow>
              Start With Clarity
            </Button>
            <Button to="/solutions" variant="outline-light">
              Explore Solutions
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Capability ticker along the hero's base */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="relative z-10 border-t border-bg-cream/10"
      >
        <div className="overflow-hidden py-5">
          <div
            className="animate-marquee flex items-center gap-10"
            style={{ "--marquee-duration": "44s" } as CSSProperties}
          >
            {[...heroTickerItems, ...heroTickerItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex shrink-0 items-center gap-10"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-four">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="size-1 rotate-45 bg-success/70"
                />
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
