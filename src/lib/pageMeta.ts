import { useEffect } from "react";
import { useLocation } from "react-router";

const DEFAULT_TITLE = "ElderOps | Senior Engineering, Embedded in Your Team";
const DEFAULT_DESCRIPTION =
  "ElderOps embeds senior DevOps, cloud, platform, and security engineers into your team to modernize systems, raise reliability, and cut risk, then hands off so your team owns the result.";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/services": {
    title: "Services | ElderOps",
    description:
      "Eight capabilities, one embedded team: cloud and infrastructure, platform engineering, DevOps and delivery, security and DevSecOps, reliability, FinOps, data and modernization, and technology advisory.",
  },
  "/how-we-work": {
    title: "How We Work | ElderOps",
    description:
      "Assess. Build. Own. A named method and three stage-agnostic engagement models: fractional advisory, embedded delivery, and launch (0 to 1). We build it so your team can own it.",
  },
  "/about": {
    title: "About | ElderOps",
    description:
      "The best engineering outcomes come from ownership, not headcount. A third path between consulting and staffing: senior engineers who embed with your team and own the result.",
  },
  "/careers": {
    title: "Careers | ElderOps",
    description:
      "Own the work. Set the terms. ElderOps is where senior engineers do embedded, high-trust work on engagements that fit their lives.",
  },
  "/contact-us": {
    title: "Contact | ElderOps",
    description:
      "Tell us what you're building and where it is stuck. You'll talk to a senior engineer, not a sales team. Typical response within one business day.",
  },
  "/terms": {
    title: "Terms of Service | ElderOps",
    description:
      "The terms governing the ElderOps website and engineering services.",
  },
  "/privacy": {
    title: "Privacy Policy | ElderOps",
    description:
      "How ElderOps collects, uses, and protects information submitted through the website.",
  },
};

/** Keeps document.title and the meta description in sync with the route. */
export const usePageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] ?? {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    };
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [pathname]);
};
