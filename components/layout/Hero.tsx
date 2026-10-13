import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-primary text-sm font-medium uppercase tracking-wider">About the studio</p>
          <h1 className="font-heading mt-5 max-w-5xl text-5xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Thoughtful digital work, from first idea to final detail.
          </h1>
        </div>

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-xl lg:pb-2">
            <p className="text-muted-foreground text-lg leading-8">
              I&apos;m Sugeng, an independent designer and developer helping thoughtful teams turn
              complex ideas into clear, useful digital products.
            </p>
            <div className="mt-7 flex flex-col gap-2 sm:flex-row">
            <Button size="lg" render={<Link href="/start-project" />} nativeButton={false}>Start a project</Button>
            <Button variant="outline" size="lg" render={<Link href="/work" />} nativeButton={false}>View selected work</Button>
            </div>
          </div>

          <figure className="relative aspect-[16/10] w-full max-w-sm overflow-hidden rounded-2xl bg-muted lg:w-80">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1200&auto=format&fit=crop&q=85"
              alt="Portrait placeholder — replace this image with your own photo"
              fill
              sizes="(min-width: 1024px) 320px, 100vw"
              className="object-cover grayscale"
            />
            <figcaption className="absolute right-3 bottom-3 left-3 rounded-lg bg-background/85 px-3 py-2 text-xs backdrop-blur-sm">
              Replace this portrait with your own photo.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
