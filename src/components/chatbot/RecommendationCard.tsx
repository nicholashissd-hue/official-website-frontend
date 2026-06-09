import type { HiringRecommendation } from "@/lib/chatbot/types";

interface RecommendationCardProps {
  recommendation: HiringRecommendation;
  isSharing: boolean;
  hasShared: boolean;
  onShare: () => void;
}

const RecommendationCard = ({
  recommendation,
  isSharing,
  hasShared,
  onShare,
}: RecommendationCardProps) => {
  const confidenceClass =
    recommendation.confidence === "High"
      ? "bg-[#E9F7EC] text-[#0B6F34]"
      : recommendation.confidence === "Medium"
        ? "bg-[#F4F6DD] text-primary"
        : "bg-[#FFF4DC] text-[#9B5B00]";

  return (
    <article className="mt-3 overflow-hidden rounded-2xl border border-[#DDE8D5] bg-white shadow-[0_18px_45px_rgba(2,54,27,0.10)]">
      <div className="bg-[#FAFBF7] p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#748477]">
              Recommended role
            </p>
            <h3 className="mt-1 font-urbanist text-2xl font-semibold leading-tight text-primary">
              {recommendation.primaryRole}
            </h3>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${confidenceClass}`}
          >
            {recommendation.confidence} confidence
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-[#4D5A52]">
          {recommendation.summary}
        </p>
      </div>

      <div className="space-y-4 p-4">
        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Why this fits
          </p>
          <ul className="space-y-2">
            {recommendation.whyThisRole.map((reason) => (
              <li
                key={reason}
                className="flex gap-2 text-sm leading-6 text-[#4D5A52]"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-success" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Key skills
          </p>
          <div className="flex flex-wrap gap-2">
            {recommendation.keySkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#DDE8D5] bg-[#FAFBF7] px-3 py-1.5 text-xs font-semibold text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-[#F8FAF4] p-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Suggested seniority
          </p>
          <p className="mt-1 text-sm font-semibold text-[#4D5A52]">
            {recommendation.suggestedSeniority}
          </p>
        </section>

        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Alternatives
          </p>
          <div className="space-y-2">
            {recommendation.alternativeRoles.map((alternative) => (
              <div
                key={alternative.role}
                className="rounded-2xl border border-[#E5ECDD] p-3"
              >
                <p className="text-sm font-bold text-primary">
                  {alternative.role}
                </p>
                <p className="mt-1 text-xs leading-5 text-[#5C675F]">
                  {alternative.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Interview focus
          </p>
          <p className="text-sm leading-6 text-[#4D5A52]">
            {recommendation.interviewFocusAreas.join(", ")}
          </p>
        </section>

        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Follow-up questions
          </p>
          <ul className="space-y-2">
            {recommendation.followUpQuestions.map((question) => (
              <li
                key={question}
                className="rounded-xl bg-[#FAFBF7] px-3 py-2 text-sm leading-5 text-[#4D5A52]"
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
          className="btn-glass-effect w-full rounded-full border border-primary px-4 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {hasShared
            ? "Shared with ElderOps"
            : isSharing
              ? "Sharing..."
              : "Find this engineer with ElderOps"}
        </button>
      </div>
    </article>
  );
};

export default RecommendationCard;
