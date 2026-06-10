import { Link, useLocation } from "react-router";
import elderOpsLogo from "@/assets/svg/elderOps-white-logo.svg";
import elderOpsLogoGreen from "@/assets/svg/elderOps-green-logo.svg";
import { useScrollDetection } from "@/hooks/useScrollDetection";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useGlobalStore } from "@/store/useGlobalStore";
import { cn } from "@/lib/util";
import Navbar from "../navbar/Navbar";
import CalendlyCTA from "../contactUs/react-calendly";

/** Routes whose hero is the deep-green surface (header starts light-on-dark). */
const DARK_HERO_ROUTES = new Set(["/", "/talent"]);

const Header = () => {
  const { pathname } = useLocation();
  const isScrolled = useScrollDetection(40);
  const isVisible = useScrollDirection();
  const { isMobileMenuOpen, isNavbarRevealBlocked, toggleMobileMenu } =
    useGlobalStore();

  const overDarkHero = DARK_HERO_ROUTES.has(pathname) && !isScrolled;
  const darkContext = overDarkHero || isMobileMenuOpen;
  const shouldShowHeader =
    !isNavbarRevealBlocked && (isVisible || isMobileMenuOpen);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500",
        shouldShowHeader ? "translate-y-0" : "-translate-y-full",
        isScrolled && !isMobileMenuOpen
          ? "border-b border-primary/10 bg-bg-cream/95 backdrop-blur-sm"
          : "border-b border-transparent",
      )}
    >
      <div className="container grid h-18 grid-cols-[1fr_auto] items-center gap-6 md:h-20 md:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          aria-label="ElderOps home"
          className="relative z-50 justify-self-start"
        >
          <img
            src={darkContext ? elderOpsLogo : elderOpsLogoGreen}
            alt="ElderOps"
            className="w-10 transition-opacity duration-300 md:w-12"
          />
        </Link>

        <Navbar dark={darkContext} />

        <div className="flex items-center justify-self-end">
          <div className="hidden md:block">
            <CalendlyCTA
              variant={overDarkHero ? "outline-light" : "primary"}
              className="h-10 px-5 text-[13px]"
            />
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="relative z-50 -mr-2 flex size-10 flex-col items-end justify-center gap-[7px] md:hidden"
          >
            <span
              className={cn(
                "h-px w-6 transition-all duration-300",
                darkContext ? "bg-bg-cream" : "bg-primary",
                isMobileMenuOpen && "translate-y-[4px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px transition-all duration-300",
                darkContext ? "bg-bg-cream" : "bg-primary",
                isMobileMenuOpen ? "w-6 -translate-y-[4px] -rotate-45" : "w-4",
              )}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
