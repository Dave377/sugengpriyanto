import type { ReactNode } from "react";
import type { Option } from "./config";
import { cn } from "@/lib/utils";

export function StepHeader({ title, help }: { title: string; help?: ReactNode | undefined }) {
  return (
    <div className="mb-8">
      <h1 tabIndex={-1} data-step-heading className="text-4xl leading-[1.05] outline-none md:text-5xl">{title}</h1>
      {help && <p className="mt-4 text-muted-foreground">{help}</p>}
    </div>
  );
}

export function RadioCards({ name, options, value, onChange, columns = 1 }: { name: string; options: Option[]; value?: string | undefined; onChange: (v: string) => void; columns?: 1 | 2 | undefined }) {
  return (
    <div role="radiogroup" className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2")}>
      {options.map((o) => (
        <label key={o.value} className="choice-card">
          <input type="radio" name={name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} className="mt-1 accent-[var(--accent)]" />
          <span>
            <span className="block font-medium">{o.label}</span>
            {o.description && <span className="mt-1 block text-sm text-muted-foreground">{o.description}</span>}
          </span>
        </label>
      ))}
    </div>
  );
}

export function CheckCards({ options, values, onChange }: { options: Option[]; values: string[]; onChange: (v: string[]) => void }) {
  const toggle = (v: string) => onChange(values.includes(v) ? values.filter((x) => x !== v) : [...values, v]);
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {options.map((o) => (
        <label key={o.value} className="choice-card py-3">
          <input type="checkbox" checked={values.includes(o.value)} onChange={() => toggle(o.value)} className="mt-1 accent-[var(--accent)]" />
          <span className="text-sm font-medium">{o.label}</span>
        </label>
      ))}
    </div>
  );
}

export function TextField({ label, value, onChange, type = "text", placeholder, error, required, id }: {
  label: string; value?: string | undefined; onChange: (v: string) => void; type?: string | undefined; placeholder?: string | undefined; error?: string | undefined; required?: boolean; id: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label">{label}{required ? " *" : ""}</label>
      <input id={id} type={type} value={value ?? ""} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} className="form-input" />
      {error && <p id={`${id}-err`} className="form-error">{error}</p>}
    </div>
  );
}

export function TextArea({ label, value, onChange, placeholder, rows = 5, error, id }: {
  label: string; value?: string | undefined; onChange: (v: string) => void; placeholder?: string | undefined; rows?: number; error?: string | undefined; id: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label">{label}</label>
      <textarea id={id} rows={rows} value={value ?? ""} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error} className="form-input resize-y" />
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}
