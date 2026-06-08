import type { IndustriesCardProps } from "@/types";
import openIcon from "@/assets/svg/open-icon.svg";
import openIconMobile from "@/assets/svg/open-icon-mobile.svg";

const IndustriesCard = ({ number, title, onToggle }: IndustriesCardProps) => {
  return (
    <div
      onClick={onToggle}
      className="flex h-full min-h-[11.5rem] cursor-pointer flex-col rounded-2xl border border-[#EEF1E8] bg-white px-5 pt-5 pb-8 shadow-[0_58px_35px_#0000000d] sm:min-h-[12.75rem] sm:px-7 sm:pt-7 sm:pb-11 lg:min-h-[15.5rem] lg:px-8 lg:pt-8 lg:pb-12"
    >
      <div className="flex items-center justify-between lg:justify-end">
        <p className="font-medium text-[#C9CF85] lg:hidden">{number}</p>
        <button
          type="button"
          aria-label="Open industry details"
          onClick={onToggle}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          <img
            src={openIcon}
            alt=""
            aria-hidden="true"
            className="hidden md:block"
          />
          <img
            src={openIconMobile}
            alt=""
            aria-hidden="true"
            className="md:hidden"
          />
        </button>
      </div>

      <div className="mt-5 sm:mt-7 lg:mt-8 lg:flex lg:gap-3">
        <p className="font-medium text-[#C9CF85] hidden lg:inline">{number}</p>
        <h3 className="font-urbanist text-[28px] leading-[1.05] text-accent-one sm:text-[32px] md:text-[34px] xl:text-[42px]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default IndustriesCard;
