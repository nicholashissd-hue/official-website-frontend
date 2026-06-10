import { useState } from "react";
import {
  contactSchema,
  FOCUS_AREA_OPTIONS,
  LOOKING_FOR_OPTIONS,
  type ContactFormData,
} from "@/schemas/contactUs";
import { useSendContactEmail } from "@/hooks/useSendContactEmail";
import Button from "@/components/ui/button";
import { cn } from "@/lib/util";

const EMPTY_FORM: ContactFormData = {
  fullName: "",
  email: "",
  company: "",
  lookingFor: "",
  focusArea: "",
  message: "",
};

const inputClasses = (hasError: boolean) =>
  cn(
    "h-12 w-full rounded-2xl border bg-white px-4 text-sm text-primary outline-none transition-colors duration-300 placeholder:text-accent-three/70 focus:border-success",
    hasError ? "border-red-600/60" : "border-primary/15",
  );

const FieldLabel = ({ htmlFor, children }: { htmlFor: string; children: string }) => (
  <label
    htmlFor={htmlFor}
    className="mb-2.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-accent-one"
  >
    {children}
  </label>
);

const FieldError = ({ id, error }: { id: string; error?: string }) =>
  error ? (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-600">
      {error}
    </p>
  ) : null;

const SelectChevron = () => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-primary/60"
  >
    <path d="M2 4.5 6 8.5l4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>
);

/** Qualifying contact form — the brief's "Start the Conversation" fields. */
const Form = () => {
  const { sendContactEmail, isSubmitting } = useSendContactEmail();
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      await sendContactEmail(result.data);
      setFormData(EMPTY_FORM);
    } catch {
      // Toast handled by the hook; keep the user's input for retry.
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] bg-white p-6 ring-1 ring-primary/10 sm:p-8 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <input
            type="text"
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Jane Smith"
            value={formData.fullName}
            onChange={handleChange}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClasses(!!errors.fullName)}
          />
          <FieldError id="fullName-error" error={errors.fullName} />
        </div>

        <div>
          <FieldLabel htmlFor="email">Work Email</FieldLabel>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses(!!errors.email)}
          />
          <FieldError id="email-error" error={errors.email} />
        </div>
      </div>

      <div className="mt-6">
        <FieldLabel htmlFor="company">Company Name</FieldLabel>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Company, Inc."
          value={formData.company}
          onChange={handleChange}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
          className={inputClasses(!!errors.company)}
        />
        <FieldError id="company-error" error={errors.company} />
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="lookingFor">What are you looking for?</FieldLabel>
          <div className="relative">
            <select
              id="lookingFor"
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleChange}
              aria-invalid={!!errors.lookingFor}
              aria-describedby={errors.lookingFor ? "lookingFor-error" : undefined}
              className={cn(
                inputClasses(!!errors.lookingFor),
                "appearance-none pr-10",
                !formData.lookingFor && "text-accent-three/70",
              )}
            >
              <option value="" disabled>
                Select an option…
              </option>
              {LOOKING_FOR_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectChevron />
          </div>
          <FieldError id="lookingFor-error" error={errors.lookingFor} />
        </div>

        <div>
          <FieldLabel htmlFor="focusArea">Technical Focus Area</FieldLabel>
          <div className="relative">
            <select
              id="focusArea"
              name="focusArea"
              value={formData.focusArea}
              onChange={handleChange}
              aria-invalid={!!errors.focusArea}
              aria-describedby={errors.focusArea ? "focusArea-error" : undefined}
              className={cn(
                inputClasses(!!errors.focusArea),
                "appearance-none pr-10",
                !formData.focusArea && "text-accent-three/70",
              )}
            >
              <option value="" disabled>
                Select an option…
              </option>
              {FOCUS_AREA_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectChevron />
          </div>
          <FieldError id="focusArea-error" error={errors.focusArea} />
        </div>
      </div>

      <div className="mt-6">
        <FieldLabel htmlFor="message">Tell Us About Your Initiative</FieldLabel>
        <textarea
          id="message"
          name="message"
          placeholder="Describe your goals, current challenges, timeline, or the type of engineering support you're exploring."
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            inputClasses(!!errors.message),
            "h-44 resize-none py-3.5 leading-[1.7]",
          )}
        />
        <FieldError id="message-error" error={errors.message} />
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-three">
          Typical response — within one business day
        </p>
        <Button
          type="submit"
          variant="primary"
          withArrow
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Sending…" : "Start the Conversation"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
