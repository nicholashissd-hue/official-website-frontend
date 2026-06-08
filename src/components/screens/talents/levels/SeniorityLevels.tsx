import SectionTitle from "@/components/ui/section-title";
import { Animated, Stagger, StaggerItem } from "@/components/ui/animated";
import LevelCard from "./LevelCard";
import {
  seniorityLevelsText,
  seniorityLevelsData,
} from "@/contents/screens/talents";

const SeniorityLevels = () => {
  return (
    <section className="relative border-y border-[#E4EBDD] bg-[#F7FAF4]">
      <div className="container py-16 md:py-24 lg:flex lg:min-h-svh lg:flex-col lg:justify-center">
        <Animated
          variant="slideUp"
          className="mb-10 flex flex-col items-center justify-center text-center md:mb-18 lg:mb-20"
        >
          <SectionTitle className="mb-3 md:!text-[clamp(3rem,4vw,3.85rem)] md:!leading-[1.05]">
            {seniorityLevelsText.title}
          </SectionTitle>
          <p className="max-w-[40rem] text-[0.98rem] leading-7 text-accent-one md:text-[1.08rem] md:leading-8">
            {seniorityLevelsText.description}
          </p>
        </Animated>

        <Stagger
          staggerDelay={0.15}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-9"
        >
          {seniorityLevelsData.map((level) => (
            <StaggerItem key={level.id} variant="slideUp">
              <LevelCard
                level={level.level}
                title={level.title}
                description={level.description}
                experience={level.experience}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default SeniorityLevels;
