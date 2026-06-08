interface EngagementModelCardProps {
  title: string;
  description: string;
  bestFor: string;
}

const EngagementModelCard = ({
  title,
  description,
  bestFor,
}: EngagementModelCardProps) => {
  return (
    <article className="flex h-full min-h-[18.75rem] flex-col rounded-3xl border border-[#E4EAE2] bg-white p-5 sm:min-h-[22.5rem] sm:p-7 lg:min-h-[24.5rem] lg:p-10">
      <div
        className="mb-8 h-1 max-w-14 rounded-lg bg-primary sm:mb-10"
        aria-hidden="true"
      />

      <div className="mb-8 flex-1">
        <h3 className="mb-2 font-urbanist text-[1.55rem] font-medium leading-tight text-primary sm:mb-3 sm:text-[1.9rem]">
          {title}
        </h3>
        <p className="text-[0.97rem] leading-6 text-[#7A7A7A] sm:text-base sm:leading-7">{description}</p>
      </div>

      <div className="mt-auto">
        <div className="mb-1 flex items-center gap-2">
          <p className="font-bold text-xs text-primary">Best for:</p>
          <div
            className="h-px flex-1 bg-linear-to-r from-primary to-success/0"
            aria-hidden="true"
          />
        </div>

        <p className="text-sm leading-6 text-[#7A7A7A]">{bestFor}</p>
      </div>
    </article>
  );
};

export default EngagementModelCard;
