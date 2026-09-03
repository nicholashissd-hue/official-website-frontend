/**
 * The shape of a capability's own landing page.
 *
 * Eight pages share one template, so the copy lives here as data rather than
 * as eight hand-built layouts. The step names, labels and ids these pages key
 * on still come from contents/taxonomy.ts, which stays the single source for
 * the capability list itself.
 *
 * "What changes" is gone (Nicholas, Sept 2026). The rebuild spec trimmed it from
 * six items to three; on the page it still restated the signal list in the
 * future tense and earned nothing, so the section went entirely rather than
 * being shortened again.
 *
 * Concise rewrite (Sept 2026, from the partner's rebuild spec). The pages ran
 * 1,200 to 1,900 words each and the substance was buried by the length. Three
 * things went: the opening argument (the signal list qualifies a reader faster
 * than four paragraphs of framing), the multi-paragraph service blocks (a
 * heading and one line each), and the per-page "Why ElderOps", which was the
 * one section that genuinely said the same thing eight times and now renders
 * once from `whyElderOps` in ./index.
 *
 * What deliberately did NOT move to a shared block: `faqs` and `embedded`. The
 * spec described all four repeated sections as identical across the eight
 * pages; they are not. Every page carries its own questions (SOC 2 on
 * security, a savings guarantee on FinOps, fractional time on advisory) and
 * its own staffing argument. Those are the highest-intent copy on the site and
 * merging them would have deleted eight arguments to save one.
 */
export type ServicePage = {
  /** Taxonomy id. Ties the page to its entry in SERVICES. */
  id: string;

  seo: {
    title: string;
    description: string;
  };

  hero: {
    /** Capability name, rendered as the kicker above the headline. */
    kicker: string;
    title: string;
    /** The one supporting sentence. Sits under the headline on the photograph. */
    descriptor: string;
    primaryCta: string;
    /** Alt text for the page's one photograph. */
    photoAlt: string;
    /** Vertical framing of the photograph, e.g. "center 40%". */
    photoPosition?: string;
  };

  /**
   * The sentence promoted to the quiet band under the hero. Kept through the
   * concise rewrite: it is one line, and it gives the page its first light
   * surface between the dark hero and the signal list.
   */
  lead: string;

  /** "When you would call us" — six one-line triggers, no intro paragraph. */
  signals: {
    title: string;
    items: string[];
  };

  /** What the engineers actually do. A heading and one line each. */
  work: {
    title: string;
    groups: {
      title: string;
      body: string;
    }[];
  };

  /** How the engagement is staffed and shaped. Per page, not shared. */
  embedded: {
    title: string;
    paragraphs: string[];
    modelsIntro: string;
    models: string[];
  };

  /**
   * The page's case study, immediately before the closing CTA.
   *
   * Illustrative, and labelled as such by the component so a page can never
   * ship one without the tag. Outcomes are stated qualitatively for the same
   * reason Home's case files are: this site does not publish figures it cannot
   * attribute, and an invented number beside a named company profile reads as
   * a real client result no tag can undo. The shape is built so a real
   * engagement drops straight in once there is one to tell.
   */
  caseStudy: {
    title: string;
    /** "A Series B B2B SaaS company, about 60 engineers." */
    client: string;
    problem: string;
    whatWeDid: string;
    /** Three outcomes, qualitative. Never a figure we cannot attribute. */
    results: string[];
    /** The handoff line: what the client's own team kept. */
    kept: string;
  };

  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
  };

  faqs: {
    q: string;
    a: string;
  }[];
};
