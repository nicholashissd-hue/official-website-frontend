import { motion } from "framer-motion";
import heroImage from "@/assets/webp/v4/hero-services-dusk.webp";
import heroImage1600 from "@/assets/webp/v4/hero-services-dusk-1600.webp";
import heroImage828 from "@/assets/webp/v4/hero-services-dusk-828.webp";
import { hero } from "@/contents/screens/servicesV4";
import { EASE } from "@/components/ui/reveal";
import { Kicker, SignalButton } from "@/components/ui/v4";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/**
 * Dark photo hero: dusk corridor, statement low-left, one action.
 * The secondary is a plain in-page anchor down to the first capability.
 */
const ServicesHero = () => (
  <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-nearblack">
    <img
      src={heroImage}
      srcSet={`${heroImage828} 828w, ${heroImage1600} 1600w, ${heroImage} 2880w`}
      sizes="100vw"
      alt="Two ElderOps engineers talking mid-aisle in a dark data center at dusk"
      className="absolute inset-0 size-full object-cover"
      style={{ objectPosition: "center 38%" }}
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(to_top,rgb(8_23_18/0.9)_0%,rgb(8_23_18/0.3)_52%,rgb(8_23_18/0.45)_100%)]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(100deg,rgb(8_23_18/0.78)_0%,rgb(8_23_18/0.38)_40%,transparent_70%)]"
    />

    <div className="container relative pb-16 pt-40 md:pb-24">
      <motion.div {...rise(0)}>
        <Kicker onDark>{hero.kicker}</Kicker>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(3rem,6.8vw,5.75rem)] font-bold leading-none tracking-[-0.03em] text-bg-cream">
          {hero.title}
        </h1>
      </motion.div>

      <motion.div
        {...rise(0.1)}
        className="mt-8 flex flex-wrap items-end justify-between gap-x-12 gap-y-8"
      >
        <p className="max-w-xl text-[17px] leading-[1.6] text-bg-cream/82 md:text-[18px]">
          {hero.descriptor}
        </p>
        <div className="flex items-center gap-7">
          <SignalButton to="/contact-us">{hero.primaryCta}</SignalButton>
          <a
            href="#cloud-infrastructure"
            className="inline-flex items-center gap-2 border-b border-bg-cream/35 pb-0.5 text-[15px] font-semibold text-bg-cream/85 transition-colors duration-300 hover:text-bg-cream"
          >
            {hero.secondaryCta} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesHero;
