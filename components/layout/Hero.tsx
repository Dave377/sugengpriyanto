import Link from "next/link"

import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/motion/text-reveal"

export default function HeroSection() {
  return (
    <section className="py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">About the studio</p>
          <h1 className="font-heading mt-5 max-w-5xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <TextReveal text="I turn complex ideas into clear, useful digital experiences." />
          </h1>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="max-w-xl">
            <p className="text-muted-foreground text-lg leading-8">
              I&apos;m Sugeng, an independent designer and developer helping thoughtful teams turn
              complex ideas into clear, useful digital products.
            </p>
            <div className="mt-7 flex flex-col gap-2 sm:flex-row">
            <Button size="lg" render={<Link href="/start-project" />} nativeButton={false}>Start a project</Button>
            <Button variant="outline" size="lg" render={<Link href="/work" />} nativeButton={false}>View selected work</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
