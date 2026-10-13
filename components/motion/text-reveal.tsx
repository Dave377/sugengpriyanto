"use client"

import { motion, useReducedMotion } from "motion/react"

type TextRevealProps = {
  text: string
  delay?: number
  className?: string
}

export function TextReveal({ text, delay = 0, className }: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const words = text.split(" ")

  return (
    <motion.span
      className={className}
      aria-label={text}
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.2, delay }}
    >
      {words.map((word, index) => (
        <motion.span
          key={word + index}
          aria-hidden="true"
          className="inline-block"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(4px)" }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 0.7, delay: delay + index * 0.045, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}{index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </motion.span>
  )
}
