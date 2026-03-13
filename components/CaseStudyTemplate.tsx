"use client";

import type { CaseStudy } from "@/lib/projects";
import { Header } from "@/components/Header";
import { CaseStudyEndcap } from "@/components/CaseStudyEndcap";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudySection } from "@/components/CaseStudySection";

interface CaseStudyTemplateProps {
  project: CaseStudy;
  nextProject: CaseStudy;
}

export function CaseStudyTemplate({
  project,
  nextProject,
}: CaseStudyTemplateProps) {
  const sections = [
    {
      title: "Overview",
      content: {
        paragraphs: [project.description],
      },
    },
    { title: "Context", content: project.context },
    { title: "Challenge", content: project.challenge },
    { title: "My Role", content: project.myRole },
    { title: "Approach", content: project.approach },
    {
      title: "Key Design Decisions",
      content: project.keyDesignDecisions,
    },
    { title: "Outcomes", content: project.outcomes },
    { title: "Reflection", content: project.reflection },
  ];

  return (
    <article className="bg-white">
      <Header heroOverlay />
      <CaseStudyHero project={project} headerOverlay />

      <div>
        {sections.map((section, index) => (
          <CaseStudySection
            key={section.title}
            title={section.title}
            content={section.content}
            tone={index % 2 === 0 ? "default" : "muted"}
          />
        ))}
      </div>

      <CaseStudyEndcap nextProject={nextProject} />
    </article>
  );
}
