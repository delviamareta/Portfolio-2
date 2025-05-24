import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectSection } from "@/components/sections/project-section"

export default function Page() {
  return (
    <main className="bg-gray-200">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  )
}
