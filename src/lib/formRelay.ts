/**
 * Browser-side FormSubmit relay to the team inbox.
 *
 * Why client-side: FormSubmit 403s requests from datacenter IPs, so the
 * serverless functions can't reach it — but it's designed for exactly
 * this kind of in-browser call. The /api endpoints are still tried first
 * so configured providers (Resend/EmailJS) win automatically when their
 * keys exist.
 */
const ENDPOINT = "https://formsubmit.co/ajax/contact@elderops.net";

export const sendViaFormRelay = async (
  fields: Record<string, string>,
): Promise<void> => {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ _template: "box", ...fields }),
  });

  if (!response.ok) {
    throw new Error(`FormSubmit responded ${response.status}`);
  }

  const payload = (await response.json().catch(() => null)) as {
    success?: string | boolean;
  } | null;

  if (payload?.success !== true && payload?.success !== "true") {
    throw new Error("FormSubmit rejected the submission");
  }
};
