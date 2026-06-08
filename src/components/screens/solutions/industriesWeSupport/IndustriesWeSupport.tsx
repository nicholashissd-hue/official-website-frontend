import { useState } from "react";
import SectionTitle from "@/components/ui/section-title";
import { Animated, Stagger, StaggerItem } from "@/components/ui/animated";
// import dotParticle from "@/assets/svg/industries-we-support-dots.svg";
import IndustriesCard from "./IndustriesCard";
import IndustryModal from "./IndustryModal";
import { industriesData, industriesText } from "@/contents/screens/solutions";

const IndustriesWeSupport = () => {
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenCardId(id);
  };

  const handleClose = () => {
    setOpenCardId(null);
  };

  const selectedIndustry = industriesData.find((ind) => ind.id === openCardId);

  return (
    <section className="relative container py-16 md:py-24 lg:flex lg:min-h-svh lg:flex-col lg:justify-center">
      {/* <img
        src={dotParticle}
        alt="Decorative pattern"
        className="absolute left-4 top-0 hidden lg:block lg:left-16"
        aria-hidden="true"
      /> */}
      <Animated variant="slideUp" className="mb-10 text-center md:mb-18 lg:mb-20">
        <SectionTitle className="md:!text-[clamp(3rem,4vw,3.85rem)] md:!leading-[1.05]">
          {industriesText.title}
        </SectionTitle>
      </Animated>

      <Stagger className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-9">
        {industriesData.map((industry) => (
          <StaggerItem key={industry.id} variant="slideUp">
            <IndustriesCard
              number={industry.number}
              title={industry.title}
              onToggle={() => handleToggle(industry.id)}
            />
          </StaggerItem>
        ))}
      </Stagger>

      {selectedIndustry && (
        <IndustryModal
          isOpen={!!openCardId}
          onClose={handleClose}
          {...selectedIndustry}
        />
      )}
    </section>
  );
};

export default IndustriesWeSupport;
