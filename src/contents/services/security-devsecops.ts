import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "security-devsecops",

  seo: {
    title: "Build security into the way technology is delivered",
    description:
      "Embed security into architecture, cloud, CI/CD, and software delivery with senior security and DevSecOps engineers from ElderOps.",
  },

  hero: {
    kicker: "Security & DevSecOps",
    title: "Build security into the way technology is delivered",
    descriptor:
      "We embed controls, scanning, and policy into the pipeline so security stops being the last gate before release.",
    primaryCta: "Talk to a security engineer",
    photoAlt:
      "Two engineers reviewing work on monitors in a very dark room lit by screens and a single desk lamp",
    photoPosition: "center 45%",
  },

  lead: "We help organizations reduce risk without placing unnecessary friction between developers and production, integrating security across design, cloud infrastructure, code, pipelines, dependencies, identities, and operations.",

  signals: {
    title: "When you would call us",
    items: [
      "Security review happens at the end and repeatedly delays releases.",
      "Teams receive vulnerability findings without the context or capacity to fix them.",
      "Cloud identities, permissions, and configurations grew without governance.",
      "Security tooling produces noise rather than action.",
      "Customer and regulatory requirements are outpacing your internal capability.",
      "You need senior security engineering without building every role internally.",
    ],
  },

  work: {
    title: "What we do",
    groups: [
      {
        title: "Secure architecture and threat modeling",
        body: "Find the risks worth engineering against, on the flows that matter.",
      },
      {
        title: "Pipeline security integration",
        body: "Scanning and policy in CI, with gates tuned to be actionable rather than noisy.",
      },
      {
        title: "Cloud and infrastructure security",
        body: "Posture, configuration, and network controls that hold as the estate grows.",
      },
      {
        title: "Identity and access",
        body: "Least privilege and zero-trust foundations that survive contact with delivery.",
      },
      {
        title: "Secrets and key management",
        body: "Get credentials out of configuration and into managed, rotatable storage.",
      },
      {
        title: "Software supply chain",
        body: "Dependency, build, and artifact integrity from source to deploy.",
      },
      {
        title: "Vulnerability management",
        body: "A remediation path engineers can actually work, with owners and deadlines.",
      },
      {
        title: "Compliance automation",
        body: "Technical evidence collected continuously instead of assembled in a panic.",
      },
      {
        title: "Detection and response readiness",
        body: "Know how you would find it, contain it, and recover from it.",
      },
    ],
  },

  embedded: {
    title: "Security engineers working directly with delivery teams",
    paragraphs: [
      "ElderOps security engineers can embed into product squads, platform teams, cloud programs, security functions, or transformation initiatives.",
      "They participate in design reviews, contribute code and policy, configure tooling, investigate findings, create reusable controls, support remediation, and help teams understand the reasoning behind security decisions.",
    ],
    modelsIntro: "We can provide:",
    models: [
      "An embedded DevSecOps engineer for one or more product teams.",
      "A cloud security engineer for a migration or infrastructure program.",
      "A security architect to establish target patterns and technical direction.",
      "A focused remediation squad for a critical risk area.",
      "Fractional security leadership to prioritize investment and coordinate execution.",
    ],
  },

  caseStudy: {
    title: "Security was the last gate, so security was always the delay",
    client:
      "A fintech company moving upmarket into enterprise deals and preparing for a SOC 2 audit.",
    problem:
      "Every release met a manual security review that added weeks. Findings arrived as a spreadsheet with no owner. Credentials sat in configuration files, and cloud roles had accumulated permissions nobody could justify.",
    whatWeDid:
      "We threat-modeled the two critical money flows, moved dependency, code, container, and infrastructure scanning into the pipeline with gates tuned to block only what mattered, migrated secrets into managed storage with rotation, rebuilt access around least privilege, and automated evidence collection for the audit.",
    results: [
      "Security review became a pipeline check rather than a gate at the end.",
      "Findings surface at commit time, with an owner, instead of at the release.",
      "Audit evidence is collected continuously, and the enterprise deals unblocked.",
    ],
    kept: "Their engineers own the pipeline gates and the remediation queue.",
  },

  finalCta: {
    title: "Make security part of how your organization moves",
    body: "Embed practical security expertise into your architecture, delivery systems, cloud environments, and engineering teams.",
    primaryCta: "Talk to a security engineer",
  },

  faqs: [
    {
      q: "Can you help us prepare for SOC 2, ISO 27001, or a customer security review?",
      a: "We can help design, implement, and evidence the relevant technical controls. We can also remediate gaps identified during an assessment. Formal audit, certification, and legal interpretation remain the responsibility of qualified auditors and advisers.",
    },
    {
      q: "Will security checks slow down delivery?",
      a: "Poorly designed security processes can. Our objective is to place fast, risk-based checks at the right stages, automate standard controls, reduce false positives, and create clear exception and remediation paths.",
    },
    {
      q: "Can you work with our existing security team?",
      a: "Yes. We can provide additional engineering capacity, run a defined workstream, embed into development teams, or help security specialists translate standards into technical implementation.",
    },
    {
      q: "Do you provide penetration testing?",
      a: "We can coordinate and support security testing, remediate findings, and provide specialists where the required experience is available. The scope and testing methodology should be defined according to the system, risk, and any formal assurance requirements.",
    },
  ],
};

export default page;
