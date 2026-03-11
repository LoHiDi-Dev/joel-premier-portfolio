import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectFeatureCard } from "@/components/ProjectFeatureCard";
import { ProjectSupportCard } from "@/components/ProjectSupportCard";
import { PersonalProjectCard } from "@/components/PersonalProjectCard";
import { ApproachSection } from "@/components/ApproachSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import {
  FEATURED_PROJECTS,
  ADDITIONAL_PROJECTS,
  PERSONAL_PROJECTS,
} from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section
          id="work"
          className="px-6 py-24 md:py-32 lg:px-16"
          aria-labelledby="featured-work-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-16">
              <SectionHeading
                headingId="featured-work-heading"
                title="Featured Work"
                description="Selected case studies across e-commerce, healthcare, travel, and enterprise product design."
              />
            </div>

            <div className="flex flex-col gap-32 md:gap-40">
              {FEATURED_PROJECTS.map((project) => (
                <ProjectFeatureCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-t border-[#e5e5e5] px-6 py-24 md:py-32 lg:px-16"
          aria-labelledby="additional-work-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-16">
              <SectionHeading
                headingId="additional-work-heading"
                title="Additional Professional Work"
                description="Supporting enterprise projects focused on audit-driven improvements and complex travel experiences."
              />
            </div>

            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {ADDITIONAL_PROJECTS.map((project) => (
                <ProjectSupportCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-[#fafafa] px-6 py-24 md:py-32 lg:px-16"
          aria-labelledby="personal-work-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-16">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[1.8px] text-[#737373]">
                Independent Work
              </p>
              <SectionHeading
                headingId="personal-work-heading"
                title="Selected Explorations"
                description="Personal and self-directed work across digital health, nonprofit navigation, and civic website experience."
              />
            </div>

            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              {PERSONAL_PROJECTS.map((project) => (
                <PersonalProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <ApproachSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
