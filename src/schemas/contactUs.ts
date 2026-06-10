import { z } from "zod";

export const LOOKING_FOR_OPTIONS = [
  "Individual Engineer",
  "Dedicated Team",
  "Project Delivery",
  "Not Sure Yet",
] as const;

export const FOCUS_AREA_OPTIONS = [
  "Cloud & DevOps",
  "Platform Engineering",
  "Data Engineering",
  "Analytics & BI",
  "AI / Machine Learning",
  "Software Development",
  "Multiple Areas",
] as const;

const oneOf = (options: readonly string[], message: string) =>
  z.string().refine((value) => options.includes(value), message);

export const contactSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name"),
    email: z
      .email({ message: "Please enter a valid work email" })
      .min(1, "Email is required"),
    company: z.string().min(2, "Please enter your company name"),
    lookingFor: oneOf(LOOKING_FOR_OPTIONS, "Select what you're looking for"),
    focusArea: oneOf(FOCUS_AREA_OPTIONS, "Select a technical focus area"),
    message: z
      .string()
      .min(10, "Tell us a little more about your initiative"),
  })
  .strict();

export type ContactFormData = z.infer<typeof contactSchema>;
