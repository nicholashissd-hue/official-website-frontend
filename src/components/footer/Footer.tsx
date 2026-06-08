import { Link, useLocation } from "react-router";
import footerLogo from "@/assets/svg/elderOps-footer-logo.svg";
import SectionTitle from "../ui/section-title";
import Navbar from "../navbar/Navbar";
import { footerText } from "@/contents/footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  return (
    <footer className="bg-linear-to-b from-[#EFF2CD00] to-[#EFF2CD]">
      <div
        className={`container ${isHomePage ? "section-space-block" : "section-space-bottom"} `}
      >
        {isHomePage && (
          <div className="max-w-242.5 mx-auto text-center">
            <SectionTitle className="font-semibold mb-4">
              {footerText.title}
            </SectionTitle>
            <p className="text-[#979797] mb-10">{footerText.subtext}</p>

            <Link
              to="/contact-us"
              className="btn-glass-effect font-medium py-3 px-6 rounded-[36px] text-white inline-block mb-16"
            >
              Get started
            </Link>
          </div>
        )}

        <div className="rounded-[24px] bg-white p-6 shadow-[0px_4px_50px_0px_#02361B1A] sm:rounded-3xl sm:p-10">
          <img
            src={footerLogo}
            alt="elder ops logo"
            className="mx-auto mb-10 sm:mb-12"
          />

          <div className="mb-8 flex flex-col items-center justify-between sm:mb-10">
            <Navbar
              className="grid gap-2 text-center font-medium text-[#5B5B5B] sm:flex sm:justify-center sm:!gap-8 sm:text-start lg:!gap-12"
              isFooter
            />
          </div>

          <div className="border-t border-t-[#EAEAEA] pt-5 text-xs font-medium">
            <div className="flex flex-col items-center justify-between gap-5 w-full xl:flex-row">
              <div className="flex w-full flex-col items-center gap-3 text-center text-xs font-bold text-[#8BA396] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 sm:text-left lg:justify-start lg:gap-16">
                <a href="mailto:contact@elderops.net" className="break-all sm:break-normal">
                  Email:{" "}
                  <span className="text-accent-one">contact@elderops.net</span>
                </a>

                <a href="mailto:contact@elderops.net" className="break-all sm:break-normal">
                  Contact enquiries:{" "}
                  <span className="text-accent-one">contact@elderops.net</span>
                </a>
                <a href="tel:+16285550147" className="break-all sm:break-normal">
                  Phone:{" "}
                  <span className="text-accent-one">+1 (628) 555-0147</span>
                </a>
              </div>

              <div className="flex shrink-0 flex-nowrap items-center justify-center gap-3 whitespace-nowrap text-[#767676] sm:gap-4 xl:justify-end">
                <p className="whitespace-nowrap">© {currentYear} ElderOps</p>

                <div className="hidden size-1 rounded-full bg-[#767676] sm:block" />

                <a href="/" className="whitespace-nowrap">Terms</a>

                <div className="hidden size-1 rounded-full bg-[#767676] sm:block" />

                <a href="/" className="whitespace-nowrap">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
