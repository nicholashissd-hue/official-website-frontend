import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroPoster from "@/assets/webp/v4/hero-poster.webp";
import { hero } from "@/contents/screens/homeV4";
import { EASE } from "@/components/ui/reveal";
import { SignalButton } from "@/components/ui/v4";

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
  // Phones stream a 960x540 encode (1.5MB) instead of the 1080p file (8MB).
  // Under the scrim at phone size the difference is invisible, and on a
  // throttled connection the smaller file stops the video competing with
  // everything else for bandwidth.
  const [filmSrc] = useState(() =>
    window.matchMedia("(max-width: 767px)").matches
      ? "/video/hero-film-mobile.mp4"
      : "/video/hero-film.mp4",
  );
  // The film fades in over the poster only once frames are actually
  // advancing, so neither the first play nor a loop restart ever pops.
  const [isFilmLive, setIsFilmLive] = useState(false);

  // BCG X model: the poster (a ~60KB webp of the film's exact first frame)
  // paints instantly, and the film streams and starts as soon as the
  // browser has frames. The file's bitrate (~1.5 Mbps) is far below any
  // broadband connection, so playback never outruns the download; no
  // buffering gate is needed. The film and poster both begin on the same
  // fully formed frame, so the swap on first paint is invisible.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      setIsPlaying(false);
      return;
    }
    void video.play().catch(() => {});
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
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      {/* No crossfade: the poster IS the film's first frame, so an instant
          swap at the first painted frame is invisible. A fade would blend
          the moving film over the still poster and read as a skip. */}
      <video
        ref={videoRef}
        className={`absolute inset-0 size-full object-cover ${
          isFilmLive ? "opacity-100" : "opacity-0"
        }`}
        src={filmSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onPlaying={() => setIsFilmLive(true)}
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(8_23_18/0.9)_0%,rgb(8_23_18/0.28)_50%,rgb(8_23_18/0.45)_100%)]"
      />

      <div className="container relative pb-16 pt-40 md:pb-24">
        {/* Deliberately not animated. This is the page's largest contentful
            element, and fading it in from zero opacity delayed the LCP
            measurement by the whole length of the entrance. It paints with
            the poster; everything beneath it still rises in. */}
        <h1 className="max-w-5xl font-display text-hero font-bold tracking-[-0.03em] text-bg-cream">
          Stop hiring.
          <br />
          Start shipping.
        </h1>

        <motion.div
          {...rise(0.1)}
          className="mt-8 flex flex-wrap items-end justify-between gap-x-12 gap-y-8"
        >
          <p className="max-w-xl text-lg text-bg-cream/82">{hero.descriptor}</p>
          <div className="flex items-center gap-7">
            <SignalButton to="/contact-us">{hero.primaryCta}</SignalButton>
            {/* A downward glyph has to move down the page. This used to be a
                router link to /services, so the one affordance inviting the
                reader to scroll took them off the page instead. */}
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 border-b border-bg-cream/35 pb-0.5 text-base font-semibold text-bg-cream/85 transition-colors duration-300 hover:text-bg-cream"
            >
              {hero.secondaryCta} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={
          isPlaying ? "Pause background video" : "Play background video"
        }
        className="absolute bottom-6 right-6 grid size-10 place-items-center rounded-full text-bg-cream/80 ring-1 ring-inset ring-bg-cream/35 transition-colors duration-300 hover:text-bg-cream hover:ring-bg-cream/70"
      >
        {isPlaying ? (
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            className="size-3.5"
          >
            <rect x="3" y="2.5" width="3.4" height="11" rx="0.6" />
            <rect x="9.6" y="2.5" width="3.4" height="11" rx="0.6" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            className="size-3.5"
          >
            <path d="M4.5 2.8a.6.6 0 0 1 .92-.5l8.2 5.2a.6.6 0 0 1 0 1L5.42 13.7a.6.6 0 0 1-.92-.5z" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default Hero;
