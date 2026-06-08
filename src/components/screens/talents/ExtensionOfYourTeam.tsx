import check from "@/assets/svg/check.svg";
import enterpriseImg from "@/assets/svg/enterprise-ready-feature-imge.svg";
import dotParticle from "@/assets/svg/matching-approach-dot.svg";
import talentImg from "@/assets/svg/talent-image.svg";
import { Animated } from "@/components/ui/animated";
import FeatureListItem from "@/components/ui/feature-list-item";
import SectionTitle from "@/components/ui/section-title";
import {
  enterpriseReadyData,
  enterpriseReadyText,
  extensionOfYourTeamText,
} from "@/contents/screens/talents";

const ExtensionOfYourTeam = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#E4EBDD] bg-white">
      <div className="container relative z-10 py-16 md:py-24 lg:py-28">
        <img
          src={dotParticle}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-16 top-0 hidden opacity-80 lg:block"
        />

        <Animated
          variant="slideUp"
          className="mx-auto max-w-[62rem] text-center"
        >
          <SectionTitle className="md:!text-[clamp(3rem,4vw,3.85rem)] md:!leading-[1.05]">
            {extensionOfYourTeamText.title}
          </SectionTitle>
        </Animated>

        <Animated
          variant="scale"
          delay={0.2}
          className="mx-auto mt-10 aspect-[1312/733] w-full max-w-[78rem] overflow-hidden rounded-[1.75rem] sm:mt-12 md:mt-14 lg:mt-16"
        >
          <img
            src={talentImg}
            alt="Team collaboration illustration"
            className="size-full object-cover object-center"
          />
        </Animated>

        <div className="mt-12 pt-12 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20">
          <div className="flex flex-col gap-10 lg:grid lg:min-h-[40rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12 xl:min-h-[44rem] xl:gap-16">
            <Animated variant="slideRight" className="max-w-[38rem]">
              <SectionTitle className="mb-3 md:!text-[clamp(3rem,4vw,3.85rem)] md:!leading-[1.05]">
                {enterpriseReadyText.title}
              </SectionTitle>
              <p className="max-w-[34rem] text-[0.98rem] leading-7 text-accent-one md:text-[1.08rem] md:leading-8">
                {enterpriseReadyText.description}
              </p>

              <ul className="mt-8 list-none space-y-5 md:mt-10 md:space-y-6 lg:mt-12">
                {enterpriseReadyData.map((item, index) => (
                  <FeatureListItem
                    key={item.id}
                    icon={check}
                    title={item.title}
                    description={item.description}
                    delay={index * 0.1}
                  />
                ))}
              </ul>
            </Animated>

            <Animated
              variant="slideLeft"
              delay={0.2}
              className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] sm:min-h-[28rem] lg:min-h-[36rem] xl:min-h-[40rem]"
            >
              <img
                src={enterpriseImg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 size-full rounded-[1.75rem] object-cover"
                style={{
                  imageRendering: "auto",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="glass-card max-w-[29rem] rounded-[1.5rem] p-8 text-white sm:p-10">
                  <h3 className="mb-4 font-urbanist text-[3.2rem] font-semibold leading-none lg:mb-6 xl:text-[4.25rem]">
                    {enterpriseReadyText.statTitle}
                  </h3>
                  <h4 className="mb-2 font-urbanist text-2xl font-semibold md:text-3xl">
                    {enterpriseReadyText.statSubtitle}
                  </h4>
                  <p className="text-sm md:text-base">
                    {enterpriseReadyText.statDescription}
                  </p>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionOfYourTeam;
