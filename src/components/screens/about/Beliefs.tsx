import { useRef, useState } from "react";
import { beliefsData, beliefsText } from "@/contents/screens/about";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/util";

const CarouselArrow = ({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "Previous belief" : "Next belief"}
    className={cn(
      "grid size-11 cursor-pointer place-items-center border border-bg-cream/25 text-bg-cream transition-all duration-300",
      disabled
        ? "pointer-events-none opacity-30"
        : "hover:border-bg-cream hover:bg-bg-cream hover:text-primary",
    )}
  >
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("size-3.5", direction === "prev" && "rotate-180")}
    >
      <path
        d="M1.5 8h12.5m0 0L9.2 3.2M14 8l-4.8 4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  </button>
);

/** "What We Believe" — five principles as a snap carousel (per the brief). */
const Beliefs = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const cardStep = () => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 0;
    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement;
    return second.offsetLeft - first.offsetLeft;
  };

  const scrollToCard = (target: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(beliefsData.length - 1, target));
    track.scrollTo({ left: clamped * cardStep(), behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    const step = cardStep();
    if (!track || !step) return;
    setIndex(
      Math.max(
        0,
        Math.min(beliefsData.length - 1, Math.round(track.scrollLeft / step)),
      ),
    );
  };

  return (
    <section className="grain relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_90%_0%,#074527_0%,transparent_55%)]"
      />

      <div className="container section-space-block relative">
        <div className="flex items-end justify-between gap-8">
          <SectionHeading
            dark
            index="01"
            eyebrow="What We Believe"
            title={beliefsText.title}
            lede={beliefsText.subtext}
            className="mb-0 md:mb-0"
          />
          <div className="hidden shrink-0 gap-3 pb-2 md:flex">
            <CarouselArrow
              direction="prev"
              onClick={() => scrollToCard(index - 1)}
              disabled={index === 0}
            />
            <CarouselArrow
              direction="next"
              onClick={() => scrollToCard(index + 1)}
              disabled={index === beliefsData.length - 1}
            />
          </div>
        </div>

        <Reveal delay={0.1}>
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="scrollbar-hide -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 sm:mx-0 sm:px-0 md:mt-16"
          >
            {beliefsData.map((belief, beliefIndex) => (
              <article
                key={belief.id}
                className="flex w-[86%] shrink-0 snap-start flex-col border border-bg-cream/15 bg-bg-cream/[0.04] p-8 transition-colors duration-500 hover:bg-bg-cream/[0.07] sm:w-[420px] md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-[3.2rem] leading-none text-border-light/25"
                >
                  0{beliefIndex + 1}
                </span>
                <h3 className="mt-6 font-display text-[1.45rem] leading-snug tracking-[-0.01em] text-bg-cream">
                  {belief.title}
                </h3>
                <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-border-light">
                  {belief.summary}
                </p>
                <p className="mt-5 flex-1 text-sm leading-[1.85] text-accent-four">
                  {belief.description}
                </p>

                <div className="mt-8 border-t border-bg-cream/10 pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-four">
                    Principles
                  </p>
                  <ul className="mt-3.5 space-y-2">
                    {belief.principles.map((principle) => (
                      <li
                        key={principle}
                        className="flex gap-2.5 text-[13px] leading-[1.6] text-bg-light/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.5em] size-1 shrink-0 rotate-45 bg-success"
                        />
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Progress rail */}
        <div className="mt-10 flex items-center gap-6">
          <div className="relative h-px flex-1 bg-bg-cream/15">
            <span
              className="absolute inset-y-0 left-0 bg-success transition-all duration-500"
              style={{ width: `${((index + 1) / beliefsData.length) * 100}%` }}
            />
          </div>
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent-four">
            0{index + 1} / 0{beliefsData.length}
          </span>
          <div className="flex gap-3 md:hidden">
            <CarouselArrow
              direction="prev"
              onClick={() => scrollToCard(index - 1)}
              disabled={index === 0}
            />
            <CarouselArrow
              direction="next"
              onClick={() => scrollToCard(index + 1)}
              disabled={index === beliefsData.length - 1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beliefs;
