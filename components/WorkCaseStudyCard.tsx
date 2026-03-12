import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface WorkCaseStudyCardProps {
  project: Project;
}

export function WorkCaseStudyCard({ project }: WorkCaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 sm:gap-6">
      <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-sm md:rounded-2xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover opacity-90"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-col">
          <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-lg font-medium tracking-[-0.35px] text-[#171717] sm:text-2xl md:text-[32px] md:tracking-[-0.7px]">
              {project.title}
            </h3>
            <span className="shrink-0 text-[11px] text-[#525252] sm:text-sm md:text-base" aria-hidden="true">
              —
            </span>
            <span className="text-[11px] text-[#525252] sm:text-sm md:text-base">
              {project.category}
            </span>
          </div>

          <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-[#737373] sm:text-xs md:text-sm">
            Role <span className="font-semibold">·</span> {project.role}
          </p>

          <p className="mb-6 whitespace-pre-line text-[11px] leading-[1.5] text-[#404040] sm:text-sm md:text-lg md:leading-[1.5]">
            {project.description}
          </p>
        </div>

        <div>
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex h-8 items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            View Case Study
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
  );
}
