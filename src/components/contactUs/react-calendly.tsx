import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { cn } from "@/lib/util";

interface CalendlyCTAProps {
  label?: string;
  className?: string;
}

/** "Book a consultation" trigger + Calendly popup, styled as a V4 button. */
const CalendlyCTA = ({
  label = "Book a consultation",
  className = "",
}: CalendlyCTAProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center justify-center rounded-[14px] border border-ink/25 px-6 py-3.5 text-[15px] font-bold text-ink transition-colors duration-300 hover:border-primary hover:text-primary",
          className,
        )}
      >
        {label}
      </button>

      <PopupModal
        url="https://calendly.com/contact-elderops"
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={document.body}
      />
    </>
  );
};

export default CalendlyCTA;
