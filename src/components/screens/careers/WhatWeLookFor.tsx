import { lookForData, lookForText } from "@/contents/screens/careers";
import SectionHeading from "@/components/ui/section-heading";
import PhotoCard from "@/components/ui/photo-card";
import Reveal, { Lift } from "@/components/ui/reveal";
import ladyInOffice from "@/assets/jpg/lady-in-office.jpg";

/** "What We Look For" — five quality cards + a human photo completing the grid. */
const WhatWeLookFor = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="01"
          eyebrow="The Bar"
          title={lookForText.title}
          lede={lookForText.subtext}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lookForData.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <Lift className="rounded-3xl bg-white p-7 ring-1 ring-primary/10 hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)] md:p-8">
                <span className="grid size-10 place-items-center rounded-full bg-success/10 font-display text-base font-semibold text-success">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-accent-one">
                  {item.description}
                </p>
              </Lift>
            </Reveal>
          ))}

          <Reveal delay={lookForData.length * 0.07}>
            <PhotoCard
              src={ladyInOffice}
              alt="An ElderOps engineer collaborating inside a client team"
              caption="Senior by standard, not by title"
              className="h-full min-h-[220px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhatWeLookFor;
