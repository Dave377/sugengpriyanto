import AboutHero from "@/components/layout/Hero"
import StatsSection from "@/components/layout/Stats"
import HowItWorksSection from "@/components/layout/How-it-works"
import BentoGrids from "@/components/layout/Bento"
import CTASection from "@/components/layout/CTA"
import { Reveal } from "@/components/motion/reveal"

export default function AboutPage() {
  return (
    <main>
      <Reveal><AboutHero /></Reveal>
      <Reveal delay={0.05}><StatsSection /></Reveal>
      <Reveal><BentoGrids /></Reveal>
      <Reveal><HowItWorksSection /></Reveal>
      <Reveal><CTASection /></Reveal>
    </main>
  )
}
