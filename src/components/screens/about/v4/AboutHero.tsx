import { motion } from "framer-motion";
import heroImage from "@/assets/webp/v4/hero-about-dusk.webp";
import heroImage1600 from "@/assets/webp/v4/hero-about-dusk-1600.webp";
import heroImage828 from "@/assets/webp/v4/hero-about-dusk-828.webp";
import { hero } from "@/contents/screens/aboutV4";
import { EASE } from "@/components/ui/reveal";
import { Kicker, SignalButton } from "@/components/ui/v4";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/** Dark photo hero carrying the thesis as the headline. */
const AboutHero = () => (
  <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-nearblack">
    <img
      src={heroImage}
      srcSet={`${heroImage828} 828w, ${heroImage1600} 1600w, ${heroImage} 2880w`}
      sizes="100vw"
      alt="The ElderOps team working around a conference table at dusk"
      className="absolute inset-0 size-full object-cover"
      style={{ objectPosition: "center 42%" }}
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
        <h1 className="mt-3 max-w-5xl font-display text-title font-bold tracking-[-0.03em] text-bg-cream">
          {hero.title}
        </h1>
      </motion.div>

      <motion.div
        {...rise(0.1)}
        className="mt-8 flex flex-wrap items-end justify-between gap-x-12 gap-y-8"
      >
        <p className="max-w-xl text-lg text-bg-cream/82">{hero.descriptor}</p>
        <SignalButton to="/contact-us">{hero.primaryCta}</SignalButton>
      </motion.div>
    </div>
  </section>
);

export default AboutHero;
