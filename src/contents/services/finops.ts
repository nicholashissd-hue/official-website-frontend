import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "finops",

  seo: {
    title: "Cloud Cost Optimization & FinOps | ElderOps",
    description:
      "Gain control of cloud spend through hands-on FinOps, architecture optimization, cost automation, and embedded cloud engineering from ElderOps.",
  },

  hero: {
    kicker: "Cloud Cost Optimization",
    title: "Turn cloud spend into an engineering discipline",
    descriptor:
      "ElderOps helps organizations understand, reduce, and continuously govern cloud costs without weakening performance, reliability, security, or delivery speed.",
    primaryCta: "Review your cloud spend",
    photoAlt:
      "Two colleagues working through printed spreadsheets and a laptop at a desk in a dim office at dusk",
    photoPosition: "center 45%",
  },

  lead: "Our cloud and FinOps engineers work directly with finance, product, infrastructure, and engineering teams to identify where money is being consumed, implement validated improvements, and embed cost awareness into the systems and decisions that create cloud spend.",

  thesis: {
    title: "A cost report does not reduce a cloud bill",
    paragraphs: [
      "Most cloud providers already offer dashboards, recommendations, and budget alerts. Yet many organizations still struggle to explain what they are spending, who is responsible for it, and whether that spending creates enough value.",
      "The problem is rarely a lack of data. It is the gap between financial information and engineering action.",
      "Resources are overprovisioned because no one is comfortable changing them. Non-production environments run continuously. Storage grows without lifecycle policies. Commitment discounts are purchased without sufficient demand analysis. Data transfer and managed-service charges appear in unexpected places. Teams cannot see the cost of individual products, customers, transactions, or environments.",
      "ElderOps closes the gap between seeing a cost and changing the engineering conditions that create it. We establish visibility, identify the most valuable opportunities, make the required infrastructure and architecture changes, and put controls in place so that savings do not disappear as the environment continues to evolve.",
    ],
  },

  signals: {
    title: "Where organizations commonly need help",
    intro: "You may need cloud cost optimization support when:",
    items: [
      "Cloud spend is increasing faster than usage, customers, or revenue.",
      "Finance can see the total bill but cannot attribute it to teams, products, environments, or business services.",
      "Provider recommendations exist, but engineering teams do not have the time or confidence to implement them.",
      "Cost optimization happens as an occasional exercise rather than part of normal delivery.",
      "Budget alerts identify overspend only after it has occurred.",
      "The organization is preparing for growth, migration, AI workloads, or a major renewal and needs a credible cost model.",
    ],
  },

  work: {
    title: "What our cloud cost and FinOps engineers do",
    groups: [
      {
        title: "Cost baseline and allocation",
        body: [
          "We establish a trusted view of current cloud consumption.",
          "Our engineers examine accounts, subscriptions, projects, invoices, resource metadata, commitments, utilization, data transfer, managed services, storage, support plans, marketplace purchases, and shared platform costs. We improve tagging and allocation so spending can be associated with teams, products, environments, customers, or other meaningful business dimensions.",
        ],
      },
      {
        title: "Rapid waste and utilization optimization",
        body: [
          "We identify resources that are idle, oversized, duplicated, abandoned, or running outside required service windows.",
          "This may include compute, databases, Kubernetes capacity, storage, snapshots, load balancers, IP addresses, development environments, test systems, logging volumes, and data-processing jobs. Recommendations are validated against performance, resilience, and business requirements before changes are made.",
        ],
      },
      {
        title: "Architecture-level cost optimization",
        body: [
          "Some of the largest cost opportunities cannot be solved by changing instance sizes.",
          "Our engineers assess workload architecture, scaling behavior, data movement, storage design, managed-service choices, container utilization, database patterns, caching, networking, observability, and software behavior. Where justified, we redesign components so the application consumes cloud resources more efficiently by default.",
        ],
      },
      {
        title: "Pricing, commitments, and commercial optimization",
        body: [
          "We help analyze stable demand and determine where reservations, savings plans, committed-use discounts, tiering, enterprise agreements, or other pricing options may be appropriate.",
          "Commitments are treated carefully. A discounted resource that is no longer required remains waste. We align purchasing decisions with validated usage and realistic forecasts.",
        ],
      },
      {
        title: "Kubernetes and container cost engineering",
        body: [
          "Container platforms can obscure the relationship between application demand and infrastructure cost.",
          "We help improve requests and limits, node sizing, autoscaling, workload scheduling, cluster utilization, environment separation, idle capacity, chargeback, and namespace or workload visibility. The objective is to improve cost efficiency without creating resource contention or unreliable services.",
        ],
      },
      {
        title: "FinOps as code",
        body: [
          "We embed cost controls into engineering workflows rather than relying entirely on after-the-fact review.",
          "This can include automated tagging, policy checks, approved resource patterns, budget thresholds, anomaly alerts, deployment estimates, non-production scheduling, lifecycle controls, and guardrails within infrastructure-as-code modules and platform workflows. Teams receive earlier feedback on the financial impact of engineering decisions.",
        ],
      },
      {
        title: "Budgets, forecasting, and unit economics",
        body: [
          "We help create budgets and forecasts grounded in real consumption drivers.",
          "For digital products, that may include cost per customer, transaction, workload, environment, data volume, model inference, or other useful unit. This makes it easier to distinguish healthy growth in cloud spend from avoidable inefficiency.",
        ],
      },
      {
        title: "Cost responsibility and operating model",
        body: [
          "Cloud cost is created across engineering, product, finance, procurement, and leadership. It cannot be sustainably managed by one isolated team.",
          "We help establish responsibilities, review cycles, dashboards, escalation thresholds, optimization backlogs, decision rights, and shared language between technical and financial stakeholders.",
        ],
      },
      {
        title: "Continuous optimization",
        body: [
          "Cloud environments change constantly. New services are launched, demand shifts, providers change pricing, and earlier optimizations lose relevance.",
          "ElderOps can embed ongoing FinOps engineering into your organization to monitor anomalies, identify new opportunities, support teams, implement improvements, and track realized results.",
        ],
      },
    ],
  },

  embedded: {
    title: "Engineers who implement, not just identify, savings",
    paragraphs: [
      "An ElderOps cost optimization engagement goes beyond a list of recommendations.",
      "Our engineers work inside your cloud environment and delivery processes, subject to your access and change controls. They validate opportunities, open the engineering work, change infrastructure and architecture, measure the effect, document decisions, and help teams adopt improved cost practices.",
    ],
    modelsIntro: "We can provide:",
    models: [
      "A focused cloud-cost assessment and implementation sprint.",
      "An embedded FinOps engineer working across finance and engineering.",
      "A cloud architecture squad targeting structural cost drivers.",
      "Fractional FinOps leadership to establish governance and responsibility.",
      "Ongoing optimization support for a growing cloud estate.",
    ],
  },

  outcomes: {
    title: "What changes as a result",
    intro: "A successful engagement should create:",
    items: [
      "Clearer attribution of cloud spend.",
      "Validated reductions in avoidable consumption.",
      "Better-informed architecture and purchasing decisions.",
      "Earlier detection of anomalies and budget risk.",
      "Cost controls embedded into infrastructure and delivery workflows.",
      "Shared responsibility across finance, engineering, product, and leadership.",
      "A repeatable process for sustaining efficiency as the estate grows.",
    ],
  },

  why: {
    title: "Why ElderOps",
    paragraphs: [
      "Cloud cost optimization requires more than financial analysis. It requires engineers who understand infrastructure, application architecture, Kubernetes, data platforms, reliability, performance, and cloud commercial models.",
      "ElderOps assembles the expertise required for your specific estate. Our focus is not simply to make the bill smaller. It is to make cloud spending more visible, intentional, and connected to business value.",
    ],
  },

  finalCta: {
    title: "Find the cost your dashboards cannot remove",
    body: "Turn cloud-cost visibility into implemented engineering change and a sustainable FinOps capability.",
    primaryCta: "Speak with a FinOps engineer",
  },

  faqs: [
    {
      q: "Is this only a cost-cutting exercise?",
      a: "No. The objective is to improve the value and efficiency of cloud consumption. We consider reliability, performance, security, scalability, and delivery requirements before recommending or implementing a change.",
    },
    {
      q: "Do you implement the recommendations?",
      a: "Yes. ElderOps engineers can change infrastructure, update architecture, improve automation, introduce controls, and work with service owners to complete agreed optimization actions.",
    },
    {
      q: "Can you work across multiple cloud providers?",
      a: "Yes. We can support public-cloud, multi-cloud, hybrid, and Kubernetes estates. Allocation and governance can also be designed to give leadership a consolidated view across environments.",
    },
    {
      q: "Can you guarantee a particular percentage of savings?",
      a: "Savings depend on the current estate, contracts, utilization, architecture, and operational requirements. We establish a baseline, validate each opportunity, agree the implementation scope, and measure realized results rather than making a generic percentage promise.",
    },
  ],
};

export default page;
