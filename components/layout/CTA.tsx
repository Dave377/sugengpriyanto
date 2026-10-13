import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-muted/50 flex w-full flex-col gap-6 rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-10">
          <div className="flex-1">
            <h3 className="font-heading mb-4 text-3xl text-balance md:text-4xl">
              Have a good problem to solve?
            </h3>
            <p className="text-muted-foreground text-balance lg:text-lg">
              Tell me what you&apos;re building, what feels stuck, and what better could look like. I&apos;ll help you find the clearest next step.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:gap-4">
            <Button variant="outline" render={<Link href="/start-project" />} nativeButton={false}>Start a project</Button>
            <Button variant="default" size="lg" render={<Link href="/work" />} nativeButton={false}>View selected work</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
