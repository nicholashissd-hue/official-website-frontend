import { chatbotKnowledge, chatbotSuggestedQuestions } from "../src/contents/chatbotKnowledge.js";
import {
  buildRecommendationReply,
  isLikelyHiringAdvisorRequest,
  recommendEngineerRole,
} from "../src/lib/chatbot/recommendationEngine.js";

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

  if (isLikelyHiringAdvisorRequest(message)) {
    const recommendation = recommendEngineerRole(message);

    return {
      reply: buildRecommendationReply(recommendation),
      mode: "advisor" as const,
      recommendation,
      originalInput: message,
    };
  }

  if (normalizedMessage.includes("service")) {
    const services = chatbotKnowledge.services
      .map((service) => `${service.title}: ${service.description}`)
      .join(" ");

    return {
      reply: `ElderOps supports several engineering service lanes. ${services}`,
      mode: "mock" as const,
    };
  }

  if (
    normalizedMessage.includes("engagement") ||
    normalizedMessage.includes("model") ||
    normalizedMessage.includes("work")
  ) {
    const models = chatbotKnowledge.engagementModels
      .map((model) => `${model.title}: ${model.description}`)
      .join(" ");

    return {
      reply: `ElderOps can work through flexible engagement models. ${models}`,
      mode: "mock" as const,
    };
  }

  if (
    normalizedMessage.includes("talent") ||
    normalizedMessage.includes("engineer") ||
    normalizedMessage.includes("developer")
  ) {
    return {
      reply: chatbotKnowledge.talent,
      mode: "mock" as const,
    };
  }

  if (
    normalizedMessage.includes("industry") ||
    normalizedMessage.includes("industries")
  ) {
    return {
      reply: `ElderOps supports ${chatbotKnowledge.industries.join(", ")}.`,
      mode: "mock" as const,
    };
  }

  return {
    reply: `${chatbotKnowledge.company} ${chatbotKnowledge.positioning} ${chatbotKnowledge.callToAction}`,
    mode: "mock" as const,
  };
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

  const response = buildReply(message);

  return res.status(200).json({
    ...response,
    suggestions: [...chatbotSuggestedQuestions],
  });
}
