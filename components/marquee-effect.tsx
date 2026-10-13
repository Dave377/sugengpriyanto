"use client"

import { useEffect, useState } from "react"
import { animate, motion, useMotionValue } from "motion/react"
import useMeasure from "react-use-measure"
import { cn } from "@/lib/utils"

type MarqueeEffectProps = {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  reverse?: boolean
  className?: string
}

export function MarqueeEffect({
  children,
  gap = 16,
  speed = 80,
  speedOnHover,
  reverse = false,
  className,
}: MarqueeEffectProps) {
  const [ref, { width }] = useMeasure()
  const translation = useMotionValue(0)
  const [currentSpeed, setCurrentSpeed] = useState(speed)

  useEffect(() => {
    if (!width) return

    const distance = width + gap
    const from = reverse ? -distance / 2 : 0
    const to = reverse ? 0 : -distance / 2

    translation.set(from)
    const controls = animate(translation, to, {
      ease: "linear",
      duration: Math.abs(to - from) / currentSpeed,
      repeat: Infinity,
      repeatType: "loop",
      onRepeat: () => translation.set(from),
    })

    return () => controls.stop()
  }, [currentSpeed, gap, reverse, translation, width])

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => speedOnHover && setCurrentSpeed(speedOnHover)}
      onMouseLeave={() => speedOnHover && setCurrentSpeed(speed)}
    >
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{ x: translation, gap: `${gap}px` }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
