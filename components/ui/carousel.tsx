import * as React from "react"

function Carousel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props} />
}

function CarouselContent({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div className={className} {...props} />
}

function CarouselItem({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div className={className} {...props} />
}

function CarouselPrevious({ className, ...props }: React.ComponentPropsWithoutRef<"button">) {
  return <button type="button" className={className} {...props} aria-label="Previous slide" />
}

function CarouselNext({ className, ...props }: React.ComponentPropsWithoutRef<"button">) {
  return <button type="button" className={className} {...props} aria-label="Next slide" />
}

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious }
