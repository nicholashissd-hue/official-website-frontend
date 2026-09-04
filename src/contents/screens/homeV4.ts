/**
 * Home (V4) copy — production copy from the Revision Brief with the agreed
 * contradiction rulings. Proof values are SAMPLES flagged in the UI; swap in
 * real engagement figures before launch, or drop the tile (never invent).
 */

export const hero = {
  /** BCG X hero pattern: short statement over the launch film + one-line descriptor. */
  title: "Stop hiring. Start shipping.",
  descriptor: "ElderOps is the embedded senior engineering partner.",
  primaryCta: "Get in touch",
  secondaryCta: "See what we do",
};

/**
 * The proof carries only claims that are true today. It previously led with
 * engagement figures that the page itself disclaimed as samples, which
 * invited the reader to discount every other claim on the site.
 *
 * Two secondary tiles ("8 capabilities…", "Yours…") were cut on Nicholas's
 * call, 2026-08-13. What is left is one figure and the sentence it supports,
 * rendered inside ThirdPath on Home and SeniorByDefault on Services.
 */
export const proof = {
  headline: {
    value: "<4",
    unit: "%",
    label: "of applicants clear our technical bar",
    qualifier:
      "Vetted in deep technical conversations by engineers who have done the work, never a recruiter screen.",
  },
  trustLine:
    "Every engagement is led by a senior engineer who has run production systems for years.",
};

/* Not "teams we've delivered for". These marks are where the engineers
   worked before ElderOps, which is a claim about their track record rather
   than a client list, and the label now says exactly that. */
export const logosLabel = "Companies our engineers have worked at";

export const thirdPath = {
  eyebrow: "Why ElderOps",
  title: "A third path between consulting and staffing.",
  body: "Consulting is expensive and hands you a deck. Staffing hands you a resume and no accountability. ElderOps embeds senior engineers who own the work end to end, then hand it back when your team is ready to run it.",
  pillars: [
    {
      num: "01",
      title: "Accountability, not headcount",
      body: "measured on outcomes you can see, not hours logged.",
    },
    {
      num: "02",
      title: "Integration, not transaction",
      body: "we work inside your stack, your standups, and your tooling.",
    },
    {
      num: "03",
      title: "Senior judgment on flexible terms",
      body: "scale up or down as the work changes, no long-term commitment.",
    },
  ],
};

export const capabilities = {
  eyebrow: "Capabilities",
  title: "What we do.",
  intro:
    "Senior engineers across the initiatives that carry the most risk and cost. Eight capabilities, one embedded team.",
  cta: "See all capabilities",
};

export const method = {
  eyebrow: "How we work",
  title: "Assess. Build. Hand off.",
};

/**
 * Client work on Home: an index of all eight case studies, not the studies
 * themselves.
 *
 * This section has been through three shapes. It began as three separately
 * written stories in an older format, then became three of the real capability
 * case studies rendered in full, which duplicated a page a reader could already
 * reach. It is now what it should have been: the titles of all eight, each a
 * door into the capability page that owns it. Home advertises the range of work
 * and the capability page tells the story once.
 *
 * Nothing is authored here. The titles come from SERVICE_PAGES and the order
 * from the taxonomy, so a retitled case study updates here without being touched.
 */
export const caseFiles = {
  eyebrow: "Client work",
  title: "Real business challenges. Real engineering outcomes.",
  intro:
    "One engagement for each of the eight capabilities. Open any of them on the capability page it belongs to.",
  /* Unrendered. Each row used to end in a bold emerald "Read the case"; eight
     of them stacked were eight calls to action competing with the one at the
     foot of the page, and the row is already entirely clickable. Kept because
     restoring it is one line, and because the string is the right one if the
     rows ever need a visible affordance again. */
  cta: "Read the case",
};

export const interlude = {
  statement: "We build inside your team, not around it.",
  body: "Documentation, runbooks, and a team that runs the system after we leave.",
};

export const teamTeaser = {
  eyebrow: "The team",
  title: "The people doing the work.",
  body: "ElderOps is senior engineers, not a bench of resumes. The person who assesses your systems is the person who builds the fix. Meet the engineers you would actually work with.",
  cta: "Meet the team",
};
