import cloudImg from "@/assets/png/cloud.png";
import dataImg from "@/assets/png/data-platform.png";
import analyticsImg from "@/assets/png/analytics.png";
import aiMLImg from "@/assets/png/ai-ml.png";
import productImg from "@/assets/png/product.png";
import shipFaster from "@/assets/svg/ship-faster.svg";
import improveReadability from "@/assets/svg/improve-readability.svg";
import reduceCost from "@/assets/svg/reduce-cost.svg";
import reliability from "@/assets/svg/improve-readabil.svg";
import dataTrustworthy from "@/assets/svg/data-trustworthy.svg";

import pos from "@/assets/svg/pos.svg";
import woman from "@/assets/svg/woman.svg";
import swipeCardOne from "@/assets/svg/swipe-card.svg";
import swipeCardTwo from "@/assets/svg/swipe-card-two.svg";
import swipeCardThree from "@/assets/svg/swipe-card-three.svg";
import healthOne from "@/assets/svg/health-one.svg";
import healthTwo from "@/assets/svg/health-two.svg";
import healthThree from "@/assets/svg/health-three.svg";
import healthFour from "@/assets/svg/health-four.svg";
import healthFive from "@/assets/svg/health-five.svg";
import eCommerceOne from "@/assets/svg/e-commerce-one.svg";
import eCommerceTwo from "@/assets/svg/e-commerce-two.svg";
import eCommerceThree from "@/assets/svg/e-commerce-three.svg";
import eCommerceFour from "@/assets/svg/e-commerce-four.svg";
import eCommerceFive from "@/assets/svg/e-commerce-five.svg";
import sassOne from "@/assets/svg/sass-one.svg";
import sassTwo from "@/assets/svg/sass-two.svg";
import sassThree from "@/assets/svg/sass-three.svg";
import sassFour from "@/assets/svg/sass-four.svg";
import sassFive from "@/assets/svg/sass-five.svg";
import logisticsOne from "@/assets/svg/logistics-one.svg";
import logisticsTwo from "@/assets/svg/logistics-two.svg";
import logisticsThree from "@/assets/svg/logistics-three.svg";
import logisticsFour from "@/assets/svg/logistics-four.svg";
import logisticsFive from "@/assets/svg/logistics-five.svg";
import retailsOne from "@/assets/svg/media-one.svg";
import retailsTwo from "@/assets/svg/media-two.svg";
import retailsThree from "@/assets/svg/media-three.svg";
import retailsFour from "@/assets/svg/media-four.svg";
import retailsFive from "@/assets/svg/media-five.svg";

export const serviceCategoriesText = {
  title: "High-Quality Matching. Zero Guesswork.",
  description:
    "Explore the service lanes we align to your roadmap, with clearly defined delivery strengths across infrastructure, data, AI, and product execution.",
};

export const serviceCategoriesData = [
  {
    id: 1,
    title: "Cloud, DevOps & Reliability",
    description:
      "Strengthen release velocity and platform resilience with delivery systems built for uptime, observability, and clean operational ownership.",
    imageBackground: "#EAF3EE",
    image: cloudImg,
    list: [
      "CI/CD modernization",
      "Infrastructure automation",
      "Observability implementation",
      "Reliability practices that reduce operational risk",
    ],
  },
  {
    id: 2,
    title: "Data Platforms & Engineering",
    description:
      "Build dependable data foundations that make reporting, analytics, and downstream product decisions easier to trust and scale.",
    imageBackground: "#F4F6DD",
    list: [
      "Scalable pipelines",
      "Warehouse and lakehouse builds",
      "Data modeling frameworks, and",
      "Governance foundations",
    ],
    image: dataImg,
  },
  {
    id: 3,
    title: "Analytics & Business Intelligence",
    description:
      "Turn fragmented reporting into decision-ready insight with cleaner metrics, sharper dashboards, and stronger governance.",
    imageBackground: "#EFF3EA",
    list: [
      "KPI frameworks",
      "Executive dashboards",
      "Metric governance, and",
      "Self-serve analytics enablement",
    ],
    image: analyticsImg,
  },
  {
    id: 4,
    title: "AI/ML Enablement",
    description:
      "Move machine learning from experimentation into production with the tooling, monitoring, and performance discipline teams actually need.",
    imageBackground: "#E8F1EC",
    list: [
      "Model deployment support",
      "MLOps foundations",
      "Monitoring systems",
      "Inference performance optimization",
    ],
    image: aiMLImg,
  },
  {
    id: 5,
    title: "Product Engineering",
    description:
      "Accelerate customer-facing delivery with product-minded engineers who can move across features, APIs, and platform services without losing quality.",
    imageBackground: "#F1F4E7",

    list: [
      "Feature development",
      "Platform services",
      "API design and development",
      "Front-end delivery support",
    ],
    image: productImg,
  },
];

export const solutionsCTAText = {
  title: "Not sure where you fit?",
  description:
    "Tell us what you're building, and we’ll recommend the best approach for you.",
  buttonText: "Let's Talk",
  buttonLink: "/contact-us",
};

export const howWeDeliverData = [
  {
    id: 1,
    number: "01",
    image: shipFaster,
    title: "Ship Faster",
    description: "Strong delivery cadence, clean handoffs, clear ownership",
  },
  {
    id: 2,
    number: "02",
    image: improveReadability,
    title: "Improve Readability",
    description:
      "Clearer metrics, sharper reporting, and cleaner documentation for faster decisions",
  },
  {
    id: 3,
    number: "03",
    image: reduceCost,
    title: "Reduce Total Cost",
    description:
      "Eliminate rework, optimize cloud usage, right-size engineering effort",
  },
  {
    id: 4,
    number: "04",
    image: reliability,
    title: "Improve Reliability",
    description: "Observability practices, automation, incident readiness",
  },
  {
    id: 5,
    number: "05",
    image: dataTrustworthy,
    title: "Make Data Trustworthy",
    description: "Quality checks, modeling discipline, metric consistency",
  },
];

export const howWeDeliverText = {
  title: "How We Drive Value",
  description:
    "ElderOps transforms engineering from reactive execution into a structured, scalable advantage.",
};

export const industriesText = {
  title: "Industries We Support",
};

export const industriesData = [
  {
    id: 1,
    number: "01",
    title: "FinTech & Payments",
    description:
      "FinTech and payments platforms operate in environments where uptime, transaction integrity, and security are critical. Infrastructure must support innovation while maintaining compliance and operational resilience. ElderOps supports FinTech organizations with secure cloud architecture, CI/CD modernization, observability implementation, and scalable data systems. We help teams accelerate delivery, reduce operational risk, and maintain the trust customers and regulators expect.",
    images: [pos, woman, swipeCardOne, swipeCardTwo, swipeCardThree],
  },
  {
    id: 2,
    number: "02",
    title: "Healthcare & HealthTech",
    description:
      "Healthcare systems require stable, secure, and well-governed infrastructure to protect sensitive data while enabling innovation. Reliability and compliance must coexist with product velocity. ElderOps helps HealthTech teams modernize cloud environments, strengthen data governance, improve system reliability, and automate operational workflows. Our structured delivery model supports regulatory alignment while enabling scalable, future-ready platforms.",
    images: [healthOne, healthTwo, healthThree, healthFour, healthFive],
  },
  {
    id: 3,
    number: "03",
    title: "E-commerce & Retail",
    description:
      "E-commerce platforms must scale rapidly while maintaining performance during peak demand and seasonal fluctuations. Reliability and cost efficiency are essential to sustainable growth. ElderOps supports retail and commerce teams through infrastructure automation, performance optimization, scalable data pipelines, and improved deployment practices. We help organizations deliver features faster while maintaining stable, high-performing customer experiences.",
    images: [
      eCommerceOne,
      eCommerceTwo,
      eCommerceThree,
      eCommerceFour,
      eCommerceFive,
    ],
  },
  {
    id: 4,
    number: "04",
    title: "SaaS & B2B Software",
    description:
      "SaaS companies must continuously evolve their platforms without compromising stability or architecture integrity. Growth depends on reliable infrastructure and disciplined engineering practices. ElderOps partners with SaaS teams to strengthen observability, modernize infrastructure, scale backend systems, and operationalize data and AI initiatives. We help organizations increase delivery confidence while preserving long-term architectural clarity.",
    images: [sassOne, sassTwo, sassThree, sassFour, sassFive],
  },
  {
    id: 5,
    number: "05",
    title: "Logistics & Supply Chain",
    description:
      "Logistics platforms operate across distributed systems where real-time accuracy and uptime directly impact operations. Integration complexity and data consistency are constant challenges. ElderOps supports supply chain organizations by modernizing infrastructure, strengthening integration pipelines, improving data reliability, and automating operational processes. We design resilient systems capable of handling operational complexity at scale.",
    images: [
      logisticsOne,
      logisticsTwo,
      logisticsThree,
      logisticsFour,
      logisticsFive,
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Media & Entertainment",
    description:
      "Media platforms must handle dynamic traffic, high-performance delivery, and data-intensive workflows. Stability and scalability are essential for consistent audience experiences. ElderOps helps media organizations optimize cloud architecture, strengthen CI/CD pipelines, scale analytics systems, and improve infrastructure performance. We enable engineering teams to deliver content reliably while maintaining operational efficiency.",
    images: [retailsOne, retailsTwo, retailsThree, retailsFour, retailsFive],
  },
];

export const engagementModelsData = [
  {
    id: 1,
    title: "Team Extension",
    description:
      "Seamless integration into your existing workflows. We provide specialized talent that operates as a direct extension of your internal team.",
    bestFor:
      "Scaling existing teams quickly without long-term hiring commitments.",
  },
  {
    id: 2,
    title: "Dedicated Pods",
    description:
      "Fully managed cross-functional teams for specific outcomes. We handle the management, you focus on the vision.",
    bestFor: "Focused initiatives requiring coordination and accountability.",
  },
  {
    id: 3,
    title: "Project Delivery",
    description:
      "Outcome-based delivery with defined scope, milestones, and structured oversight from architecture planning through implementation.",
    bestFor:
      "Clearly defined initiatives that require structured execution and delivery ownership.",
  },
];

export const engagementModelsText = {
  title: "Flexible Engagement Models",
  description:
    "We adapt to your roadmap, offering the expertise you need at the scale you require. Our models are designed for agility, transparency, and high-impact delivery.",
  footerText:
    "Start lean, scale as needed. We'll adjust the team as your roadmap evolves.",
};

export const howItWorksData = [
  {
    id: 1,
    step: "01",
    title: "Define the role",
    description: "We align on stack, scope, timeline, and measurable goals.",
  },
  {
    id: 2,
    step: "02",
    title: "Curate vetted shortlist",
    description:
      "Only high-signal candidates who meet our technical and communication standards.",
  },
  {
    id: 3,
    step: "03",
    title: "Interview candidates",
    description:
      "You validate technical capability and team alignment before engagement begins.",
  },
  {
    id: 4,
    step: "04",
    title: "Onboard and deliver",
    description:
      "Structured onboarding, clear expectations, and delivery cadence from day one.",
  },
];

export const howItWorksText = {
  title: "How It Works",
  ctaText: "Ready to move faster with confidence?",
};
