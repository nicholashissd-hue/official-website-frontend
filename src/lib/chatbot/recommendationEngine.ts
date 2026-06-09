import { roleTaxonomy, type RoleTaxonomyEntry } from "./roleTaxonomy.js";
import type {
  AlternativeRole,
  ConfidenceLevel,
  HiringRecommendation,
} from "./types.js";

type RoleScore = {
  entry: RoleTaxonomyEntry;
  score: number;
  matchedSignals: string[];
};

const advisorIntentSignals = [
  "need",
  "hire",
  "hiring",
  "build",
  "create",
  "develop",
  "design",
  "set up",
  "setup",
  "launch",
  "test",
  "secure",
  "migrate",
  "deploy",
  "fix",
  "scale",
  "automate",
  "integrate",
  "job description",
  " jd",
];

const normalizeText = (value: string) =>
  value.toLowerCase().replace(/\s+/g, " ").trim();

const dedupe = <T,>(items: T[]) => Array.from(new Set(items));

const hasSignal = (input: string, signal: string) =>
  input.includes(signal.toLowerCase());

const scoreSignal = (signal: string) => {
  if (signal.length <= 3) return 1;
  if (signal.includes(" ")) return 3;
  return 2;
};

const scoreRole = (
  normalizedInput: string,
  entry: RoleTaxonomyEntry,
): RoleScore => {
  const matchedSignals = entry.signals.filter((signal) =>
    hasSignal(normalizedInput, signal),
  );
  const score = matchedSignals.reduce(
    (total, signal) => total + scoreSignal(signal),
    0,
  );

  return {
    entry,
    score,
    matchedSignals,
  };
};

const getFallbackRole = () =>
  roleTaxonomy.find((entry) => entry.role === "Solutions Architect") ??
  roleTaxonomy[0];

const getConfidence = (
  topScore: number,
  secondScore: number,
  inputLength: number,
): ConfidenceLevel => {
  if (topScore >= 8 && topScore - secondScore >= 3 && inputLength >= 35) {
    return "High";
  }

  if (topScore >= 4 && inputLength >= 25) {
    return "Medium";
  }

  return "Low";
};

const humanizeSignal = (signal: string) =>
  signal
    .replace(/\bapi\b/g, "API")
    .replace(/\bapis\b/g, "APIs")
    .replace(/\bai\b/g, "AI")
    .replace(/\bml\b/g, "ML")
    .replace(/\bui\b/g, "UI")
    .replace(/\bux\b/g, "UX")
    .replace(/\bqa\b/g, "QA");

const buildWhyThisRole = (
  roleScore: RoleScore,
  confidence: ConfidenceLevel,
) => {
  const matchedReasons = roleScore.matchedSignals.slice(0, 4).map((signal) => {
    return `The request mentions or strongly implies ${humanizeSignal(signal)}.`;
  });

  if (matchedReasons.length > 0) {
    return matchedReasons;
  }

  if (confidence === "Low") {
    return [
      "The request is still broad, so this is a starting recommendation rather than a final hiring spec.",
      "The work appears to need technical planning before individual specialist roles are chosen.",
      "A short follow-up conversation would clarify the best team shape.",
    ];
  }

  return [
    `The request maps most closely to ${roleScore.entry.whenToRecommend}.`,
    "This role is the strongest first hire based on the information provided.",
  ];
};

const buildAlternativeRoles = (
  primary: RoleTaxonomyEntry,
  scoredRoles: RoleScore[],
) => {
  const scoredAlternatives = scoredRoles
    .filter((roleScore) => roleScore.entry.role !== primary.role)
    .filter((roleScore) => roleScore.score > 0)
    .slice(0, 3)
    .map<AlternativeRole>((roleScore) => ({
      role: roleScore.entry.role,
      reason: `Consider this if the scope includes ${roleScore.entry.whenToRecommend}.`,
    }));

  const configuredAlternatives = primary.alternatives.filter(
    (alternative) =>
      !scoredAlternatives.some(
        (scoredAlternative) => scoredAlternative.role === alternative.role,
      ),
  );

  return [...scoredAlternatives, ...configuredAlternatives].slice(0, 3);
};

const buildSummary = (
  primary: RoleTaxonomyEntry,
  confidence: ConfidenceLevel,
) => {
  if (confidence === "Low") {
    return `${primary.summary} Because the request is still broad, treat this as a first-pass recommendation.`;
  }

  return primary.summary;
};

export const isLikelyHiringAdvisorRequest = (message: string) => {
  const normalizedInput = normalizeText(message);

  if (normalizedInput.length >= 120) {
    return true;
  }

  return (
    normalizedInput.length >= 18 &&
    advisorIntentSignals.some((signal) => hasSignal(normalizedInput, signal))
  );
};

export const recommendEngineerRole = (
  input: string,
): HiringRecommendation => {
  const normalizedInput = normalizeText(input);
  const scoredRoles = roleTaxonomy
    .map((entry) => scoreRole(normalizedInput, entry))
    .sort((current, next) => next.score - current.score);

  const topRoleScore = scoredRoles[0];
  const secondScore = scoredRoles[1]?.score ?? 0;
  const fallbackRole = getFallbackRole();
  const primaryScore =
    topRoleScore && topRoleScore.score > 0
      ? topRoleScore
      : {
          entry: fallbackRole,
          score: 0,
          matchedSignals: [],
        };

  const confidence = getConfidence(
    primaryScore.score,
    secondScore,
    normalizedInput.length,
  );
  const alternatives = buildAlternativeRoles(primaryScore.entry, scoredRoles);

  return {
    primaryRole: primaryScore.entry.role,
    confidence,
    summary: buildSummary(primaryScore.entry, confidence),
    whyThisRole: buildWhyThisRole(primaryScore, confidence),
    keySkills: primaryScore.entry.skills,
    alternativeRoles: alternatives,
    suggestedSeniority:
      confidence === "Low"
        ? `${primaryScore.entry.defaultSeniority}, pending scope clarity`
        : primaryScore.entry.defaultSeniority,
    interviewFocusAreas: primaryScore.entry.interviewFocusAreas,
    followUpQuestions: dedupe(primaryScore.entry.followUpQuestions).slice(0, 3),
    cta:
      "Share your hiring request with ElderOps and we will help you find the right engineer.",
  };
};

export const buildRecommendationReply = (
  recommendation: HiringRecommendation,
) =>
  `You likely need a ${recommendation.primaryRole}. I have included the reasoning, key skills, suggested seniority, and alternatives below.`;
