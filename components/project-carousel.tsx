"use client"

import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type ProjectSlide = {
  label: string
  title: string
  className: string
}

export default function ProjectCarousel({ slides }: { slides: ProjectSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStart = useRef<number | null>(null)
  function showPrevious() {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length)
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % slides.length)
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    pointerStart.current = event.clientX
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return

    const distance = event.clientX - pointerStart.current
    if (Math.abs(distance) > 40) {
      if (distance < 0) showNext()
      else showPrevious()
    }
    pointerStart.current = null
  }

  return (
    <div
      className="relative min-h-72 touch-pan-y select-none sm:min-h-96"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { pointerStart.current = null }}
    >
      {slides.map((slide, index) => {
        const offset = (index - activeIndex + slides.length) % slides.length
        const position = offset === 0 ? "active" : offset === 1 ? "next" : "previous"

        return (
          <div
            key={slide.title}
            className={`pointer-events-none absolute inset-y-0 left-1/2 w-[92%] -translate-x-1/2 transition-all duration-500 ease-out ${
              position === "active"
                ? "z-20 translate-x-[-50%] scale-100 opacity-100"
                : position === "next"
                  ? "z-10 translate-x-[-39%] scale-[0.92] opacity-70"
                  : "z-10 translate-x-[-61%] scale-[0.92] opacity-70"
            }`}
            aria-hidden={position !== "active"}
          >
            <div className={`relative h-full min-h-72 overflow-hidden rounded-lg ${slide.className} ${position === "active" ? "shadow-2xl" : ""}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.45),transparent_28%),linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.18)_40%,rgba(255,255,255,0.18)_60%,transparent_60%)]" />
              <div className="relative flex h-full flex-col justify-between p-6 pb-20 sm:min-h-96 sm:p-8 sm:pb-24">
                <div className="flex items-center justify-between text-sm font-medium text-white/80">
                  <span>{slide.label}</span>
                  <span>{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
                </div>
                <p className="font-heading max-w-xs text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {slide.title}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      <div className="pointer-events-none absolute right-5 bottom-5 left-5 z-30 flex items-center justify-between">
        <div className="pointer-events-auto flex gap-1.5" aria-label="Carousel slides">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "bg-white w-8" : "bg-white/50 w-1.5"}`}
            />
          ))}
        </div>
        <div className="pointer-events-auto flex gap-2">
          <Button
            type="button"
            size="icon"
            variant="secondary"
            aria-label="Previous slide"
            onClick={showPrevious}
            onPointerDown={(event) => event.stopPropagation()}
            className="size-9 rounded-full"
          >
            <ArrowLeft />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="secondary"
            aria-label="Next slide"
            onClick={showNext}
            onPointerDown={(event) => event.stopPropagation()}
            className="size-9 rounded-full"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
