import Reveal from "@/components/ui/reveal";
import { Keep, Kicker } from "@/components/ui/v4";
import { methodChapters } from "@/contents/screens/howWeWorkV4";
import { METHOD } from "@/contents/taxonomy";
import assessPhoto from "@/assets/webp/v4/method-assess.webp";
import assessPhoto828 from "@/assets/webp/v4/method-assess-828.webp";
import buildPhoto from "@/assets/webp/v4/method-build.webp";
import buildPhoto828 from "@/assets/webp/v4/method-build-828.webp";
import ownPhoto from "@/assets/webp/v4/method-own.webp";
import ownPhoto828 from "@/assets/webp/v4/method-own-828.webp";

/**
 * The method expanded: the three states of the engagement, then three text
 * chapters underneath.
 *
 * This section used to alternate a 4:3 photograph against four lines of copy,
 * three times over. The photographs were consistently taller than the
 * paragraphs beside them, so the page read as an image gallery with captions
 * and the method, which is the actual argument this page exists to make,
 * carried almost no detail.
 *
 * The header no longer shares its row with a single frame. All three
 * illustrations run full width beneath it instead, because the argument of
 * this page is a sequence and one frame could only ever show a third of it.
 * They carry the step numeral and name and nothing else: the chapters
 * immediately below say what happens, so a caption here would be the same
 * sentence twice.
 */
const ids = ["assess", "build", "own"];

const FRAMES = [
  {
    src: assessPhoto,
    src828: assessPhoto828,
    alt: "An illustration of a layered system lifted apart to show the connections running through it",
  },
  {
    src: buildPhoto,
    src828: buildPhoto828,
    alt: "An illustration of a layered system being assembled, one layer settling into place",
  },
  {
    src: ownPhoto,
    src828: ownPhoto828,
    alt: "An illustration of a completed system, sealed and running on its own",
  },
];

const MethodChapters = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <div className="grid items-end gap-x-16 gap-y-8 lg:grid-cols-[5fr_7fr]">
        <Reveal>
          <Kicker>{methodChapters.kicker}</Kicker>
          <h2 className="mt-3 font-display text-title font-bold tracking-[-0.03em] text-ink">
            {methodChapters.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="max-w-xl text-lede text-sub">{methodChapters.intro}</p>
        </Reveal>
      </div>

      {/* The three states, left to right. Full width so each one has room:
          in the half column this used to occupy they would have been
          thumbnails. */}
      <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-3 lg:mt-16">
        {FRAMES.map((frame, index) => (
          <Reveal key={frame.alt} delay={index * 0.08}>
            <img
              src={frame.src}
              srcSet={`${frame.src828} 828w, ${frame.src} 1600w`}
              sizes="(min-width: 640px) 30vw, 100vw"
              alt={frame.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-contain"
            />
            <p className="mt-2 flex items-baseline justify-center gap-3">
              <span className="font-mono text-xs tracking-[0.1em] text-primary">
                {METHOD[index].num}
              </span>
              <span className="font-display text-base font-bold tracking-[-0.01em] text-ink">
                {METHOD[index].title}
              </span>
            </p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 lg:mt-20">
        {METHOD.map((step, index) => {
          const chapter = methodChapters.chapters[index];
          return (
            <Reveal key={step.num} delay={0.05} as="article">
              <div
                id={ids[index]}
                className="grid scroll-mt-28 gap-x-16 gap-y-7 border-t border-hairline py-12 lg:grid-cols-[4fr_8fr] lg:py-16"
              >
                <div>
                  <p className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tracking-[0.1em] text-primary">
                      {step.num}
                    </span>
                    <span className="font-display text-subhead font-bold tracking-[-0.02em] text-ink">
                      {step.title}
                    </span>
                  </p>
                  <p className="mt-3 max-w-xs text-base font-semibold text-ink/60">
                    {chapter.rail}
                  </p>
                </div>

                <div>
                  {chapter.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 max-w-2xl text-base text-sub first:mt-0"
                    >
                      {paragraph}
                    </p>
                  ))}

                  <div className="mt-9 border-t border-hairline pt-7">
                    <p className="font-display text-base font-semibold tracking-[-0.01em] text-ink/70">
                      {methodChapters.detailLabel}
                    </p>
                    {/* A definition list, because that is what it is: the
                        named parts of the step and what each one means. */}
                    <dl className="mt-5">
                      {chapter.detail.map((row) => (
                        <div
                          key={row.label}
                          className="grid gap-x-8 gap-y-1.5 border-t border-hairline py-4 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,12rem)_1fr]"
                        >
                          <dt className="text-base font-semibold text-ink">
                            {row.label}
                          </dt>
                          <dd className="max-w-2xl text-base text-sub">
                            {row.body}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Extra air so the promise reads as the chapter's payload
                      and not as a fourth row of the list above it. */}
                  <div className="mt-3">
                    <Keep>{step.keep}</Keep>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default MethodChapters;
