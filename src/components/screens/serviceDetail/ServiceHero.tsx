import { motion } from "framer-motion";
import { EASE } from "@/components/ui/reveal";
import { Kicker, SignalButton } from "@/components/ui/v4";
import type { ServicePage } from "@/contents/services";
import { SERVICE_PHOTOS } from "@/contents/services/photos";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/**
 * The capability page opener: the page's one photograph under the site's
 * two scrims, the capability named in the kicker, and a single action.
 *
 * Shorter than the section heroes (82svh against 92svh) because these pages
 * are long and the reader arrived to read, not to be greeted.
 */
const ServiceHero = ({ page }: { page: ServicePage }) => {
  const photo = SERVICE_PHOTOS[page.id];

  return (
    <section className="relative flex min-h-[82svh] flex-col justify-end overflow-hidden bg-nearblack">
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes="100vw"
        alt={page.hero.photoAlt}
        // The hero image is the largest contentful paint on these pages, so
        // it is fetched eagerly and at high priority rather than lazily.
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
        style={{ objectPosition: page.hero.photoPosition ?? "center" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(8_23_18/0.66)_0%,rgb(8_23_18/0.15)_52%,rgb(8_23_18/0.26)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(100deg,rgb(8_23_18/0.40)_0%,rgb(8_23_18/0.16)_40%,transparent_70%)]"
      />
      {/* A third scrim, for the nav rather than the headline. The lower-left
          pocket leaves the top right of the frame open, and these eight
          photographs are not all dark up there: the header links sat on bare
          image. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(to_bottom,rgb(8_23_18/0.45)_0%,transparent_100%)]"
      />

      <div className="container relative pb-16 pt-40 md:pb-24">
        <motion.div {...rise(0)}>
          <Kicker onDark>{page.hero.kicker}</Kicker>
          <h1 className="mt-3 max-w-4xl font-display text-title font-bold tracking-[-0.03em] text-bg-cream">
            {page.hero.title}
          </h1>
        </motion.div>

        <motion.div
          {...rise(0.1)}
          className="mt-8 flex flex-wrap items-end justify-between gap-x-12 gap-y-8"
        >
          <p className="max-w-2xl text-lg text-bg-cream/82">
            {page.hero.descriptor}
          </p>
          <div className="flex items-center gap-7">
            <SignalButton to="/contact-us">{page.hero.primaryCta}</SignalButton>
            {/* A downward glyph moves down the page, never off it. */}
            <a
              href="#what-we-do"
              className="inline-flex items-center gap-2 border-b border-bg-cream/35 pb-0.5 text-base font-semibold text-bg-cream/85 transition-colors duration-300 hover:text-bg-cream"
            >
              What we do <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
