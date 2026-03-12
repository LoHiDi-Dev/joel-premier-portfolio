import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudySection } from "@/components/CaseStudySection";
import { ALL_CASE_STUDIES, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return ALL_CASE_STUDIES.map((project) => ({ slug: project.slug }));
}

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title}`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <article className="mx-auto max-w-[1280px] px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24">
          <Link
            href="/work"
            className="mb-8 inline-flex items-center gap-2 text-[11px] font-medium text-[#737373] transition-colors hover:text-[#171717] focus:text-[#171717] sm:mb-10 sm:text-sm md:mb-12"
          >
            ← Back to Work
          </Link>

          <header className="mb-10 border-b border-[#e5e5e5] pb-10 sm:mb-12 sm:pb-12 md:mb-16 md:grid md:grid-cols-[minmax(0,1fr)_320px] md:gap-12 md:pb-16">
            <div className="max-w-[896px]">
              <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-sm">
                Case Study
              </p>
              <h1 className="mt-3 text-2xl font-medium tracking-[-0.6px] text-[#171717] sm:text-4xl md:text-6xl md:tracking-[-1.1px]">
                {project.title}
              </h1>
              <p className="mt-3 text-[11px] text-[#525252] sm:text-base md:text-xl">
                {project.category}
              </p>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-[#737373] sm:text-xs md:text-sm">
                Role <span className="font-semibold">·</span> {project.role}
              </p>
              <p className="mt-5 text-[11px] leading-[1.5] text-[#404040] sm:text-sm md:text-2xl md:leading-[1.45]">
                {project.summary}
              </p>
            </div>

            <div className="mt-8 space-y-5 border-t border-[#e5e5e5] pt-6 sm:mt-10 sm:pt-8 md:mt-0 md:border-t-0 md:border-l md:pl-10 md:pt-0">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px]">
                  Focus
                </p>
                <p className="mt-2 whitespace-pre-line text-[11px] leading-[1.5] text-[#404040] sm:text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              {project.outcome && (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px]">
                    Outcome
                  </p>
                  <p className="mt-2 whitespace-pre-line text-[11px] leading-[1.5] text-[#404040] sm:text-sm md:text-base">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          </header>

          <div className="relative mb-10 aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-sm sm:mb-12 md:mb-16 md:rounded-2xl">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="mx-auto max-w-[1100px]">
            <CaseStudySection title="Context" content={project.context} />
            <CaseStudySection title="Challenge" content={project.challenge} />
            <CaseStudySection title="My Role" content={project.myRole} />
            <CaseStudySection title="Approach" content={project.approach} />
            <CaseStudySection
              title="Key Design Decisions"
              content={project.keyDesignDecisions}
            />
            <CaseStudySection title="Outcomes" content={project.outcomes} />
            <CaseStudySection title="Reflection" content={project.reflection} />
          </div>

          <div className="mx-auto mt-12 max-w-[1100px] border-t border-[#e5e5e5] pt-8 sm:mt-16 sm:pt-10 md:mt-20 md:pt-12">
            <div className="max-w-[720px]">
              <p className="text-[11px] leading-[1.5] text-[#404040] sm:text-sm md:text-xl md:leading-[1.55]">
                Looking for more detail across the broader portfolio? Explore the
                rest of the work index or get in touch.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/work"
                className="group inline-flex h-8 w-full items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:w-auto sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
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
                className="group inline-flex h-8 w-full items-center justify-center gap-1 rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:w-auto sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
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
        </article>
      </main>
      <Footer />
    </>
  );
}
