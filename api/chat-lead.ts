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
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

const sendLeadEmail = async (lead: Required<LeadRequestBody>) => {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();

  if (!serviceId || !templateId || !publicKey) {
    return "not_configured" as const;
  }

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
        message: `New chatbot lead from ElderOps website: ${lead.name} (${lead.email})`,
        source: "Website chatbot",
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
  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || name.length < 2 || !email || !emailPattern.test(email)) {
    return res.status(400).json({
      ok: false,
      delivery: "failed",
      error: "A valid name and email are required",
    });
  }

  try {
    const delivery = await sendLeadEmail({ name, email });

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
