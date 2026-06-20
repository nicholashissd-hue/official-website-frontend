import { vettingSteps, vettingText } from "@/contents/screens/careers";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/** Badge colors deepen across the process. */
const BADGES = [
  "bg-primary text-bg-cream",
  "bg-success text-deep",
  "bg-border-light text-deep",
  "bg-white text-primary ring-1 ring-primary/15",
];

/** "Our Vetting Philosophy" — a four-step process along a dashed track. */
const VettingPhilosophy = () => {
  return (
    <section className="bg-bg-light">
      <div className="container section-space-block">
        <SectionHeading
          index="02"
          eyebrow="How We Vet"
          title={vettingText.title}
          lede={vettingText.subtext}
        />

        <div className="relative grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Dashed connector behind the badges (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[6%] right-[6%] top-6 hidden border-t-2 border-dashed border-primary/15 lg:block"
          />

          {vettingSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.1} className="relative">
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
              <p className="mt-2.5 text-[15px] leading-[1.8] text-accent-one">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VettingPhilosophy;
