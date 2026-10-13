import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import ProjectIntakeForm from "@/components/project-intake-form"

export default function StartProjectPage() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-8 lg:px-8 lg:pt-24">
        <Link href="/" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors">
          <ArrowLeft className="size-4" />
          Back home
        </Link>
        <p className="text-primary mt-12 text-sm font-medium uppercase tracking-wider">Start a project</p>
        <h1 className="font-heading mt-5 max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
          Let&apos;s make the first conversation useful.
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
          Answer a few practical questions about what you&apos;re building. It should take around five minutes and gives us a clearer starting point than a blank discovery call.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 lg:px-8">
        <ProjectIntakeForm />
      </section>
    </main>
  )
}
