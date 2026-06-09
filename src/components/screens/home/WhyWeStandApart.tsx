import dotParticle from "@/assets/svg/dots-three.svg";
import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import {
  whyOrganizationsChooseData,
  whyWeStandApartText,
} from "@/contents/screens/home";

const WhyWeStandApart = () => {
  return (
    <section className="relative overflow-hidden bg-white py-22 md:py-25">
      <div className="container relative">
        <img
          src={dotParticle}
          alt="Decorative pattern"
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 top-0 hidden opacity-80 md:block lg:right-16"
        />

        <Animated
          variant="slideUp"
          className="relative z-10 mx-auto max-w-193 text-center"
        >
          <SectionTitle className="mb-2.5 text-secondary">
            {whyWeStandApartText.title}
          </SectionTitle>
          <p className="mx-auto max-w-177.5 text-sm leading-6 text-accent-one md:text-base">
            {whyWeStandApartText.subtext}
          </p>
        </Animated>

        <Animated
          variant="slideUp"
          delay={0.2}
          className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
        >
          {whyOrganizationsChooseData.map((item, index) => (
            <article
              key={item.title}
              className="group flex min-h-80 flex-col justify-between rounded-[24px] border border-[#E2E8DA] bg-[#FAFBF7] p-6 shadow-[0_24px_70px_rgba(2,54,27,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BFCFAD] hover:shadow-[0_34px_90px_rgba(2,54,27,0.12)]"
            >
              <div>
                <span className="grid size-12 place-items-center rounded-full border border-[#8BA396] font-urbanist text-xl font-semibold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {index + 1}
                </span>

                <h3 className="mt-8 font-urbanist text-2xl font-semibold leading-8 text-primary">
                  {item.title}
                </h3>
              </div>

              <p className="mt-6 text-sm leading-6 text-[#5B665F]">
                {item.description}
              </p>
            </article>
          ))}
        </Animated>
      </div>
    </section>
  );
};

export default WhyWeStandApart;
