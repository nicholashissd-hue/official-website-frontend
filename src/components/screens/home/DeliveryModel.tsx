import { servicesData, servicesText } from "@/contents/screens/home";
import SectionHeading from "@/components/ui/section-heading";
import PhotoCard from "@/components/ui/photo-card";
import Reveal, { Lift } from "@/components/ui/reveal";
import featuredOne from "@/assets/jpg/featured-one.jpg";

/** "How ElderOps Delivers Results" — photo + lifted numbered cards. */
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

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <Reveal className="min-h-[320px]">
            <PhotoCard
              src={featuredOne}
              alt="A senior engineer shipping production code"
              caption="Embedded, not outsourced"
              chip="Senior only"
              className="h-full min-h-[320px]"
            />
          </Reveal>

          <div className="grid content-between gap-5">
            {servicesData.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.08}>
                <Lift className="flex gap-6 rounded-3xl bg-white p-7 ring-1 ring-primary/10 hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)] md:p-8">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-success/10 font-display text-lg font-semibold text-success">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-[1.75] text-accent-one">
                      {service.description}
                    </p>
                  </div>
                </Lift>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryModel;
