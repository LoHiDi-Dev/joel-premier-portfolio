import Image from "next/image";
import Link from "next/link";
import type { PersonalProject } from "@/lib/projects";

interface PersonalProjectCardProps {
  project: PersonalProject;
}

export function PersonalProjectCard({ project }: PersonalProjectCardProps) {
  return (
    <article className="flex flex-col gap-5">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-sm">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover opacity-90"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-medium tracking-[-0.95px] text-[#171717]">
          {project.title}
        </h3>
        <p className="text-base leading-[1.45] text-[#525252]">
          {project.description}
        </p>
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
