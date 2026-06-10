import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { useState } from "react";
import { toast } from "sonner";
import type { ContactFormData } from "@/schemas/contactUs";

export const useSendContactEmail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendContactEmail = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Keep legacy template variables (firstName/lastName/email/message)
    // working while also passing the richer qualification fields.
    const [firstName, ...restOfName] = data.fullName.trim().split(/\s+/);
    const templateParams = {
      ...data,
      firstName,
      lastName: restOfName.join(" ") || "—",
      message: [
        `Company: ${data.company}`,
        `Looking for: ${data.lookingFor}`,
        `Technical focus area: ${data.focusArea}`,
        "",
        data.message,
      ].join("\n"),
      initiative: data.message,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      );
      toast.success("Message sent. We'll get back to you within one business day.");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { sendContactEmail, isSubmitting };
};
