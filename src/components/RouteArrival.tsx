import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * One place decides where the reader lands after a navigation.
 *
 * This previously reset scroll on pathname change alone, which raced the
 * per-page hash effects and always won: every capability deep link (six in
 * the footer, eight in the home index) put the reader at the top of the page
 * with the anchor still in the URL. Pages also mount behind a 380ms
 * cross-fade, so a hash target does not exist on the first frame; with a hash
 * we wait for it rather than giving up and jumping to the top.
 *
 * Focus follows the scroll so keyboard and screen-reader users continue from
 * the section they asked for instead of from the top of the document.
 */
const MAX_FRAMES = 90; // ~1.5s, comfortably past the page transition

const RouteArrival = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let frame = 0;
    let tries = 0;

    const landAtTop = () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
    };

    const run = () => {
      if (!hash) {
        landAtTop();
        return;
      }

      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: "start" });
        if (!target.hasAttribute("tabindex")) {
          target.setAttribute("tabindex", "-1");
        }
        target.focus({ preventScroll: true });
        return;
      }

      if (tries < MAX_FRAMES) {
        tries += 1;
        frame = requestAnimationFrame(run);
        return;
      }
      landAtTop();
    };

    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default RouteArrival;
