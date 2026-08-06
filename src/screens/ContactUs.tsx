import Form from "@/components/contactUs/Form";
import CalendlyCTA from "@/components/contactUs/react-calendly";
import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import contactPhoto from "@/assets/webp/v4/contact-city.webp";

const NEXT_STEPS = [
  "An introductory conversation with an engineer",
  "Technical discovery on your systems",
  "A recommended engagement model",
  "A scoped delivery proposal",
];

/**
 * Contact, V4.1: headline left with the direct line seated beside it (no
 * dead air top-right), the form left below, and the sidebar anchored by a
 * photograph of the person who actually answers. No CTA band on this page.
 */
const ContactUs = () => (
  <>
    <section className="bg-paper">
      <div className="container pb-12 pt-36 md:pb-16 md:pt-44">
        <div className="grid items-end gap-x-16 gap-y-10 lg:grid-cols-[7fr_5fr]">
          <Reveal immediate delay={0.05} y={26}>
            <Kicker>Contact</Kicker>
            <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
              Tell us what you're building.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-sub">
              And where it is stuck. We will tell you how we would fix it and
              who would own the work.
            </p>
          </Reveal>

          <Reveal immediate delay={0.16} y={22}>
            <p className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink/45">
              Prefer a direct line
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <a
                href="mailto:contact@elderops.net"
                className="w-fit text-[17px] font-semibold text-ink transition-colors hover:text-primary"
              >
                contact@elderops.net
              </a>
              <a
                href="tel:+18667977937"
                className="w-fit text-[17px] font-semibold text-ink transition-colors hover:text-primary"
              >
                +1 (866) 797-7937
              </a>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <CalendlyCTA />
              <p className="text-[13.5px] text-sub">
                Typical response within one business day.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="bg-paper">
      <div className="container grid items-start gap-10 border-t border-hairline pb-28 pt-14 md:pb-36 lg:grid-cols-[7fr_5fr] lg:gap-14">
        <Reveal className="h-full">
          <Form />
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal delay={0.08}>
            <img
              src={contactPhoto}
              alt="A city grid glowing at night, seen from high above"
              loading="lazy"
              className="aspect-[4/3] w-full border border-hairline object-cover"
            />
            <p className="mt-3 text-[13.5px] text-sub">
              The person who answers is an engineer, and the person who scopes
              your work is the person who does it.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink/45">
              What happens next
            </p>
            <ol className="mt-4">
              {NEXT_STEPS.map((step, index) => (
                <li
                  key={step}
                  className="flex items-baseline gap-4 border-t border-hairline py-3.5 first:border-t-0"
                >
                  <span className="font-mono text-[11px] tracking-[0.1em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-[1.55] text-sub">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default ContactUs;
