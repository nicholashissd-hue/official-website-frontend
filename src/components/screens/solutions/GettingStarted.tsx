import { gettingStartedData, gettingStartedText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/** "Getting Started Is Simple" — quiet numerals, per the brief. */
const GettingStarted = () => {
  return (
    <section className="border-t border-primary/10 bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="05"
          eyebrow="Getting Started"
          title={gettingStartedText.title}
          lede={gettingStartedText.subtext}
        />

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {gettingStartedData.map((step, index) => (
            <Reveal
              key={step.step}
              delay={index * 0.1}
              className="relative border-t border-primary/15 pt-8"
            >
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-px w-12 bg-success"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-three">
                Step {step.step}
              </span>
              <h3 className="mt-5 font-display text-xl leading-snug tracking-[-0.01em] text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-accent-one">
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
