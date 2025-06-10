import { HeroSection } from "@/components/hero-section";
import { AboutPreview } from "@/components/about-preview";
import { ExperiencePreview } from "@/components/experience-preview";
import { ProjectsPreview } from "@/components/projects-preview";
import { BlogPreview } from "@/components/blog-preview";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="container mx-auto px-4 pb-8">
      <HeroSection />
      <AboutPreview />
      <ExperiencePreview />
      <ProjectsPreview />
      <BlogPreview />
      <ContactSection />
    </div>
  );
}
