import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CTASection from "@/components/layout/CTA"
import { Reveal } from "@/components/motion/reveal"
import { TextReveal } from "@/components/motion/text-reveal"
import { services } from "@/lib/site-content"

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
          <TextReveal text="From first question to finished experience." />
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8 text-balance">
          Flexible support for teams who want to make better decisions, create stronger products, and ship work they are proud of.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {services.map(({ number, icon: Icon, title, slug, description, fit, includes }, index) => (
          <Reveal key={title} delay={index * 0.08} className="h-full">
          <Card className="group flex min-h-[470px] h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div className="from-primary/20 via-muted to-secondary/30 relative flex h-44 items-end justify-between overflow-hidden bg-gradient-to-br p-6">
              <span className="font-heading relative text-6xl font-semibold tracking-tight opacity-40">{number}</span>
              <div className="bg-background/80 text-primary relative flex size-12 items-center justify-center rounded-xl backdrop-blur">
                <Icon className="size-5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
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
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-24 lg:px-8">
        <Reveal className="border-border border-t pt-10">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl"><TextReveal text="A simple, collaborative process." /></h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {process.map(([number, title, description], index) => (
              <Reveal key={number} delay={index * 0.08}>
                <span className="text-primary font-mono text-sm">{number}</span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground mt-3 leading-7">{description}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
      <CTASection />
    </main>
  )
}
