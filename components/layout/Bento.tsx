import { TextReveal } from "@/components/motion/text-reveal"
import { BentoTile } from "@/components/motion/bento-tile"

export default function BentoGrids() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">How I think</p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            <TextReveal text="Strategy, craft, and code working as one." />
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg leading-8 text-balance">
            The strongest work usually comes from connecting the big picture with the small
            decisions that make an experience feel clear and complete.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-4 lg:gap-4">
          <BentoTile className="bg-primary text-primary-foreground flex min-h-72 flex-col justify-between rounded-2xl p-6 md:col-span-2 md:row-span-2 lg:p-8" delay={0.05}>
            <div>
              <p className="text-primary-foreground/70 mb-2 text-xs font-medium uppercase tracking-wider">Product thinking</p>
              <h3 className="text-xl font-semibold">Start with the right problem.</h3>
              <p className="text-primary-foreground/80 mt-3 max-w-md leading-7">
                Before making screens, I help clarify the audience, opportunity, and decision the product needs to support.
              </p>
            </div>
            <div className="text-primary-foreground/80 mt-8 font-mono text-sm">01 / 03</div>
          </BentoTile>
          <BentoTile className="bg-card flex min-h-48 flex-col justify-between rounded-2xl border p-6 lg:p-8" delay={0.12}>
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">Design</p>
              <h3 className="text-lg font-semibold">Make complexity feel simple.</h3>
            </div>
            <p className="text-muted-foreground mt-8 text-sm leading-6">Flows, interfaces, and systems that give people confidence in what to do next.</p>
          </BentoTile>
          <BentoTile className="bg-card flex min-h-48 flex-col justify-between rounded-2xl border p-6 lg:p-8" delay={0.19}>
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">Development</p>
              <h3 className="text-lg font-semibold">Build with care.</h3>
            </div>
            <p className="text-muted-foreground mt-8 text-sm leading-6">Responsive, accessible frontend work built to be understood and maintained.</p>
          </BentoTile>
          <BentoTile className="bg-muted flex min-h-48 flex-col justify-between rounded-2xl p-6 md:col-span-2 lg:p-8" delay={0.26}>
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">Collaboration</p>
              <h3 className="text-lg font-semibold">A practical partner for your team.</h3>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6">Clear communication, shared context, and focused decisions keep the work moving without unnecessary ceremony.</p>
            </div>
          </BentoTile>
          <BentoTile className="bg-muted flex min-h-48 flex-col justify-between rounded-2xl p-6 md:col-span-2 lg:p-8" delay={0.33}>
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">Tools</p>
              <h3 className="text-lg font-semibold">A flexible modern stack.</h3>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6">Next.js, React, Tailwind, Supabase, Framer, Shopify, and Webflow—selected around the needs of the project, not the trend of the moment.</p>
            </div>
          </BentoTile>
        </div>
      </div>
    </section>
  )
}
