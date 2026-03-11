import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectSupportCardProps {
  project: Project;
}

export function ProjectSupportCard({ project }: ProjectSupportCardProps) {
  return (
    <article className="flex flex-col gap-3 sm:gap-5">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-sm md:rounded-2xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover opacity-90"
          sizes="(max-width: 768px) 50vw, 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="space-y-1 sm:space-y-2">
        <div className="flex flex-wrap items-baseline gap-1">
          <h3 className="text-[12px] font-medium tracking-[-0.2px] text-[#171717] sm:text-lg md:text-3xl">
            {project.title}
          </h3>
          <span className="text-[10px] text-[#525252] sm:text-xs md:text-base">
            — {project.category}
          </span>
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-wider text-[#737373] sm:text-[10px] md:text-sm">
          Role · {project.role}
        </p>

        <p className="text-[10px] leading-[1.35] text-[#404040] sm:text-xs md:text-lg">
          {project.description}
        </p>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-[10px] font-medium text-[#171717] transition-opacity hover:opacity-80 focus:opacity-80 sm:text-xs md:gap-2 md:text-base"
        >
          View Case Study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
