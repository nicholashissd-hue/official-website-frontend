import { useEffect, useRef } from "react";

interface ChatLauncherProps {
  onClick: () => void;
  /** Fade the launcher in only after the visitor scrolls past the hero. */
  visible?: boolean;
}

/**
 * Floating launcher that rides up with the footer instead of covering it:
 * while the footer is on screen, the wrapper translates up by the overlap.
 * Scroll math is rAF-batched and only attached while the footer is near.
 */
const ChatLauncher = ({ onClick, visible = true }: ChatLauncherProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const footer = document.querySelector("footer");
    if (!wrap || !footer) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const footerTop = footer.getBoundingClientRect().top;
      const overlap = Math.max(0, window.innerHeight - footerTop);
      wrap.style.transform = overlap > 0 ? `translateY(-${overlap}px)` : "";
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
      } else {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        wrap.style.transform = "";
      }
    });
    observer.observe(footer);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 z-[70] transition-opacity duration-500 sm:bottom-6 sm:right-6 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label="Open the ElderOps Hiring Advisor"
        className="group flex h-12 cursor-pointer items-center gap-3 rounded-full border border-success/50 bg-primary px-5 shadow-[0_18px_45px_rgba(2,54,27,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-success"
      >
        <span
          aria-hidden="true"
          className="animate-pulse-dot size-1.5 rounded-full bg-success"
        />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg-cream">
          Hiring Advisor
        </span>
      </button>
    </div>
  );
};

export default ChatLauncher;
