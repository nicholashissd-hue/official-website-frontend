import { servicesData, servicesText } from "@/contents/screens/home";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/** "How ElderOps Delivers Results" — numbered editorial ledger rows. */
const DeliveryModel = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="01"
          eyebrow="The Model"
          title={servicesText.title}
          lede={servicesText.subtext}
        />

        <div className="border-t border-primary/10">
          {servicesData.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.06}
              className="group grid gap-3 border-b border-primary/10 py-9 transition-colors duration-500 hover:bg-bg-light/40 md:grid-cols-[90px_1.1fr_1.3fr] md:gap-10 md:py-12"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-success">
                0{index + 1}
              </span>
              <h3 className="max-w-md font-display text-[1.45rem] leading-snug tracking-[-0.01em] text-primary transition-transform duration-500 group-hover:translate-x-2 md:text-[1.7rem]">
                {service.title}
              </h3>
              <p className="text-[15px] leading-[1.8] text-accent-one">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryModel;
