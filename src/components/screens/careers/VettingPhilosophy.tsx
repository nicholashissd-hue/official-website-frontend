import { vettingSteps, vettingText } from "@/contents/screens/careers";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/** Node colors deepen as a candidate moves through the process. */
const NODES = [
  "bg-primary text-bg-cream",
  "bg-success text-deep",
  "bg-border-light text-deep",
  "bg-white text-primary ring-1 ring-primary/15",
];

/**
 * "Our Vetting Philosophy" — a vertical timeline (distinct from the horizontal
 * step tracks used elsewhere on the site): a connected spine of stages every
 * engineer moves through before joining the network.
 */
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

        <div className="mx-auto max-w-3xl">
          {vettingSteps.map((step, index) => {
            const isLast = index === vettingSteps.length - 1;
            return (
              <Reveal key={step.title} delay={index * 0.1}>
                <div className="grid grid-cols-[auto_1fr] gap-6">
                  {/* Spine + node */}
                  <div className="flex flex-col items-center">
                    <span
                      className={cn(
                        "grid size-12 shrink-0 place-items-center rounded-full font-display text-lg font-semibold shadow-[0_8px_20px_rgba(2,54,27,0.12)]",
                        NODES[index % NODES.length],
                      )}
                    >
                      {index + 1}
                    </span>
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="my-1 w-px flex-1 bg-gradient-to-b from-primary/25 to-primary/5"
                      />
                    )}
                  </div>

                  {/* Stage content */}
                  <div className={cn(isLast ? "pb-0" : "pb-12")}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-three">
                      Stage 0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-xl text-[15px] leading-[1.8] text-accent-one">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VettingPhilosophy;
