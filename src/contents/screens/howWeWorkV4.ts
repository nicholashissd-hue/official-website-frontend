/**
 * How We Work (V4) copy — the named method expanded, plus the three
 * stage-agnostic engagement models. The old Startup Launch page folds in
 * here as the third model (the /startup-launch 301 already lands here).
 * Method step names and one-line bodies live in contents/taxonomy.ts.
 */

export const hero = {
  kicker: "How we work",
  title: "Assess. Build. Hand off.",
  descriptor:
    "A named method and three ways to engage. Every engagement ends the same way: with a system your team runs without us.",
  primaryCta: "Get in touch",
  secondaryCta: "See the method",
};

/** Expanded chapters: what happens in each step and what you keep. */
export const methodChapters = {
  kicker: "The method",
  title: "How an engagement runs.",
  intro:
    "The same three steps on every engagement. What changes with the size of the work is how long each one takes, not the order.",
  detailLabel: "What happens",
  /**
   * The long-form telling of each step, in the same order as METHOD in
   * contents/taxonomy.ts. Step names, numbers and the "what you keep" line
   * come from there so they can never drift between pages.
   *
   * `detail` is the substance the section was missing: each chapter used to
   * be a single short paragraph sitting beside a photograph twice its
   * height, so the image carried the section and the method itself said
   * almost nothing about how the work is actually done.
   */
  chapters: [
    {
      rail: "Before anything gets built.",
      body: [
        "We start where the risk and cost actually live: the stalled migration, the fragile pipeline, the bill nobody owns. Senior engineers read the systems, talk to the people who run them, and map what is really going on.",
        "This is not a questionnaire and it is not a discovery workshop. The engineers who would do the work are the ones reading the code, the pipelines, the cloud accounts, and the incident history, because a roadmap written by someone who has never opened the system is a guess with a logo on it.",
      ],
      detail: [
        {
          label: "Systems review",
          body: "Architecture, environments, pipelines, and cloud accounts as they actually run today, not as the diagram says they run.",
        },
        {
          label: "Risk and cost",
          body: "Where reliability, security, and spend are exposed, ordered by what it costs you to leave each one alone.",
        },
        {
          label: "The roadmap",
          body: "A sequenced plan with the first move named and sized against your team's capacity, not ours.",
        },
      ],
    },
    {
      rail: "The work itself, inside your team.",
      body: [
        "The same engineers who assessed the work do the work: migrations, platforms, pipelines, security, and cost control, inside your stack, your standups, and your tooling, measured against the roadmap.",
        "Embedded means embedded. Work lands in your repositories, your ticket tracker, and your review process, so your team watches it arrive in the same place they watch their own, instead of receiving it as a status report.",
      ],
      detail: [
        {
          label: "Inside your tooling",
          body: "Your repositories, your pipelines, your ticket tracker, your review standards. Nothing that matters lives in a vendor's environment.",
        },
        {
          label: "Shipped in increments",
          body: "Change goes live in pieces that can be reviewed and reversed, rather than in one migration weekend everybody dreads.",
        },
        {
          label: "Measured against the plan",
          body: "The roadmap from Assess is the scoreboard, and it gets revised in the open when the system disagrees with it.",
        },
      ],
    },
    {
      rail: "Built into the work from day one.",
      body: [
        "From day one we document, write runbooks, and upskill your team, because the goal is a system your team runs without us. When the handoff is done, we step back.",
        "Handoff is not a meeting at the end. Documentation is written while the work is happening, your engineers are in the reviews from the first week, and the last stretch is deliberately run by your team with ours alongside rather than in front.",
      ],
      detail: [
        {
          label: "Documentation and runbooks",
          body: "How it works, how it fails, and what to do at three in the morning, written for the person who will be on call.",
        },
        {
          label: "Your team leading",
          body: "Pairing and review while the work is still live, so the knowledge transfers through doing it rather than through a slide about it.",
        },
        {
          label: "A deliberate exit",
          body: "Access, ownership, and on-call responsibility handed back on a date you agree to. We leave when your team no longer needs us, and stay reachable if that changes.",
        },
      ],
    },
  ],
};

export const interlude = {
  statement: "Built to run without us.",
  body: "Documentation, runbooks, and upskilling are part of the work from day one, not a courtesy at the end.",
};

export const models = {
  kicker: "Ways to engage",
  title: "Three models, any stage.",
  intro:
    "The method stays the same; the shape of the engagement fits where you are.",
  items: [
    {
      num: "01",
      title: "Fractional advisory",
      who: "For teams that need direction before headcount.",
      body: "Senior judgment on a fraction of the time: architecture, roadmap, and technical due diligence from an engineer who has run production systems, on terms that scale up or down as the work changes.",
      includes: ["Architecture", "Roadmap", "Technical due diligence"],
    },
    {
      num: "02",
      title: "Embedded delivery",
      who: "The core model, for initiatives that must land.",
      body: "Senior engineers embed in your team and own the work end to end across any of the eight capabilities, measured against the roadmap and handed off when your team is ready to run it.",
      includes: [
        "Migrations",
        "Platforms",
        "Pipelines",
        "Security",
        "Cost control",
      ],
    },
    {
      num: "03",
      title: "Launch, zero to one",
      who: "For new products and new companies.",
      body: "From concept to production, built correctly the first time: the websites and applications your customers touch, and the infrastructure, pipelines, and data foundations underneath them.",
      includes: ["Websites", "Applications", "Infrastructure", "Data and AI"],
    },
  ],
};
