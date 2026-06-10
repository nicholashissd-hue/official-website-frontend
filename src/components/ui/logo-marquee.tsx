import { trustedCompaniesLogo } from "@/contents/screens/home";

const LogoMarquee = () => {
  const logos = [...trustedCompaniesLogo, ...trustedCompaniesLogo];

  return (
    <div className="relative overflow-hidden py-1">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-linear-to-r from-bg-cream to-transparent sm:w-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-linear-to-l from-bg-cream to-transparent sm:w-60" />

      <div className="animate-marquee flex w-max gap-8 sm:gap-12 md:gap-16">
        {logos.map((company, index) => (
          <div
            key={`${company.altText}-${index}`}
            className="shrink-0 px-4 py-3 sm:px-6"
          >
            <img
              src={company.defaultLogo}
              alt={company.altText}
              className="h-6 shrink-0 opacity-45 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:h-7"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
