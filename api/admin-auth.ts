import crypto from "node:crypto";

type ApiRequest = { method?: string; body?: unknown };
type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => { json: (payload: unknown) => void };
};

/** Cookie token derived from the password — verified by other admin endpoints. */
export const tokenFor = (pw: string) =>
  crypto.createHash("sha256").update(`eo::${pw}`).digest("hex");

const parse = (body: unknown): { password?: string } => {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return (body as { password?: string }) ?? {};
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return res.status(500).json({ ok: false, error: "ADMIN_PASSWORD not set" });
  }

  const { password } = parse(req.body);
  if (typeof password !== "string" || password.length === 0 || password !== expected) {
    return res.status(401).json({ ok: false });
  }

  res.setHeader(
    "Set-Cookie",
    `eo_studio=${tokenFor(expected)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800`,
  );
  return res.status(200).json({ ok: true });
}
