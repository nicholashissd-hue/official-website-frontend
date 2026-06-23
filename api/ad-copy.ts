import { tokenFor } from "./admin-auth";

type ApiRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};
type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => { json: (payload: unknown) => void };
};

interface Copy {
  eyebrow: string;
  headline: string;
  subhead: string;
}

/** On-brand fallbacks used when no Anthropic key is configured (or on error). */
const POOL: Copy[] = [
  { eyebrow: "DAY TO DAY ENGINEERING", headline: "Embedded,\nNot Outsourced", subhead: "Inside the work. Close to the outcome." },
  { eyebrow: "SENIOR ENGINEERING TALENT", headline: "Ownership,\nNot Headcount", subhead: "Engineers accountable for what they ship." },
  { eyebrow: "ENTERPRISE DELIVERY", headline: "Strategy Meets\nExecution", subhead: "From roadmap to production, owned end to end." },
  { eyebrow: "THE ELDEROPS STANDARD", headline: "Vetted. Embedded.\nAccountable.", subhead: "Senior engineering that integrates from day one." },
  { eyebrow: "CLOUD · DATA · AI", headline: "Your Roadmap,\nDelivered", subhead: "Full-stack senior engineers, matched to your mission." },
  { eyebrow: "SCALE WITH CONFIDENCE", headline: "Move Fast.\nStay Senior.", subhead: "Engineering depth, exactly when you need it." },
  { eyebrow: "PRODUCT ENGINEERING", headline: "Concept to\nProduction", subhead: "We build the full stack, end to end." },
  { eyebrow: "BUILT FOR OUTCOMES", headline: "Ship Like\nYou Mean It", subhead: "Senior engineers, embedded in your team." },
];

const authed = (req: ApiRequest) => {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const raw = req.headers?.cookie;
  const cookie = Array.isArray(raw) ? raw.join(";") : raw ?? "";
  const match = cookie.match(/(?:^|;\s*)eo_studio=([a-f0-9]+)/);
  return !!match && match[1] === tokenFor(expected);
};

const clean = (s: unknown, max: number) =>
  String(s ?? "").replace(/\s+/g, " ").trim().slice(0, max);

const viaClaude = async (): Promise<Copy | null> => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;
  const angles = [
    "embedded vs outsourced", "ownership and accountability", "senior depth on demand",
    "strategy meets execution", "vetting and quality", "speed without compromise",
    "concept to production", "scaling engineering teams",
  ];
  const angle = angles[Math.floor(Math.random() * angles.length)];
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-6",
      max_tokens: 300,
      temperature: 1,
      system:
        "You write copy for ElderOps, a premium firm that places rigorously vetted SENIOR software engineers who embed in a client's team and own delivery (cloud, data, AI, product). Voice: confident, technical, understated, enterprise-grade — never salesy or cliché. Return ONLY minified JSON: {\"eyebrow\":..,\"headline\":..,\"subhead\":..}. eyebrow = 2-4 word ALL-CAPS category. headline = punchy, 2-6 words, may use a single \\n to break two lines. subhead = one sentence, 5-10 words.",
      messages: [
        { role: "user", content: `Write one ad. Angle: ${angle}. JSON only.` },
      ],
    }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { content?: { text?: string }[] };
  const text = data?.content?.[0]?.text ?? "";
  const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
  const parsed = JSON.parse(json) as Copy;
  return {
    eyebrow: clean(parsed.eyebrow, 40).toUpperCase(),
    headline: clean(parsed.headline.replace(/\\n/g, "\n"), 48),
    subhead: clean(parsed.subhead, 80),
  };
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  if (!authed(req)) return res.status(401).json({ ok: false });

  try {
    const ai = await viaClaude();
    if (ai && ai.headline) return res.status(200).json({ ok: true, copy: ai, source: "ai" });
  } catch {
    /* fall through to curated */
  }
  const pick = POOL[Math.floor(Math.random() * POOL.length)];
  return res.status(200).json({ ok: true, copy: pick, source: "curated" });
}
