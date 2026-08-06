/**
 * Careers (V4) copy — the supply side. Buyer pages sell outcomes; this
 * page sells the way of working to senior engineers. The only CTA label
 * on this page is "Apply to join the network" (brief's CTA system).
 * The domain grid reads from contents/taxonomy.ts.
 *
 * Numbers: "fewer than 4 in 100" carries over from the partner-approved
 * "<4% acceptance" used on V3; the old 244 counter is dropped as
 * unverified.
 */

export const APPLY_MAILTO =
  "mailto:contact@elderops.net?subject=Application%20to%20join%20the%20ElderOps%20network";

export const hero = {
  kicker: "Careers",
  title: "Own the work. Set the terms.",
  descriptor:
    "ElderOps is where senior engineers do embedded, high-trust work on engagements that fit their lives.",
  cta: "Apply to join the network",
};

export const whyJoin = {
  kicker: "Why engineers join",
  title: "The work, without the layers.",
  items: [
    {
      num: "01",
      title: "Work that is yours",
      body: "You own an initiative end to end: assessment, build, and handoff. No ticket queues, no account managers between you and the outcome.",
    },
    {
      num: "02",
      title: "Terms that flex",
      body: "Fractional or full engagements, chosen by you. Scale your load up or down as your life changes; the network does not punish either direction.",
    },
    {
      num: "03",
      title: "Peers, not pyramids",
      body: "Everyone here has run production systems. Reviews, escalations, and hard calls happen between senior engineers who trust each other.",
    },
  ],
};

export const domains = {
  kicker: "Where you would work",
  title: "The same eight capabilities our clients buy.",
  intro:
    "Engagements map to the buyer taxonomy, so the work you take is the work the client sees.",
};

export const process = {
  kicker: "How you join",
  title: "Apply. Vetting. Embed.",
  note: "Fewer than 4 in 100 applicants join the network.",
  steps: [
    {
      num: "01",
      title: "Apply",
      body: "Tell us what you have run in production and the terms you want to work on. A senior engineer reads every application; there is no recruiter screen.",
    },
    {
      num: "02",
      title: "Vetting",
      body: "Deep technical conversations with engineers who have done the work: systems you have owned, calls you have made, and how you hand things off.",
    },
    {
      num: "03",
      title: "Embed",
      body: "You join engagements that fit your depth and your terms, with the method and the network behind you.",
    },
  ],
};
