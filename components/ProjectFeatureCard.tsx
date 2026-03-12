import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectFeatureCardProps {
  project: Project;
}

export function ProjectFeatureCard({ project }: ProjectFeatureCardProps) {
  return (
    <article className="flex flex-col gap-4 sm:gap-8 md:gap-12">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-sm md:rounded-2xl">
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

      <div className="space-y-1 sm:space-y-3">
        <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
          <h3 className="text-base font-medium tracking-[-0.35px] text-[#171717] sm:text-2xl md:text-5xl md:tracking-[-0.85px]">
            {project.title}
          </h3>
          <span className="text-[11px] text-[#525252] sm:text-base md:text-xl">
            — {project.category}
          </span>
        </div>

        <p className="text-[10px] font-medium uppercase tracking-wider text-[#737373] sm:text-xs md:text-base">
          Role · {project.role}
        </p>

        <p className="max-w-[896px] text-[11px] leading-[1.4] text-[#404040] sm:text-sm md:text-xl md:leading-[1.5]">
          {project.description}
        </p>

        {project.outcome && (
          <p className="text-[10px] italic text-[#737373] sm:text-sm md:text-base">
            {project.outcome}
          </p>
        )}

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex h-8 items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
        >
          View Case Study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
