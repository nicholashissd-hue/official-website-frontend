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
/** How long to wait for a hash target to mount before giving up on it. */
const WAIT_MS = 2000;
const POLL_MS = 50;

const RouteArrival = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timer = 0;
    const deadline = Date.now() + WAIT_MS;

    const landAtTop = () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
    };

    // Timers rather than animation frames: rAF is suspended entirely while a
    // tab is in the background, so a deep link opened in a new tab would
    // never resolve and the reader would find the top of the page.
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

      if (Date.now() < deadline) {
        timer = window.setTimeout(run, POLL_MS);
        return;
      }
      landAtTop();
    };

    run();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default RouteArrival;
