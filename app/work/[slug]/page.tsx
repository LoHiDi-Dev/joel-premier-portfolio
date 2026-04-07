import { notFound } from "next/navigation";
import { CaseStudyPageTemplate } from "@/components/case-study/CaseStudyPageTemplate";
import {
  ALL_CASE_STUDIES,
  getNextCaseStudy,
  getProjectBySlug,
} from "@/lib/projects";
import { getCaseStudyPageConfig } from "@/lib/case-study-configs";

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

  const config = getCaseStudyPageConfig(project);

  return (
    <main className="min-h-screen bg-white">
      <CaseStudyPageTemplate
        project={project}
        nextProject={nextProject}
        config={config}
      />
    </main>
  );
}
