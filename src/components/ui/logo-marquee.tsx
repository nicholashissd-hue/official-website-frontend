import { trustedCompaniesLogo } from "@/contents/screens/home";
import { cn } from "@/lib/util";

interface LogoMarqueeProps {
  /** Render for a dark (deep-green) surface: white logo silhouettes + dark edge fades. */
  dark?: boolean;
}

/** Logos with opaque background plates turn into solid boxes when
 *  silhouetted white — skip them on dark surfaces. */
const PLATE_LOGOS = ["hubint", "new globe", "syscomptech"];

const LogoMarquee = ({ dark = false }: LogoMarqueeProps) => {
  const source = dark
    ? trustedCompaniesLogo.filter(
        (c) => !PLATE_LOGOS.some((p) => c.altText.toLowerCase().includes(p)),
      )
    : trustedCompaniesLogo;
  const logos = [...source, ...source];

  return (
    // Edge fade via mask (not colored overlays) so it sits cleanly on ANY
    // background — gradients included — with no hard cutoff.
    <div className="relative overflow-hidden py-1 [-webkit-mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]">

      <div className="animate-marquee flex w-max gap-8 sm:gap-12 md:gap-16">
        {logos.map((company, index) => (
          <div
            key={`${company.altText}-${index}`}
            className="shrink-0 px-4 py-3 sm:px-6"
          >
            <img
              src={company.defaultLogo}
              alt={company.altText}
              className={cn(
                "h-6 shrink-0 transition-all duration-500 sm:h-7",
                dark
                  ? "opacity-40 brightness-0 invert hover:opacity-80"
                  : "opacity-45 grayscale hover:opacity-100 hover:grayscale-0",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
