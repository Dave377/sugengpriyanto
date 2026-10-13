import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import * as C from "./config";
import { budgetCompatibility, emptyAnswers, type Answers } from "./engine";
import { CheckCards, RadioCards, StepHeader, TextArea, TextField } from "./fields";
import { submitQuestionnaire } from "@/lib/questionnaire.functions";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "project-questionnaire-v1";

type StepId =
  | "start" | "type" | "goal" | "features" | "relation" | "management" | "customization" | "status" | "design" | "team"
  | "brief" | "references" | "timeline" | "budget" | "compat" | "mvp" | "contact" | "review" | "success";

interface Saved { answers: Answers; step: StepId }

function flowFor(a: Answers): StepId[] {
  const s: StepId[] = ["type", "goal", "features"];
  if (a.projectType === "saasMobile") s.push("relation");
  s.push("management", "customization", "status", "design", "team", "brief", "references", "timeline", "budget", "contact", "review");
  return s;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function Questionnaire() {
  const [a, setA] = useState<Answers>(emptyAnswers);
  const [step, setStep] = useState<StepId>("start");
  const [hydrated, setHydrated] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [returnToReview, setReturnToReview] = useState(false);
  const submit = useServerFn(submitQuestionnaire);
  const containerRef = useRef<HTMLDivElement>(null);

  // Restore autosaved progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Saved;
        setA({ ...emptyAnswers(), ...saved.answers, contact: { ...emptyAnswers().contact, ...saved.answers.contact } });
        if (saved.step && saved.step !== "success") setStep(saved.step);
      }
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || step === "success") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: a, step } satisfies Saved));
  }, [a, step, hydrated]);

  // Move focus to the new step heading for keyboard / screen reader users
  useEffect(() => {
    containerRef.current?.querySelector<HTMLElement>("[data-step-heading]")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const up = <K extends keyof Answers>(k: K, v: Answers[K]) => setA((p) => ({ ...p, [k]: v }));
  const upC = (k: keyof Answers["contact"], v: string | boolean) => setA((p) => ({ ...p, contact: { ...p.contact, [k]: v } }));

  const flow = useMemo(() => flowFor(a), [a]);
  const idx = flow.indexOf(step);
  const progress = step === "start" ? 0 : step === "success" ? 100 : Math.max(4, Math.round(((idx < 0 ? flow.indexOf("budget") : idx) + 1) / flow.length * 100));

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (step === "type" && !a.projectType) e["form"] = "Choose the option closest to your project.";
    if (step === "goal" && !a.goal) e["form"] = "Choose the main goal.";
    if (step === "goal" && a.goal === C.OTHER && !a.goalOther?.trim()) e["goalOther"] = "Please describe the goal.";
    if (step === "features" && a.features.includes(C.OTHER) && !a.featuresOther?.trim()) e["featuresOther"] = "Please describe the other feature.";
    if (step === "features" && a.projectType === "notSure" && !a.notSureDescription?.trim() && a.features.length === 0) e["form"] = "A sentence or two is enough.";
    if (step === "brief" && (a.brief ?? "").trim().length < 10) e["brief"] = "A few sentences help a lot — a short description is fine.";
    if (step === "references") a.references.forEach((r, i) => { if (r.url && !/^https?:\/\/|^[\w-]+\.[\w.]+/.test(r.url)) e[`ref${i}`] = "This doesn't look like a link."; });
    if (step === "contact") {
      if (!a.contact.name.trim()) e["name"] = "Please enter your name.";
      if (!isEmail(a.contact.email.trim())) e["email"] = "Please enter a valid email.";
      if (!a.contact.consent) e["consent"] = "Please confirm so I can reply to you.";
      const m = C.contactMethods.find((x) => x.value === a.contact.method);
      if (m && "field" in m && m.field && !a.contact.methodDetail?.trim()) e["methodDetail"] = `Please add your ${m.field.toLowerCase()}.`;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function go(to: StepId) { setErrors({}); setStep(to); }

  function next() {
    if (!validate()) return;
    if (step === "start") return go("type");
    if (returnToReview && step !== "budget" && step !== "type") { setReturnToReview(false); return go("review"); }
    if (step === "budget") {
      const c = budgetCompatibility(a);
      if (c === "significantly_below") return go("compat");
      return go(returnToReview ? (setReturnToReview(false), "review") : "contact");
    }
    const i = flow.indexOf(step);
    go(flow[i + 1] ?? "review");
  }

  function back() {
    if (step === "compat") return go("budget");
    if (step === "mvp") return go("compat");
    const i = flow.indexOf(step);
    go(i <= 0 ? "start" : flow[i - 1] ?? "start");
  }

  function editFrom(s: StepId) { setReturnToReview(true); go(s); }

  async function send() {
    setSubmitting(true); setSubmitError("");
    try {
      const res = await submit({ data: a });
      if (!res.ok) throw new Error();
      localStorage.removeItem(STORAGE_KEY);
      go("success");
    } catch {
      setSubmitError("Something went wrong sending your brief. Your answers are saved — please try again in a moment.");
    } finally { setSubmitting(false); }
  }

  const type = a.projectType;
  const featOpts = type ? C.features[type] : [];

  // ---------- Step renderers ----------
  let body: React.ReactNode = null;
  let primaryLabel = "Continue";
  let showNav = true;

  switch (step) {
    case "start":
      showNav = false;
      body = (
        <div>
          <StepHeader title="Tell me about your project" help="Answer a few questions about what you're building, your goals, timeline, and budget. This helps me understand your project before we speak, so we can spend less time on basic discovery and more time discussing the right approach." />
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" onClick={next} className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent">
              {a.projectType ? "Continue where you left off" : "Start questionnaire"} →
            </button>
            <span className="text-sm text-muted-foreground">Takes about 3–7 minutes.</span>
          </div>
          {a.projectType && (
            <button type="button" className="mt-6 text-sm text-muted-foreground underline underline-offset-4" onClick={() => { localStorage.removeItem(STORAGE_KEY); setA(emptyAnswers()); }}>
              Start over
            </button>
          )}
        </div>
      );
      break;
    case "type":
      body = <><StepHeader title="What are you looking to build?" />
        <RadioCards name="type" columns={2} options={C.projectTypes} value={type} onChange={(v) => setA((p) => ({ ...p, projectType: v as C.ProjectType, features: p.projectType === v ? p.features : [], budget: p.projectType === v ? p.budget : undefined, mvpEssential: [], mvpFuture: [], mvpUsed: false }))} /></>;
      break;
    case "goal":
      body = <><StepHeader title="What is the main goal of this project?" />
        <RadioCards name="goal" columns={2} options={C.goals} value={a.goal} onChange={(v) => up("goal", v)} />
        {a.goal === C.OTHER && <div className="mt-5"><TextField id="goalOther" label="Tell me a bit more" value={a.goalOther} onChange={(v) => up("goalOther", v)} error={errors["goalOther"]} /></div>}</>;
      break;
    case "features":
      body = <>
        {type === "notSure" ? (
          <>
            <StepHeader title="What should users be able to accomplish with the product?" />
            <TextArea id="nsd" label="In your own words" rows={5} value={a.notSureDescription} onChange={(v) => up("notSureDescription", v)}
              placeholder="Example: Customers should be able to create an account, choose a subscription, upload documents, and track their progress from a dashboard." />
            <p className="form-label mt-8">Optionally, pick anything that applies</p>
          </>
        ) : (
          <StepHeader title={type ? C.featureQuestion[type] : ""} help="Select everything that applies. If you're unsure, that's completely fine." />
        )}
        {a.scopeAdjusted && <p className="mb-5 rounded-md border border-accent/40 bg-secondary p-4 text-sm">You can deselect lower-priority features here — they can always come later.</p>}
        <CheckCards options={featOpts} values={a.features} onChange={(v) => up("features", v)} />
        {a.features.includes(C.OTHER) && <div className="mt-5"><TextField id="featuresOther" label="Describe the other feature(s)" value={a.featuresOther} onChange={(v) => up("featuresOther", v)} error={errors["featuresOther"]} /></div>}
      </>;
      break;
    case "relation":
      body = <><StepHeader title="How closely should the web and mobile experiences match?" />
        <RadioCards name="rel" options={C.webMobileRelation} value={a.webMobileRelation} onChange={(v) => up("webMobileRelation", v)} /></>;
      break;
    case "management":
      body = <><StepHeader title="How would you like to manage the project after launch?" />
        <RadioCards name="mgmt" options={C.management} value={a.management} onChange={(v) => up("management", v)} /></>;
      break;
    case "customization":
      body = <><StepHeader title="How custom does the experience need to be?" help="There is no wrong answer. This simply helps me understand the expected level of customization." />
        <RadioCards name="cust" options={C.customization} value={a.customization} onChange={(v) => up("customization", v)} /></>;
      break;
    case "status":
      body = <><StepHeader title="What are you starting with?" help="Select all that apply." />
        <CheckCards options={C.startingWith} values={a.status} onChange={(v) => up("status", v)} />
        {a.status.includes(C.OTHER) && <div className="mt-5"><TextField id="statusOther" label="What else do you have?" value={a.statusOther} onChange={(v) => up("statusOther", v)} /></div>}
        {a.status.some((s) => C.existingProductValues.includes(s)) && <div className="mt-5"><TextField id="currentUrl" type="url" label="Can you share the current URL? (optional)" placeholder="https://" value={a.currentUrl} onChange={(v) => up("currentUrl", v)} /></div>}</>;
      break;
    case "design":
      body = <><StepHeader title="What is the current design status?" />
        <RadioCards name="design" options={C.designStatus} value={a.design} onChange={(v) => up("design", v)} /></>;
      break;
    case "team":
      body = <><StepHeader title="Who is currently involved in the project?" />
        <RadioCards name="team" columns={2} options={C.team} value={a.team} onChange={(v) => up("team", v)} />
        {a.team === C.OTHER && <div className="mt-5"><TextField id="teamOther" label="Who else is involved?" value={a.teamOther} onChange={(v) => up("teamOther", v)} /></div>}</>;
      break;
    case "brief":
      body = <><StepHeader title="Tell me about the project in your own words." help="What are you building, who is it for, and what should someone be able to accomplish with it?" />
        <TextArea id="brief" label="Project description" rows={8} value={a.brief} onChange={(v) => up("brief", v)} error={errors["brief"]} />
        <div className="mt-5 text-sm text-muted-foreground">
          <p className="mb-2">Some prompts if helpful:</p>
          <ul className="grid gap-1 sm:grid-cols-2">{["Who will use it?", "What problem does it solve?", "What is the most important workflow?", "What would make the project successful?"].map((q) => <li key={q}>— {q}</li>)}</ul>
        </div></>;
      break;
    case "references": {
      const refs = a.references.length ? a.references : [{ url: "", note: "" }];
      const setRef = (i: number, k: "url" | "note", v: string) => up("references", refs.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
      body = <><StepHeader title="Any websites, apps, or products you'd like me to reference?" help="Optional — skip if nothing comes to mind." />
        <div className="space-y-5">
          {refs.map((r, i) => (
            <div key={i} className="grid gap-3 rounded-md border bg-card p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
              <TextField id={`ref-url-${i}`} label="Link" type="url" placeholder="https://" value={r.url} onChange={(v) => setRef(i, "url", v)} error={errors[`ref${i}`]} />
              <TextField id={`ref-note-${i}`} label="Note (optional)" placeholder="e.g. I like the navigation" value={r.note} onChange={(v) => setRef(i, "note", v)} />
              {refs.length > 1 && <button type="button" className="pb-3 text-sm text-muted-foreground hover:text-foreground" onClick={() => up("references", refs.filter((_, j) => j !== i))} aria-label={`Remove link ${i + 1}`}>Remove</button>}
            </div>
          ))}
        </div>
        {refs.length < 10 && <button type="button" className="mt-4 text-sm font-semibold" onClick={() => up("references", [...refs, { url: "", note: "" }])}>+ Add another link</button>}</>;
      if (!a.references.some((r) => r.url)) primaryLabel = "Skip";
      break;
    }
    case "timeline":
      body = <><StepHeader title="When would you ideally like to launch?" />
        <RadioCards name="timeline" columns={2} options={C.timelines} value={a.timeline} onChange={(v) => up("timeline", v)} />
        {a.timeline === "asap" && <div className="mt-5"><TextArea id="deadline" rows={3} label="Is there a specific event or deadline driving this timeline? (optional)" value={a.deadlineReason} onChange={(v) => up("deadlineReason", v)} /></div>}
        {C.timedTimelines.includes(a.timeline ?? "") && <div className="mt-5 max-w-xs"><TextField id="date" type="date" label="Do you have a specific target date? (optional)" value={a.targetDate} onChange={(v) => up("targetDate", v)} /></div>}</>;
      break;
    case "budget":
      body = <><StepHeader title="What investment range are you considering?" help="A rough range is fine. It helps me suggest a scope that fits." />
        <RadioCards name="budget" columns={2} options={type ? C.budgetRanges[type] : []} value={a.budget} onChange={(v) => up("budget", v)} /></>;
      break;
    case "compat": {
      const stillLow = a.scopeAdjusted || a.mvpUsed;
      showNav = false;
      body = stillLow ? (
        <><StepHeader title="This may still be outside the budget range I can realistically support." help="You're still welcome to send your brief — or adjust things first." />
          <div className="grid gap-3">
            <ChoiceButton title="Review my answers" onClick={() => go("contact")} text="Continue and send the brief as it is." />
            <ChoiceButton title="Adjust budget" onClick={() => go("budget")} />
            <ChoiceButton title="Adjust requirements" onClick={() => { up("scopeAdjusted", true); setReturnToReview(false); go("features"); }} />
          </div></>
      ) : (
        <><StepHeader title="Your current scope may be difficult to deliver within this budget." help="Based on the features you've selected, the full project is likely more involved than this budget would typically support. That doesn't necessarily mean the project can't move forward — we may need to adjust the scope or approach." />
          <div className="grid gap-3">
            <ChoiceButton title="Increase my budget" onClick={() => go("budget")} />
            <ChoiceButton title="Reduce the scope" text="Deselect lower-priority features." onClick={() => { up("scopeAdjusted", true); go("features"); }} />
            <ChoiceButton title="Start with an MVP" text="Choose what's essential for the first version." onClick={() => {
              const real = a.features.filter((f) => f !== C.OTHER && f !== C.NOT_SURE);
              setA((p) => ({ ...p, mvpEssential: p.mvpEssential.length ? p.mvpEssential : real, mvpFuture: p.mvpFuture }));
              go("mvp");
            }} />
          </div>
          <button type="button" onClick={back} className="mt-8 text-sm text-muted-foreground hover:text-foreground">← Back</button></>
      );
      break;
    }
    case "mvp": {
      const real = a.features.filter((f) => f !== C.OTHER && f !== C.NOT_SURE);
      const setMark = (f: string, essential: boolean) => setA((p) => ({
        ...p,
        mvpEssential: essential ? [...new Set([...p.mvpEssential, f])] : p.mvpEssential.filter((x) => x !== f),
        mvpFuture: essential ? p.mvpFuture.filter((x) => x !== f) : [...new Set([...p.mvpFuture, f])],
      }));
      primaryLabel = "Continue with this MVP";
      body = <><StepHeader title="Which parts are essential for the first version?" help="Everything else can follow in a later phase." />
        <ul className="divide-y rounded-md border bg-card">
          {real.map((f) => {
            const ess = a.mvpEssential.includes(f);
            return (
              <li key={f} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-medium">{C.labelOf(featOpts, f)}</span>
                <div role="radiogroup" aria-label={C.labelOf(featOpts, f)} className="flex gap-2 text-sm">
                  {[{ v: true, l: "Essential for launch" }, { v: false, l: "Can wait until later" }].map((o) => (
                    <button key={o.l} type="button" role="radio" aria-checked={ess === o.v} onClick={() => setMark(f, o.v)}
                      className={cn("rounded-full border px-3 py-1.5 transition-colors", ess === o.v ? "border-foreground bg-foreground text-background" : "hover:border-foreground")}>{o.l}</button>
                  ))}
                </div>
              </li>
            );
          })}
        </ul></>;
      break;
    }
    case "contact": {
      const m = C.contactMethods.find((x) => x.value === a.contact.method);
      body = <><StepHeader title="How can I reach you?" />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField id="name" label="Full name" required value={a.contact.name} onChange={(v) => upC("name", v)} error={errors["name"]} />
          <TextField id="email" label="Email" type="email" required value={a.contact.email} onChange={(v) => upC("email", v)} error={errors["email"]} />
          <TextField id="company" label="Company / project name" value={a.contact.company} onChange={(v) => upC("company", v)} />
          <TextField id="role" label="Role / job title" value={a.contact.role} onChange={(v) => upC("role", v)} />
          <TextField id="country" label="Country" value={a.contact.country} onChange={(v) => upC("country", v)} />
          <TextField id="tz" label="Time zone" placeholder="e.g. GMT+7" value={a.contact.timezone} onChange={(v) => upC("timezone", v)} />
        </div>
        <p className="form-label mt-8">Preferred communication method</p>
        <RadioCards name="method" columns={2} options={C.contactMethods} value={a.contact.method} onChange={(v) => setA((p) => ({ ...p, contact: { ...p.contact, method: v, methodDetail: "" } }))} />
        {m && "field" in m && m.field && <div className="mt-5"><TextField id="methodDetail" label={m.field} value={a.contact.methodDetail} onChange={(v) => upC("methodDetail", v)} error={errors["methodDetail"]} /></div>}
        <div className="mt-8 space-y-3">
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" checked={a.contact.consent} onChange={(e) => upC("consent", e.target.checked)} className="mt-0.5 accent-[var(--accent)]" aria-invalid={!!errors["consent"]} />
            <span>I agree that you may contact me regarding this project. *</span>
          </label>
          {errors["consent"] && <p className="form-error">{errors["consent"]}</p>}
          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input type="checkbox" checked={a.contact.marketing} onChange={(e) => upC("marketing", e.target.checked)} className="mt-0.5 accent-[var(--accent)]" />
            <span>I'd like to receive occasional updates or articles.</span>
          </label>
        </div></>;
      primaryLabel = "Review answers";
      break;
    }
    case "review": {
      const lbl = (l: C.Option[], v?: string) => C.labelOf(l, v) || "—";
      const sections: { title: string; to: StepId; rows: [string, string][] }[] = [
        { title: "Project", to: "type", rows: [["Type", lbl(C.projectTypes, type)], ["Goal", a.goal === C.OTHER ? a.goalOther ?? "" : lbl(C.goals, a.goal)], ["Brief", a.brief ?? "—"]] },
        { title: "Requirements", to: "features", rows: [
          ["Features", a.features.map((f) => (f === C.OTHER ? a.featuresOther ?? "Other" : C.labelOf(featOpts, f))).join(", ") || a.notSureDescription || "—"],
          ...(a.mvpUsed ? [["First version", a.mvpEssential.map((f) => C.labelOf(featOpts, f)).join(", ")] as [string, string]] : []),
          ["After launch", lbl(C.management, a.management)], ["Customization", lbl(C.customization, a.customization)],
        ] },
        { title: "Current status", to: "status", rows: [["Starting with", a.status.map((s) => C.labelOf(C.startingWith, s)).join(", ") || "—"], ["Design", lbl(C.designStatus, a.design)], ["Team", lbl(C.team, a.team)], ["References", a.references.filter((r) => r.url).map((r) => r.url).join(", ") || "—"]] },
        { title: "Timeline", to: "timeline", rows: [["Launch", lbl(C.timelines, a.timeline)], ...(a.targetDate ? [["Target date", a.targetDate] as [string, string]] : [])] },
        { title: "Budget", to: "budget", rows: [["Range", type ? C.budgetRanges[type].find((b) => b.value === a.budget)?.label ?? "—" : "—"]] },
        { title: "Contact", to: "contact", rows: [["Name", a.contact.name], ["Email", a.contact.email], ["Preferred", C.contactMethods.find((m) => m.value === a.contact.method)?.label ?? "Email"]] },
      ];
      primaryLabel = submitting ? "Sending…" : "Send project brief";
      body = <><StepHeader title="Review your project brief" help="Check everything looks right before sending." />
        <div className="space-y-4">
          {sections.map((s) => (
            <section key={s.title} className="rounded-md border bg-card p-5">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-2xl">{s.title}</h2>
                <button type="button" onClick={() => editFrom(s.to)} className="text-sm font-semibold underline-offset-4 hover:underline" aria-label={`Edit ${s.title}`}>Edit</button>
              </div>
              <dl className="space-y-2 text-sm">
                {s.rows.map(([k, v]) => <div key={k} className="grid gap-1 sm:grid-cols-[9rem_1fr]"><dt className="text-muted-foreground">{k}</dt><dd className="whitespace-pre-line break-words">{v || "—"}</dd></div>)}
              </dl>
            </section>
          ))}
        </div>
        {submitError && <p role="alert" className="form-error mt-5 text-sm">{submitError}</p>}</>;
      break;
    }
    case "success":
      showNav = false;
      body = <><StepHeader title="Your project brief is in." help="Thanks for sharing the details. I'll review the project before reaching out, so our first conversation can focus on the important decisions, scope, and next steps." />
        <div className="rounded-md border bg-card p-5 text-sm">
          <p className="text-muted-foreground">Preferred contact method</p>
          <p className="mt-1 font-display text-2xl">{C.contactMethods.find((m) => m.value === a.contact.method)?.label ?? "Email"}</p>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">You can close this page safely.</p>
        <Link to="/" className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent">Back to website →</Link></>;
      break;
  }

  const onPrimary = step === "review" ? send : step === "mvp" ? () => { setA((p) => ({ ...p, mvpUsed: true })); setTimeout(() => go(budgetCompatibility({ ...a, mvpUsed: true }) === "significantly_below" ? "compat" : "contact")); } : next;

  return (
    <div ref={containerRef} className="container-page py-12 md:py-20">
      <div className="mx-auto max-w-2xl">
        {step !== "start" && step !== "success" && (
          <div className="mb-10">
            <div className="progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Questionnaire progress">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <p className="eyebrow mt-3">Project brief · {progress}%</p>
          </div>
        )}
        <form
          key={step}
          className="reveal"
          onSubmit={(e) => { e.preventDefault(); if (showNav && !submitting) onPrimary(); }}
          noValidate
        >
          {body}
          {errors["form"] && <p role="alert" className="form-error mt-4">{errors["form"]}</p>}
          {showNav && (
            <div className="sticky-actions -mx-5 mt-10 flex items-center justify-between gap-3 md:static md:mx-0 md:border-0 md:bg-transparent md:p-0 md:pt-6">
              <button type="button" onClick={back} className="rounded-md px-4 py-3 text-sm text-muted-foreground hover:text-foreground">← Back</button>
              <button type="submit" disabled={submitting} className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60">
                {primaryLabel} →
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function ChoiceButton({ title, text, onClick }: { title: string; text?: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="choice-card w-full flex-col text-left">
      <span className="font-medium">{title} →</span>
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </button>
  );
}
