import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "reliability-operations",

  seo: {
    title: "Engineer reliability before incidents make the decision for you",
    description:
      "Improve system reliability, observability, incident response, and operational performance with embedded ElderOps SRE and operations engineers.",
  },

  hero: {
    kicker: "Reliability & Operations",
    title: "Engineer reliability before incidents make the decision for you",
    descriptor:
      "Observability, service objectives, and incident practice that hold under load, so your team builds instead of firefighting.",
    primaryCta: "Talk to a reliability engineer",
    photoAlt:
      "Two engineers working an incident at night in an operations room, a wall of dashboards glowing behind them",
    photoPosition: "center 45%",
  },

  lead: "We help teams move from reactive support to an engineering-led operating model, reducing repetitive work, strengthening production systems, and creating clear evidence of how services behave under real conditions.",

  signals: {
    title: "When you would call us",
    items: [
      "Incidents are increasing in frequency, duration, or business impact.",
      "Monitoring exists, but teams still cannot tell why a service is failing.",
      "Alert noise buries the signals that need action.",
      "Operational knowledge sits with a few individuals.",
      "Engineers spend their time on repetitive support and manual recovery.",
      "Backup, failover, and capacity assumptions have never been tested.",
    ],
  },

  work: {
    title: "What we do",
    groups: [
      {
        title: "Reliability strategy",
        body: "Decide which services deserve which level of reliability, and pay for it deliberately.",
      },
      {
        title: "Service level objectives",
        body: "Indicators and objectives on the journeys that actually carry revenue.",
      },
      {
        title: "Observability engineering",
        body: "Metrics, logs, and traces that answer why, not just whether.",
      },
      {
        title: "Alerting and on-call",
        body: "Fewer, better alerts, and a rotation people can sustain.",
      },
      {
        title: "Incident management",
        body: "A clear path from detection to restoration that does not depend on improvisation.",
      },
      {
        title: "Learning from failure",
        body: "Blameless review that produces changes, not documents.",
      },
      {
        title: "Toil reduction",
        body: "Automate the repetitive operational work quietly consuming your team.",
      },
      {
        title: "Resilience testing",
        body: "Game days and failure injection, so recovery is proven rather than hoped for.",
      },
      {
        title: "Performance and capacity",
        body: "Know your limits before your customers find them.",
      },
    ],
  },

  embedded: {
    title: "Reliability engineers embedded into your operating environment",
    paragraphs: [
      "ElderOps engineers can join an existing SRE function, embed within a product team, lead an operational improvement program, or establish a new reliability capability.",
      "They work in your monitoring systems, repositories, cloud environments, incident channels, and planning processes. They build automation, tune telemetry, respond to incidents, improve architecture, and coach teams in production responsibility.",
    ],
    modelsIntro: "We can provide:",
    models: [
      "An embedded SRE for a critical product or platform.",
      "A reliability squad focused on operational stabilization.",
      "An observability engineer to redesign telemetry and incident visibility.",
      "A technical lead to establish SRE practices and service standards.",
      "A build-operate-transfer engagement that creates an internal reliability function.",
    ],
  },

  outcomes: {
    title: "What changes",
    items: [
      "Problems are found before customers report them.",
      "On-call becomes sustainable.",
      "Recovery is a practiced procedure.",
    ],
  },

  caseStudy: {
    title: "The dashboards were green while customers were down",
    client:
      "A consumer marketplace, about 50 engineers, with sharp traffic peaks.",
    problem:
      "Monitoring covered infrastructure rather than user journeys, so dashboards looked healthy during outages customers could plainly see. Alert noise had trained the team to ignore pages, on-call was burning people out, and restoring a service was an open-ended hunt.",
    whatWeDid:
      "We defined indicators and objectives for the four revenue-critical journeys, rebuilt observability around distributed tracing and structured logs, cut alerting down to what a human should act on, restructured on-call with real runbooks, introduced blameless incident review, and ran game days against the failure modes that actually occurred.",
    results: [
      "Alerting quietened to what a human should act on, and real detection improved.",
      "Restoring a service became a practiced procedure rather than an open-ended hunt.",
      "Most incidents are now caught before customers notice them.",
    ],
    kept: "Their engineers own the objectives and run the review cadence themselves.",
  },

  finalCta: {
    title: "Build systems your customers, and your engineers, can trust",
    body: "Improve visibility, resilience, response, and operational control with senior reliability engineers embedded directly into your environment.",
    primaryCta: "Talk to a reliability engineer",
  },

  faqs: [
    {
      q: "Is SRE only relevant to very large organizations?",
      a: "No. The formality and scale of the practice should match the organization, but service responsibility, useful observability, recovery planning, automation, and incident learning are valuable well before a company reaches enterprise scale.",
    },
    {
      q: "Can you help during active production instability?",
      a: "Yes. We can support stabilization, incident response, diagnostic improvement, performance investigation, and recovery. Once immediate control is established, we can address the systemic causes behind the instability.",
    },
    {
      q: "Can you work with our current monitoring tools?",
      a: "Yes. We first assess signal quality, coverage, use, and who acts on what. Existing tools may be improved, integrated, simplified, or replaced only where there is a clear reason.",
    },
    {
      q: "Do you provide around-the-clock operations?",
      a: "We can help design operating coverage, escalation, and support models, and can assemble globally distributed teams around an agreed service requirement. The precise coverage, responsibilities, and response commitments are defined as part of the engagement.",
    },
  ],
};

export default page;
