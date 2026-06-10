import { useEffect, useState } from "react";

/** Accumulated upward scroll required before the header reveals. */
const SHOW_AFTER_UP_PX = 90;
/** Accumulated downward scroll required before the header hides. */
const HIDE_AFTER_DOWN_PX = 12;
/** Always show within this distance from the top. */
const TOP_ZONE_PX = 80;

/**
 * Visibility flag for the hide-on-scroll-down header, with hysteresis:
 * a stray pixel of upward movement (trackpad jitter, momentum wobble)
 * doesn't reveal it — only a deliberate upward scroll does.
 * One passive rAF-batched listener; state changes only on flips.
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

      let visible: boolean | null = null;

      if (y < TOP_ZONE_PX) {
        visible = true;
        upTravel = 0;
        downTravel = 0;
      } else if (delta < 0) {
        upTravel += -delta;
        downTravel = 0;
        if (upTravel >= SHOW_AFTER_UP_PX) visible = true;
      } else if (delta > 0) {
        downTravel += delta;
        upTravel = 0;
        if (downTravel >= HIDE_AFTER_DOWN_PX) visible = false;
      }

      if (visible !== null) {
        setIsVisible((prev) => (prev === visible ? prev : visible));
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
