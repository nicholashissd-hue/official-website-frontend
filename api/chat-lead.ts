type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => {
    json: (payload: unknown) => void;
  };
};

type LeadRequestBody = {
  name?: string;
  email?: string;
  company?: string;
  projectDescriptionOrJD?: string;
  recommendedRole?: string;
  confidence?: string;
  alternativeRoles?: string[];
  suggestedSeniority?: string;
  timeline?: string;
  budget?: string;
  notes?: string;
  source?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanText = (value: unknown, maxLength = 2000) => {
  if (typeof value !== "string") return "";

  return value.trim().slice(0, maxLength);
};

const parseBody = (body: unknown): LeadRequestBody => {
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as LeadRequestBody;
    } catch {
      return {};
    }
  }

  if (body && typeof body === "object") {
    return body as LeadRequestBody;
  }

  return {};
};

const getEmailJsConfig = () => ({
  serviceId:
    process.env.EMAILJS_SERVICE_ID ?? process.env.VITE_EMAILJS_SERVICE_ID,
  templateId:
    process.env.EMAILJS_TEMPLATE_ID ?? process.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey:
    process.env.EMAILJS_PUBLIC_KEY ?? process.env.VITE_EMAILJS_PUBLIC_KEY,
});

const sendLeadEmail = async (lead: Required<Pick<LeadRequestBody, "name" | "email">> & LeadRequestBody) => {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();

  if (!serviceId || !templateId || !publicKey) {
    return "not_configured" as const;
  }

  const recommendationDetails = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.company ? `Company: ${lead.company}` : "",
    lead.recommendedRole ? `Recommended role: ${lead.recommendedRole}` : "",
    lead.confidence ? `Confidence: ${lead.confidence}` : "",
    lead.suggestedSeniority
      ? `Suggested seniority: ${lead.suggestedSeniority}`
      : "",
    lead.alternativeRoles?.length
      ? `Alternative roles: ${lead.alternativeRoles.join(", ")}`
      : "",
    lead.timeline ? `Timeline: ${lead.timeline}` : "",
    lead.budget ? `Budget: ${lead.budget}` : "",
    lead.projectDescriptionOrJD
      ? `Project description / JD: ${lead.projectDescriptionOrJD}`
      : "",
    lead.notes ? `Notes: ${lead.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        firstName: lead.name,
        lastName: "",
        name: lead.name,
        email: lead.email,
        company: lead.company ?? "",
        recommendedRole: lead.recommendedRole ?? "",
        confidence: lead.confidence ?? "",
        suggestedSeniority: lead.suggestedSeniority ?? "",
        projectDescriptionOrJD: lead.projectDescriptionOrJD ?? "",
        message:
          recommendationDetails ||
          `New chatbot lead from ElderOps website: ${lead.name} (${lead.email})`,
        source: lead.source ?? "Website chatbot",
        submittedAt: new Date().toISOString(),
      },
    }),
  });

  return response.ok ? ("sent" as const) : ("failed" as const);
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = parseBody(req.body);
  const name = cleanText(body.name, 120);
  const email = cleanText(body.email, 180);

  if (!name || name.length < 2 || !email || !emailPattern.test(email)) {
    return res.status(400).json({
      ok: false,
      delivery: "failed",
      error: "A valid name and email are required",
    });
  }

  try {
    const delivery = await sendLeadEmail({
      name,
      email,
      company: cleanText(body.company, 160),
      projectDescriptionOrJD: cleanText(body.projectDescriptionOrJD, 8000),
      recommendedRole: cleanText(body.recommendedRole, 120),
      confidence: cleanText(body.confidence, 20),
      alternativeRoles: Array.isArray(body.alternativeRoles)
        ? body.alternativeRoles
            .map((role) => cleanText(role, 120))
            .filter(Boolean)
        : [],
      suggestedSeniority: cleanText(body.suggestedSeniority, 120),
      timeline: cleanText(body.timeline, 120),
      budget: cleanText(body.budget, 120),
      notes: cleanText(body.notes, 1000),
      source: cleanText(body.source, 120) || "Website chatbot",
    });

    return res.status(delivery === "failed" ? 502 : 202).json({
      ok: delivery !== "failed",
      delivery,
    });
  } catch (error) {
    console.error("Chat lead delivery failed:", error);

    return res.status(502).json({
      ok: false,
      delivery: "failed",
    });
  }
}
