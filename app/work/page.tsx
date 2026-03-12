import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectFeatureCard } from "@/components/ProjectFeatureCard";
import { ProjectSupportCard } from "@/components/ProjectSupportCard";
import { PersonalProjectCard } from "@/components/PersonalProjectCard";
import { Footer } from "@/components/Footer";
import {
  FEATURED_PROJECTS,
  ADDITIONAL_PROJECTS,
  PERSONAL_PROJECTS,
} from "@/lib/projects";

export const metadata = {
  title: "Work | Joel Stefano Premier",
  description:
    "Selected case studies across e-commerce, healthcare, travel, and enterprise product design.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <section
          id="featured"
          className="px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
          aria-labelledby="featured-work-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-6 sm:mb-10 md:mb-16">
              <SectionHeading
                headingId="featured-work-heading"
                title="Featured Work"
                description="Selected case studies across e-commerce, healthcare, travel, and enterprise product design."
              />
            </div>

            <div className="flex flex-col gap-10 sm:gap-16 md:gap-24">
              {FEATURED_PROJECTS.map((project) => (
                <ProjectFeatureCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-t border-[#e5e5e5] px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
          aria-labelledby="additional-work-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-6 sm:mb-10 md:mb-16">
              <SectionHeading
                headingId="additional-work-heading"
                title="Additional Professional Work"
                description="Supporting enterprise projects focused on audit-driven improvements and complex travel experiences."
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:gap-10">
              {ADDITIONAL_PROJECTS.map((project) => (
                <ProjectSupportCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-[#fafafa] px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
          aria-labelledby="personal-work-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-6 sm:mb-10 md:mb-16">
              <SectionHeading
                headingId="personal-work-heading"
                title="Selected Explorations"
                description="Personal and self-directed work across digital health, nonprofit navigation, and civic website experience."
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10">
              {PERSONAL_PROJECTS.map((project) => (
                <PersonalProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
