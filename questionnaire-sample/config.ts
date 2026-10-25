// All business-editable questionnaire configuration lives here.
// Edit labels, budget ranges, complexity weights and contact channels without touching UI code.

export type ProjectType = "website" | "ecommerce" | "mobile" | "saas" | "saasMobile" | "notSure";

export interface Option {
  value: string;
  label: string;
  description?: string;
}

export const OTHER = "other";
export const NOT_SURE = "not_sure";

const opts = (labels: string[]): Option[] =>
  labels.map((label) => ({
    value:
      label === "Other" ? OTHER : /^I'm not sure|^Not sure/.test(label) ? NOT_SURE : label.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, ""),
    label,
  }));

export const projectTypes: Option[] = [
  { value: "website", label: "Website", description: "Marketing website, company website, landing page, content website, etc." },
  { value: "ecommerce", label: "Online store", description: "Sell physical, digital, or subscription products online." },
  { value: "mobile", label: "Mobile app", description: "An app primarily designed for iOS and/or Android." },
  { value: "saas", label: "SaaS / web application", description: "A product people use through a browser, usually involving accounts, dashboards, workflows, or data." },
  { value: "saasMobile", label: "SaaS + mobile app", description: "A product that needs both a web application and mobile application." },
  { value: "notSure", label: "I'm not sure", description: "I have an idea but I'm not sure how it should be categorized." },
];

export const goals = opts([
  "Launch a new business or product",
  "Generate leads or inquiries",
  "Promote a company, product, or service",
  "Sell products online",
  "Build and validate an MVP",
  "Replace or redesign an existing website/app",
  "Build an internal business tool",
  "Turn an idea into a working product",
  "Improve or expand an existing product",
  "Other",
]);

export const featureQuestion: Record<ProjectType, string> = {
  website: "What should the website be able to do?",
  ecommerce: "What does the store need?",
  mobile: "What should the app be able to do?",
  saas: "What should the product be able to do?",
  saasMobile: "What should the product be able to do — on web and mobile?",
  notSure: "Which of these sound like your product?",
};

export const features: Record<ProjectType, Option[]> = {
  website: opts([
    "Present company / product information", "Landing page for a campaign or product", "Capture leads through forms", "Blog / CMS",
    "Portfolio / case studies", "Booking or appointment scheduling", "Newsletter signup", "Member-only content", "User accounts",
    "Customer dashboard", "Payments", "Search", "Multilingual content", "Third-party integrations", "Dynamic or database-driven content",
    "Advanced animations / interactions", "Other", "I'm not sure yet",
  ]),
  ecommerce: opts([
    "Product catalog", "Product variants", "Collections / categories", "Physical products", "Digital products", "Subscription products",
    "Discount codes / promotions", "Customer accounts", "Product reviews", "Search and filtering", "Multiple currencies", "Multiple languages",
    "International selling", "Custom product builder / configurator", "Custom cart experience", "Custom storefront interactions",
    "Custom checkout-related workflow", "Inventory integrations", "Shipping integrations", "ERP / CRM integrations", "Third-party APIs",
    "Existing Shopify integrations", "Headless / highly custom storefront requirements", "Other", "I'm not sure yet",
  ]),
  mobile: opts([
    "User accounts", "User profiles", "Subscription or payments", "Push notifications", "Chat / messaging", "Camera access",
    "Photo / video uploads", "File uploads", "Maps / location", "GPS tracking", "Social features", "User-generated content", "Booking",
    "Marketplace functionality", "Offline functionality", "Real-time data", "Admin dashboard", "Analytics", "Third-party integrations",
    "Existing backend / API integration", "Other", "I'm not sure yet",
  ]),
  saas: opts([
    "User authentication", "User profiles", "Teams / organizations", "Multiple user roles", "Permissions / access control", "Dashboard",
    "Admin dashboard", "Subscription billing", "One-time payments", "Database-driven features", "Forms / workflows", "File uploads",
    "Email notifications", "Search", "Reporting", "Analytics", "Real-time functionality", "Chat / messaging", "AI features",
    "Third-party API integrations", "Webhooks", "Marketplace functionality", "Customer portal", "Internal tools", "Import / export data",
    "Other", "I'm not sure yet",
  ]),
  saasMobile: opts([
    "Web user accounts", "Mobile user accounts", "Shared account between web and mobile", "Teams / organizations", "Roles / permissions",
    "Web dashboard", "Admin dashboard", "Subscription billing", "Payments", "Database", "Notifications", "Push notifications", "File uploads",
    "Camera", "Maps / location", "Chat", "Real-time functionality", "AI functionality", "Analytics", "Third-party integrations",
    "Offline functionality", "Other", "I'm not sure yet",
  ]),
  notSure: opts([
    "View information", "Submit information", "Create an account", "Make payments", "Buy products", "Manage data", "Use a dashboard",
    "Communicate with other users", "Upload files", "Use the product from a phone", "Use the product from a computer", "Other", "I'm not sure",
  ]),
};

export const webMobileRelation = opts([
  "They should have mostly the same features",
  "Mobile is the main product; web is secondary",
  "Web is the main product; mobile is secondary",
  "Web and mobile serve different purposes",
  "I'm not sure yet",
]);

export const management = opts([
  "I want to easily edit most content myself",
  "I mainly need to update text and images occasionally",
  "Most content/data will come from users or a database",
  "Developer-managed updates are fine",
  "I'm not sure yet",
]);

export const customization = opts([
  "Standard, proven layouts and functionality are fine",
  "I want a polished custom design, but standard functionality is okay",
  "I have a specific design that needs to be implemented closely",
  "The product needs highly custom interactions or workflows",
  "I'm not sure yet",
]);

export const startingWith = opts([
  "Just an idea", "Written requirements", "Wireframes", "UI / UX designs", "Brand identity / design system", "Existing website",
  "Existing web application", "Existing mobile app", "Existing Shopify store", "Existing backend", "Existing database", "Existing API",
  "Existing codebase", "None of the above", "Other",
]);
export const existingProductValues = ["existing_website", "existing_web_application", "existing_mobile_app", "existing_shopify_store", "existing_codebase"];

export const designStatus = opts([
  "I need design from scratch", "I have ideas / references but no design", "I have wireframes", "I have partial UI designs",
  "I already have final designs", "I only need development", "I'm not sure yet",
]);

export const team = opts([
  "Just me", "I have a designer", "I have another developer", "I have an internal development team", "I have a product / startup team",
  "I have an agency or external team", "Not sure yet", "Other",
]);

export const timelines = opts([
  "ASAP", "Within 2–4 weeks", "Within 1–2 months", "Within 3–6 months", "More than 6 months", "No fixed deadline", "I'm flexible",
]);
export const shortTimelines = ["asap", "within_2_4_weeks"];
export const timedTimelines = ["asap", "within_2_4_weeks", "within_1_2_months", "within_3_6_months", "more_than_6_months"];

// ---------- Budget (placeholder ranges — replace with your own) ----------
export interface BudgetRange { value: string; label: string; max: number | null }
export const BUDGET_FLEXIBLE = "flexible";
export const BUDGET_UNSURE = NOT_SURE;

const extra: BudgetRange[] = [
  { value: BUDGET_FLEXIBLE, label: "I'm flexible", max: null },
  { value: BUDGET_UNSURE, label: "I'm not sure yet", max: null },
];

export const budgetRanges: Record<ProjectType, BudgetRange[]> = {
  website: [
    { value: "w_lt2k", label: "Under $200", max: 200 },
    { value: "w_2_5k", label: "$200 – $500", max: 500 },
    { value: "w_5_10k", label: "$500 – $1,000", max: 1000 },
    { value: "w_10k_plus", label: "$1,000+", max: 2500 },
    ...extra,
  ],
  ecommerce: [
    { value: "e_lt3k", label: "Under $300", max: 300 },
    { value: "e_3_8k", label: "$300 – $800", max: 800 },
    { value: "e_8_20k", label: "$800 – $2,000", max: 2000 },
    { value: "e_20k_plus", label: "$2,000+", max: 5000 },
    ...extra,
  ],
  mobile: [
    { value: "m_lt5k", label: "Under $500", max: 500 },
    { value: "m_5_15k", label: "$500 – $1,500", max: 1500 },
    { value: "m_15_30k", label: "$1,500 – $3,000", max: 3000 },
    { value: "m_30k_plus", label: "$3,000+", max: 7000 },
    ...extra,
  ],
  saas: [
    { value: "s_lt5k", label: "Under $500", max: 500 },
    { value: "s_5_15k", label: "$500 – $1,500", max: 1500 },
    { value: "s_15_35k", label: "$1,500 – $3,500", max: 3500 },
    { value: "s_35k_plus", label: "$3,500+", max: 8000 },
    ...extra,
  ],
  saasMobile: [
    { value: "sm_lt10k", label: "Under $1,000", max: 1000 },
    { value: "sm_10_25k", label: "$1,000 – $2,500", max: 2500 },
    { value: "sm_25_50k", label: "$2,500 – $5,000", max: 5000 },
    { value: "sm_50k_plus", label: "$5,000+", max: 12000 },
    ...extra,
  ],
  notSure: [
    { value: "n_lt5k", label: "Under $500", max: 500 },
    { value: "n_5_15k", label: "$500 – $1,500", max: 1500 },
    { value: "n_15_40k", label: "$1,500 – $4,000", max: 4000 },
    { value: "n_40k_plus", label: "$4,000+", max: 10000 },
    ...extra,
  ],
};

// ---------- Complexity rules (rough signals, not a quote) ----------
export const complexityRules = {
  // Rough minimum budget for a baseline version of each type.
  baseCost: { website: 150, ecommerce: 250, mobile: 500, saas: 600, saasMobile: 1200, notSure: 400 } as Record<ProjectType, number>,
  // Added rough cost per complexity point.
  costPerPoint: { website: 50, ecommerce: 70, mobile: 100, saas: 100, saasMobile: 130, notSure: 90 } as Record<ProjectType, number>,
  // Feature keywords (matched against option values) → points.
  featureWeights: [
    { match: /payment|billing|checkout/, points: 2 },
    { match: /subscription/, points: 2 },
    { match: /role|permission|teams/, points: 2 },
    { match: /real_time/, points: 3 },
    { match: /ai_/, points: 3 },
    { match: /marketplace/, points: 4 },
    { match: /offline/, points: 3 },
    { match: /integration|api|erp|webhook/, points: 2 },
    { match: /chat|messaging/, points: 2 },
    { match: /configurator|custom_cart|custom_storefront|headless|custom_checkout/, points: 3 },
    { match: /gps|maps|camera/, points: 1 },
    { match: /account|auth|dashboard|portal/, points: 1 },
  ],
  defaultFeaturePoints: 0.5,
  manyFeaturesThreshold: 10,
  manyFeaturesPoints: 3,
  customization: { the_product_needs_highly_custom_interactions_or_workflows: 5, i_have_a_specific_design_that_needs_to_be_implemented_closely: 2, i_want_a_polished_custom_design_but_standard_functionality_is_okay: 1 } as Record<string, number>,
  design: { i_need_design_from_scratch: 3, i_have_ideas_references_but_no_design: 2, i_have_wireframes: 1 } as Record<string, number>,
  shortDeadlinePoints: 2,
  otherPoints: 2,
  vagueBriefChars: 40,
  // Budget max >= estimate → reasonable; >= estimate*ratio → potentially low; else significantly below.
  potentiallyLowRatio: 0.6,
};

// ---------- Contact channels (toggle `enabled`) ----------
export const contactMethods = [
  { value: "email", label: "Email", enabled: true },
  { value: "phone", label: "Phone", enabled: true },
].filter((m) => m.enabled);

export const labelOf = (list: Option[], v?: string) => list.find((o) => o.value === v)?.label ?? v ?? "";
