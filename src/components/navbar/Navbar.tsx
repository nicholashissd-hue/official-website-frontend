import { cn } from "@/lib/util";
import type { NavbarProps, NavLinks } from "@/types";
import { NavLink } from "react-router";
import { useGlobalStore } from "@/store/useGlobalStore";
// import Button from "@/components/ui/button";
import CalendlyCTA from "../contactUs/react-calendly";
import elderOpsLogoGreen from "@/assets/svg/elderOps-green-logo.svg";

const Navbar = ({ isHomePage, className, isFooter }: NavbarProps) => {
  const { isMobileMenuOpen, closeMobileMenu } = useGlobalStore();

  const navLinks: NavLinks[] = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Solutions",
      path: "/solutions",
    },
    {
      label: "Talent",
      path: "/talent",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },

    // isFooter && {
    //   label: "Contact",
    //   path: "/contact-us",
    // },
  ].filter(Boolean) as NavLinks[];

  return (
    <nav
      className={cn(
        "relative flex items-center gap-10 text-sm",
        isHomePage && !isFooter ? "text-white" : " md:text-primary",
        !isFooter &&
          "max-md:fixed max-md:inset-0 max-md:h-dvh max-md:bg-white max-md:z-40 max-md:flex-col max-md:items-start max-md:justify-start max-md:p-6 max-md:pt-24 max-md:pb-6 max-md:gap-0 max-md:text-2xl max-md:transition-transform max-md:duration-300 max-md:text-[#909090] max-md:overflow-y-auto",
        !isFooter && !isMobileMenuOpen && "max-md:translate-x-full",
        className,
      )}
      style={
        !isFooter && isMobileMenuOpen
          ? { backgroundColor: "#ffffff" }
          : undefined
      }
    >
      {!isFooter && (
        <img
          src={elderOpsLogoGreen}
          alt="elderOps logo"
          className="absolute left-6 top-7.5 w-10 md:hidden"
        />
      )}
      {navLinks.map((link, index) => (
        <NavLink
          key={link.path + index}
          to={link.path}
          onClick={isFooter ? undefined : closeMobileMenu}
          className={({ isActive }) =>
            cn(
              "py-2 px-3 -mx-3 flex flex-col items-center justify-center transition-colors hover:text-success active:text-success touch-manipulation",
              isActive && "font-semibold text-success",
              isFooter && "px-0 mx-0",
              isFooter && isMobileMenuOpen && "!bg-red-[500] h-[70vh] ",
              !isFooter &&
                "max-md:w-full max-md:py-4 max-md:px-0 max-md:mx-0  max-md:active:bg-bg-light",
              !isFooter && isActive && "text-success",
            )
          }
        >
          {link.label}
        </NavLink>
      ))}

      {!isFooter && (
        <div className="md:hidden mt-auto w-full flex items-center justify-center">
          <CalendlyCTA shouldRenderOnMobile />
          {/* <Button
            variant="button"
            // to="/contact-us"
            onClick={closeMobileMenu}
            className="w-full font-bold text-center bg-white! border-none! text-primary! "
          >
            Contact Us
          </Button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
