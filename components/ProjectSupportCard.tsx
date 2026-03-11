import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectSupportCardProps {
  project: Project;
}

export function ProjectSupportCard({ project }: ProjectSupportCardProps) {
  return (
    <article className="flex flex-col gap-6">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-sm">
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

      <div className="space-y-3">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-2xl font-medium tracking-[-0.35px] text-[#171717] md:text-3xl">
            {project.title}
          </h3>
          <span className="text-base text-[#525252]">— {project.category}</span>
        </div>

        <p className="text-sm font-semibold uppercase tracking-wider text-[#737373]">
          Role · {project.role}
        </p>

        <p className="text-lg leading-[1.45] text-[#404040]">{project.description}</p>

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
