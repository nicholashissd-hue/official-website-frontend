import dotParticle from "@/assets/svg/matching-approach-dot.svg";
import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import connectingLineTop from "@/assets/svg/connecting-line-top.svg";
import connectingLineBottom from "@/assets/svg/connecting-line-bottom.svg";
import { howItWorksData, howItWorksText } from "@/contents/screens/solutions";
import MatchingApproachCard from "./MatchingApproachCard";

const HowItWorks = () => {
  return (
    <section className="relative container py-16 md:py-24 lg:flex lg:min-h-svh lg:flex-col lg:justify-center">
      <img
        src={dotParticle}
        alt="Decorative pattern"
        aria-hidden="true"
        className="absolute right-0 top-0 hidden max-h-52 sm:block"
      />

      <div className="z-10 pb-0">
        <Animated variant="slideUp" className="mb-10 md:mb-18">
          <SectionTitle className="md:!text-[clamp(3rem,4vw,3.85rem)] md:!leading-[1.05]">
            {howItWorksText.title}
          </SectionTitle>
        </Animated>

        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 xl:gap-7">
          {/* Line connecting card 2 to card 3 (top) */}
          <img
            src={connectingLineTop}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: "calc(25% + (25% - 166.5px))",
              width: "333px",
              maxWidth: "calc(50% - 6rem)",
              top: "-10%",
            }}
          />

          {/* Line connecting card 1 to card 2 (bottom) */}
          <img
            src={connectingLineBottom}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: "calc(0% + (25% - 166.5px))",
              width: "333px",
              maxWidth: "calc(50% - 6rem)",
              bottom: "-13%",
            }}
          />

          {/* Line connecting card 3 to card 4 (bottom) */}
          <img
            src={connectingLineBottom}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: "calc(50% + (25% - 166.5px))",
              width: "333px",
              maxWidth: "calc(50% - 6rem)",
              bottom: "-13%",
            }}
          />

          {howItWorksData.map((step, index) => (
            <Animated key={step.id} variant="slideUp" delay={index * 0.1}>
              <MatchingApproachCard
                step={step.step}
                title={step.title}
                description={step.description}
              />
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
