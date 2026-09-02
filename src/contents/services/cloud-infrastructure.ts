import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "cloud-infrastructure",

  seo: {
    title: "Build a cloud foundation your business can rely on",
    description:
      "Design, modernize, automate, and operate secure cloud and infrastructure environments with senior ElderOps engineers embedded directly into your team.",
  },

  hero: {
    kicker: "Cloud & Infrastructure",
    title: "Build a cloud foundation your business can rely on",
    descriptor:
      "Senior cloud engineers embedded in your team to design, migrate, automate, and operate environments that scale cleanly. Public cloud, hybrid, or on-premises.",
    primaryCta: "Talk to a cloud engineer",
    photoAlt:
      "Two engineers working at an open equipment rack in a dark server hall at night",
    photoPosition: "center 45%",
  },

  lead: "Whether you are migrating critical workloads, correcting an environment that has grown without sufficient control, or preparing a platform for its next stage of scale, we bring the engineering experience required to move from uncertainty to a clear, production-ready foundation.",

  signals: {
    title: "When you would call us",
    items: [
      "Your cloud estate grew without a consistent architecture or governance model.",
      "Provisioning an environment still needs a ticket and a specialist.",
      "A migration has stalled on unclear dependencies, networking, or ownership.",
      "Reliability, performance, or capacity problems are reaching customers.",
      "It works today, but nobody is confident it survives the next stage of growth.",
      "You need senior cloud expertise before you can justify a full internal team.",
    ],
  },

  work: {
    title: "What we do",
    groups: [
      {
        title: "Cloud strategy and target architecture",
        body: "Assess what exists, define a target you can actually reach, and decide what belongs where.",
      },
      {
        title: "Cloud foundations and landing zones",
        body: "Accounts, identity, network, logging, and policy so new services launch without redesigning security every time.",
      },
      {
        title: "Infrastructure as code",
        body: "Replace hand-built environments with version-controlled, reviewable, reversible infrastructure.",
      },
      {
        title: "Migration and modernization",
        body: "Discovery, sequencing, rehearsal, cutover, rollback, and post-migration stabilization.",
      },
      {
        title: "Containers and cloud-native runtimes",
        body: "Kubernetes, or the simpler managed option, sized to what you actually need to operate.",
      },
      {
        title: "Networking and hybrid connectivity",
        body: "Segmentation, routing, DNS, private connectivity, and the cloud-to-on-premises path.",
      },
      {
        title: "Resilience and disaster recovery",
        body: "Move from assumed recovery to tested recovery.",
      },
      {
        title: "Governance and operating practice",
        body: "Ownership, standards, and change control that protect you without slowing delivery.",
      },
    ],
  },

  embedded: {
    title: "Engineers embedded where the work happens",
    paragraphs: [
      "An ElderOps engineer does not sit outside the organization waiting to deliver recommendations.",
      "Our engineers can join your stand-ups, planning sessions, architecture reviews, incident calls, and engineering channels. They work in your repositories and delivery systems, contribute production code, create infrastructure modules, review changes, document decisions, mentor team members, and take responsibility for agreed outcomes.",
    ],
    modelsIntro: "Depending on the need, we can provide:",
    models: [
      "A senior specialist to close a specific capability gap.",
      "An embedded cloud and infrastructure squad to run a defined program.",
      "A technical lead to establish architecture, standards, and engineering direction.",
      "A build-operate-transfer engagement that creates a capability your internal team ultimately runs.",
    ],
  },

  outcomes: {
    title: "What changes",
    items: [
      "Environments provision in minutes instead of tickets.",
      "Recovery is tested, not assumed.",
      "Your team can explain and change the environment without us.",
    ],
  },

  caseStudy: {
    title: "The migration that had been almost done for nine months",
    client:
      "A Series A health-tech company, roughly 35 engineers, midway from a colocation facility to public cloud.",
    problem:
      "The migration had stalled for most of a year. Two estates ran in parallel, the dependency map lived in one engineer's head, and every proposed cutover date slipped.",
    whatWeDid:
      "We mapped the real dependencies, built a landing zone with account separation and infrastructure as code, sequenced the remaining workloads into three waves, and rehearsed each cutover with a tested rollback before running it.",
    results: [
      "The migration finished, and the parallel estate was switched off.",
      "Provisioning an environment went from a multi-day ticket to a pipeline the team runs itself.",
      "The cost of running two facilities at once ended entirely.",
    ],
    kept: "Their engineers owned the infrastructure code by the second wave. We ran the last one from the back seat.",
  },

  finalCta: {
    title: "Build the foundation for what comes next",
    body: "Whether you are planning a migration, correcting cloud sprawl, strengthening resilience, or preparing for significant growth, ElderOps can place experienced cloud and infrastructure engineers directly into the work.",
    primaryCta: "Talk to a cloud engineer",
  },

  faqs: [
    {
      q: "Which cloud providers do you support?",
      a: "Our engineers have experience across AWS, Microsoft Azure, Google Cloud, private cloud, on-premises infrastructure, and hybrid environments. We match engineers to your existing technology, industry requirements, and target architecture.",
    },
    {
      q: "Do you only provide recommendations?",
      a: "No. ElderOps can support assessment and strategy, but our core differentiator is execution. Our engineers can design the target state, build the infrastructure, automate delivery, migrate workloads, stabilize production, and hand the environment to your team.",
    },
    {
      q: "Can you work with our existing internal team or managed service provider?",
      a: "Yes. We regularly work within existing delivery structures. We can close a specific capability gap, lead a defined workstream, improve how multiple providers collaborate, or help your internal team take greater responsibility for the environment.",
    },
    {
      q: "Can you help with an urgent infrastructure problem?",
      a: "Yes. We can provide senior engineering support for recovery, stabilization, architecture review, migration risk, performance constraints, or an unexpected capability gap. The initial priority is to establish control; longer-term improvements can then be sequenced around business needs.",
    },
  ],
};

export default page;
