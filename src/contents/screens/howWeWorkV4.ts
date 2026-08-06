/**
 * How We Work (V4) copy — the named method expanded, plus the three
 * stage-agnostic engagement models. The old Startup Launch page folds in
 * here as the third model (the /startup-launch 301 already lands here).
 * Method step names and one-line bodies live in contents/taxonomy.ts.
 */

export const hero = {
  kicker: "How we work",
  title: "Assess. Build. Own.",
  descriptor:
    "A named method and three ways to engage. Every engagement ends the same way: with your team owning the system.",
  primaryCta: "Get in touch",
  secondaryCta: "See the method",
};

/** Expanded chapters: what happens in each step and what you keep. */
export const methodChapters = {
  kicker: "The method",
  title: "Three steps, one promise.",
  steps: [
    {
      num: "01",
      title: "Assess",
      body: "We start where the risk and cost actually live: the stalled migration, the fragile pipeline, the bill nobody owns. Senior engineers read the systems, talk to the people who run them, and map what is really going on.",
      keep: "You keep a clear, prioritized roadmap whether or not you continue with us.",
    },
    {
      num: "02",
      title: "Build",
      body: "The same engineers who assessed the work do the work: migrations, platforms, pipelines, security, and cost control, inside your stack, your standups, and your tooling, measured against the roadmap.",
      keep: "You keep working systems in production, not a deck about them.",
    },
    {
      num: "03",
      title: "Own",
      body: "From day one we document, write runbooks, and upskill your team, because the goal is a system your team runs without us. When the handoff is done, we step back.",
      keep: "You keep the system, the docs, and a team that can run it, with support on flexible terms if you want it.",
    },
  ],
};

export const interlude = {
  statement: "Handoff is the goal, not the risk.",
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
      chips: ["Architecture", "Roadmap", "Technical due diligence"],
    },
    {
      num: "02",
      title: "Embedded delivery",
      who: "The core model, for initiatives that must land.",
      body: "Senior engineers embed in your team and own the work end to end across any of the eight capabilities, measured against the roadmap and handed off when your team is ready to run it.",
      chips: ["Migrations", "Platforms", "Pipelines", "Security", "Cost control"],
    },
    {
      num: "03",
      title: "Launch, zero to one",
      who: "For new products and new companies.",
      body: "From concept to production, built correctly the first time: the websites and applications your customers touch, and the infrastructure, pipelines, and data foundations underneath them.",
      chips: ["Websites", "Applications", "Infrastructure", "Data and AI"],
    },
  ],
};
