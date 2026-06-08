import type { CSSProperties } from "react";
import checkIcon from "@/assets/svg/check-icon.svg";

interface ServiceCardProps {
  title: string;
  description?: string;
  list: string[];
  image: string;
  imageBackground?: string;
  className?: string;
  style?: CSSProperties;
}

const ServiceCard = ({
  title,
  description,
  list,
  image,
  imageBackground = "#EFF2CD",
  className,
  style,
}: ServiceCardProps) => {
  return (
    <article
      className={className}
      style={style}
      role="region"
      aria-label={title}
    >
      <div className="overflow-hidden rounded-[24px] border border-[#E3E8DD] bg-white shadow-[0_58px_35px_rgba(0,0,0,0.05)] md:h-[clamp(35rem,72vh,43rem)] md:rounded-[28px]">
        <div className="flex h-full flex-col lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="flex h-full justify-center border-b border-[#E5EADF] px-5 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-12 xl:px-12">
            <div className="flex w-full max-w-[36rem] flex-col items-start">
              <h3 className="font-urbanist text-[1.9rem] font-semibold leading-[1.08] text-primary sm:text-[2.15rem] md:text-[3rem] md:leading-[1.05]">
                {title}
              </h3>

              {description && (
                <p className="mt-3 max-w-[34rem] text-[0.98rem] leading-7 text-accent-one md:mt-4 md:text-lg md:leading-8">
                  {description}
                </p>
              )}

              <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:gap-4">
                {list.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 sm:gap-3">
                    <img
                      src={checkIcon}
                      alt=""
                      aria-hidden={true}
                      className="mt-1 size-4 shrink-0 sm:size-auto"
                    />
                    <span className="text-[0.97rem] leading-6 text-secondary sm:text-base sm:leading-7 md:text-[1.125rem]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative min-h-[15rem] overflow-hidden sm:min-h-[18rem] md:min-h-[20rem] lg:h-full lg:min-h-0"
            style={{ backgroundColor: imageBackground }}
          >
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
