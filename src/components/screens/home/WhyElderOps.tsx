import {
  whyOrganizationsChooseData,
  whyWeStandApartText,
} from "@/contents/screens/home";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/** "Why Organizations Choose ElderOps" — hairline 2×2 grid. */
const WhyElderOps = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="03"
          eyebrow="Why ElderOps"
          title={whyWeStandApartText.title}
          lede={whyWeStandApartText.subtext}
        />

        <div className="grid border-l border-t border-primary/10 sm:grid-cols-2">
          {whyOrganizationsChooseData.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.07}
              className="group border-b border-r border-primary/10 p-8 transition-colors duration-500 hover:bg-white md:p-12"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-success">
                0{index + 1}
              </span>
              <h3 className="mt-6 font-display text-xl leading-snug tracking-[-0.01em] text-primary md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-[1.8] text-accent-one">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyElderOps;
