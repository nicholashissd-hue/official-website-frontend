import { chatbotKnowledge, chatbotSuggestedQuestions } from "../src/contents/chatbotKnowledge.js";

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

type ChatRequestBody = {
  message?: string;
};

const parseBody = (body: unknown): ChatRequestBody => {
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as ChatRequestBody;
    } catch {
      return {};
    }
  }

  if (body && typeof body === "object") {
    return body as ChatRequestBody;
  }

  return {};
};

const buildReply = (message: string) => {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("service")) {
    const services = chatbotKnowledge.services
      .map((service) => `${service.title}: ${service.description}`)
      .join(" ");

    return `ElderOps supports several engineering service lanes. ${services}`;
  }

  if (
    normalizedMessage.includes("engagement") ||
    normalizedMessage.includes("model") ||
    normalizedMessage.includes("work")
  ) {
    const models = chatbotKnowledge.engagementModels
      .map((model) => `${model.title}: ${model.description}`)
      .join(" ");

    return `ElderOps can work through flexible engagement models. ${models}`;
  }

  if (
    normalizedMessage.includes("talent") ||
    normalizedMessage.includes("engineer") ||
    normalizedMessage.includes("developer")
  ) {
    return chatbotKnowledge.talent;
  }

  if (
    normalizedMessage.includes("industry") ||
    normalizedMessage.includes("industries")
  ) {
    return `ElderOps supports ${chatbotKnowledge.industries.join(", ")}.`;
  }

  return `${chatbotKnowledge.company} ${chatbotKnowledge.positioning} ${chatbotKnowledge.callToAction}`;
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = parseBody(req.body);
  const message = body.message?.trim();

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  return res.status(200).json({
    reply: buildReply(message),
    mode: "mock",
    suggestions: [...chatbotSuggestedQuestions],
  });
}
