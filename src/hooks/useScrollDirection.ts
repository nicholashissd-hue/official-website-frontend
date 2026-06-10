import { useEffect, useState } from "react";

/**
 * Visibility flag for the hide-on-scroll-down header.
 * One passive listener for the component's lifetime, work batched into
 * requestAnimationFrame, and state only changes when visibility flips —
 * the previous version re-subscribed and re-rendered on every scroll tick.
 */
export const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const visible = y < 50 || y < lastY;
      lastY = y;
      setIsVisible((prev) => (prev === visible ? prev : visible));
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
