import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  getProjectBySlug,
  FEATURED_PROJECTS,
  ADDITIONAL_PROJECTS,
  PERSONAL_PROJECTS,
} from "@/lib/projects";

export function generateStaticParams() {
  const slugs = [
    ...FEATURED_PROJECTS.map((p) => p.slug),
    ...ADDITIONAL_PROJECTS.map((p) => p.slug),
    ...PERSONAL_PROJECTS.map((p) => p.slug),
  ];
  return slugs.map((slug) => ({ slug }));
}

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Joel Stefano Premier`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasMeta = "category" in project && project.category;
  const hasRole = "role" in project && project.role;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <article className="mx-auto max-w-[896px] px-6 py-24 md:py-32">
          <Link
            href="/work"
            className="mb-12 inline-flex items-center gap-2 text-[#737373] transition-colors hover:text-[#171717]"
          >
            ← Back to Work
          </Link>

          <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5f5f5] to-[#fafafa]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="896px"
            />
          </div>

          <header className="space-y-4">
            <h1 className="text-4xl font-medium tracking-[-0.85px] text-[#171717] md:text-5xl">
              {project.title}
            </h1>
            {hasMeta && (
              <p className="text-xl text-[#525252]">
                {(project as { category: string }).category}
              </p>
            )}
            {hasRole && (
              <p className="text-base font-medium uppercase tracking-wider text-[#737373]">
                Role · {(project as { role: string }).role}
              </p>
            )}
          </header>

          <div className="prose prose-lg mt-12 max-w-none">
            <p className="text-xl leading-relaxed text-[#404040]">
              {project.description}
            </p>
            {"outcome" in project && project.outcome && (
              <p className="mt-6 italic text-[#737373]">{project.outcome}</p>
            )}
          </div>

          <div className="mt-16 border-t border-[#e5e5e5] pt-12">
            <p className="mb-4 text-sm text-[#737373]">
              Case study content coming soon. This page is a placeholder for
              future expansion.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-medium text-[#171717] transition-opacity hover:opacity-80"
            >
              View all work
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
