import HeroSection from "components/HeroSection"
import AboutSection from "components/AboutSection"
import ProjectSection from "components/ProjectSection"

export default function Home() {
  return (
    <main className="max-w-3xl md:max-w-5xl mx-auto px-4 sm:px-6">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  )
}
