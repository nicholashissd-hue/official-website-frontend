import { Animated } from "@/components/ui/animated";
import maskedDots from "@/assets/svg/service-category-bg.svg";
import {
  serviceCategoriesData,
  serviceCategoriesText,
} from "@/contents/screens/solutions";
import SectionTitle from "@/components/ui/section-title";
import ServiceCard from "./ServiceCard";

const ServiceCategories = () => {
  return (
    <section
      className="relative isolate bg-[#FAFBF6]"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: `url(${maskedDots})`, backgroundSize: "cover" }}
      />
      <div className="absolute left-1/2 top-12 h-44 w-44 -translate-x-1/2 rounded-full bg-[#DDE392]/25 blur-3xl md:top-20 md:h-72 md:w-72" />

      <div className="container relative pt-18 pb-14 md:pt-32 md:pb-24">
        <Animated
          variant="slideUp"
          className="mx-auto mb-10 max-w-5xl text-center md:mb-20"
        >
          <SectionTitle className="text-primary md:!text-[clamp(3rem,4vw,3.85rem)] md:!leading-[1.05]">
            {serviceCategoriesText.title}
          </SectionTitle>
          <p className="mx-auto mt-3 max-w-3xl text-[0.98rem] leading-7 text-accent-one sm:text-base md:mt-4 md:text-xl md:leading-9">
            {serviceCategoriesText.description}
          </p>
        </Animated>

        <div className="relative flex flex-col gap-8 pb-4 md:gap-[30vh] md:pb-12 lg:gap-[34vh]">
          {serviceCategoriesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              list={service.list}
              image={service.image}
              imageBackground={service.imageBackground}
              className="w-full md:sticky md:top-[15vh] md:self-start"
              style={{ zIndex: index + 1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
