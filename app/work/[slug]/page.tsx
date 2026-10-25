import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/layout/CTA"
import { Reveal } from "@/components/motion/reveal"
import { TextReveal } from "@/components/motion/text-reveal"
import { caseStudies, workProjects } from "@/lib/site-content"

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export default async function WorkCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = caseStudies[slug as keyof typeof caseStudies]
  if (!service) notFound()
  const liveUrl = workProjects.find((project) => project.slug === slug)?.liveUrl ?? "#"

  const sections = [["Overview", service.overview], ["Challenge", service.challenge], ["Approach", service.approach], ["Outcome", service.outcome]] as const

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-14 lg:px-8 lg:pt-24"><Link href="/work" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"><ArrowLeft className="size-4" /> Back to work</Link><Reveal className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><Badge>{service.eyebrow}</Badge><h1 className="font-heading mt-6 max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl"><TextReveal text={service.title} /></h1><Button variant="outline" className="mt-7" render={<a href={liveUrl} target={liveUrl.startsWith("http") ? "_blank" : undefined} rel={liveUrl.startsWith("http") ? "noreferrer" : undefined} />} nativeButton={false}>View live <ArrowUpRight className="size-4" /></Button></div><p className="text-muted-foreground max-w-xl text-lg leading-8">{service.intro}</p></Reveal></section>
      <section className="mx-auto max-w-7xl px-4 lg:px-8"><Reveal className="relative aspect-[16/9] overflow-hidden rounded-2xl"><Image src={service.image} alt={`${service.eyebrow} case study`} fill priority sizes="(max-width: 1280px) 100vw, 1200px" className="object-cover" /></Reveal></section>
      <section className="mx-auto max-w-7xl px-4 pt-10 lg:px-8"><Reveal className="border-border divide-border border-y divide-y md:grid md:grid-cols-[0.7fr_1.3fr] md:divide-x md:divide-y-0"><div className="py-8 md:pr-10"><p className="text-primary text-sm font-medium uppercase tracking-wider">Tools &amp; stack</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{service.tools.map((tool) => <span key={tool} className="text-lg">{tool}</span>)}</div></div><div className="py-8 md:pl-10"><p className="text-primary text-sm font-medium uppercase tracking-wider">Deliverables</p><ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">{service.deliverables.map((deliverable) => <li key={deliverable} className="flex items-start gap-3 text-lg"><Check className="text-primary mt-1 size-4 shrink-0" /><span>{deliverable}</span></li>)}</ul></div></Reveal></section>
      <section className="mx-auto max-w-4xl px-4 pt-24 lg:px-8"><Reveal className="border-border border-t">{sections.map(([label, content]) => <div key={label} className="border-border grid gap-5 border-b py-8 sm:grid-cols-[10rem_1fr] sm:gap-10 sm:py-10"><p className="text-primary text-sm font-medium uppercase tracking-wider">{label}</p><p className="text-muted-foreground text-lg leading-8">{content}</p></div>)}</Reveal></section>
      <section className="mx-auto max-w-7xl px-4 pt-24 lg:px-8"><Reveal className="border-border border-t pt-10"><p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">How we get there</p><div className="mt-10 grid gap-8 md:grid-cols-3">{service.steps.map(([title, description], index) => <Reveal key={title} delay={index * 0.1}><span className="text-primary font-mono text-sm">0{index + 1}</span><h2 className="mt-4 text-xl font-semibold">{title}</h2><p className="text-muted-foreground mt-3 leading-7">{description}</p></Reveal>)}</div></Reveal></section>
      <CTASection />
    </main>
  )
}
