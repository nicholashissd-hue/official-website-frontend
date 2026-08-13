/**
 * The shape of a capability's own landing page.
 *
 * Eight pages share one template, so the copy lives here as data rather than
 * as eight hand-built layouts. The step names, labels and ids these pages key
 * on still come from contents/taxonomy.ts, which stays the single source for
 * the capability list itself.
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
    /** First hero paragraph. Sits under the headline on the photograph. */
    descriptor: string;
    primaryCta: string;
    /** Alt text for the page's one photograph. */
    photoAlt: string;
    /** Vertical framing of the photograph, e.g. "center 40%". */
    photoPosition?: string;
  };

  /**
   * The second hero paragraph, promoted to the quiet band under the hero.
   * Two paragraphs on a dark photograph is one too many; the band gives the
   * sentence room and gives the page its first light surface.
   */
  lead: string;

  /** The argument: why this capability is hard, stated before any offer. */
  thesis: {
    title: string;
    paragraphs: string[];
  };

  /** "Where organizations commonly need help" — the qualifying list. */
  signals: {
    title: string;
    intro: string;
    items: string[];
  };

  /** The core: what the engineers actually do, as numbered chapters. */
  work: {
    title: string;
    groups: {
      title: string;
      body: string[];
    }[];
  };

  /** How the engagement is staffed and shaped. */
  embedded: {
    title: string;
    paragraphs: string[];
    modelsIntro: string;
    models: string[];
  };

  /** "What changes as a result" — the outcome list. */
  outcomes: {
    title: string;
    intro: string;
    items: string[];
  };

  /** The page's own closing argument, above the shared proof band. */
  why: {
    title: string;
    paragraphs: string[];
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
