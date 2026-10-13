import {
  budgetRanges, BUDGET_FLEXIBLE, BUDGET_UNSURE, complexityRules as R, customization, designStatus, features, goals, labelOf,
  management, NOT_SURE, OTHER, projectTypes, shortTimelines, startingWith, team, timelines, webMobileRelation, contactMethods,
  type ProjectType,
} from "./config";

export interface Answers {
  projectType?: ProjectType | undefined;
  goal?: string | undefined;
  goalOther?: string | undefined;
  features: string[];
  featuresOther?: string | undefined;
  notSureDescription?: string | undefined;
  webMobileRelation?: string | undefined;
  management?: string | undefined;
  customization?: string | undefined;
  status: string[];
  statusOther?: string | undefined;
  currentUrl?: string | undefined;
  design?: string | undefined;
  team?: string | undefined;
  teamOther?: string | undefined;
  brief?: string | undefined;
  references: { url: string; note?: string | undefined }[];
  timeline?: string | undefined;
  deadlineReason?: string | undefined;
  targetDate?: string | undefined;
  budget?: string | undefined;
  mvpUsed: boolean;
  mvpEssential: string[];
  mvpFuture: string[];
  scopeAdjusted: boolean;
  contact: {
    name: string; email: string; company?: string | undefined; role?: string | undefined; country?: string | undefined; timezone?: string | undefined;
    method?: string | undefined; methodDetail?: string | undefined; consent: boolean; marketing: boolean;
  };
}

export const emptyAnswers = (): Answers => ({
  features: [], status: [], references: [], mvpUsed: false, mvpEssential: [], mvpFuture: [], scopeAdjusted: false,
  contact: { name: "", email: "", consent: false, marketing: false },
});

export type Compatibility = "reasonable" | "potentially_low" | "significantly_below" | "unknown";
export type LeadStatus = "qualified" | "qualified_needs_review" | "budget_mismatch" | "custom_scope" | "incomplete";

export function complexityScore(a: Answers, featureList = a.features): number {
  let s = 0;
  const real = featureList.filter((f) => f !== OTHER && f !== NOT_SURE);
  for (const f of real) {
    const rule = R.featureWeights.find((w) => w.match.test(f));
    s += rule ? rule.points : R.defaultFeaturePoints;
  }
  if (real.length >= R.manyFeaturesThreshold) s += R.manyFeaturesPoints;
  if (featureList.includes(OTHER)) s += R.otherPoints;
  s += R.customization[a.customization ?? ""] ?? 0;
  s += R.design[a.design ?? ""] ?? 0;
  if (shortTimelines.includes(a.timeline ?? "")) s += R.shortDeadlinePoints;
  return Math.round(s);
}

export function isUnclear(a: Answers) {
  const real = a.features.filter((f) => f !== OTHER && f !== NOT_SURE);
  return a.projectType === "notSure" && real.length < 2 && (a.notSureDescription ?? "").length < R.vagueBriefChars;
}

export function budgetCompatibility(a: Answers, useMvp = a.mvpUsed): Compatibility {
  if (!a.projectType || !a.budget || a.budget === BUDGET_UNSURE) return "unknown";
  if (a.budget === BUDGET_FLEXIBLE) return "reasonable";
  if (isUnclear(a)) return "unknown";
  const range = budgetRanges[a.projectType].find((b) => b.value === a.budget);
  if (!range?.max) return "unknown";
  const list = useMvp && a.mvpEssential.length ? a.mvpEssential : a.features;
  const estimate = R.baseCost[a.projectType] + complexityScore(a, list) * R.costPerPoint[a.projectType];
  if (range.max >= estimate) return "reasonable";
  if (range.max >= estimate * R.potentiallyLowRatio) return "potentially_low";
  return "significantly_below";
}

export function manualReviewRequired(a: Answers) {
  return (
    a.projectType === "notSure" ||
    a.goal === OTHER || a.features.includes(OTHER) || a.status.includes(OTHER) || a.team === OTHER ||
    a.customization === "the_product_needs_highly_custom_interactions_or_workflows" ||
    budgetCompatibility(a) === "unknown"
  );
}

export function leadStatus(a: Answers): LeadStatus {
  if (!a.projectType || (a.brief ?? "").trim().length < 10) return "incomplete";
  const c = budgetCompatibility(a);
  if (c === "significantly_below") return "budget_mismatch";
  if (a.projectType === "notSure" || a.features.includes(OTHER) || a.customization === "the_product_needs_highly_custom_interactions_or_workflows") return "custom_scope";
  if (manualReviewRequired(a) || c === "potentially_low") return "qualified_needs_review";
  return "qualified";
}

const has = (a: Answers, re: RegExp) => a.features.some((f) => re.test(f));

export function technicalAssessment(a: Answers) {
  const notes: string[] = [];
  let approach = "Manual review";
  switch (a.projectType) {
    case "website": {
      const dynamic = has(a, /user_accounts|customer_dashboard|payments|dynamic|member/);
      const selfEdit = (a.management ?? "").startsWith("i_want_to_easily") || (a.management ?? "").startsWith("i_mainly");
      approach = !dynamic && selfEdit ? "Framer (visual editing, fast launch)" : "Next.js (custom functionality / integrations)";
      if (dynamic) notes.push("Dynamic features suggest a backend (Supabase).");
      break;
    }
    case "ecommerce":
      approach = has(a, /headless|configurator|custom_storefront|custom_cart|custom_checkout/) ? "Shopify Hydrogen / Oxygen (headless)" : "Shopify theme (traditional / custom theme)";
      break;
    case "mobile":
      approach = "FlutterFlow + Supabase";
      if (has(a, /offline|real_time/)) notes.push("Offline / real-time needs: validate FlutterFlow fit or custom code.");
      break;
    case "saas":
      approach = "Next.js + Supabase";
      if (has(a, /subscription|payments/)) notes.push("Stripe billing.");
      if (has(a, /ai_/)) notes.push("AI features — scope model usage and costs.");
      break;
    case "saasMobile":
      approach = (a.webMobileRelation ?? "").startsWith("mobile_is_the_main")
        ? "FlutterFlow (mobile + web) + Supabase"
        : "Next.js web + FlutterFlow mobile, shared Supabase backend";
      break;
  }
  return { suggestedApproach: approach, complexityScore: complexityScore(a), notes, internalOnly: true };
}

export function projectSummary(a: Answers) {
  const t = a.projectType;
  const featList = t ? features[t] : [];
  return {
    lead: a.contact.name,
    company: a.contact.company ?? null,
    projectType: labelOf(projectTypes, t),
    primaryGoal: a.goal === OTHER ? `Other: ${a.goalOther ?? ""}` : labelOf(goals, a.goal),
    features: a.features.map((f) => (f === OTHER ? `Other: ${a.featuresOther ?? ""}` : labelOf(featList, f))),
    whatUsersShouldAccomplish: a.notSureDescription ?? null,
    webMobileRelationship: a.webMobileRelation ? labelOf(webMobileRelation, a.webMobileRelation) : null,
    contentManagement: labelOf(management, a.management),
    customization: labelOf(customization, a.customization),
    existingAssets: a.status.map((s) => (s === OTHER ? `Other: ${a.statusOther ?? ""}` : labelOf(startingWith, s))),
    currentUrl: a.currentUrl ?? null,
    design: labelOf(designStatus, a.design),
    team: a.team === OTHER ? `Other: ${a.teamOther ?? ""}` : labelOf(team, a.team),
    timeline: labelOf(timelines, a.timeline),
    deadlineReason: a.deadlineReason ?? null,
    targetDate: a.targetDate ?? null,
    budget: t ? budgetRanges[t].find((b) => b.value === a.budget)?.label ?? null : null,
    budgetCompatibility: budgetCompatibility(a),
    mvp: a.mvpUsed,
    mvpEssentialFeatures: a.mvpEssential.map((f) => labelOf(featList, f)),
    futureFeatures: a.mvpFuture.map((f) => labelOf(featList, f)),
    preferredCommunication: contactMethods.find((m) => m.value === a.contact.method)?.label ?? null,
    manualReview: manualReviewRequired(a),
    brief: a.brief ?? "",
    references: a.references.filter((r) => r.url),
  };
}

export function evaluate(a: Answers) {
  return {
    compatibility: budgetCompatibility(a),
    complexity: complexityScore(a),
    manualReview: manualReviewRequired(a),
    status: leadStatus(a),
    summary: projectSummary(a),
    assessment: technicalAssessment(a),
  };
}
