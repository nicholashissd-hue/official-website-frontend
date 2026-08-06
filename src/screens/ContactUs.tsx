import Form from "@/components/contactUs/Form";
import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";

const NEXT_STEPS = [
  "An introductory conversation with an engineer",
  "Technical discovery on your systems",
  "A recommended engagement model",
  "A scoped delivery proposal",
];

/**
 * Contact, V4: light page, no CTA band, no photography. The form left,
 * the direct line and what-happens-next right. One reassurance, one
 * response-time promise, stated once each.
 */
const ContactUs = () => (
  <>
    <section className="bg-paper">
      <div className="container pb-10 pt-36 md:pb-14 md:pt-44">
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
      </div>
    </section>

    <section className="bg-paper">
      <div className="container grid items-start gap-10 pb-28 pt-4 md:pb-36 lg:grid-cols-[7fr_5fr] lg:gap-14">
        <Reveal className="h-full">
          <Form />
        </Reveal>

        <div className="flex flex-col gap-12 lg:pt-2">
          <Reveal delay={0.08}>
            <p className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink/45">
              Prefer a direct line
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
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
              <p className="mt-2 text-[14px] text-sub">
                Typical response within one business day.
              </p>
            </div>
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
