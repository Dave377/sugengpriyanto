"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ComponentProps } from "react"

type RevealProps = ComponentProps<typeof motion.div> & {
  delay?: number
}

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
