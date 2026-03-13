import { notFound } from "next/navigation";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { CaseStudyUltaContent } from "@/components/CaseStudyUltaContent";
import {
  ALL_CASE_STUDIES,
  getNextCaseStudy,
  getProjectBySlug,
} from "@/lib/projects";

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
  const nextProject = getNextCaseStudy(slug);

  if (!project || !nextProject) {
    notFound();
  }

  if (slug === "ulta-beauty") {
    return (
      <main className="min-h-screen bg-white">
        <CaseStudyUltaContent project={project} nextProject={nextProject} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <CaseStudyTemplate project={project} nextProject={nextProject} />
    </main>
  );
}
