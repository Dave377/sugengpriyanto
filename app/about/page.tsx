import AboutHero from "@/components/layout/Hero"
import StatsSection from "@/components/layout/Stats"
import HowItWorksSection from "@/components/layout/How-it-works"
import BentoGrids from "@/components/layout/Bento"
import CTASection from "@/components/layout/CTA"

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StatsSection />
      <BentoGrids />
      <HowItWorksSection />
      <CTASection />
    </main>
  )
}
