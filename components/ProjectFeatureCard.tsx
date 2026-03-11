import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectFeatureCardProps {
  project: Project;
}

export function ProjectFeatureCard({ project }: ProjectFeatureCardProps) {
  return (
    <article className="flex flex-col gap-12 md:gap-16">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-sm md:aspect-[16/9] md:h-[420px] lg:h-[540px]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-4xl font-medium tracking-[-0.85px] text-[#171717] md:text-5xl">
            {project.title}
          </h3>
          <span className="text-xl text-[#525252]">— {project.category}</span>
        </div>

        <p className="text-base font-medium uppercase tracking-wider text-[#737373]">
          Role · {project.role}
        </p>

        <p className="max-w-[896px] text-xl leading-[1.5] text-[#404040]">
          {project.description}
        </p>

        {project.outcome && (
          <p className="italic text-[#737373]">{project.outcome}</p>
        )}

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 text-base font-medium text-[#171717] transition-opacity hover:opacity-80 focus:opacity-80"
        >
          View Case Study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
