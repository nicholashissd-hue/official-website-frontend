import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import Button, { type ButtonVariant } from "@/components/ui/button";

interface CalendlyCTAProps {
  variant?: ButtonVariant;
  label?: string;
  className?: string;
  withArrow?: boolean;
}

/** "Book a Consultation" trigger + Calendly popup, styled as a V2 button. */
const CalendlyCTA = ({
  variant = "outline",
  label = "Book a Consultation",
  className = "",
  withArrow = false,
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
      <Button
        variant={variant}
        className={className}
        withArrow={withArrow}
        onClick={() => setOpen(true)}
      >
        {label}
      </Button>

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
