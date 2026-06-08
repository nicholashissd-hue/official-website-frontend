import dotParticle from "@/assets/svg/how-we-deliver-dots.svg";
import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import {
  howWeDeliverData,
  howWeDeliverText,
} from "@/contents/screens/solutions";
import HowWeDeliverCard from "./HowWeDeliverCard";

const HowWeDeliver = () => {
  return (
    <section className="relative container py-16 md:py-24 lg:flex lg:min-h-svh lg:flex-col lg:justify-center">
      <Animated variant="slideUp" className="relative flex items-center justify-between">
        <div className="relative z-10 mx-auto max-w-[48rem] text-center">
          <SectionTitle className="mb-3 md:!text-[clamp(3rem,4vw,3.85rem)] md:!leading-[1.05]">
            {howWeDeliverText.title}
          </SectionTitle>
          <p className="mx-auto max-w-[40rem] text-[0.98rem] leading-7 text-accent-one md:text-[1.08rem] md:leading-8">
            {howWeDeliverText.description}
          </p>
        </div>
        <img
          src={dotParticle}
          alt="Decorative pattern"
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-0 hidden max-h-44 opacity-45 lg:block xl:right-0"
        />
      </Animated>

      {/* Mobile: Grid layout */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 md:hidden">
        {howWeDeliverData.map((item) => (
          <HowWeDeliverCard key={item.id} {...item} />
        ))}
      </div>

      {/* Desktop: Marquee */}
      <div
        className="relative mt-16 hidden overflow-hidden md:block lg:mt-20"
        role="region"
        aria-label="Value drivers"
      >
        <div className="flex animate-marquee">
          <div className="flex shrink-0 gap-8">
            {howWeDeliverData.map((item) => (
              <HowWeDeliverCard key={item.id} {...item} />
            ))}
          </div>
          <div className="ml-8 flex shrink-0 gap-8">
            {howWeDeliverData.map((item) => (
              <HowWeDeliverCard key={item.id + "dup"} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;
