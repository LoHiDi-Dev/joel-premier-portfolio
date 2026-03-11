import Image from "next/image";
import Link from "next/link";
import type { PersonalProject } from "@/lib/projects";

interface PersonalProjectCardProps {
  project: PersonalProject;
}

export function PersonalProjectCard({ project }: PersonalProjectCardProps) {
  return (
    <article className="flex flex-col gap-2 sm:gap-4">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-sm md:rounded-2xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover opacity-90"
          sizes="(max-width: 768px) 33vw, 33vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-[10px] font-medium leading-tight tracking-[-0.2px] text-[#171717] sm:text-sm md:text-xl md:tracking-[-0.95px]">
          {project.title}
        </h3>
        <p className="text-[9px] leading-[1.3] text-[#525252] sm:text-xs md:text-base md:leading-[1.45]">
          {project.description}
        </p>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-[9px] font-medium text-[#171717] transition-opacity hover:opacity-80 focus:opacity-80 sm:text-xs md:gap-2 md:text-base"
        >
          View Case Study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
