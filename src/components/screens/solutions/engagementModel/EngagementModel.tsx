import SectionTitle from "@/components/ui/section-title";
import { Animated, Stagger, StaggerItem } from "@/components/ui/animated";
import dotParticle from "@/assets/svg/engagement-model-dots.svg";
import {
  engagementModelsData,
  engagementModelsText,
} from "@/contents/screens/solutions";
import EngagementModelCard from "./EngagementModelCard";

const EngagementModel = () => {
  return (
    <section className="relative border-y border-[#E4EBDD] bg-[#F7FAF4]">
      <div className="container relative py-16 md:py-24 lg:flex lg:min-h-svh lg:flex-col lg:justify-center">
        <img
          src={dotParticle}
          alt="Decorative pattern"
          className="absolute right-16 top-0 hidden opacity-80 lg:block"
          aria-hidden="true"
        />

        <div className="z-10">
          <Animated variant="slideUp" className="mx-auto max-w-[48rem] text-center">
            <SectionTitle className="mb-3 md:!text-[clamp(3rem,4vw,3.85rem)] md:!leading-[1.05]">
              {engagementModelsText.title}
            </SectionTitle>
            <p className="mx-auto max-w-[41rem] text-[0.98rem] leading-7 text-accent-one md:text-[1.08rem] md:leading-8">
              {engagementModelsText.description}
            </p>
          </Animated>

          <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 xl:gap-8">
            {engagementModelsData.map((model) => (
              <StaggerItem key={model.id} variant="slideUp">
                <EngagementModelCard
                  title={model.title}
                  description={model.description}
                  bestFor={model.bestFor}
                />
              </StaggerItem>
            ))}
          </Stagger>

          {/* <Animated
            variant="fadeIn"
            delay={0.6}
            className="text-xs text-[#557866] mt-10 text-center uppercase"
          >
            {engagementModelsText.footerText}
          </Animated> */}
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
