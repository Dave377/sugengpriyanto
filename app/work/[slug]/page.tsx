import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import CTASection from "../../../components/layout/CTA"

const caseStudies = {
  "atlas-analytics": {
    eyebrow: "Product strategy",
    title: "Find the clearest path from opportunity to outcome.",
    intro: "When a product has too many possibilities, strategy creates the focus to make the right thing next.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&auto=format&fit=crop&q=85",
    tools: ["Notion", "FigJam", "Dovetail", "Figma"],
    overview: "Atlas Analytics had a compelling product and a growing customer base, but the team was pulled in too many directions. We created a shared product direction that connected customer needs to business priorities.",
    challenge: "The product roadmap had become a collection of requests rather than a clear point of view. Teams needed a way to decide what mattered now, what could wait, and how to measure progress.",
    approach: "We mapped the opportunity space, synthesized customer interviews, clarified the product promise, and turned the strongest opportunities into a sequenced roadmap with measurable bets.",
    outcome: "The team left with a sharper story, a prioritized six-month roadmap, and a lightweight decision framework they could keep using after the engagement.",
    deliverables: ["Product vision and positioning", "Audience and opportunity mapping", "Prioritized roadmap", "Success metrics and experiment plan"],
    steps: [["Align", "Create a shared view of the problem, audience, and business goal."], ["Focus", "Turn competing opportunities into a clear set of product bets."], ["Activate", "Give the team a practical roadmap and the confidence to start." ]],
  },
  "northstar-commerce": {
    eyebrow: "UX & UI design",
    title: "Make the right next step feel obvious.",
    intro: "I turn complex flows into experiences that feel simple, distinctive, and ready for real people to use.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1800&auto=format&fit=crop&q=85",
    tools: ["Figma", "FigJam", "Maze", "Principle"],
    overview: "Northstar Commerce needed a shopping experience that could handle a wide range of products without making people feel lost. We redesigned the discovery journey around confidence and momentum.",
    challenge: "Customers were browsing without a clear sense of where to go next. The existing experience had plenty of content, but not enough guidance to help people narrow their options.",
    approach: "We studied the purchase journey, rebuilt the information architecture, prototyped several discovery patterns, and created a visual system that made hierarchy feel immediate.",
    outcome: "The new experience gave customers clearer paths through the catalog and gave the internal team a flexible foundation for future collections and campaigns.",
    deliverables: ["Experience maps and user flows", "Wireframes and interaction prototypes", "Visual direction and UI design", "Responsive screen specifications"],
    steps: [["Understand", "Learn how people currently work, where they struggle, and what they expect."], ["Explore", "Try multiple directions quickly through flows, wireframes, and prototypes."], ["Refine", "Polish the strongest direction into a coherent, usable interface." ]],
  },
  "field-notes": {
    eyebrow: "Design systems",
    title: "Build a visual language your whole team can speak.",
    intro: "A good system creates consistency without flattening the character that makes a product feel like yours.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1800&auto=format&fit=crop&q=85",
    tools: ["Figma", "Storybook", "Zeroheight", "GitHub"],
    overview: "Field Notes was growing across web, social, and events, but every new touchpoint required a fresh design decision. We built a system that gave the brand structure without making it feel rigid.",
    challenge: "The team had strong creative instincts but no shared source of truth. Small inconsistencies accumulated, slowing production and making the brand harder to recognize across channels.",
    approach: "We audited the existing work, defined the foundations, built reusable patterns, and documented the decisions in a practical system designed for everyday use.",
    outcome: "The team gained a reliable toolkit for making new work faster, with enough flexibility to keep the identity expressive as the community grows.",
    deliverables: ["Foundations, tokens, and guidelines", "Reusable component patterns", "Accessibility and interaction states", "Documentation and team handoff"],
    steps: [["Audit", "Understand what exists, what is working, and where inconsistency creates drag."], ["Define", "Create the foundations and component rules that make decisions easier."], ["Enable", "Document the system so designers and engineers can use it with confidence." ]],
  },
  "frontend-development": {
    eyebrow: "Frontend development",
    title: "Turn thoughtful design into a fast, living interface.",
    intro: "I build responsive frontends that preserve the intent of the design and hold up in the details.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800&auto=format&fit=crop&q=85",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    overview: "The team had a strong product story and a detailed design direction, but needed a frontend partner to turn that work into a responsive, maintainable experience.",
    challenge: "The interface needed to feel polished across screen sizes while remaining simple for the team to extend. Performance, accessibility, and visual fidelity all mattered equally.",
    approach: "We translated the visual language into reusable components, built the key flows responsively, and used progressive refinement to test the details across devices.",
    outcome: "The result was a fast, accessible frontend that matched the design intent and gave the team a clean foundation for future pages and features.",
    deliverables: ["Responsive React interfaces", "Accessible interaction patterns", "Component implementation", "Performance and launch support"],
    steps: [["Translate", "Create a shared understanding between the design and the codebase."], ["Build", "Implement the interface with reusable, maintainable components."], ["Polish", "Test across devices, refine the details, and prepare for a confident launch." ]],
  },
} as const

type ServiceSlug = keyof typeof caseStudies

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export default async function WorkCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = caseStudies[slug as ServiceSlug]

  if (!service) notFound()

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-14 lg:px-8 lg:pt-24">
        <Link href="/work" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors">
          <ArrowLeft className="size-4" /> Back to work
        </Link>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Badge>{service.eyebrow}</Badge>
            <h1 className="font-heading mt-6 max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
              {service.title}
            </h1>
          </div>
          <p className="text-muted-foreground max-w-xl text-lg leading-8">{service.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={service.image} alt={`${service.eyebrow} case study`} fill priority sizes="(max-width: 1280px) 100vw, 1200px" className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-10 lg:px-8">
        <div className="border-border divide-border border-y divide-y md:grid md:grid-cols-[0.7fr_1.3fr] md:divide-x md:divide-y-0">
          <div className="py-8 md:pr-10">
            <p className="text-primary text-sm font-medium uppercase tracking-wider">Tools & stack</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {service.tools.map((tool) => (
                <span key={tool} className="text-lg">{tool}</span>
              ))}
            </div>
          </div>
          <div className="py-8 md:pl-10">
            <p className="text-primary text-sm font-medium uppercase tracking-wider">Deliverables</p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3 text-lg">
                  <Check className="text-primary mt-1 size-4 shrink-0" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-24 lg:px-8">
        <div className="border-border border-t">
          {[
            ["Overview", service.overview],
            ["Challenge", service.challenge],
            ["Approach", service.approach],
            ["Outcome", service.outcome],
          ].map(([label, content]) => (
            <div key={label} className="border-border grid gap-5 border-b py-8 sm:grid-cols-[10rem_1fr] sm:gap-10 sm:py-10">
              <p className="text-primary text-sm font-medium uppercase tracking-wider">{label}</p>
              <p className="text-muted-foreground text-lg leading-8">
                {content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-24 lg:px-8">
        <div className="border-border border-t pt-10">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">How we get there</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {service.steps.map(([title, description], index) => (
              <div key={title}>
                <span className="text-primary font-mono text-sm">0{index + 1}</span>
                <h2 className="mt-4 text-xl font-semibold">{title}</h2>
                <p className="text-muted-foreground mt-3 leading-7">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*<section className="mx-auto max-w-7xl px-4 pt-20 lg:px-8">
        <div className="bg-muted flex flex-col gap-6 rounded-2xl p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold">Have a project in mind?</h2>
            <p className="text-muted-foreground mt-2">Tell me where you want to go, and we&apos;ll map the next step.</p>
          </div>
          <Link href="mailto:hello@sugeng.dev" className="bg-primary text-primary-foreground inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-medium">
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>*/}

      <CTASection />
    </main>
  )
}
