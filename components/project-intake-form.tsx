"use client"

import { useMemo, useState, type ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react"

import { Button } from "@/components/ui/button"

type Choice = { value: string; label: string; description?: string }

type IntakeData = {
  projectType: string
  objectives: string[]
  features: string[]
  audience: string
  startingPoint: string[]
  management: string
  team: string
  timeline: string
  budget: string
  budgetPlan: string
  brief: string
  name: string
  email: string
  company: string
  reference: string
}

const initialData: IntakeData = {
  projectType: "",
  objectives: [],
  features: [],
  audience: "",
  startingPoint: [],
  management: "",
  team: "",
  timeline: "",
  budget: "",
  budgetPlan: "",
  brief: "",
  name: "",
  email: "",
  company: "",
  reference: "",
}

const projectTypes: Choice[] = [
  { value: "landing-page", label: "Landing page", description: "A focused page for one offer, launch, or campaign." },
  { value: "marketing-website", label: "Marketing website", description: "A complete website for your business or organization." },
  { value: "web-app", label: "Web application", description: "A product people use to complete tasks or manage information." },
  { value: "mobile-app", label: "Mobile application", description: "An experience designed for iOS, Android, or both." },
  { value: "website-and-app", label: "Website and app", description: "A public-facing website plus a logged-in product experience." },
  { value: "not-sure", label: "I'm not sure yet", description: "I have a problem or idea and need help shaping the right format." },
]

const objectiveOptions: Record<string, Choice[]> = {
  "landing-page": [
    { value: "launch-offer", label: "Launch a new offer" },
    { value: "generate-leads", label: "Generate more leads" },
    { value: "validate-idea", label: "Validate an idea" },
    { value: "campaign", label: "Support a campaign or event" },
  ],
  "marketing-website": [
    { value: "launch-business", label: "Launch a new business" },
    { value: "improve-presence", label: "Improve our online presence" },
    { value: "generate-leads", label: "Generate more leads" },
    { value: "replace-site", label: "Replace an outdated website" },
  ],
  "web-app": [
    { value: "validate-product", label: "Validate a product idea" },
    { value: "launch-product", label: "Launch a new product" },
    { value: "improve-product", label: "Improve an existing product" },
    { value: "streamline-work", label: "Streamline an internal workflow" },
  ],
  "mobile-app": [
    { value: "validate-product", label: "Validate a product idea" },
    { value: "launch-product", label: "Launch a new app" },
    { value: "improve-product", label: "Improve an existing app" },
    { value: "reach-users", label: "Reach users on mobile" },
  ],
  "website-and-app": [
    { value: "launch-product", label: "Launch a new product" },
    { value: "connect-experience", label: "Connect our website and product" },
    { value: "improve-product", label: "Improve an existing product" },
    { value: "build-business", label: "Build a digital business" },
  ],
  "not-sure": [
    { value: "shape-idea", label: "Shape an early idea" },
    { value: "find-direction", label: "Find the right direction" },
    { value: "launch-business", label: "Launch a new business" },
    { value: "solve-problem", label: "Solve a specific business problem" },
  ],
}

const featureOptions: Record<string, Choice[]> = {
  "landing-page": [
    { value: "contact-form", label: "Contact or inquiry form" },
    { value: "cms", label: "Easy content editing" },
    { value: "analytics", label: "Analytics and conversion tracking" },
    { value: "payments", label: "Payments or checkout" },
    { value: "integrations", label: "Third-party integrations" },
    { value: "unsure", label: "I'm not sure yet" },
  ],
  "marketing-website": [
    { value: "cms", label: "Easy content editing" },
    { value: "blog", label: "Blog or resources" },
    { value: "contact-form", label: "Contact or inquiry form" },
    { value: "multilingual", label: "Multiple languages" },
    { value: "integrations", label: "Third-party integrations" },
    { value: "unsure", label: "I'm not sure yet" },
  ],
  "web-app": [
    { value: "accounts", label: "User accounts and permissions" },
    { value: "dashboard", label: "Dashboard or admin area" },
    { value: "payments", label: "Payments or subscriptions" },
    { value: "search", label: "Search, filters, or data tables" },
    { value: "integrations", label: "Third-party integrations" },
    { value: "unsure", label: "I'm not sure yet" },
  ],
  "mobile-app": [
    { value: "accounts", label: "User accounts and profiles" },
    { value: "notifications", label: "Push notifications" },
    { value: "payments", label: "Payments or subscriptions" },
    { value: "location", label: "Location or maps" },
    { value: "integrations", label: "Third-party integrations" },
    { value: "unsure", label: "I'm not sure yet" },
  ],
  "website-and-app": [
    { value: "accounts", label: "User accounts and permissions" },
    { value: "cms", label: "Easy content editing" },
    { value: "dashboard", label: "Dashboard or admin area" },
    { value: "payments", label: "Payments or subscriptions" },
    { value: "integrations", label: "Third-party integrations" },
    { value: "unsure", label: "I'm not sure yet" },
  ],
  "not-sure": [
    { value: "contact-form", label: "A way to collect inquiries" },
    { value: "accounts", label: "User accounts or member area" },
    { value: "payments", label: "Payments or selling online" },
    { value: "cms", label: "Easy content editing" },
    { value: "integrations", label: "Connecting existing tools" },
    { value: "unsure", label: "I'm not sure yet" },
  ],
}

const startingPointOptions: Choice[] = [
  { value: "idea", label: "Just a written idea" },
  { value: "brief", label: "A project brief" },
  { value: "figma", label: "Figma designs" },
  { value: "brand", label: "Brand assets and content" },
  { value: "ai-code", label: "AI-generated codebase" },
  { value: "existing-code", label: "An existing codebase" },
  { value: "nothing", label: "Nothing yet" },
]

const managementOptions: Choice[] = [
  { value: "self", label: "I want to edit it myself" },
  { value: "team", label: "My team will manage it" },
  { value: "support", label: "I'd like ongoing support" },
  { value: "unsure", label: "I'm not sure yet" },
]

const timelineOptions: Choice[] = [
  { value: "urgent", label: "As soon as possible" },
  { value: "one-two-months", label: "Within 1–2 months" },
  { value: "three-six-months", label: "Within 3–6 months" },
  { value: "flexible", label: "I'm flexible" },
  { value: "exploring", label: "I'm only exploring" },
]

const budgetOptions: Choice[] = [
  { value: "under-1000", label: "Under $1,000" },
  { value: "1000-2500", label: "$1,000–$2,500" },
  { value: "2500-5000", label: "$2,500–$5,000" },
  { value: "5000-10000", label: "$5,000–$10,000" },
  { value: "over-10000", label: "$10,000+" },
  { value: "unsure", label: "I'm not sure yet" },
]

function ChoiceGrid({ options, selected, multiple = false, onSelect }: { options: Choice[]; selected: string | string[]; multiple?: boolean; onSelect: (value: string) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const isSelected = multiple ? selected.includes(option.value) : selected === option.value
        const className = isSelected
          ? "border-primary bg-primary/5 ring-primary/20 rounded-xl border p-4 text-left ring-2 transition-colors"
          : "border-border hover:border-primary/50 hover:bg-muted/50 rounded-xl border p-4 text-left transition-colors"
        return (
          <button key={option.value} type="button" onClick={() => onSelect(option.value)} className={className}>
            <span className="flex items-start justify-between gap-3">
              <span className="font-medium">{option.label}</span>
              {isSelected && <Check className="text-primary mt-0.5 size-4 shrink-0" />}
            </span>
            {option.description && <span className="text-muted-foreground mt-2 block text-sm leading-6">{option.description}</span>}
          </button>
        )
      })}
    </div>
  )
}

export default function ProjectIntakeForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<IntakeData>(initialData)
  const [submitted, setSubmitted] = useState(false)
  const totalSteps = 12
  const objectives = useMemo(() => objectiveOptions[data.projectType] ?? objectiveOptions["not-sure"], [data.projectType])
  const features = useMemo(() => featureOptions[data.projectType] ?? featureOptions["not-sure"], [data.projectType])

  const update = <K extends keyof IntakeData>(key: K, value: IntakeData[K]) => {
    setData((current) => ({ ...current, [key]: value }))
  }

  const toggle = (key: "objectives" | "features" | "startingPoint", value: string) => {
    setData((current) => ({
      ...current,
      [key]: current[key].includes(value) ? current[key].filter((item) => item !== value) : [...current[key], value],
    }))
  }

  const canContinue = [
    Boolean(data.projectType),
    data.objectives.length > 0,
    data.features.length > 0,
    data.audience.trim().length > 2,
    data.startingPoint.length > 0,
    Boolean(data.management),
    Boolean(data.team),
    Boolean(data.timeline),
    Boolean(data.budget) && (data.budget !== "under-1000" || Boolean(data.budgetPlan)),
    data.brief.trim().length > 15,
    data.name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email),
    true,
  ][step]

  const next = () => {
    if (canContinue && step < totalSteps - 1) setStep((current) => current + 1)
  }

  const previous = () => setStep((current) => Math.max(0, current - 1))

  const submit = () => {
    const body = [
      "Project type: " + data.projectType,
      "Main goals: " + data.objectives.join(", "),
      "Features: " + data.features.join(", "),
      "Audience: " + data.audience,
      "Starting point: " + data.startingPoint.join(", "),
      "Website management: " + data.management,
      "People involved: " + data.team,
      "Timeline: " + data.timeline,
      "Budget: " + data.budget,
      data.budgetPlan ? "Budget direction: " + data.budgetPlan : "",
      "Project brief: " + data.brief,
      "Name: " + data.name,
      "Email: " + data.email,
      "Company or project: " + (data.company || "Not provided"),
      "Reference: " + (data.reference || "Not provided"),
    ].filter(Boolean).join("\n\n")

    const subject = encodeURIComponent("New project inquiry from " + data.name)
    window.location.href = "mailto:hello@sugeng.dev?subject=" + subject + "&body=" + encodeURIComponent(body)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border-border rounded-2xl border p-8 text-center sm:p-12">
        <div className="bg-primary/10 text-primary mx-auto flex size-12 items-center justify-center rounded-full"><Check className="size-6" /></div>
        <h2 className="font-heading mt-6 text-3xl font-semibold">Your project brief is ready.</h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-md leading-7">Your email app should open with the answers attached. Send it when you&apos;re ready, and I&apos;ll review everything before getting back to you.</p>
        <Button className="mt-7" render={<Link href="/" />} nativeButton={false}>Back to homepage</Button>
      </div>
    )
  }

  return (
    <div className="border-border rounded-2xl border p-5 sm:p-8 lg:p-10">
      <div className="mb-10">
        <div className="flex items-center justify-between gap-4 text-sm"><span className="text-muted-foreground">Project brief</span><span className="font-mono">{String(step + 1).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}</span></div>
        <div className="bg-muted mt-4 h-1 overflow-hidden rounded-full"><div className="bg-primary h-full transition-all" style={{ width: ((step + 1) / totalSteps) * 100 + "%" }} /></div>
      </div>

      <div className="min-h-[32rem]">
        {step === 0 && <Question title="What are you looking to build?" description="Choose the closest fit. You can always explain the details later." content={<ChoiceGrid options={projectTypes} selected={data.projectType} onSelect={(value) => update("projectType", value)} />} />}
        {step === 1 && <Question title="What should this project help you achieve?" description="Choose one or more goals. These help shape the first version." content={<ChoiceGrid options={objectives} selected={data.objectives} multiple onSelect={(value) => toggle("objectives", value)} />} />}
        {step === 2 && <Question title="What should the experience include?" description="Choose everything that sounds relevant, even if you&apos;re not sure yet." content={<ChoiceGrid options={features} selected={data.features} multiple onSelect={(value) => toggle("features", value)} />} />}
        {step === 3 && <Question title="Who is this for?" description="Tell me who will use it and what they need to accomplish." content={<textarea value={data.audience} onChange={(event) => update("audience", event.target.value)} placeholder="For example: independent consultants who need a faster way to collect qualified leads." className="border-border bg-background focus:border-primary focus:ring-primary/20 min-h-36 w-full resize-y rounded-xl border p-4 outline-none focus:ring-2" />} />}
        {step === 4 && <Question title="What do you already have to start with?" description="Choose everything you already have." content={<ChoiceGrid options={startingPointOptions} selected={data.startingPoint} multiple onSelect={(value) => toggle("startingPoint", value)} />} />}
        {step === 5 && <Question title="How would you like to manage the project after launch?" description="This helps me recommend the right setup and level of support." content={<ChoiceGrid options={managementOptions} selected={data.management} onSelect={(value) => update("management", value)} />} />}
        {step === 6 && <Question title="Who will be involved in the project?" description="Knowing the decision-making group helps me plan communication." content={<ChoiceGrid options={[{ value: "just-me", label: "Just me" }, { value: "small-team", label: "A small team" }, { value: "larger-team", label: "A larger organization" }, { value: "client-work", label: "I'm working on behalf of a client" }]} selected={data.team} onSelect={(value) => update("team", value)} />} />}
        {step === 7 && <Question title="When would you like to launch?" description="A rough timeframe is enough at this stage." content={<ChoiceGrid options={timelineOptions} selected={data.timeline} onSelect={(value) => update("timeline", value)} />} />}
        {step === 8 && <Question title="What budget range are you planning for?" description="This helps me recommend a realistic scope and approach." content={<div><ChoiceGrid options={budgetOptions} selected={data.budget} onSelect={(value) => update("budget", value)} />{data.budget === "under-1000" && <div className="bg-muted mt-5 rounded-xl p-4"><p className="font-medium">The scope may need to start small at this budget.</p><p className="text-muted-foreground mt-1 text-sm leading-6">Would you prefer to reduce the first phase or revisit the budget?</p><div className="mt-3 flex flex-wrap gap-2"><Button type="button" size="sm" variant={data.budgetPlan === "smaller-scope" ? "default" : "outline"} onClick={() => update("budgetPlan", "smaller-scope")}>Start with a smaller scope</Button><Button type="button" size="sm" variant={data.budgetPlan === "adjust-budget" ? "default" : "outline"} onClick={() => update("budgetPlan", "adjust-budget")}>I can revisit the budget</Button></div></div>}</div>} />}
        {step === 9 && <Question title="Tell me more about the project." description="What are you building, what feels stuck, and what would success look like?" content={<textarea value={data.brief} onChange={(event) => update("brief", event.target.value)} placeholder="Share any useful context, links, constraints, or ideas..." className="border-border bg-background focus:border-primary focus:ring-primary/20 min-h-52 w-full resize-y rounded-xl border p-4 outline-none focus:ring-2" />} />}
        {step === 10 && <Question title="Where should I send the follow-up?" description="Just the essentials. I won&apos;t add you to a mailing list." content={<div className="grid gap-5"><Field label="Name" value={data.name} onChange={(value) => update("name", value)} placeholder="Your name" /><Field label="Email" type="email" value={data.email} onChange={(value) => update("email", value)} placeholder="you@company.com" /><Field label="Company or project name" value={data.company} onChange={(value) => update("company", value)} placeholder="Optional" /><Field label="Reference link" value={data.reference} onChange={(value) => update("reference", value)} placeholder="Optional website, Figma, or other link" /></div>} />}
        {step === 11 && <Review data={data} />}
      </div>

      <div className="border-border mt-8 flex flex-col-reverse justify-between gap-3 border-t pt-6 sm:flex-row">
        {step === 0 ? <Button variant="ghost" render={<Link href="/" />} nativeButton={false}><ArrowLeft className="size-4" /> Exit</Button> : <Button variant="ghost" type="button" onClick={previous}><ArrowLeft className="size-4" /> Back</Button>}
        {step === totalSteps - 1 ? <Button type="button" onClick={submit}>Prepare project email <Send className="size-4" /></Button> : <Button type="button" onClick={next} disabled={!canContinue}>Continue <ArrowRight className="size-4" /></Button>}
      </div>
    </div>
  )
}

function Question({ title, description, content }: { title: string; description: string; content: ReactNode }) {
  return <div><h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2><p className="text-muted-foreground mt-3 max-w-xl leading-7">{description}</p><div className="mt-8">{content}</div></div>
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (value: string) => void; placeholder: string; type?: string }) {
  return <label className="grid gap-2 text-sm font-medium">{label}<input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="border-border bg-background focus:border-primary focus:ring-primary/20 h-11 rounded-lg border px-3 font-normal outline-none focus:ring-2" /></label>
}

function Review({ data }: { data: IntakeData }) {
  const rows = [
    ["Project", data.projectType],
    ["Goals", data.objectives.join(", ")],
    ["Features", data.features.join(", ")],
    ["Audience", data.audience],
    ["Starting point", data.startingPoint.join(", ")],
    ["Management", data.management],
    ["Timeline", data.timeline],
    ["Budget", data.budget],
    ["Contact", data.name + " · " + data.email],
  ]
  return <div><h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Review your project brief.</h2><p className="text-muted-foreground mt-3 max-w-xl leading-7">Everything look right? Your answers will be placed into an email for a quick review before you send it.</p><dl className="border-border mt-8 divide-y border-y">{rows.map(([label, value]) => <div key={label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"><dt className="text-muted-foreground text-sm">{label}</dt><dd className="text-sm leading-6">{value}</dd></div>)}</dl></div>
}
