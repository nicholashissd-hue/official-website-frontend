import Star from "@/assets/tsxSvg/star";

type LevelCardProps = {
  level: string;
  title: string;
  description: string;
  experience: string;
};

const LevelCard = ({
  level,
  title,
  description,
  experience,
}: LevelCardProps) => {
  return (
    <div className="flex h-full min-h-[18.5rem] flex-col rounded-2xl border border-[#DDE6D8] bg-white p-5 text-primary shadow-[0_58px_35px_#0000000d] sm:min-h-[20rem] sm:p-7 lg:min-h-[23rem] lg:p-10">
      <h2 className="mb-6 text-sm font-bold uppercase text-primary sm:mb-8">
        {level}
      </h2>

      <div className="mb-6 grow sm:mb-8">
        <h3 className="mb-3 font-urbanist text-[1.7rem] font-semibold leading-tight sm:text-[2rem]">
          {title}
        </h3>
        <p className="text-[0.97rem] leading-6 text-accent-two sm:text-base sm:leading-7">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-xs">
        <span className="inline-block size-4 shrink-0 text-primary">
          <Star />
        </span>
        <p className="text-primary">{experience}</p>
        <div className="h-px flex-1 bg-linear-to-r from-primary to-success/0" />
      </div>
    </div>
  );
};

export default LevelCard;
