interface MatchingApproachCardProps {
  step: string;
  title: string;
  description: string;
}

const MatchingApproachCard = ({
  step,
  title,
  description,
}: MatchingApproachCardProps) => {
  return (
    <div className="flex h-full min-h-[18.75rem] flex-col rounded-3xl border border-border-light bg-bg-cream p-6 sm:min-h-[22.5rem] sm:px-7 sm:pt-11 sm:pb-14 lg:min-h-[24.5rem]">
      <div>
        <p
          className="mb-4 font-medium text-[#557866] sm:mb-5"
          aria-label={`Step ${step}`}
        >
          Step
        </p>
        <p
          className="font-urbanist text-[112px] font-semibold leading-none text-bg-light sm:text-[140px] sm:leading-19 lg:text-[152px]"
          aria-hidden="true"
        >
          {step}
        </p>
      </div>

      <div className="mt-8 md:mt-8">
        <h3 className="mb-2 font-urbanist text-[1.55rem] font-semibold leading-tight text-primary sm:text-[1.9rem]">
          {title}
        </h3>
        <p className="text-[0.97rem] leading-6 text-accent-one sm:text-base sm:leading-7">{description}</p>
      </div>
    </div>
  );
};
export default MatchingApproachCard;
