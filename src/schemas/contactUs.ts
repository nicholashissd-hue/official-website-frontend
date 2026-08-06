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

/** Optional, but if answered it has to be one of ours. */
const optionalOneOf = (options: readonly string[], message: string) =>
  z
    .string()
    .refine((value) => value === "" || options.includes(value), message);

/**
 * Only what we genuinely need to reply is required. The engagement model and
 * focus area used to be mandatory, which meant a VP Engineering with a cloud
 * bill had to classify their own problem into our vocabulary before the form
 * would accept them: a qualification step charged to the person we want to
 * hear from.
 */
export const contactSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name"),
    email: z
      .email({ message: "Please enter a valid work email" })
      .min(1, "Email is required"),
    company: z.string().min(2, "Please enter your company name"),
    lookingFor: optionalOneOf(
      LOOKING_FOR_OPTIONS,
      "Select an engagement model",
    ),
    focusArea: optionalOneOf(FOCUS_AREA_OPTIONS, "Select a focus area"),
    message: z.string().min(10, "Tell us a little more about your initiative"),
  })
  .strict();

export type ContactFormData = z.infer<typeof contactSchema>;
