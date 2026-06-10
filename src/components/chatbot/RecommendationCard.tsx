import type { HiringRecommendation } from "@/lib/chatbot/types";

interface RecommendationCardProps {
  recommendation: HiringRecommendation;
  isSharing: boolean;
  hasShared: boolean;
  onShare: () => void;
}

const SectionLabel = ({ children }: { children: string }) => (
  <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-three">
    {children}
  </p>
);

const RecommendationCard = ({
  recommendation,
  isSharing,
  hasShared,
  onShare,
}: RecommendationCardProps) => {
  const confidenceClass =
    recommendation.confidence === "High"
      ? "border-success/50 text-success"
      : recommendation.confidence === "Medium"
        ? "border-primary/25 text-primary"
        : "border-[#9b5b00]/40 text-[#9b5b00]";

  return (
    <article className="mt-3 w-full overflow-hidden rounded-[3px] border border-primary/15 bg-white shadow-[0_18px_45px_rgba(2,54,27,0.1)]">
      <div className="border-b border-primary/10 bg-bg-light/50 p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-three">
              Recommended role
            </p>
            <h3 className="mt-1.5 font-display text-[1.4rem] leading-tight tracking-[-0.01em] text-primary">
              {recommendation.primaryRole}
            </h3>
          </div>

          <span
            className={`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${confidenceClass}`}
          >
            {recommendation.confidence} confidence
          </span>
        </div>

        <p className="mt-3 text-sm leading-[1.7] text-accent-one">
          {recommendation.summary}
        </p>
      </div>

      <div className="space-y-5 p-4">
        <section>
          <SectionLabel>Why this fits</SectionLabel>
          <ul className="space-y-2">
            {recommendation.whyThisRole.map((reason) => (
              <li
                key={reason}
                className="flex gap-2.5 text-sm leading-[1.7] text-accent-one"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] size-1 shrink-0 rotate-45 bg-success"
                />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionLabel>Key skills</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {recommendation.keySkills.map((skill) => (
              <span
                key={skill}
                className="border border-primary/15 bg-bg-cream px-2.5 py-1.5 text-xs font-medium text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="border border-primary/10 bg-bg-light/40 p-3">
          <SectionLabel>Suggested seniority</SectionLabel>
          <p className="text-sm font-medium text-primary">
            {recommendation.suggestedSeniority}
          </p>
        </section>

        <section>
          <SectionLabel>Alternatives</SectionLabel>
          <div className="space-y-2">
            {recommendation.alternativeRoles.map((alternative) => (
              <div
                key={alternative.role}
                className="border border-primary/10 p-3"
              >
                <p className="text-sm font-semibold text-primary">
                  {alternative.role}
                </p>
                <p className="mt-1 text-xs leading-[1.6] text-accent-one">
                  {alternative.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>Interview focus</SectionLabel>
          <p className="text-sm leading-[1.7] text-accent-one">
            {recommendation.interviewFocusAreas.join(", ")}
          </p>
        </section>

        <section>
          <SectionLabel>Follow-up questions</SectionLabel>
          <ul className="space-y-2">
            {recommendation.followUpQuestions.map((question) => (
              <li
                key={question}
                className="border-l-2 border-success/50 bg-bg-light/40 px-3 py-2 text-sm leading-[1.6] text-accent-one"
              >
                {question}
              </li>
            ))}
          </ul>
        </section>

        <button
          type="button"
          disabled={isSharing || hasShared}
          onClick={onShare}
          className="h-12 w-full cursor-pointer rounded-[2px] bg-primary px-4 text-sm font-medium tracking-wide text-bg-cream transition-colors duration-300 hover:bg-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {hasShared
            ? "Shared with ElderOps ✓"
            : isSharing
              ? "Sharing…"
              : "Find this engineer with ElderOps"}
        </button>
      </div>
    </article>
  );
};

export default RecommendationCard;
