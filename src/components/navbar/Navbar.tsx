import { useEffect } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "@/lib/util";
import { useGlobalStore } from "@/store/useGlobalStore";
import { NAV_LINKS, UTILITY_LINK } from "@/contents/nav";

interface NavbarProps {
  /** True when the header sits over a dark surface (dark hero or open menu). */
  dark?: boolean;
}

const Navbar = ({ dark = false }: NavbarProps) => {
  const { isMobileMenuOpen, closeMobileMenu } = useGlobalStore();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop */}
      <nav
        aria-label="Main"
        className="hidden items-center gap-9 justify-self-center md:flex"
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              cn(
                "u-line pb-1 text-sm font-medium tracking-[0.04em] transition-colors duration-300",
                dark
                  ? "text-bg-cream/75 hover:text-bg-cream"
                  : "text-primary/70 hover:text-primary",
                isActive &&
                  (dark ? "is-active text-bg-cream" : "is-active text-primary"),
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile — full-screen editorial menu */}
      <nav
        aria-label="Mobile"
        aria-hidden={!isMobileMenuOpen}
        className={cn(
          "fixed inset-0 z-40 flex h-dvh flex-col overflow-y-auto bg-nearblack px-6 pb-10 pt-28 transition-all duration-500 md:hidden",
          isMobileMenuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      >
        <div>
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${index * 55 + 120}ms`
                  : "0ms",
              }}
              className={cn(
                "flex items-baseline gap-5 border-b border-bg-cream/10 py-5 transition-all duration-500",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0",
              )}
            >
              {({ isActive }) => (
                <>
                  <span className="font-mono text-xs tracking-[0.2em] text-border-light/70">
                    0{index + 1}
                  </span>
                  <span
                    className={cn(
                      "font-display text-subhead font-semibold",
                      isActive ? "text-border-light" : "text-bg-cream",
                    )}
                  >
                    {link.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div
          className={cn(
            "mt-auto space-y-7 pt-12 transition-all delay-300 duration-500",
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0",
          )}
        >
          <NavLink
            to={UTILITY_LINK.path}
            onClick={closeMobileMenu}
            className="block text-center text-sm font-medium text-bg-cream/55"
          >
            {UTILITY_LINK.label}
          </NavLink>
          <Link
            to="/contact-us"
            onClick={closeMobileMenu}
            className="flex h-12 w-full items-center justify-center rounded-[14px] bg-signal text-base font-bold text-nearblack"
          >
            Get in touch
          </Link>
          <div className="space-y-2.5">
            <a
              href="mailto:contact@elderops.net"
              className="block text-center font-mono text-xs uppercase tracking-[0.2em] text-accent-four"
            >
              contact@elderops.net
            </a>
            <a
              href="tel:+18667977937"
              className="block text-center font-mono text-xs uppercase tracking-[0.2em] text-accent-four"
            >
              +1 (866) 797-7937
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
