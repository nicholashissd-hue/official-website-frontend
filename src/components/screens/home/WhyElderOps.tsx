import {
  whyOrganizationsChooseData,
  whyWeStandApartText,
} from "@/contents/screens/home";
import SectionHeading from "@/components/ui/section-heading";
import PhotoCard from "@/components/ui/photo-card";
import Reveal, { Lift } from "@/components/ui/reveal";
import ladyInOffice from "@/assets/jpg/lady-in-office.jpg";

/** "Why Organizations Choose ElderOps" — lime color block with photo collage. */
const WhyElderOps = () => {
  return (
    <section className="grain relative overflow-hidden bg-pine">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_0%_100%,#02361b_0%,transparent_60%)]"
      />
      <div className="container section-space-block relative">
        <SectionHeading
          dark
          index="03"
          eyebrow="Why ElderOps"
          title={whyWeStandApartText.title}
          lede={whyWeStandApartText.subtext}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <PhotoCard
              src={ladyInOffice}
              alt="An ElderOps engineer working inside a client team"
              caption="Part of your team from week one"
              className="h-full min-h-[300px] lg:min-h-[460px]"
            />
          </Reveal>

          {whyOrganizationsChooseData.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <Lift className="rounded-3xl bg-bg-cream p-7 hover:shadow-[0_24px_50px_rgba(2,54,27,0.12)] md:p-9">
                <span className="grid size-10 place-items-center rounded-full bg-success/12 font-display text-base font-semibold text-success">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-accent-one">
                  {item.description}
                </p>
              </Lift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyElderOps;
