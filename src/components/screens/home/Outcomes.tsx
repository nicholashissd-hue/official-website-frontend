import { businessOutcomesData, businessOutcomesText } from "@/contents/screens/home";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/** "Real Business Challenges. Real Engineering Outcomes." */
const Outcomes = () => {
  return (
    <section className="border-t border-primary/10 bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="05"
          eyebrow="Outcomes"
          title={businessOutcomesText.title}
          lede={businessOutcomesText.subtext}
        />

        <div className="grid gap-px border border-primary/10 bg-primary/10 lg:grid-cols-3">
          {businessOutcomesData.map((outcome, index) => (
            <Reveal
              key={outcome.title}
              delay={index * 0.08}
              className="group bg-bg-cream p-8 transition-colors duration-500 hover:bg-white md:p-10"
            >
              <span className="inline-block border border-primary/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-one transition-colors duration-500 group-hover:border-success/40 group-hover:text-success">
                {outcome.tag}
              </span>
              <h3 className="mt-7 font-display text-xl leading-snug tracking-[-0.01em] text-primary md:text-2xl">
                {outcome.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.8] text-accent-one">
                {outcome.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
