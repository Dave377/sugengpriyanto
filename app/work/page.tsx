import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ProjectCarousel from "@/components/project-carousel"
import CTASection from "../../components/layout/CTA"
import { Reveal } from "@/components/motion/reveal"
import { TextReveal } from "@/components/motion/text-reveal"

const projects = [
  {
    title: "Atlas Analytics",
    category: "Product design · SaaS",
    href: "/work/atlas-analytics",
    description: "A calmer way for operations teams to understand performance and act on the numbers that matter.",
    slides: [
      { label: "Dashboard", title: "Make every signal easier to act on.", className: "bg-indigo-600" },
      { label: "Workflows", title: "Turn insight into momentum.", className: "bg-violet-600" },
      { label: "Reporting", title: "Spend less time assembling the story.", className: "bg-sky-600" },
    ],
  },
  {
    title: "Northstar Commerce",
    category: "Web experience · E-commerce",
    href: "/work/northstar-commerce",
    description: "A flexible storefront experience that makes discovery feel personal without slowing down the purchase journey.",
    slides: [
      { label: "Discovery", title: "Find the right thing faster.", className: "bg-amber-600" },
      { label: "Collections", title: "Browse with a little more delight.", className: "bg-orange-600" },
      { label: "Checkout", title: "Keep the good feeling going.", className: "bg-rose-600" },
    ],
  },
  {
    title: "Field Notes",
    category: "Brand identity · Editorial",
    href: "/work/field-notes",
    description: "A warm, editorial identity for a community platform helping independent makers share what they know.",
    slides: [
      { label: "Stories", title: "Give good ideas room to breathe.", className: "bg-emerald-600" },
      { label: "Community", title: "Make sharing feel more human.", className: "bg-teal-600" },
      { label: "Toolkit", title: "A system made to keep growing.", className: "bg-cyan-600" },
    ],
  },
]

export default function WorkPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-14 lg:px-8 lg:pt-28">
        <Badge>Selected work</Badge>
        <h1 className="font-heading mt-6 max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
          <TextReveal text="Thoughtful digital work, built to move businesses forward." />
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8 text-balance">
          A selection of projects where strategy, design, and technology came together to make something clearer, more useful, and more memorable.
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 lg:px-8">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
          <Card className="group overflow-visible p-2 transition-shadow duration-300 hover:shadow-xl sm:p-3">
            <ProjectCarousel slides={project.slides} />
            <CardHeader className="px-4 pt-6 sm:px-5">
              <p className="text-muted-foreground text-sm">{project.category}</p>
              <CardTitle className="text-3xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-5 sm:px-5">
              <p className="text-muted-foreground max-w-2xl leading-7">{project.description}</p>
              <Button className="mt-6" render={<Link href={project.href} />} nativeButton={false}>
                View case study <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </CardContent>
          </Card>
          </Reveal>
        ))}
      </section>

      {/*<section className="mx-auto max-w-7xl px-4 pt-20 lg:px-8">
        <div className="bg-primary text-primary-foreground flex flex-col gap-6 rounded-2xl p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold">Have a good problem to solve?</h2>
            <p className="text-primary-foreground/75 mt-2">Let&apos;s turn it into work people remember.</p>
          </div>
          <Button size="lg" render={<Link href="/start-project" />} nativeButton={false}>
            Start a project
          </Button>
        </div>
      </section>*/}

      <CTASection />
    </main>
  )
}
