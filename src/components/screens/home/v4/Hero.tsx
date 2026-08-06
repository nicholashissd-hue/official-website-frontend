import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroPoster from "@/assets/webp/v4/hero-home.webp";
import { hero } from "@/contents/screens/homeV4";
import { EASE } from "@/components/ui/reveal";
import { GhostLink, SignalButton } from "@/components/ui/v4";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/**
 * The launch-film hero (BCG X pattern): a full-viewport cinematic loop under
 * a near-black scrim, a short statement seated low-left, one action. The film
 * pauses for reduced-motion users (the poster frame carries the scene) and
 * everyone gets a play/pause control.
 */
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-nearblack">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src="/video/hero-film.mp4"
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(8_23_18/0.9)_0%,rgb(8_23_18/0.28)_50%,rgb(8_23_18/0.45)_100%)]"
      />

      <div className="container relative pb-16 pt-40 md:pb-24">
        <motion.h1
          {...rise(0)}
          className="max-w-5xl font-display text-[clamp(3.6rem,8.5vw,7.5rem)] font-bold leading-none tracking-[-0.03em] text-bg-cream"
        >
          We build it.
          <br />
          You own it.
        </motion.h1>

        <motion.div
          {...rise(0.1)}
          className="mt-8 flex flex-wrap items-end justify-between gap-x-12 gap-y-8"
        >
          <p className="max-w-xl text-[17px] leading-[1.6] text-bg-cream/82 md:text-[19px]">
            {hero.descriptor}
          </p>
          <div className="flex items-center gap-7">
            <SignalButton to="/contact-us">{hero.primaryCta}</SignalButton>
            <GhostLink to="/services" onDark>
              {hero.secondaryCta} <span aria-hidden="true">↓</span>
            </GhostLink>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute bottom-6 right-6 grid size-10 place-items-center rounded-full text-bg-cream/80 ring-1 ring-inset ring-bg-cream/35 transition-colors duration-300 hover:text-bg-cream hover:ring-bg-cream/70"
      >
        {isPlaying ? (
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="size-3.5">
            <rect x="3" y="2.5" width="3.4" height="11" rx="0.6" />
            <rect x="9.6" y="2.5" width="3.4" height="11" rx="0.6" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="size-3.5">
            <path d="M4.5 2.8a.6.6 0 0 1 .92-.5l8.2 5.2a.6.6 0 0 1 0 1L5.42 13.7a.6.6 0 0 1-.92-.5z" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default Hero;
