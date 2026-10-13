import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Clock3, MessageCircle, ShieldCheck } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/layout/CTA"
import HowItWorksSection from "@/components/layout/How-it-works"

const services = {
  "product-strategy": {
    eyebrow: "Product strategy",
    title: "A clear direction for the next right thing.",
    intro: "If your team has a promising opportunity but too many possible directions, this service helps you turn uncertainty into a clear plan. We will clarify your product promise, understand the audience and opportunity, prioritize the most valuable bets, and create a roadmap your team can actually use. You will leave with sharper language, stronger alignment, and a practical next step instead of another list of ideas.",
    fit: "Best for early-stage products, new bets, and teams preparing for a meaningful shift.",
    price: "Get a quote",
    priceNote: "Scope is tailored to your product, team, and decision.",
    timeline: "2–4 weeks",
    package: "Strategy sprint",
    tools: ["Notion", "FigJam", "Dovetail"],
    deliverables: [["Product vision and positioning", "A clear articulation of what the product is, who it is for, and why it matters."], ["Customer and opportunity mapping", "A focused view of the audience needs and opportunities worth pursuing."], ["Prioritized product roadmap", "A sequenced set of product bets that connects ambition to action."], ["Success metrics and decision framework", "A practical way to evaluate progress and make better trade-offs." ]],
    faq: [["How long does a strategy sprint take?", "Most strategy engagements take two to four weeks, depending on research needs and team availability."], ["Do you work with existing product teams?", "Yes. I can work alongside founders, product managers, designers, and engineers."], ["Can you help with implementation afterward?", "Yes. Strategy can continue into UX/UI design, a design system, or frontend development." ]],
    process: [["Align", "Build a shared understanding of the audience, business goal, and problem worth solving."], ["Focus", "Evaluate the opportunity space and choose the product bets with the most potential."], ["Activate", "Turn the direction into a practical roadmap your team can use immediately."]],
  },
  "ux-ui-design": {
    eyebrow: "UX & UI design",
    title: "Experiences that make the next step obvious.",
    intro: "If your product feels harder to understand or navigate than it should, this service turns complexity into a clear and considered experience. We will map the important journeys, explore interaction patterns, and shape a visual interface that helps people know what to do next. The result is a stronger product experience with thoughtful screens, responsive behavior, and a clear handoff for development.",
    fit: "Best for new product experiences, major redesigns, and flows that have outgrown their current shape.",
    price: "From $1,200",
    priceNote: "Final quote depends on the number of flows and screens.",
    timeline: "3–6 weeks",
    package: "Experience design",
    tools: ["Figma", "FigJam", "Maze"],
    deliverables: [["User journeys and information architecture", "A clear structure that helps people find their way through the experience."], ["Wireframes and interaction prototypes", "Fast, testable representations of the key flows and decisions."], ["Visual direction and interface design", "A distinctive, polished interface that makes hierarchy and action feel clear."], ["Responsive specifications and handoff", "Detailed screens and guidance that help the team build with confidence." ]],
    faq: [["Can you work from an existing brand?", "Yes. I can extend an established identity or help evolve it where the product needs more clarity."], ["Do you include user research?", "Lightweight research and synthesis are included when they are needed to make the right design decision."], ["Do you provide developer handoff?", "Yes. The final work includes organized files, responsive states, and implementation notes." ]],
    process: [["Understand", "Learn how people currently work, where they struggle, and what they need next."], ["Explore", "Use fast prototypes to compare ideas and find the clearest experience."], ["Refine", "Polish the chosen direction into a coherent, accessible interface system."]],
  },
  "design-systems": {
    eyebrow: "Design systems",
    title: "A shared language for better, faster product work.",
    intro: "If your product is growing faster than your design language, this service gives the team a shared system to work from. We will bring together foundations, reusable components, interaction states, and practical documentation so new work becomes faster and more consistent. The result is a design system that creates structure without flattening the character that makes your product recognizable and human.",
    fit: "Best for growing products, multi-disciplinary teams, and design debt that is slowing delivery.",
    price: "Get a quote",
    priceNote: "Every system is scoped around your product surface area.",
    timeline: "4–8 weeks",
    package: "System foundation",
    tools: ["Figma", "Storybook", "GitHub"],
    deliverables: [["Foundations, tokens, and design principles", "The shared visual rules that keep future decisions coherent."], ["Reusable components and patterns", "Flexible building blocks for common product and marketing needs."], ["Accessibility and interaction states", "Clear behavior for focus, errors, loading, empty states, and other moments."], ["Documentation and team enablement", "Practical guidance that helps the team adopt and maintain the system." ]],
    faq: [["Can you audit an existing design system?", "Yes. An audit is often the best first step for identifying duplication, gaps, and priority improvements."], ["Do you also build the components?", "I can provide the design system, the coded components, or both depending on your team setup."], ["Will the system work across multiple products?", "Yes. The foundations can be structured to support shared patterns while allowing product-specific expression." ]],
    process: [["Audit", "Map what exists, what is repeated, and where inconsistency creates unnecessary work."], ["Define", "Create the foundations and rules that make future decisions easier."], ["Enable", "Document the system and help the team adopt it in everyday product work."]],
  },
  "frontend-development": {
    eyebrow: "Frontend development",
    title: "Thoughtful design, brought to life in code.",
    intro: "If you have a strong design direction but need a reliable partner to bring it to life, this service translates the work into a fast, accessible, and maintainable frontend. We will build responsive interfaces, preserve the important visual details, and create reusable components that make future updates easier. The result is a polished implementation that feels intentional from the first render to the final interaction.",
    fit: "Best for marketing sites, product surfaces, and launches that need strong craft from first render to final detail.",
    price: "From $1,800",
    priceNote: "Final quote depends on page count and integration needs.",
    timeline: "3–6 weeks",
    package: "Frontend build",
    tools: ["Next.js", "React", "TypeScript"],
    deliverables: [["Responsive React and Next.js interfaces", "Production-ready pages that hold up across screen sizes and devices."], ["Accessible interaction patterns", "Keyboard-friendly, semantic interactions that work for more people."], ["Reusable component implementation", "A maintainable code foundation that makes future pages faster to build."], ["Performance, QA, and launch support", "Cross-device testing, refinement, and support through the final release." ]],
    faq: [["Can you work with an existing codebase?", "Yes. I can extend an existing React or Next.js codebase or help establish a cleaner foundation."], ["Do you handle deployment?", "I can support the launch process and coordinate with your hosting or engineering team."], ["Can you build from Figma?", "Yes. I work directly from design files and help resolve the details that appear during implementation." ]],
    process: [["Translate", "Create a shared understanding between the visual direction and the technical foundation."], ["Build", "Implement the interface with reusable components and responsive behavior."], ["Polish", "Test across devices, refine the details, and prepare for a confident launch."]],
  },
} as const

type ServiceSlug = keyof typeof services

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug as ServiceSlug]

  if (!service) notFound()

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 lg:px-8 lg:pt-24">
        <Link href="/services" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors">
          <ArrowLeft className="size-4" /> Back to services
        </Link>
        <div className="mt-14 max-w-4xl">
          <div>
            <Badge>{service.eyebrow}</Badge>
            <h1 className="font-heading mt-6 max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
              {service.title}
            </h1>
          </div>
          <div className="mt-8 max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider">Overview</p>
            <p className="text-muted-foreground mt-4 text-lg leading-8">{service.intro}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="border-border border-y py-8 sm:py-10">
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-wider">Good fit</p>
            <p className="mt-4 max-w-3xl text-lg leading-8">{service.fit}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 pt-20 lg:grid-cols-[1fr_22rem] lg:px-8">
        <div className="min-w-0">
          <div className="border-border border-t pt-8">
            <p className="text-primary text-sm font-medium uppercase tracking-wider">What you&apos;ll get</p>
            <p className="text-muted-foreground mt-4 max-w-2xl leading-7">A focused scope shaped around the stage your product is in and the decision you need to make next.</p>
            <ul className="border-border mt-8 border-t">
              {service.deliverables.map(([title, description]) => (
                <li key={title} className="border-border border-b py-5">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  <div className="-mt-5 pl-8">
                    <p className="text-lg font-medium">{title}</p>
                    <p className="text-muted-foreground mt-2 leading-7">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card className="border-primary/20 shadow-lg shadow-primary/5">
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">{service.package}</p>
              <p className="font-heading mt-3 text-3xl font-semibold">{service.price}</p>
              <p className="text-muted-foreground mt-3 text-sm leading-6">{service.priceNote}</p>
              <Button size="lg" className="mt-6 w-full" render={<Link href="/start-project" />} nativeButton={false}>
                Get started <ArrowRight className="ml-2 size-4" />
              </Button>
              <div className="border-border mt-6 space-y-4 border-t pt-6 text-sm">
                <div className="flex items-center gap-3"><Clock3 className="text-primary size-4" /><span>{service.timeline} typical timeline</span></div>
                <div className="flex items-center gap-3"><MessageCircle className="text-primary size-4" /><span>Reply within 1 business day</span></div>
                <div className="flex items-center gap-3"><ShieldCheck className="text-primary size-4" /><span>Clear scope before we start</span></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tools.map((tool) => <span key={tool} className="bg-muted rounded-full px-3 py-1 text-xs">{tool}</span>)}
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>

      <HowItWorksSection />

      <section className="mx-auto max-w-4xl px-4 pt-4 lg:px-8">
        <div className="border-border border-t pt-10">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</p>
          <div className="mt-6">
            {service.faq.map(([question, answer]) => (
              <details key={question} className="border-border group border-b py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-muted-foreground max-w-2xl pt-4 leading-7">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
