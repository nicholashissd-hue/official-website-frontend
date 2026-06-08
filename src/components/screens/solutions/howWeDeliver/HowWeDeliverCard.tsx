import type { HowWeDeliverCardProps } from "@/types";

const HowWeDeliverCard = ({
  image,
  title,
  description,
}: HowWeDeliverCardProps) => {
  return (
    <article className="flex min-h-[18.5rem] shrink-0 flex-col items-center justify-between gap-10 rounded-3xl border border-[#E6EBE8] bg-bg-cream px-5 py-8 text-center sm:max-w-[19.5rem] sm:px-7 sm:py-13 sm:gap-18 lg:min-h-[25rem] lg:max-w-[20.75rem] lg:px-8 lg:py-14">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="h-[5.75rem] w-auto sm:h-[7.5rem] lg:h-[8.25rem]"
      />

      <div>
        <h3 className="mb-2 font-medium text-primary text-[1.55rem] leading-tight sm:text-[1.9rem]">
          {title}
        </h3>
        <p className="text-[0.97rem] leading-6 text-[#464646] sm:text-base sm:leading-7">{description}</p>
      </div>
    </article>
  );
};

export default HowWeDeliverCard;
