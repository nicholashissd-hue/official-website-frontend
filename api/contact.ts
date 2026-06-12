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

type ContactBody = {
  fullName?: string;
  email?: string;
  company?: string;
  lookingFor?: string;
  focusArea?: string;
  message?: string;
};

const DESTINATION = "contact@elderops.net";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanText = (value: unknown, maxLength = 2000) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
};

const parseBody = (body: unknown): ContactBody => {
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as ContactBody;
    } catch {
      return {};
    }
  }
  if (body && typeof body === "object") return body as ContactBody;
  return {};
};

const composeMessage = (lead: Required<ContactBody>) =>
  [
    `Name: ${lead.fullName}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company}`,
    `Looking for: ${lead.lookingFor}`,
    `Technical focus area: ${lead.focusArea}`,
    "",
    "Initiative:",
    lead.message,
  ].join("\n");

/** Provider 1 — Resend (used automatically once RESEND_API_KEY exists). */
const sendViaResend = async (lead: Required<ContactBody>) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "not_configured" as const;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? "ElderOps Website <onboarding@resend.dev>",
      to: [DESTINATION],
      reply_to: lead.email,
      subject: `New inquiry — ${lead.fullName} (${lead.company})`,
      text: composeMessage(lead),
    }),
  });

  return response.ok ? ("sent" as const) : ("failed" as const);
};

/** Provider 2 — EmailJS (used automatically once its env vars exist). */
const sendViaEmailJs = async (lead: Required<ContactBody>) => {
  const serviceId =
    process.env.EMAILJS_SERVICE_ID ?? process.env.VITE_EMAILJS_SERVICE_ID;
  const templateId =
    process.env.EMAILJS_TEMPLATE_ID ?? process.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey =
    process.env.EMAILJS_PUBLIC_KEY ?? process.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) return "not_configured" as const;

  const [firstName, ...rest] = lead.fullName.split(/\s+/);
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        firstName,
        lastName: rest.join(" ") || "—",
        name: lead.fullName,
        email: lead.email,
        company: lead.company,
        message: composeMessage(lead),
        source: "Website contact form",
        submittedAt: new Date().toISOString(),
      },
    }),
  });

  return response.ok ? ("sent" as const) : ("failed" as const);
};

/**
 * Provider 3 — FormSubmit (no account or keys required).
 * First-ever submission triggers a one-time activation email to the
 * destination inbox; after that link is clicked, every submission is
 * forwarded to contact@elderops.net.
 */
const sendViaFormSubmit = async (lead: Required<ContactBody>) => {
  const response = await fetch(`https://formsubmit.co/ajax/${DESTINATION}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: lead.fullName,
      email: lead.email,
      company: lead.company,
      lookingFor: lead.lookingFor,
      focusArea: lead.focusArea,
      message: composeMessage(lead),
      _subject: `New inquiry — ${lead.fullName} (${lead.company})`,
      _replyto: lead.email,
      _template: "box",
    }),
  });

  if (!response.ok) return "failed" as const;
  const payload = (await response.json().catch(() => null)) as {
    success?: string | boolean;
  } | null;
  const success = payload?.success;
  return success === true || success === "true"
    ? ("sent" as const)
    : ("failed" as const);
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = parseBody(req.body);
  const lead = {
    fullName: cleanText(body.fullName, 120),
    email: cleanText(body.email, 180),
    company: cleanText(body.company, 160),
    lookingFor: cleanText(body.lookingFor, 80),
    focusArea: cleanText(body.focusArea, 80),
    message: cleanText(body.message, 8000),
  };

  if (
    lead.fullName.length < 2 ||
    !emailPattern.test(lead.email) ||
    lead.message.length < 10
  ) {
    return res.status(400).json({ ok: false, error: "Invalid submission" });
  }

  try {
    // Cascade: prefer configured providers, fall back to FormSubmit.
    for (const send of [sendViaResend, sendViaEmailJs]) {
      const result = await send(lead);
      if (result === "sent") return res.status(200).json({ ok: true });
      if (result === "failed") break; // configured but erroring — use fallback
    }

    const fallback = await sendViaFormSubmit(lead);
    if (fallback === "sent") return res.status(200).json({ ok: true });

    return res.status(502).json({ ok: false });
  } catch (error) {
    console.error("Contact delivery failed:", error);
    return res.status(502).json({ ok: false });
  }
}
