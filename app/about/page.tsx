import Link from "next/link";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "About",
  description:
    "Senior Product Designer focused on complex digital products, systems thinking, accessibility, and outcomes that matter.",
};

const FOCUS_AREAS = [
  {
    title: "Product Design",
    description:
      "Shaping digital products with emphasis on usability, coherence, and meaningful business impact.",
  },
  {
    title: "Design Systems",
    description:
      "Building shared foundations that create consistency across teams, speed delivery, and strengthen product quality.",
  },
  {
    title: "Accessibility & Implementation",
    description:
      "Working accessibly from the start and partnering closely with engineering so design decisions hold up in implementation.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-6 sm:mb-10 md:mb-16">
              <SectionHeading
                headingId="about-heading"
                title="About"
                description="Senior Product Designer focused on complex digital products, systems thinking, accessibility, and outcomes that matter."
                level={1}
              />
            </div>

            <div className="max-w-[46rem] space-y-5">
              <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                I design digital products with a focus on structure, usability,
                and meaningful impact. My work centers on making demanding
                experiences easier to understand, easier to use, and more
                effective for the people navigating them and the teams
                delivering them.
              </p>
              <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                Across e-commerce, healthcare, travel, and enterprise products,
                I&apos;ve led work spanning discovery, flows, navigation, shared
                systems, and close product-engineering partnership. I care
                deeply about reducing friction, improving access, and creating
                experiences that hold up under real-world complexity.
              </p>
              <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                I do my best work in close partnership with product, engineering,
                content, and leadership - connecting user needs to business goals
                through a steady, thoughtful approach to delivery.
              </p>
            </div>

            <div className="mt-12 border-t border-[#e5e5e5] pt-10 sm:mt-16 md:mt-24 md:pt-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:mb-6 sm:text-[11px]">
                What I Focus On
              </p>
              <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 md:gap-10">
                {FOCUS_AREAS.map((area) => (
                  <div key={area.title}>
                    <h2 className="text-[15px] font-medium leading-[1.18] tracking-[-0.2px] text-[#171717] sm:text-[18px] md:text-[20px]">
                      {area.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-[1.65] text-[#555555] sm:text-[15px] sm:leading-[1.62] md:text-[16px]">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-[#e5e5e5] pt-10 sm:mt-16 md:mt-24 md:pt-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:mb-6 sm:text-[11px]">
                How I Work
              </p>
              <div className="max-w-[46rem] space-y-5">
                <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                  My approach is grounded in usefulness over noise. I look for
                  the structure beneath a problem, simplify where it matters,
                  and build systems that support both immediate needs and
                  long-term growth.
                </p>
                <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                  I work closely with product and engineering to shape
                  scalable experiences that align user needs with business
                  priorities. The goal is not just polished screens, but sound
                  decisions that improve how a product works and how a team
                  delivers it.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-[#e5e5e5] pt-10 sm:mt-16 md:mt-24 md:pt-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:mb-6 sm:text-[11px]">
                Currently
              </p>
              <div className="max-w-[46rem] space-y-5">
                <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                  I&apos;m most interested in product work where fragmented
                  journeys, growing systems, and delivery realities need to be
                  brought into better alignment.
                </p>
                <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                  The problems I enjoy most require design judgment, close
                  partnership, and steady execution across teams.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-2 sm:mt-16 sm:gap-4">
              <Link
                href="/work"
                className="group inline-flex h-8 items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                View All Work
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex h-8 items-center justify-center gap-1 rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                Get in Touch
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
