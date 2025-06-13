import { HeroSection } from "@/components/hero-section";
import { AboutPreview } from "@/components/about-preview";
import { ExperiencePreview } from "@/components/experience-preview";
import { ProjectsPreview } from "@/components/projects-preview";

export default function Home() {
  return (
    <div className="container mx-auto pb-8">
      <HeroSection />
      <AboutPreview />
      <ExperiencePreview />
      <ProjectsPreview />
    </div>
  );
}
