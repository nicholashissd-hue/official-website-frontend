import { valueData, valueText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/** "How We Drive Value" — five-outcome editorial strip. */
const ValueOutcomes = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="03"
          eyebrow="Business Value"
          title={valueText.title}
          lede={valueText.subtext}
        />

        <div className="grid border-t border-primary/15 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-primary/10">
          {valueData.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 0.08}
              className="group py-9 max-lg:border-b max-lg:border-primary/10 sm:pr-8 lg:px-7 lg:py-12 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-success">
                0{index + 1}
              </span>
              <h3 className="mt-5 font-display text-[1.2rem] leading-snug tracking-[-0.01em] text-primary">
                {value.title}
              </h3>
              <p className="mt-3.5 text-sm leading-[1.75] text-accent-one">
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
