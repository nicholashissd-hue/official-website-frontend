import dotParticle from "@/assets/svg/dots-two.svg";
import { Animated } from "@/components/ui/animated";
import SectionTitle from "@/components/ui/section-title";
import {
  businessOutcomesData,
  businessOutcomesText,
} from "@/contents/screens/home";

const BusinessOutcomes = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFBF7] py-22 md:py-25">
      <img
        src={dotParticle}
        alt="Decorative pattern"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden opacity-70 md:block"
      />

      <div className="container relative z-10">
        <Animated
          variant="slideUp"
          className="mx-auto max-w-188 text-center"
        >
          <SectionTitle className="mb-3 text-secondary">
            {businessOutcomesText.title}
          </SectionTitle>
          <p className="mx-auto max-w-160 text-sm leading-6 text-accent-one md:text-base">
            {businessOutcomesText.subtext}
          </p>
        </Animated>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
          {businessOutcomesData.map((outcome, index) => (
            <Animated
              key={outcome.title}
              variant="slideUp"
              delay={index * 0.1}
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-[28px] border border-[#DDE8D5] bg-white p-6 shadow-[0_24px_80px_rgba(2,54,27,0.08)] md:p-8">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8BA396]">
                    Outcome {index + 1}
                  </span>
                  <span className="h-px flex-1 bg-[#DDE8D5]" />
                </div>

                <h3 className="font-urbanist text-3xl font-semibold leading-9 text-primary">
                  {outcome.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-[#5B665F] md:text-base md:leading-7">
                  {outcome.description}
                </p>
              </article>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOutcomes;
