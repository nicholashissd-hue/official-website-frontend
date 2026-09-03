import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "finops",

  seo: {
    title: "Turn cloud spend into an engineering discipline",
    description:
      "Gain control of cloud spend through hands-on FinOps, architecture optimization, cost automation, and embedded cloud engineering from ElderOps.",
  },

  hero: {
    kicker: "Cloud Cost Optimization",
    title: "Turn cloud spend into an engineering discipline",
    descriptor:
      "We instrument spend, remove waste, and put guardrails in the pipeline so the bill becomes a managed number instead of a monthly surprise.",
    primaryCta: "Talk to a FinOps engineer",
    photoAlt:
      "Two ElderOps engineers working through something together at a desk in a daylit office",
    photoPosition: "center 42%",
  },

  lead: "Our cloud and FinOps engineers work directly with finance, product, infrastructure, and engineering teams to identify where money is being consumed, implement validated improvements, and embed cost awareness into the systems and decisions that create cloud spend.",

  signals: {
    title: "The problems teams usually come to us with",
    items: [
      "Cloud spend is growing faster than usage, customers, or revenue.",
      "Finance sees a total but cannot attribute it to teams, products, or environments.",
      "Provider recommendations exist, but no team has capacity to act on them.",
      "Optimization happens as an occasional cleanup rather than part of delivery.",
      "Budget alerts tell you about overspend after it has happened.",
      "You need a credible cost model for growth, migration, AI workloads, or a renewal.",
    ],
  },

  work: {
    title: "What we do",
    groups: [
      {
        title: "Cost baseline and allocation",
        body: "Tagging and a model that maps every dollar to a team, service, and environment.",
      },
      {
        title: "Waste and utilization",
        body: "Remove idle, orphaned, and oversized resources first, because it is fast and safe.",
      },
      {
        title: "Architecture-level optimization",
        body: "The savings that come from design decisions, not just dials.",
      },
      {
        title: "Commitments and pricing",
        body: "Reserved and committed-use purchasing matched to a forecast you believe.",
      },
      {
        title: "Kubernetes cost engineering",
        body: "Requests, limits, and bin-packing, where container spend quietly leaks.",
      },
      {
        title: "FinOps as code",
        body: "Budgets, policies, and anomaly detection enforced in the pipeline.",
      },
      {
        title: "Forecasting and unit economics",
        body: "Cost per customer, tenant, or transaction, so spend maps to the business.",
      },
      {
        title: "Cost ownership",
        body: "Make the number someone's job, with the visibility to act on it.",
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

  caseStudy: {
    title: "Bringing cloud spend under ownership at a data company",
    client:
      "A Series B data company running a multi-account estate with heavy Kubernetes usage.",
    problem:
      "Cloud spend was rising well ahead of customer growth. Finance could see the total but could not attribute it to teams or products, and the provider's recommendations had sat unimplemented for months because no engineer owned them.",
    whatWeDid:
      "We built a tagging and allocation model so every dollar mapped to a team, service, and environment, cleared idle and orphaned resources, right-sized the obvious offenders, tuned Kubernetes requests and bin-packing, matched committed-use purchases to a forecast, and put budget and anomaly guardrails into the pipeline with a cost-per-active-customer metric on top.",
    results: [
      "Run-rate came down in the first quarter, with no performance regression.",
      "Every team now sees the spend it controls, weekly.",
      "Leadership has a unit-cost number it can plan and price against.",
    ],
    kept: "The guardrails run in their pipeline. Their team owns the allocation model.",
  },

  finalCta: {
    title: "Find the cost your dashboards cannot remove",
    body: "Turn cloud-cost visibility into implemented engineering change and a sustainable FinOps capability.",
    primaryCta: "Talk to a FinOps engineer",
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
