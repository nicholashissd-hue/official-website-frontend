import Reveal from "@/components/ui/reveal";
import { Keep, Kicker } from "@/components/ui/v4";
import { methodChapters } from "@/contents/screens/howWeWorkV4";
import { METHOD } from "@/contents/taxonomy";
import assessPhoto from "@/assets/webp/v4/method-assess.webp";
import assessPhoto828 from "@/assets/webp/v4/method-assess-828.webp";

/**
 * The method expanded: three text chapters under one establishing frame.
 *
 * This section used to alternate a 4:3 photograph against four lines of
 * copy, three times over. The photographs were consistently taller than the
 * paragraphs beside them, so the page read as an image gallery with captions
 * and the method, which is the actual argument this page exists to make,
 * carried almost no detail. The images also sat between a full-viewport
 * photo hero and a full-bleed photo interlude, which made four photographic
 * moments in a row.
 *
 * So the arc keeps one frame here, at the top, doing the job an establishing
 * shot does, and the chapters below it are typography: what happens in the
 * step, three concrete parts of it, and what the client keeps. The full
 * three-frame arc still runs on the homepage, where the triptych is the
 * point.
 */
const ids = ["assess", "build", "own"];

const MethodChapters = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <div className="grid items-end gap-x-16 gap-y-10 lg:grid-cols-[6fr_6fr]">
        <Reveal>
          <Kicker>{methodChapters.kicker}</Kicker>
          <h2 className="mt-3 font-display text-title font-bold tracking-[-0.03em] text-ink">
            {methodChapters.title}
          </h2>
          <p className="mt-7 max-w-xl text-lede text-sub">
            {methodChapters.intro}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          {/* 3:2 rather than 4:3: the frame sits at parity with the header
              block instead of towering over it. */}
          <img
            src={assessPhoto}
            srcSet={`${assessPhoto828} 828w, ${assessPhoto} 1600w`}
            sizes="(min-width: 1024px) 46vw, 100vw"
            alt="An illustration of a layered system lifted apart to show the connections running through it"
            loading="lazy"
            className="aspect-[3/2] w-full object-contain"
          />
        </Reveal>
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
