import { gettingStartedData, gettingStartedText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/** Badge colors rotate through the brand deck. */
const BADGES = [
  "bg-primary text-bg-cream",
  "bg-success text-deep",
  "bg-border-light text-primary",
  "bg-white text-primary ring-1 ring-primary/15",
];

/** "Getting Started Is Simple" — four steps along a dashed connector. */
const GettingStarted = () => {
  return (
    <section id="start" className="scroll-mt-24 bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="05"
          eyebrow="Getting Started"
          title={gettingStartedText.title}
          lede={gettingStartedText.subtext}
        />

        <div className="relative grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Dashed connector behind the badges (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[6%] right-[6%] top-6 hidden border-t-2 border-dashed border-primary/15 lg:block"
          />

          {gettingStartedData.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.1} className="relative">
              <span
                className={cn(
                  "relative grid size-12 place-items-center rounded-full font-display text-lg font-semibold shadow-[0_8px_20px_rgba(2,54,27,0.12)]",
                  BADGES[index % BADGES.length],
                )}
              >
                {index + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.75] text-accent-one">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
