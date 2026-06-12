import { useState } from "react";
import { toast } from "sonner";
import { sendViaFormRelay } from "@/lib/formRelay";
import type { ContactFormData } from "@/schemas/contactUs";

const composeMessage = (data: ContactFormData) =>
  [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Looking for: ${data.lookingFor}`,
    `Technical focus area: ${data.focusArea}`,
    "",
    "Initiative:",
    data.message,
  ].join("\n");

export const useSendContactEmail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendContactEmail = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Server route first — wins automatically once Resend/EmailJS keys exist.
      let delivered = false;
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const payload = (await response.json().catch(() => null)) as {
          ok?: boolean;
        } | null;
        delivered = response.ok && payload?.ok === true;
      } catch {
        delivered = false;
      }

      if (!delivered) {
        // Browser-side relay fallback (FormSubmit blocks server IPs).
        await sendViaFormRelay({
          name: data.fullName,
          email: data.email,
          company: data.company,
          lookingFor: data.lookingFor,
          focusArea: data.focusArea,
          message: composeMessage(data),
          _subject: `New inquiry — ${data.fullName} (${data.company})`,
          _replyto: data.email,
        });
      }

      toast.success("Message sent. We'll get back to you within one business day.");
    } catch (error) {
      console.error("Contact send error:", error);
      toast.error(
        "We couldn't send that — please email contact@elderops.net directly.",
      );
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { sendContactEmail, isSubmitting };
};
