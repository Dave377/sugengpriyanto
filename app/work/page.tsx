import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ProjectCarousel from "@/components/project-carousel"
import CTASection from "@/components/layout/CTA"
import { Reveal } from "@/components/motion/reveal"
import { TextReveal } from "@/components/motion/text-reveal"
import { workProjects } from "@/lib/site-content"

export default function WorkPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-14 lg:px-8 lg:pt-28"><Badge>Selected work</Badge><h1 className="font-heading mt-6 max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl"><TextReveal text="Thoughtful digital work, built to move businesses forward." /></h1><p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8 text-balance">A selection of projects where strategy, design, and technology came together to make something clearer, more useful, and more memorable.</p></section>
      <section className="mx-auto max-w-7xl space-y-8 px-4 lg:px-8">{workProjects.map((project, index) => <Reveal key={project.title} delay={index * 0.08}><Card className="group overflow-visible p-2 transition-shadow duration-300 hover:shadow-xl sm:p-3"><ProjectCarousel slides={project.slides} /><CardHeader className="px-4 pt-6 sm:px-5"><p className="text-muted-foreground text-sm">{project.category}</p><CardTitle className="text-3xl">{project.title}</CardTitle></CardHeader><CardContent className="px-4 pb-5 sm:px-5"><p className="text-muted-foreground max-w-2xl leading-7">{project.description}</p><Button className="mt-6" render={<Link href={`/work/${project.slug}`} />} nativeButton={false}>View case study <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Button></CardContent></Card></Reveal>)}</section>
      <CTASection />
    </main>
  )
}
