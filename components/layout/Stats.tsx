const stats = [
  { id: 1, name: "Core disciplines", value: "03" },
  { id: 2, name: "Ways to work together", value: "04" },
  { id: 3, name: "Tools in the stack", value: "06+" },
]

export default function StatSection() {
  return (
    <section className="border-border border-y py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-baseline gap-4 sm:block">
              <dd className="font-heading order-first text-4xl tracking-tight sm:text-5xl">{stat.value}</dd>
              <dt className="text-muted-foreground mt-2 text-sm">{stat.name}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
