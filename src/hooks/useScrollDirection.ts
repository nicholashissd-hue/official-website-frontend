import { useEffect, useState } from "react";

/** Sub-pixel jitter to ignore so trackpad/momentum wobble doesn't count. */
const DEADZONE_PX = 4;
/** Accumulated upward scroll required before the header reveals. */
const SHOW_AFTER_UP_PX = 26;
/** Accumulated downward scroll required before the header hides. */
const HIDE_AFTER_DOWN_PX = 14;
/** Always show within this distance from the top. */
const TOP_ZONE_PX = 80;

/**
 * Visibility flag for the hide-on-scroll-down header.
 *
 * Reveals on a deliberate (not twitchy) upward scroll and hides on a
 * deliberate downward scroll, with a deadzone so sub-pixel jitter neither
 * triggers nor resets the intent. One passive rAF-batched listener; state
 * only changes when visibility actually flips.
 */
export const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let upTravel = 0;
    let downTravel = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      // Near the top, always reveal and reset intent.
      if (y < TOP_ZONE_PX) {
        upTravel = 0;
        downTravel = 0;
        setIsVisible((prev) => (prev ? prev : true));
        return;
      }

      // Ignore jitter entirely (don't accumulate, don't reset).
      if (Math.abs(delta) < DEADZONE_PX) return;

      if (delta < 0) {
        upTravel += -delta;
        downTravel = 0;
        if (upTravel >= SHOW_AFTER_UP_PX) {
          setIsVisible((prev) => (prev ? prev : true));
        }
      } else {
        downTravel += delta;
        upTravel = 0;
        if (downTravel >= HIDE_AFTER_DOWN_PX) {
          setIsVisible((prev) => (prev ? false : prev));
        }
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};
