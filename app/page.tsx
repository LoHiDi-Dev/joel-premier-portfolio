import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectFeatureCard } from "@/components/ProjectFeatureCard";
import { ApproachSection } from "@/components/ApproachSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FEATURED_PROJECTS } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <main>
        <section
          id="work"
          className="px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
          aria-labelledby="featured-work-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-6 sm:mb-10 md:mb-16">
              <SectionHeading
                headingId="featured-work-heading"
                title="Featured Work"
                description="Selected case studies spanning commerce, healthcare, travel, and enterprise product design."
              />
            </div>

            <div className="flex flex-col gap-10 sm:gap-16 md:gap-24">
              {FEATURED_PROJECTS.slice(0, 2).map((project) => (
                <ProjectFeatureCard key={project.slug} project={project} />
              ))}
            </div>

            <div className="mt-12 text-center sm:mt-16">
              <Link
                href="/work"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#171717] px-8 text-base font-medium text-white transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2"
              >
                View all work
                <span aria-hidden="true">→</span>
              </Link>
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
