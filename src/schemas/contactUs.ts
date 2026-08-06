import { z } from "zod";
import { SERVICES, serviceShortLabel } from "@/contents/taxonomy";

/**
 * Form options (V4): the engagement models from How We Work and the
 * capability taxonomy, single-sourced so labels can never drift from the
 * site. The field key stays `lookingFor` end to end (api/contact.ts and
 * the relay fallbacks read it by that name).
 */
export const LOOKING_FOR_OPTIONS = [
  "Fractional advisory",
  "Embedded delivery",
  "Launch, zero to one",
  "Not sure yet",
] as const;

export const FOCUS_AREA_OPTIONS = [
  ...SERVICES.map((service) => serviceShortLabel(service)),
  "Multiple areas",
];

const oneOf = (options: readonly string[], message: string) =>
  z.string().refine((value) => options.includes(value), message);

export const contactSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name"),
    email: z
      .email({ message: "Please enter a valid work email" })
      .min(1, "Email is required"),
    company: z.string().min(2, "Please enter your company name"),
    lookingFor: oneOf(LOOKING_FOR_OPTIONS, "Select an engagement model"),
    focusArea: oneOf(FOCUS_AREA_OPTIONS, "Select a focus area"),
    message: z.string().min(10, "Tell us a little more about your initiative"),
  })
  .strict();

export type ContactFormData = z.infer<typeof contactSchema>;
