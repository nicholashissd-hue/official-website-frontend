import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "security-devsecops",

  seo: {
    title: "Security & DevSecOps Engineering | ElderOps",
    description:
      "Embed security into architecture, cloud, CI/CD, and software delivery with senior security and DevSecOps engineers from ElderOps.",
  },

  hero: {
    kicker: "Security & DevSecOps",
    title: "Build security into the way technology is delivered",
    descriptor:
      "ElderOps embeds senior security and DevSecOps engineers into your teams to turn security requirements into practical architecture, automated controls, and everyday engineering behavior.",
    primaryCta: "Talk to a security engineer",
    photoAlt:
      "Two engineers reviewing work on monitors in a very dark room lit by screens and a single desk lamp",
    photoPosition: "center 45%",
  },

  lead: "We help organizations reduce risk without placing unnecessary friction between developers and production, integrating security across design, cloud infrastructure, code, pipelines, dependencies, identities, and operations.",

  thesis: {
    title: "Security should be part of delivery, not a final obstacle to it",
    paragraphs: [
      "Security problems often appear late because security decisions happen outside the systems where software is built.",
      "A development team completes a feature and then discovers a control that requires significant redesign. Vulnerability reports create large backlogs without clear prioritization. Cloud environments are configured differently across teams. Secrets appear in repositories or pipeline variables. Open-source dependencies enter production without sufficient visibility. Compliance evidence is assembled manually before an audit.",
      "This creates an unhelpful choice between moving quickly and moving safely. ElderOps helps remove that choice.",
      "Our engineers work with development, cloud, platform, security, risk, and operations teams to translate policies and threat scenarios into engineering controls. Wherever possible, those controls are automated and placed directly into the development and delivery lifecycle. Security becomes faster to apply, easier to verify, and more consistent across the organization.",
    ],
  },

  signals: {
    title: "Where organizations commonly need help",
    intro: "You may need security and DevSecOps support when:",
    items: [
      "Security reviews happen near the end of delivery and repeatedly delay releases.",
      "Development teams receive vulnerability findings but lack the context or capacity to remediate them.",
      "Cloud identities, permissions, network controls, or configurations have grown without consistent governance.",
      "Security tooling produces substantial noise and limited actionable information.",
      "Customer or regulatory requirements are increasing faster than your internal security capability.",
      "You need senior security engineering expertise but are not ready to build every role internally.",
    ],
  },

  work: {
    title: "What our security and DevSecOps engineers do",
    groups: [
      {
        title: "Secure architecture and threat modeling",
        body: [
          "We help teams identify security risks before they become expensive implementation problems.",
          "Our engineers review system designs, data flows, trust boundaries, authentication, authorization, integrations, external exposure, administrative access, and failure scenarios. We facilitate practical threat modeling and translate findings into prioritized engineering actions. The objective is to make risk visible early enough to influence design.",
        ],
      },
      {
        title: "DevSecOps pipeline integration",
        body: [
          "We integrate security checks into the tools and workflows engineers already use. This may include static application security testing, dynamic testing, software composition analysis, secret detection, infrastructure-as-code scanning, container image scanning, dependency checks, policy validation, and deployment controls.",
          "We tune checks around material risk and establish clear paths for triage, exception handling, remediation, and escalation. A pipeline that produces thousands of ignored findings is not an effective security control.",
        ],
      },
      {
        title: "Cloud and infrastructure security",
        body: [
          "Our engineers assess and improve security across cloud accounts, subscriptions, networks, workloads, storage, identities, logging, encryption, backups, and management interfaces.",
          "We can help establish secure landing zones, configuration standards, posture monitoring, network segmentation, workload protections, policy enforcement, and automated remediation for common misconfigurations.",
        ],
      },
      {
        title: "Identity, access, and zero-trust foundations",
        body: [
          "Identity is one of the most important control planes in a modern technology estate.",
          "We help improve identity architecture, role design, least-privilege access, privileged access, workload identity, service accounts, authentication, authorization, joiner-mover-leaver processes, conditional access, and access review. Our focus is to make legitimate access straightforward while reducing unnecessary standing privilege.",
        ],
      },
      {
        title: "Secrets, keys, and sensitive configuration",
        body: [
          "We help remove secrets from source code, local files, shared documents, and unmanaged pipeline variables.",
          "Our engineers can implement centralized secrets management, encryption key practices, workload identity, rotation, certificate management, access controls, and auditability. We also help applications consume secrets safely without introducing excessive operational burden.",
        ],
      },
      {
        title: "Software supply-chain security",
        body: [
          "Modern applications depend on open-source packages, container images, build systems, plugins, and external services.",
          "We help establish dependency visibility, software bills of materials, artifact integrity, trusted build processes, provenance, signing, repository controls, dependency policies, and practical remediation workflows. The aim is to understand what enters production, where it came from, and how the organization can respond when a component becomes unsafe.",
        ],
      },
      {
        title: "Vulnerability management and remediation",
        body: [
          "Finding vulnerabilities is only the beginning.",
          "ElderOps engineers help organizations validate findings, assess exploitability and business context, prioritize remediation, assign responsibility, repair affected systems, improve patching, and remove recurring causes. We can work directly with development and infrastructure teams to turn security backlogs into executable engineering work.",
        ],
      },
      {
        title: "Compliance automation and technical evidence",
        body: [
          "We help translate technical control requirements into automated, repeatable evidence. That may include configuration checks, access records, pipeline results, change history, asset data, vulnerability status, logging, backup validation, and policy enforcement.",
          "Our engineers can support the technical controls and evidence required for frameworks and customer reviews. Formal certification, regulatory interpretation, and legal determinations remain with the relevant auditors, legal advisers, and accountable organizational leaders.",
        ],
      },
      {
        title: "Detection, response, and recovery readiness",
        body: [
          "We help ensure systems produce the information and response options required when suspicious activity occurs.",
          "This can include audit logging, alerting, cloud detections, incident runbooks, containment automation, access revocation, evidence preservation, recovery procedures, and exercises involving engineering and business stakeholders.",
        ],
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

  outcomes: {
    title: "What changes as a result",
    intro: "A successful engagement should create:",
    items: [
      "Earlier visibility of meaningful security risk.",
      "Fewer last-minute release and architecture surprises.",
      "Automated controls applied consistently across teams.",
      "Clearer responsibility and faster remediation of vulnerabilities.",
      "Stronger cloud, identity, dependency, and pipeline security.",
      "Better technical evidence for customers, auditors, and internal governance.",
      "Development teams that can move safely without depending on manual security intervention for every change.",
    ],
  },

  why: {
    title: "Why ElderOps",
    paragraphs: [
      "Security engineering sits across software, infrastructure, cloud, identity, delivery, and operations. ElderOps brings together the exact combination of experience your environment requires.",
      "Our specialists can advise, but they are also prepared to implement. They work with your teams to reduce immediate exposure, engineer sustainable controls, and build security capability into normal delivery.",
    ],
  },

  finalCta: {
    title: "Make security part of how your organization moves",
    body: "Embed practical security expertise into your architecture, delivery systems, cloud environments, and engineering teams.",
    primaryCta: "Speak with a security engineer",
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
