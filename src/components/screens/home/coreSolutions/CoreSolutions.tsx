import { useState } from "react";
import dotParticle from "@/assets/svg/dots-two.svg";
// import Button from "@/components/ui/button";
import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import { coreSolutionsData, coreSolutionsText } from "@/contents/screens/home";
import ExpandableCard from "./ExpandableCard";
import SolutionCard from "./SolutionCard";

const CoreSolutions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-bg-cream">
      <div className="relative container pt-8 pb-22 md:py-25">
        <img
          src={dotParticle}
          alt="Decorative pattern"
          aria-hidden="true"
          className="hidden md:block md:absolute md:top-0 md:right-16"
        />

        <Animated
          variant="slideUp"
          className="flex flex-col items-center gap-6 mb-12 md:flex-row md:flex-wrap md:items-center md:justify-between md:mb-16"
        >
          <div className="text-secondary text-center md:max-w-[820px] md:text-left">
            <SectionTitle className="mb-2">
              {coreSolutionsText.title}
            </SectionTitle>
            <p className="text-accent-one text-sm md:text-base">
              {coreSolutionsText.subtext}
            </p>
          </div>
        </Animated>
        {/* Mobile: stacked cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {coreSolutionsData.map((solution) => (
            <SolutionCard
              key={solution.id}
              image={solution.image}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
        {/* Desktop: Expandable cards */}
        <div className="hidden lg:flex justify-center gap-4">
          {coreSolutionsData.map((solution, index) => (
            <ExpandableCard
              key={solution.id}
              image={solution.image}
              title={solution.title}
              description={solution.description}
              isActive={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSolutions;
