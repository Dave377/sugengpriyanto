import { describe, expect, it } from "vitest";
import { budgetCompatibility, emptyAnswers, leadStatus, manualReviewRequired } from "./engine";

describe("questionnaire engine", () => {
  it("simple website with mid budget is reasonable", () => {
    const a = { ...emptyAnswers(), projectType: "website" as const, features: ["blog_cms", "capture_leads_through_forms"], budget: "w_5_10k", brief: "A site for my bakery business" };
    expect(budgetCompatibility(a)).toBe("reasonable");
    expect(leadStatus(a)).toBe("qualified");
  });

  it("complex saas+mobile with tiny budget is significantly below", () => {
    const a = {
      ...emptyAnswers(), projectType: "saasMobile" as const, budget: "sm_lt10k", brief: "Marketplace with chat and payments",
      features: ["marketplace_functionality", "real_time_functionality", "ai_functionality", "payments", "subscription_billing", "chat", "offline_functionality"],
    };
    expect(budgetCompatibility(a)).toBe("significantly_below");
    expect(leadStatus(a)).toBe("budget_mismatch");
  });

  it("MVP split uses essential features only", () => {
    const a = {
      ...emptyAnswers(), projectType: "saas" as const, budget: "s_5_15k",
      features: ["marketplace_functionality", "real_time_functionality", "ai_features", "subscription_billing", "chat_messaging", "webhooks"],
      mvpUsed: true, mvpEssential: ["user_authentication", "dashboard"],
    };
    expect(budgetCompatibility(a)).toBe("reasonable");
  });

  it("not sure budget is unknown and flags manual review", () => {
    const a = { ...emptyAnswers(), projectType: "saas" as const, budget: "not_sure" };
    expect(budgetCompatibility(a)).toBe("unknown");
    expect(manualReviewRequired(a)).toBe(true);
  });
});
