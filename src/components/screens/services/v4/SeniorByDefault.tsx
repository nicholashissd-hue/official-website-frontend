import Reveal from "@/components/ui/reveal";
import { BulletList, Kicker } from "@/components/ui/v4";
import { senior } from "@/contents/screens/servicesV4";

/**
 * Who shows up: the seniority promise, with the disciplines as the loud
 * bullet list. This is the one place on the page where the list is the
 * argument rather than a footnote, so it gets display type and ruled rows
 * instead of the quiet marker used under each capability.
 */
const SeniorByDefault = () => (
  <section className="border-y border-hairline bg-bone">
    <div className="container section-space-block">
      <div className="grid items-start gap-x-20 gap-y-8 lg:grid-cols-[5fr_7fr]">
        <Reveal>
          <Kicker>{senior.kicker}</Kicker>
          <h2 className="mt-3 font-display text-heading font-bold tracking-[-0.03em] text-ink">
            {senior.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="max-w-xl text-lg text-sub">{senior.body}</p>
        </Reveal>
      </div>

      {/* Full container width rather than tucked into the 7fr column: the
          disciplines are the point of the section, and at display size they
          need the room to stay on one line each. */}
      <Reveal delay={0.12}>
        <BulletList
          items={senior.roles}
          emphasis="loud"
          columns={3}
          className="mt-14"
        />
      </Reveal>
    </div>
  </section>
);

export default SeniorByDefault;
