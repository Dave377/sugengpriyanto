const steps = [
  ["01", "Align", "We start with the context: your audience, your goals, and the problem worth solving."],
  ["02", "Explore", "We make the possibilities visible through flows, prototypes, and focused feedback."],
  ["03", "Refine", "We turn the strongest direction into a clear, polished system your team can use."],
  ["04", "Launch", "We prepare the work for handoff, implementation, and the next stage of growth."],
]

export default function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-24 lg:px-8">
      <div className="border-border border-t pt-10">
        <p className="text-primary text-sm font-medium uppercase tracking-wider">How it works</p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            A clear process from first conversation to finished work.
          </h2>
          <p className="text-muted-foreground max-w-sm leading-7">
            The process stays collaborative, practical, and shaped around the decision you need to make next.
          </p>
        </div>

        <div className="mt-12 grid border-t md:grid-cols-4 md:divide-x">
          {steps.map(([number, title, description]) => (
            <div key={number} className="border-border border-b py-7 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
              <span className="text-muted-foreground font-mono text-sm">{number}</span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground mt-3 leading-7">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

