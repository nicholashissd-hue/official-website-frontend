import { useRef, useState } from "react";
import {
  contactSchema,
  FOCUS_AREA_OPTIONS,
  LOOKING_FOR_OPTIONS,
  type ContactFormData,
} from "@/schemas/contactUs";
import { useSendContactEmail } from "@/hooks/useSendContactEmail";
import { signalButtonClass } from "@/components/ui/v4";
import { NEXT_STEPS, confirmation } from "@/contents/screens/contactV4";
import { cn } from "@/lib/util";

const EMPTY_FORM: ContactFormData = {
  fullName: "",
  email: "",
  company: "",
  lookingFor: "",
  focusArea: "",
  message: "",
};

/** Tab order, and therefore the order errors are reported in. */
const FIELD_ORDER: (keyof ContactFormData)[] = [
  "fullName",
  "email",
  "company",
  "lookingFor",
  "focusArea",
  "message",
];

/**
 * V4 fields: square, hairline, quiet. Radius belongs to the button only.
 * The focus ring is deliberate: `outline-none` used to be set on all six
 * fields of the site's only conversion surface, which left a keyboard user
 * with no idea where they were typing.
 */
const inputClasses = (hasError: boolean) =>
  cn(
    "h-12 w-full border bg-white px-4 text-base text-ink transition-colors duration-300 placeholder:text-sub/50",
    "focus-visible:border-ink focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ink",
    hasError ? "border-danger" : "border-hairline",
  );

const FieldLabel = ({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: string;
  optional?: boolean;
}) => (
  <label
    htmlFor={htmlFor}
    className="mb-2 block text-sm font-semibold text-ink"
  >
    {children}
    {optional ? (
      <span className="ml-2 font-normal text-sub">optional</span>
    ) : null}
  </label>
);

const FieldError = ({ id, error }: { id: string; error?: string }) =>
  error ? (
    <p id={id} className="mt-1.5 text-sm text-danger">
      {error}
    </p>
  ) : null;

const SelectChevron = () => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-ink/50"
  >
    <path
      d="M2 4.5 6 8.5l4-4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
    />
  </svg>
);

/** The qualifying form. "Start the conversation" lives only on this button. */
const Form = () => {
  const { sendContactEmail, isSubmitting } = useSendContactEmail();
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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

      // Errors used to mount silently, the first of them often above the
      // viewport, with focus left on the button: visually nothing happened.
      const firstInvalid = FIELD_ORDER.find((field) => fieldErrors[field]);
      if (firstInvalid) {
        const el = formRef.current?.elements.namedItem(
          firstInvalid,
        ) as HTMLElement | null;
        el?.focus();
        el?.scrollIntoView({ block: "center" });
      }
      return;
    }

    try {
      await sendContactEmail(result.data);
      setFormData(EMPTY_FORM);
      setSent(true);
      requestAnimationFrame(() => confirmationRef.current?.focus());
    } catch {
      // Toast handled by the hook; keep the user's input for retry.
    }
  };

  const errorCount = Object.values(errors).filter(Boolean).length;

  if (sent) {
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        role="status"
        className="flex h-full flex-col justify-center border border-hairline bg-white p-6 outline-none sm:p-8 md:p-10"
      >
        <p className="font-display text-subhead font-bold text-ink">
          {confirmation.title}
        </p>
        <p className="mt-4 max-w-md text-base text-sub">{confirmation.body}</p>
        <p className="mt-8 font-display text-base font-semibold tracking-[-0.01em] text-ink/70">
          {confirmation.stepsLabel}
        </p>
        <ol className="mt-3">
          {NEXT_STEPS.map((step, index) => (
            <li
              key={step}
              className="flex items-baseline gap-4 border-t border-hairline py-3 first:border-t-0"
            >
              <span className="font-mono text-xs tracking-[0.1em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base text-sub">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="flex h-full flex-col border border-hairline bg-white p-6 sm:p-8 md:p-10"
    >
      {errorCount > 0 ? (
        <p
          role="alert"
          className="mb-6 border-l-2 border-danger pl-4 text-sm text-danger"
        >
          {errorCount === 1
            ? "One field needs your attention."
            : `${errorCount} fields need your attention.`}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="fullName">Full name</FieldLabel>
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
          <FieldLabel htmlFor="email">Work email</FieldLabel>
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
        <FieldLabel htmlFor="company">Company</FieldLabel>
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
          <FieldLabel htmlFor="lookingFor" optional>
            Engagement model
          </FieldLabel>
          <div className="relative">
            <select
              id="lookingFor"
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleChange}
              aria-invalid={!!errors.lookingFor}
              aria-describedby={
                errors.lookingFor ? "lookingFor-error" : undefined
              }
              className={cn(
                inputClasses(!!errors.lookingFor),
                "appearance-none pr-10",
                !formData.lookingFor && "text-sub",
              )}
            >
              <option value="">Not sure yet</option>
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
          <FieldLabel htmlFor="focusArea" optional>
            Focus area
          </FieldLabel>
          <div className="relative">
            <select
              id="focusArea"
              name="focusArea"
              value={formData.focusArea}
              onChange={handleChange}
              aria-invalid={!!errors.focusArea}
              aria-describedby={
                errors.focusArea ? "focusArea-error" : undefined
              }
              className={cn(
                inputClasses(!!errors.focusArea),
                "appearance-none pr-10",
                !formData.focusArea && "text-sub",
              )}
            >
              <option value="">Not sure yet</option>
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

      <div className="mt-6 flex flex-1 flex-col">
        <FieldLabel htmlFor="message">What are you working on?</FieldLabel>
        {/* Persistent, because a placeholder holding real instruction is
            destroyed by the first keystroke. */}
        <p id="message-help" className="mb-2 -mt-1 text-sm text-sub">
          The initiative, where it is stuck, and any timeline that matters.
        </p>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "message-error message-help" : "message-help"
          }
          className={cn(
            inputClasses(!!errors.message),
            "min-h-44 flex-1 resize-none py-3.5 leading-[1.7]",
          )}
        />
        <FieldError id="message-error" error={errors.message} />
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-sub">
          You'll talk to a senior engineer, not a sales team.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(signalButtonClass, "w-full sm:w-auto")}
        >
          {isSubmitting ? "Sending…" : "Start the conversation"}
        </button>
      </div>
    </form>
  );
};

export default Form;
