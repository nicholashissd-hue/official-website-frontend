import { useState } from "react";
import { toast } from "sonner";
import type { ContactFormData } from "@/schemas/contactUs";

export const useSendContactEmail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendContactEmail = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
      } | null;

      if (!response.ok || !payload?.ok) {
        throw new Error(`Contact API responded ${response.status}`);
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
