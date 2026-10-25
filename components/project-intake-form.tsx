"use client"

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, ChevronDown, Send } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import * as C from "@/questionnaire-sample/config"
import { Button } from "@/components/ui/button"

type StepId =
  | "start" | "type" | "goal" | "features" | "relation" | "management" | "customization"
  | "status" | "design" | "team" | "brief" | "references" | "timeline" | "budget"
  | "compat" | "mvp" | "contact" | "review" | "success"

type Answers = {
  projectType?: C.ProjectType
  goal?: string
  goalOther: string
  features: string[]
  featuresOther: string
  notSureDescription: string
  webMobileRelation?: string
  management?: string
  customization?: string
  status: string[]
  statusOther: string
  currentUrl: string
  design?: string
  team?: string
  teamOther: string
  brief: string
  references: { url: string; note: string }[]
  timeline?: string
  deadlineReason: string
  targetDate: string
  budget?: string
  mvpUsed: boolean
  mvpEssential: string[]
  mvpFuture: string[]
  scopeAdjusted: boolean
  contact: {
    name: string
    email: string
    phone: string
    company: string
    role: string
    country: string
    timezone: string
    method?: string
    methodDetail: string
    consent: boolean
  }
}

const emptyAnswers = (): Answers => ({
  goalOther: "",
  features: [],
  featuresOther: "",
  notSureDescription: "",
  status: [],
  statusOther: "",
  currentUrl: "",
  teamOther: "",
  brief: "",
  references: [],
  deadlineReason: "",
  targetDate: "",
  mvpUsed: false,
  mvpEssential: [],
  mvpFuture: [],
  scopeAdjusted: false,
  contact: { name: "", email: "", phone: "", company: "", role: "", country: "", timezone: "", methodDetail: "", consent: false },
})

const STORAGE_KEY = "project-questionnaire-v2"
const INQUIRY_EMAIL = "hello@sugengpriyanto.my.id"
const timeZoneOptions = ["GMT-08:00 Pacific Time", "GMT-05:00 Eastern Time", "GMT+00:00 UTC", "GMT+01:00 Central European Time", "GMT+05:30 India Standard Time", "GMT+07:00 Indochina Time", "GMT+08:00 Singapore Time", "GMT+09:00 Japan Standard Time", "GMT+10:00 Australian Eastern Time"]

function flowFor(answers: Answers): StepId[] {
  const flow: StepId[] = ["type", "goal", "features"]
  if (answers.projectType === "saasMobile") flow.push("relation")
  flow.push("management", "customization", "status", "design", "team", "brief", "references", "timeline", "budget", "contact", "review")
  return flow
}

function ChoiceGrid({ options, value, values, multiple = false, onChange }: { options: C.Option[]; value?: string; values?: string[]; multiple?: boolean; onChange: (value: string) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const selected = multiple ? values?.includes(option.value) : value === option.value
        const className = selected
          ? "border-primary bg-primary/5 ring-primary/20 rounded-xl border p-4 text-left ring-2 transition-colors"
          : "border-border hover:border-primary/50 hover:bg-muted/50 rounded-xl border p-4 text-left transition-colors"
        return (
          <button key={option.value} type="button" onClick={() => onChange(option.value)} className={className}>
            <span className="flex items-start justify-between gap-3">
              <span className="font-medium">{option.label}</span>
              {selected && <Check className="text-primary mt-0.5 size-4 shrink-0" />}
            </span>
            {option.description && <span className="text-muted-foreground mt-2 block text-sm leading-6">{option.description}</span>}
          </button>
        )
      })}
    </div>
  )
}

function RadioCards({ options, value, onChange }: { options: { value: string; label: string }[]; value?: string; onChange: (value: string) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2" role="radiogroup">
      {options.map((option) => (
        <label key={option.value} className="group relative cursor-pointer">
          <input type="radio" name="preferred-communication" value={option.value} checked={value === option.value} onChange={() => onChange(option.value)} className="peer sr-only" />
          <span className="border-border bg-background peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-primary/20 group-hover:border-primary/50 flex items-center justify-between rounded-xl border p-4 transition-colors peer-checked:ring-2">
            <span className="font-medium">{option.label}</span>
            <span className={`border-muted-foreground/40 flex size-5 items-center justify-center rounded-full border-2 transition-colors ${value === option.value ? "border-primary bg-primary" : ""}`}><span className="bg-primary-foreground size-2 rounded-full" /></span>
          </span>
        </label>
      ))}
    </div>
  )
}

function StyledSelect({ label, value, options, onChange, placeholder }: { label: string; value: string; options: string[]; onChange: (value: string) => void; placeholder: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative grid gap-2 text-sm font-medium">
      <span>{label}</span>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((current) => !current)} className="border-border bg-background focus:border-primary focus:ring-primary/20 flex h-11 items-center justify-between rounded-lg border px-3 text-left font-normal outline-none focus:ring-2">
        <span className={value ? "text-foreground" : "text-muted-foreground"}>{value || placeholder}</span>
        <ChevronDown className={`text-muted-foreground size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div role="listbox" aria-label={label} className="border-border bg-popover absolute top-full z-20 mt-2 max-h-64 w-full overflow-auto rounded-xl border p-1 shadow-lg">{options.map((option) => <button key={option} type="button" role="option" aria-selected={value === option} onClick={() => { onChange(option); setOpen(false) }} className={`hover:bg-muted flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm font-normal ${value === option ? "bg-primary/10 text-primary" : ""}`}>{option}</button>)}</div>}
    </div>
  )
}

function TextField({ label, value, onChange, placeholder, type = "text", required = false }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}{required && " *"}
      <input type={type} value={value} required={required} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="border-border bg-background focus:border-primary focus:ring-primary/20 h-11 rounded-lg border px-3 font-normal outline-none focus:ring-2" />
    </label>
  )
}

function TextArea({ label, value, onChange, placeholder, rows = 6 }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; rows?: number }) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      <textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} rows={rows} className="border-border bg-background focus:border-primary focus:ring-primary/20 w-full resize-y rounded-xl border p-4 font-normal outline-none focus:ring-2" />
    </label>
  )
}

function Question({ title, help, children }: { title: string; help?: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {help && <p className="text-muted-foreground mt-3 max-w-2xl leading-7">{help}</p>}
      <div className="mt-8">{children}</div>
    </div>
  )
}

export default function ProjectIntakeForm() {
  const [answers, setAnswers] = useState<Answers>(emptyAnswers)
  const [step, setStep] = useState<StepId>("start")
  const [hydrated, setHydrated] = useState(false)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let restoreTimer: number | undefined
    const hydrationTimer = window.setTimeout(() => setHydrated(true), 0)
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as { answers?: Partial<Answers>; step?: StepId }
        restoreTimer = window.setTimeout(() => {
          setAnswers({ ...emptyAnswers(), ...parsed.answers, contact: { ...emptyAnswers().contact, ...parsed.answers?.contact } })
          if (parsed.step && parsed.step !== "success") setStep(parsed.step)
        }, 0)
      }
    } catch {
      // Ignore invalid saved progress.
    }
    return () => {
      if (restoreTimer) window.clearTimeout(restoreTimer)
      window.clearTimeout(hydrationTimer)
    }
  }, [])

  useEffect(() => {
    if (hydrated && step !== "success") localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, step }))
  }, [answers, hydrated, step])

  useEffect(() => {
    containerRef.current?.querySelector<HTMLElement>("[data-step-heading]")?.focus({ preventScroll: true })
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [step])

  const flow = useMemo(() => flowFor(answers), [answers])
  const progressIndex = flow.indexOf(step)
  const progress = step === "start" ? 0 : step === "success" ? 100 : Math.max(5, Math.round(((progressIndex + 1) / flow.length) * 100))
  const featureOptions = answers.projectType ? C.features[answers.projectType] : []
  const budgetOptions = answers.projectType ? C.budgetRanges[answers.projectType] : []

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) => setAnswers((current) => ({ ...current, [key]: value }))
  const updateContact = (key: keyof Answers["contact"], value: string | boolean) => setAnswers((current) => ({ ...current, contact: { ...current.contact, [key]: value } }))
  const toggle = (key: "features" | "status", value: string) => setAnswers((current) => ({ ...current, [key]: current[key].includes(value) ? current[key].filter((item) => item !== value) : [...current[key], value] }))

  const go = (nextStep: StepId) => {
    setError("")
    setStep(nextStep)
  }

  const validate = () => {
    if (step === "type" && !answers.projectType) return "Choose the option closest to your project."
    if (step === "goal" && !answers.goal) return "Choose the main goal."
    if (step === "goal" && answers.goal === C.OTHER && !answers.goalOther.trim()) return "Tell me a little more about the goal."
    if (step === "features" && answers.projectType !== "notSure" && answers.features.length === 0) return "Choose at least one feature, or select that you are not sure yet."
    if (step === "features" && answers.projectType === "notSure" && !answers.notSureDescription.trim() && answers.features.length === 0) return "A sentence or two is enough to describe the idea."
    if (step === "brief" && answers.brief.trim().length < 10) return "A few sentences about the project will help a lot."
    if (step === "contact") {
      if (!answers.contact.name.trim()) return "Please enter your name."
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.contact.email.trim())) return "Please enter a valid email."
      if (answers.contact.method === "phone" && !answers.contact.phone.trim()) return "Please enter your phone number when choosing Phone."
      if (!answers.contact.consent) return "Please confirm that I can use these details to reply."
    }
    return ""
  }

  const budgetStatus = () => {
    if (!answers.projectType || !answers.budget || answers.budget === C.BUDGET_UNSURE || answers.budget === C.BUDGET_FLEXIBLE) return "unknown"
    const selected = budgetOptions.find((option) => option.value === answers.budget)
    if (!selected?.max) return "unknown"
    const base: Record<C.ProjectType, number> = { website: 150, ecommerce: 250, mobile: 500, saas: 600, saasMobile: 1200, notSure: 400 }
    const estimate = base[answers.projectType] + answers.features.length * 45
    if (selected.max >= estimate) return "reasonable"
    if (selected.max >= estimate * 0.6) return "potentially_low"
    return "significantly_below"
  }

  const next = () => {
    const validation = validate()
    setError(validation)
    if (validation) {
      return
    }
    if (step === "start") return go("type")
    if (step === "budget") return go(budgetStatus() === "significantly_below" ? "compat" : "contact")
    const index = flow.indexOf(step)
    go(flow[index + 1] ?? "review")
  }

  const back = () => {
    if (step === "compat") return go("budget")
    if (step === "mvp") return go("compat")
    const index = flow.indexOf(step)
    go(index <= 0 ? "start" : flow[index - 1] ?? "start")
  }

  const submit = () => {
    const type = C.projectTypes.find((item) => item.value === answers.projectType)?.label ?? "Not specified"
    const goal = answers.goal === C.OTHER ? answers.goalOther : C.goals.find((item) => item.value === answers.goal)?.label
    const features = answers.features.map((value) => featureOptions.find((item) => item.value === value)?.label ?? value).join(", ")
    const body = [
      "Project type: " + type,
      "Main goal: " + (goal ?? "Not specified"),
      "Features: " + (features || answers.notSureDescription),
      "Management: " + (C.management.find((item) => item.value === answers.management)?.label ?? "Not specified"),
      "Customization: " + (C.customization.find((item) => item.value === answers.customization)?.label ?? "Not specified"),
      "Starting with: " + answers.status.map((value) => C.startingWith.find((item) => item.value === value)?.label ?? value).join(", "),
      "Design status: " + (C.designStatus.find((item) => item.value === answers.design)?.label ?? "Not specified"),
      "Team: " + (C.team.find((item) => item.value === answers.team)?.label ?? "Not specified"),
      "Brief: " + answers.brief,
      "References: " + answers.references.map((reference) => reference.url + (reference.note ? " — " + reference.note : "")).join(", "),
      "Timeline: " + (C.timelines.find((item) => item.value === answers.timeline)?.label ?? "Not specified"),
      "Budget: " + (budgetOptions.find((item) => item.value === answers.budget)?.label ?? "Not specified"),
      "Name: " + answers.contact.name,
      "Email: " + answers.contact.email,
      "Phone: " + (answers.contact.phone || "Not provided"),
      "Company: " + (answers.contact.company || "Not provided"),
      "Preferred contact: " + (C.contactMethods.find((method) => method.value === answers.contact.method)?.label ?? "Email"),
    ].join("\\n\\n")
    window.location.href = "mailto:" + INQUIRY_EMAIL + "?subject=" + encodeURIComponent("New project inquiry from " + answers.contact.name) + "&body=" + encodeURIComponent(body)
    localStorage.removeItem(STORAGE_KEY)
    setSubmitted(true)
    go("success")
  }

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY)
    setAnswers(emptyAnswers())
    setError("")
    go("start")
  }

  if (submitted || step === "success") {
    return (
      <div className="border-border rounded-2xl border p-8 text-center sm:p-12">
        <div className="bg-primary/10 text-primary mx-auto flex size-12 items-center justify-center rounded-full"><Check className="size-6" /></div>
        <h2 className="font-heading mt-6 text-3xl font-semibold">Your project brief is in.</h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-md leading-7">Your email app should open with the answers attached. Send it when you&apos;re ready, and I&apos;ll review the project before getting back to you.</p>
        <Button className="mt-7 h-11 px-4 sm:h-8" render={<Link href="/" />} nativeButton={false}>Back to homepage</Button>
      </div>
    )
  }

  const currentFeatureValues = answers.projectType === "notSure" ? answers.features : answers.features

  return (
    <div ref={containerRef} className="border-border scroll-mt-24 rounded-2xl border p-5 sm:p-8 lg:p-10">
      {step !== "start" && (
        <div className="mb-10">
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="text-muted-foreground">Project brief · {progress}%</span>
            <span className="font-mono">{String(progress).padStart(3, "0")}</span>
          </div>
          <div className="bg-muted mt-4 h-1 overflow-hidden rounded-full"><div className="bg-primary h-full transition-all" style={{ width: progress + "%" }} /></div>
        </div>
      )}

      <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={step}
        className="min-h-[34rem]"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -16 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        {step === "start" && <Question title="Tell me about your project." help="Answer a few practical questions about what you&apos;re building, your goals, timeline, and budget. This gives us a useful starting point before we speak."><div className="flex flex-wrap items-center gap-4"><Button className="h-11 px-4 sm:h-8" type="button" onClick={next}>{answers.projectType ? "Continue where you left off" : "Start questionnaire"} <ArrowRight className="size-4" /></Button><span className="text-muted-foreground text-sm">Takes about 3–7 minutes.</span></div>{answers.projectType && <button type="button" onClick={reset} className="text-muted-foreground mt-6 text-sm underline underline-offset-4">Start over</button>}</Question>}
        {step === "type" && <Question title="What are you looking to build?" help="Choose the closest fit. You can explain the details later."><ChoiceGrid options={C.projectTypes} value={answers.projectType} onChange={(value) => setAnswers((current) => ({ ...current, projectType: value as C.ProjectType, features: current.projectType === value ? current.features : [], budget: current.projectType === value ? current.budget : undefined }))} /></Question>}
        {step === "goal" && <Question title="What is the main goal of this project?" help="Choose the outcome that matters most right now."><ChoiceGrid options={C.goals} value={answers.goal} onChange={(value) => update("goal", value)} />{answers.goal === C.OTHER && <div className="mt-5"><TextField label="Tell me a little more" value={answers.goalOther} onChange={(value) => update("goalOther", value)} /></div>}</Question>}
        {step === "features" && <Question title={answers.projectType ? C.featureQuestion[answers.projectType] : "What should the product be able to do?"} help={answers.projectType === "notSure" ? "Describe the idea in your own words, then optionally choose anything that sounds relevant." : "Select everything that applies. If you&apos;re unsure, that&apos;s completely fine."}>{answers.projectType === "notSure" && <TextArea label="In your own words" value={answers.notSureDescription} onChange={(value) => update("notSureDescription", value)} placeholder="Example: Customers should be able to create an account, choose a subscription, upload documents, and track their progress." rows={5} />}<div className={answers.projectType === "notSure" ? "mt-8" : ""}><ChoiceGrid options={featureOptions} values={currentFeatureValues} multiple onChange={(value) => toggle("features", value)} /></div>{answers.features.includes(C.OTHER) && <div className="mt-5"><TextField label="Describe the other feature or requirement" value={answers.featuresOther} onChange={(value) => update("featuresOther", value)} /></div>}</Question>}
        {step === "relation" && <Question title="How closely should the web and mobile experiences match?"><ChoiceGrid options={C.webMobileRelation} value={answers.webMobileRelation} onChange={(value) => update("webMobileRelation", value)} /></Question>}
        {step === "management" && <Question title="How would you like to manage the project after launch?" help="This helps me recommend the right setup and level of support."><ChoiceGrid options={C.management} value={answers.management} onChange={(value) => update("management", value)} /></Question>}
        {step === "customization" && <Question title="How custom does the experience need to be?" help="There is no wrong answer. This helps me understand the expected level of design and functionality."><ChoiceGrid options={C.customization} value={answers.customization} onChange={(value) => update("customization", value)} /></Question>}
        {step === "status" && <Question title="What are you starting with?" help="Select everything you already have."><ChoiceGrid options={C.startingWith} values={answers.status} multiple onChange={(value) => toggle("status", value)} />{answers.status.includes(C.OTHER) && <div className="mt-5"><TextField label="What else do you have?" value={answers.statusOther} onChange={(value) => update("statusOther", value)} /></div>}{answers.status.some((value) => C.existingProductValues.includes(value)) && <div className="mt-5"><TextField label="Current URL (optional)" value={answers.currentUrl} onChange={(value) => update("currentUrl", value)} placeholder="https://" /></div>}</Question>}
        {step === "design" && <Question title="What is the current design status?"><ChoiceGrid options={C.designStatus} value={answers.design} onChange={(value) => update("design", value)} /></Question>}
        {step === "team" && <Question title="Who is currently involved in the project?" help="Knowing the decision-making group helps me plan communication."><ChoiceGrid options={C.team} value={answers.team} onChange={(value) => update("team", value)} />{answers.team === C.OTHER && <div className="mt-5"><TextField label="Who else is involved?" value={answers.teamOther} onChange={(value) => update("teamOther", value)} /></div>}</Question>}
        {step === "brief" && <Question title="Tell me about the project in your own words." help="What are you building, who is it for, and what should someone be able to accomplish with it?"><TextArea label="Project description" value={answers.brief} onChange={(value) => update("brief", value)} placeholder="Share the context, problem, constraints, and what success would look like." rows={8} /><div className="text-muted-foreground mt-5 text-sm"><p className="mb-2">Some prompts if helpful:</p><ul className="grid gap-1 sm:grid-cols-2">{["Who will use it?", "What problem does it solve?", "What is the most important workflow?", "What would make the project successful?"].map((prompt) => <li key={prompt}>— {prompt}</li>)}</ul></div></Question>}
        {step === "references" && <Question title="Any websites, apps, or products you&apos;d like me to reference?" help="Optional — skip this step if nothing comes to mind."><div className="grid gap-5"><TextField label="Link" value={answers.references[0]?.url ?? ""} onChange={(value) => update("references", [{ url: value, note: answers.references[0]?.note ?? "" }])} placeholder="https://" /><TextField label="What should I notice? (optional)" value={answers.references[0]?.note ?? ""} onChange={(value) => update("references", [{ url: answers.references[0]?.url ?? "", note: value }])} placeholder="For example: I like the navigation or visual style." /></div></Question>}
        {step === "timeline" && <Question title="When would you ideally like to launch?" help="A rough timeframe is enough at this stage."><ChoiceGrid options={C.timelines} value={answers.timeline} onChange={(value) => update("timeline", value)} />{answers.timeline === "asap" && <div className="mt-5"><TextArea label="Is there a specific deadline or event?" value={answers.deadlineReason} onChange={(value) => update("deadlineReason", value)} rows={3} /></div>}</Question>}
        {step === "budget" && <Question title="What investment range are you considering?" help="A rough range is fine. It helps me suggest a scope and approach that fit."><ChoiceGrid options={budgetOptions} value={answers.budget} onChange={(value) => update("budget", value)} /></Question>}
        {step === "compat" && <Question title="This scope may be difficult to deliver within that budget." help="That does not necessarily mean the project cannot move forward. We can reduce the first phase, start with an MVP, or adjust the budget."><div className="grid gap-3"><button type="button" onClick={() => go("budget")} className="border-border hover:border-primary/50 rounded-xl border p-4 text-left"><span className="font-medium">Adjust the budget</span><span className="text-muted-foreground mt-1 block text-sm">I can revisit the investment range.</span></button><button type="button" onClick={() => { update("scopeAdjusted", true); go("features") }} className="border-border hover:border-primary/50 rounded-xl border p-4 text-left"><span className="font-medium">Reduce the scope</span><span className="text-muted-foreground mt-1 block text-sm">I&apos;ll remove lower-priority features for now.</span></button><button type="button" onClick={() => go("mvp")} className="border-border hover:border-primary/50 rounded-xl border p-4 text-left"><span className="font-medium">Start with an MVP</span><span className="text-muted-foreground mt-1 block text-sm">I&apos;ll identify what is essential for the first version.</span></button><button type="button" onClick={() => go("contact")} className="text-muted-foreground p-4 text-left text-sm underline underline-offset-4">Send the brief as it is</button></div></Question>}
        {step === "mvp" && <Question title="Which features are essential for the first version?" help="Everything else can follow in a later phase."><div className="divide-border divide-y rounded-xl border">{answers.features.filter((value) => value !== C.OTHER && value !== C.NOT_SURE).map((value) => { const label = featureOptions.find((item) => item.value === value)?.label ?? value; const essential = answers.mvpEssential.includes(value); return <div key={value} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"><span className="font-medium">{label}</span><div className="flex gap-2"><button type="button" onClick={() => setAnswers((current) => ({ ...current, mvpEssential: essential ? current.mvpEssential.filter((item) => item !== value) : [...current.mvpEssential, value], mvpFuture: current.mvpFuture.filter((item) => item !== value) }))} className={essential ? "bg-primary text-primary-foreground rounded-full px-3 py-1.5 text-sm" : "border-border hover:border-primary rounded-full border px-3 py-1.5 text-sm"}>{essential ? "Essential" : "Can wait"}</button></div></div> })}</div></Question>}
        {step === "contact" && <Question title="How can I reach you?" help="Just the essentials. I won&apos;t add you to a mailing list."><div className="grid gap-5 sm:grid-cols-2"><TextField label="Full name" value={answers.contact.name} onChange={(value) => updateContact("name", value)} required /><TextField label="Email" type="email" value={answers.contact.email} onChange={(value) => updateContact("email", value)} required /><TextField label="Phone number" type="tel" value={answers.contact.phone} onChange={(value) => updateContact("phone", value)} placeholder="For example: +1 555 123 4567" /><TextField label="Company or project name" value={answers.contact.company} onChange={(value) => updateContact("company", value)} /><TextField label="Role or job title" value={answers.contact.role} onChange={(value) => updateContact("role", value)} /><TextField label="Country" value={answers.contact.country} onChange={(value) => updateContact("country", value)} /><StyledSelect label="Time zone" value={answers.contact.timezone} options={timeZoneOptions} onChange={(value) => updateContact("timezone", value)} placeholder="Choose a time zone" /></div><div className="mt-8"><p className="text-muted-foreground mb-3 text-sm">Preferred communication method</p><RadioCards options={C.contactMethods.map((method) => ({ value: method.value, label: method.label }))} value={answers.contact.method} onChange={(value) => updateContact("method", value)} /></div><label className="text-muted-foreground mt-6 flex items-start gap-3 text-sm"><input type="checkbox" checked={answers.contact.consent} onChange={(event) => updateContact("consent", event.target.checked)} className="accent-primary mt-1 size-4" /><span>I agree that Sugeng can use these details to reply to my project inquiry.</span></label></Question>}
        {step === "review" && <Review answers={answers} featureOptions={featureOptions} budgetOptions={budgetOptions} />}
      </motion.div>
      </AnimatePresence>

      {error && <p role="alert" className="text-destructive mt-5 text-sm">{error}</p>}
      {step !== "start" && <div className="border-border mt-8 flex flex-col-reverse justify-between gap-3 border-t pt-6 sm:flex-row">
        <Button className="h-11 px-4 sm:h-8" variant="ghost" type="button" onClick={back}><ArrowLeft className="size-4" /> Back</Button>
        {step === "review" ? <Button className="h-11 px-4 sm:h-8" type="button" onClick={submit}>Prepare project email <Send className="size-4" /></Button> : <Button className="h-11 px-4 sm:h-8" type="button" onClick={next}>Continue <ArrowRight className="size-4" /></Button>}
      </div>}
    </div>
  )
}

function Review({ answers, featureOptions, budgetOptions }: { answers: Answers; featureOptions: C.Option[]; budgetOptions: C.BudgetRange[] }) {
  const type = C.projectTypes.find((item) => item.value === answers.projectType)?.label ?? "Not specified"
  const rows = [
    ["Project", type],
    ["Goal", answers.goal === C.OTHER ? answers.goalOther : C.goals.find((item) => item.value === answers.goal)?.label ?? "Not specified"],
    ["Features", answers.features.map((value) => featureOptions.find((item) => item.value === value)?.label ?? value).join(", ") || answers.notSureDescription || "Not specified"],
    ["Starting with", answers.status.map((value) => C.startingWith.find((item) => item.value === value)?.label ?? value).join(", ") || "Not specified"],
    ["Timeline", C.timelines.find((item) => item.value === answers.timeline)?.label ?? "Not specified"],
    ["Budget", budgetOptions.find((item) => item.value === answers.budget)?.label ?? "Not specified"],
    ["Contact", answers.contact.name + " · " + answers.contact.email + (answers.contact.phone ? " · " + answers.contact.phone : "")],
  ]
  return <Question title="Review your project brief." help="Everything look right? Your answers will be placed into an email for a final review before you send it."><dl className="border-border divide-y border-y">{rows.map(([label, value]) => <div key={label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"><dt className="text-muted-foreground text-sm">{label}</dt><dd className="text-sm leading-6">{value}</dd></div>)}</dl><div className="bg-muted mt-6 rounded-xl p-4 text-sm leading-6"><span className="font-medium">Project brief: </span>{answers.brief}</div></Question>
}
