import Link from "next/link"
import { ArrowUpRight, Blocks, Compass, Layers3, PenTool } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CTASection from "@/components/layout/CTA"

const services = [
  { number: "01", icon: Compass, title: "Product strategy", slug: "product-strategy", description: "Turn uncertainty into a focused direction your team can act on.", fit: "Early-stage products and new product bets", includes: ["Product vision", "Opportunity mapping", "Prioritized roadmap"] },
  { number: "02", icon: PenTool, title: "UX & UI design", slug: "ux-ui-design", description: "Make complex products feel clear, useful, and distinctive from the first interaction.", fit: "New experiences and major redesigns", includes: ["User journeys", "Interaction prototypes", "Interface direction"] },
  { number: "03", icon: Blocks, title: "Design systems", slug: "design-systems", description: "Create a shared visual language that helps teams move faster without losing character.", fit: "Growing products and scaling teams", includes: ["Design foundations", "Reusable components", "Team documentation"] },
  { number: "04", icon: Layers3, title: "Frontend development", slug: "frontend-development", description: "Bring thoughtful design to life as a fast, accessible, and maintainable interface.", fit: "Product launches and marketing sites", includes: ["React interfaces", "Responsive behavior", "Launch support"] },
]

const process = [
  ["01", "Understand", "We align on the audience, the opportunity, and the outcome before making anything."],
  ["02", "Explore", "We make the invisible visible through flows, prototypes, and quick feedback loops."],
  ["03", "Deliver", "We refine the strongest direction and hand over a system your team can keep building on."],
]

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-14 lg:px-8 lg:pt-28">
        <Badge>Ways to work together</Badge>
        <h1 className="font-heading mt-6 max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
          From first question to finished experience.
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8 text-balance">
          Flexible support for teams who want to make better decisions, create stronger products, and ship work they are proud of.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {services.map(({ number, icon: Icon, title, slug, description, fit, includes }) => (
          <Card key={title} className="group flex min-h-[470px] flex-col overflow-hidden">
            <div className="from-primary/20 via-muted to-secondary/30 relative flex h-44 items-end justify-between overflow-hidden bg-gradient-to-br p-6">
              <span className="font-heading relative text-6xl font-semibold tracking-tight opacity-40">{number}</span>
              <div className="bg-background/80 text-primary relative flex size-12 items-center justify-center rounded-xl backdrop-blur">
                <Icon className="size-5" />
              </div>
            </div>
            <CardHeader>
              <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Service {number}</p>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col pt-0">
              <p className="text-muted-foreground leading-7">{description}</p>
              <div className="mt-6">
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Best for</p>
                <p className="mt-2 text-sm font-medium">{fit}</p>
              </div>
              <div className="mt-5 border-t pt-5">
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Includes</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {includes.map((item) => (
                    <span key={item} className="bg-muted rounded-full px-3 py-1.5 text-xs">{item}</span>
                  ))}
                </div>
              </div>
              <Link href={`/services/${slug}`} className="text-primary mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium hover:underline">
                Explore this service <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-24 lg:px-8">
        <div className="border-border border-t pt-10">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">A simple, collaborative process.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {process.map(([number, title, description]) => (
              <div key={number}>
                <span className="text-primary font-mono text-sm">{number}</span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground mt-3 leading-7">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
