import { valueData, valueText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/** "How We Drive Value" — five lifted cards on the lime block. */
const ValueOutcomes = () => {
  return (
    <section className="bg-border-light">
      <div className="container section-space-block">
        <SectionHeading
          index="03"
          eyebrow="Business Value"
          title={valueText.title}
          lede={valueText.subtext}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {valueData.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 0.08}
              className="rounded-3xl bg-bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)] md:p-7"
            >
              <span className="grid size-10 place-items-center rounded-full bg-success/10 font-display text-base font-semibold text-success">
                {index + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-primary">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-accent-one">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueOutcomes;
