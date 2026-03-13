"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { PersonalProject } from "@/lib/projects";
import { fadeUpVariants, MOTION, staggerContainerVariants } from "@/lib/motion";

interface PersonalProjectCardProps {
  project: PersonalProject;
}

export function PersonalProjectCard({ project }: PersonalProjectCardProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.article
      className="flex h-full flex-col gap-3 rounded-[20px] border border-[#e5e5e5] bg-white px-3 py-3 shadow-[0_8px_24px_rgba(23,23,23,0.04)] sm:gap-3.5 sm:px-3.5 sm:py-3.5 md:px-4 md:py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariants(reducedMotion, 16)}
    >
      <motion.div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-gradient-to-br from-[#f5f5f5] to-[#fafafa]"
        variants={fadeUpVariants(reducedMotion, 16)}
      >
        <motion.div
          className="relative h-full w-full"
          whileHover={
            reducedMotion
              ? undefined
              : { scale: MOTION.scale.image }
          }
          transition={{ duration: MOTION.duration.base, ease: MOTION.easeOut }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover opacity-90"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        className="flex flex-1 flex-col"
        variants={staggerContainerVariants(0.06)}
      >
        <motion.h3
          className="mb-2 text-[16px] font-medium leading-[1.16] tracking-[-0.25px] text-[#171717] sm:text-[17px] md:text-[20px] md:tracking-[-0.5px]"
          variants={fadeUpVariants(reducedMotion, 10)}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="mb-4 flex-1 text-[13px] leading-[1.62] text-[#555555] sm:text-[14px] md:text-[15px] md:leading-[1.62]"
          variants={fadeUpVariants(reducedMotion, 10)}
        >
          {project.description}
        </motion.p>
        <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex items-center gap-1 text-xs font-medium text-[#525252] transition-colors duration-200 hover:text-[#171717] focus:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#525252] focus-visible:ring-offset-2 sm:text-[13px] md:gap-1.5 md:text-sm"
          >
            View Case Study
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
