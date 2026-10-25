import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Clock3, MessageCircle, ShieldCheck } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/layout/CTA"
import HowItWorksSection from "@/components/layout/How-it-works"
import { Reveal } from "@/components/motion/reveal"
import { TextReveal } from "@/components/motion/text-reveal"
import { services } from "@/lib/site-content"

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) notFound()

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 lg:px-8 lg:pt-24">
        <Link href="/services" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"><ArrowLeft className="size-4" /> Back to services</Link>
        <Reveal className="mt-14 max-w-4xl">
          <Badge>{service.eyebrow}</Badge>
          <h1 className="font-heading mt-6 max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl"><TextReveal text={service.title} /></h1>
          <Reveal delay={0.12} className="mt-8 max-w-3xl"><p className="text-primary text-sm font-medium uppercase tracking-wider">Overview</p><p className="text-muted-foreground mt-4 text-lg leading-8">{service.intro}</p></Reveal>
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-4 lg:px-8"><Reveal className="border-border border-y py-8 sm:py-10"><p className="text-primary text-sm font-medium uppercase tracking-wider">Good fit</p><p className="mt-4 max-w-3xl text-lg leading-8">{service.fit}</p></Reveal></section>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 pt-20 lg:grid-cols-[1fr_22rem] lg:px-8">
        <Reveal className="min-w-0"><div className="border-border border-t pt-8"><p className="text-primary text-sm font-medium uppercase tracking-wider">What you&apos;ll get</p><p className="text-muted-foreground mt-4 max-w-2xl leading-7">A focused scope shaped around the stage your product is in and the decision you need to make next.</p><ul className="border-border mt-8 border-t">{service.deliverables.map(([title, description]) => <li key={title} className="border-border border-b py-5"><Check className="text-primary mt-1 size-4 shrink-0" /><div className="-mt-5 pl-8"><p className="text-lg font-medium">{title}</p><p className="text-muted-foreground mt-2 leading-7">{description}</p></div></li>)}</ul></div></Reveal>
        <Reveal delay={0.12} className="lg:sticky lg:top-24 lg:self-start"><Card className="border-primary/20 shadow-lg shadow-primary/5"><CardContent className="p-6"><p className="text-muted-foreground text-sm">{service.package}</p><p className="font-heading mt-3 text-3xl font-semibold">{service.price}</p><p className="text-muted-foreground mt-3 text-sm leading-6">{service.priceNote}</p><Button size="lg" className="mt-6 w-full" render={<Link href="/start-project" />} nativeButton={false}>Start a project <ArrowRight className="ml-2 size-4" /></Button><div className="border-border mt-6 space-y-4 border-t pt-6 text-sm"><div className="flex items-center gap-3"><Clock3 className="text-primary size-4" /><span>{service.timeline} typical timeline</span></div><div className="flex items-center gap-3"><MessageCircle className="text-primary size-4" /><span>Reply within 1 business day</span></div><div className="flex items-center gap-3"><ShieldCheck className="text-primary size-4" /><span>Clear scope before we start</span></div></div><div className="mt-6 flex flex-wrap gap-2">{service.tools.map((tool) => <span key={tool} className="bg-muted rounded-full px-3 py-1 text-xs">{tool}</span>)}</div></CardContent></Card></Reveal>
      </section>
      <HowItWorksSection />
      <section className="mx-auto max-w-4xl px-4 pt-4 lg:px-8"><Reveal className="border-border border-t pt-10"><p className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</p><div className="mt-6">{service.faq.map(([question, answer]) => <details key={question} className="border-border group border-b py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">{question}<span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span></summary><p className="text-muted-foreground max-w-2xl pt-4 leading-7">{answer}</p></details>)}</div></Reveal></section>
      <CTASection />
    </main>
  )
}
