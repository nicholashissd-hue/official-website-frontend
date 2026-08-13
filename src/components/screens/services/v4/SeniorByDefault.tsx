import Reveal from "@/components/ui/reveal";
import { BulletList, Kicker } from "@/components/ui/v4";
import { senior } from "@/contents/screens/servicesV4";
import { proof } from "@/contents/screens/homeV4";

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

      {/* The vetting figure closes the section that makes the claim it
          proves. It used to sit in a separate strip at the foot of the page
          beside two tiles that were cut, under an "Outcomes" kicker it never
          fitted: a hiring-bar number is not an outcome. The trust sentence
          that travelled with it is not repeated here — it says almost
          exactly what this section's own body says. */}
      <Reveal>
        <div className="mt-16 grid items-end gap-x-14 gap-y-5 border-t border-ink/25 pt-10 lg:grid-cols-[4fr_8fr]">
          <p className="font-display text-stat font-bold tracking-[-0.05em] text-primary">
            {proof.headline.value}
            <span className="opacity-45">{proof.headline.unit}</span>
          </p>
          <div className="pb-2">
            <p className="text-lg font-bold text-ink">
              {proof.headline.label}
            </p>
            <p className="mt-1.5 max-w-xl text-sm text-sub">
              {proof.headline.qualifier}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default SeniorByDefault;
