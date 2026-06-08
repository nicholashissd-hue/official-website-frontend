import { trustedCompaniesLogo } from "@/contents/screens/home";

const LogoMarquee = () => {
  const logos = [...trustedCompaniesLogo, ...trustedCompaniesLogo];

  return (
    <div className="relative overflow-hidden py-1">
      <div className="sm:absolute left-0 top-0 bottom-0 w-75 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="sm:absolute right-0 top-0 bottom-0 w-75 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max gap-8 animate-marquee sm:gap-12 md:gap-15">
        {logos.map((company, index) => (
          <div
            key={`${company.altText}-${index}`}
            className="shrink-0 px-5 py-3 sm:px-7 sm:py-4 md:px-9.375 md:py-3.75"
          >
            <img
              src={company.defaultLogo}
              alt={company.altText}
              className="h-6 shrink-0 grayscale transition-all hover:grayscale-0 sm:h-7 md:h-7.5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
