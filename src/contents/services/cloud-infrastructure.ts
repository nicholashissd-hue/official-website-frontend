import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "cloud-infrastructure",

  seo: {
    title: "Cloud & Infrastructure Engineering | ElderOps",
    description:
      "Design, modernize, automate, and operate secure cloud and infrastructure environments with senior ElderOps engineers embedded directly into your team.",
  },

  hero: {
    kicker: "Cloud & Infrastructure",
    title: "Build a cloud foundation your business can rely on",
    descriptor:
      "ElderOps embeds senior cloud and infrastructure engineers into your organization to design, modernize, automate, and operate secure, resilient environments across public cloud, private cloud, on-premises infrastructure, and hybrid estates.",
    primaryCta: "Talk to a cloud engineer",
    photoAlt:
      "Two engineers working at an open equipment rack in a dark server hall at night",
    photoPosition: "center 45%",
  },

  lead: "Whether you are migrating critical workloads, correcting an environment that has grown without sufficient control, or preparing a platform for its next stage of scale, we bring the engineering experience required to move from uncertainty to a clear, production-ready foundation.",

  thesis: {
    title: "Cloud should create leverage, not another layer of complexity",
    paragraphs: [
      "Cloud platforms make it possible to provision infrastructure quickly. They do not automatically make that infrastructure secure, maintainable, resilient, or cost-effective.",
      "As organizations grow, early infrastructure decisions begin to compound. Accounts and subscriptions multiply. Network boundaries become harder to understand. Environments drift apart. Manual processes remain in place long after they should have been automated. Critical systems depend on knowledge held by one or two people, and teams become hesitant to change infrastructure because the impact is difficult to predict.",
      "ElderOps helps organizations regain control of that environment. Our engineers work alongside your internal teams to understand what exists, identify where risk and friction are accumulating, and build the architecture, automation, controls, and operating practices required for dependable growth.",
      "We do not stop at a strategy document. We help implement the environment, migrate the workloads, automate the processes, resolve production issues, and transfer the knowledge your team needs to operate confidently.",
    ],
  },

  signals: {
    title: "Where organizations commonly need help",
    intro: "You may need cloud and infrastructure support when:",
    items: [
      "Your cloud estate has expanded without a consistent architecture or governance model.",
      "Provisioning environments still requires manual tickets, scripts, or intervention from a small infrastructure team.",
      "A migration has stalled because application dependencies, networking, security, or ownership are unclear.",
      "Reliability, performance, or capacity problems are affecting customers and delivery teams.",
      "Your infrastructure works today, but there is little confidence that it will support the next stage of growth.",
      "You need senior cloud expertise but do not yet require, or cannot wait to hire, a full internal department.",
    ],
  },

  work: {
    title: "What our cloud and infrastructure engineers do",
    groups: [
      {
        title: "Cloud strategy and target architecture",
        body: [
          "We assess your current environment, business priorities, workload requirements, operational constraints, and risk profile. From there, we define a practical target architecture and an achievable path toward it.",
          "That may involve public cloud, private cloud, hybrid infrastructure, multiple cloud providers, or a deliberate decision to keep specific workloads outside the public cloud. Our objective is not to move everything. It is to put each workload in the environment that best supports its performance, security, resilience, compliance, and economic requirements.",
        ],
      },
      {
        title: "Cloud foundations and landing zones",
        body: [
          "Our engineers design and implement the foundations on which secure cloud adoption depends. This can include account and subscription structures, identity integration, network architecture, centralized logging, security controls, policy enforcement, resource standards, tagging, budget controls, and environment separation.",
          "These foundations give teams a repeatable way to launch new services without redesigning security, networking, and governance every time.",
        ],
      },
      {
        title: "Infrastructure as code and automation",
        body: [
          "We replace fragile manual processes with version-controlled, testable, and repeatable automation.",
          "Our engineers can build or improve infrastructure-as-code frameworks, reusable modules, configuration management, automated environment provisioning, policy checks, deployment workflows, and operational tooling. Changes become easier to review, reproduce, audit, and reverse.",
        ],
      },
      {
        title: "Cloud migration and workload modernization",
        body: [
          "We help plan and execute migrations without losing sight of business continuity. Our work can include application and dependency discovery, migration sequencing, workload classification, proof-of-concept migrations, data transfer, cutover planning, rollback design, validation, and post-migration stabilization.",
          "Where a direct migration would preserve too much existing complexity, we can help replatform, refactor, containerize, or redesign the workload as part of the move.",
        ],
      },
      {
        title: "Containers, Kubernetes, and cloud-native runtimes",
        body: [
          "ElderOps engineers design and operate container platforms that match the maturity and actual needs of the organization. We can help with Kubernetes architecture, cluster provisioning, workload deployment, ingress, service networking, secrets, policy, autoscaling, observability, upgrades, and platform operations.",
          "We also work with serverless, managed container, and platform-as-a-service options when they offer a simpler and more appropriate operating model. The goal is not Kubernetes for its own sake. It is a reliable runtime that reduces operational burden and enables teams to deliver safely.",
        ],
      },
      {
        title: "Networking and hybrid connectivity",
        body: [
          "We design the connectivity that allows applications, users, data, and third-party services to communicate securely and predictably.",
          "This may include virtual networks, segmentation, routing, DNS, load balancing, private connectivity, VPNs, cloud interconnects, firewalls, ingress and egress controls, content delivery, and connectivity between cloud and on-premises environments.",
        ],
      },
      {
        title: "Resilience, backup, and disaster recovery",
        body: [
          "We help organizations move from assumed resilience to tested resilience.",
          "Our engineers identify critical services and dependencies, define recovery requirements, improve availability design, automate backups, validate restoration procedures, design failover patterns, and run recovery exercises. We also document responsibilities and decision paths so that recovery does not depend on improvisation during an incident.",
        ],
      },
      {
        title: "Infrastructure governance and operating practices",
        body: [
          "Technology alone does not create a sustainable cloud environment. Teams also need ownership, standards, escalation paths, documentation, and a clear way to make decisions.",
          "We help establish architecture principles, operational responsibilities, change controls, service ownership, support models, technical documentation, and governance that protects the organization without creating unnecessary delivery friction.",
        ],
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
    title: "What changes as a result",
    intro:
      "A successful cloud and infrastructure engagement should leave you with more than a functioning environment. It should create:",
    items: [
      "Repeatable, version-controlled infrastructure.",
      "Faster and safer environment provisioning.",
      "Clearer responsibility and fewer operational bottlenecks.",
      "Stronger resilience, recovery, and production readiness.",
      "Better visibility into how infrastructure behaves and changes.",
      "A team that understands the environment rather than depending indefinitely on an external provider.",
    ],
  },

  why: {
    title: "Why ElderOps",
    paragraphs: [
      "ElderOps gives organizations access to senior engineers with experience delivering and operating technology in demanding multinational environments.",
      "We match the engagement to the problem. That may mean one experienced engineer embedded into your existing team, a multidisciplinary squad, a technical lead, or fractional senior leadership.",
      "In every model, our objective is the same: solve the immediate problem, reduce the risk around it, and strengthen the engineering capability that remains behind.",
    ],
  },

  finalCta: {
    title: "Build the foundation for what comes next",
    body: "Whether you are planning a migration, correcting cloud sprawl, strengthening resilience, or preparing for significant growth, ElderOps can place experienced cloud and infrastructure engineers directly into the work.",
    primaryCta: "Speak with a cloud specialist",
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
