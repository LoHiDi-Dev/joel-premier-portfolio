import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCaseStudyCard } from "@/components/WorkCaseStudyCard";
import { PersonalProjectCard } from "@/components/PersonalProjectCard";
import { Footer } from "@/components/Footer";
import {
  PRIMARY_CASE_STUDIES,
  SECONDARY_CASE_STUDIES,
} from "@/lib/projects";

export const metadata = {
  title: "Work",
  description:
    "Selected product design work across commerce, healthcare, travel, and service experiences.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
          aria-labelledby="work-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-10 sm:mb-14 md:mb-20">
              <SectionHeading
                headingId="work-heading"
                title="Work"
                description="Selected product design work across commerce, healthcare, travel, and service experiences."
                level={1}
              />
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12">
              <div className="mb-6 sm:mb-10 md:mb-12">
                <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-sm">
                  Selected Case Studies
                </p>
              </div>

              <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
                {PRIMARY_CASE_STUDIES.map((project) => (
                  <WorkCaseStudyCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-3 py-10 sm:px-6 sm:py-16 md:px-16 md:py-20"
          aria-labelledby="independent-projects-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="border-t border-[#e5e5e5] pt-10 sm:pt-12 md:pt-14">
              <div className="mb-6 sm:mb-10 md:mb-12">
                <SectionHeading
                  headingId="independent-projects-heading"
                  title="Independent & Client Projects"
                  description="A broader mix of client, civic, and self-initiated work across health, nonprofit, and service design."
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10">
                {SECONDARY_CASE_STUDIES.map((project) => (
                  <PersonalProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
