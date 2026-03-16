"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/lib/projects";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";

interface ProjectFeatureCardProps {
  project: Project;
}

export function ProjectFeatureCard({ project }: ProjectFeatureCardProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const imageRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 1, 1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [16, 0, 0, 8]);
  const imageScale = useTransform(scrollYProgress, [0, 0.18, 1], [1.02, 1, 1]);

  return (
    <article className="flex flex-col gap-4 sm:gap-8 md:gap-12">
      <motion.div
        ref={imageRef}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-[0_8px_24px_rgba(23,23,23,0.04)]"
        style={
          reducedMotion
            ? undefined
            : {
                opacity: imageOpacity,
                y: imageY,
                scale: imageScale,
              }
        }
      >
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
      </motion.div>

      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainerVariants(0.06)}
      >
        <motion.div
          className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1"
          variants={fadeUpVariants(reducedMotion, 10)}
        >
          <h3 className="text-[28px] font-medium leading-[1.02] tracking-[-0.8px] text-[#171717] sm:text-[34px] md:text-[44px] md:tracking-[-1.1px]">
            {project.title}
          </h3>
          {!project.hideCategory && (
            <>
              <span className="shrink-0 text-[13px] text-[#525252] sm:text-[15px] md:text-[18px]" aria-hidden="true">
                -
              </span>
              <span className="text-[13px] text-[#525252] sm:text-[15px] md:text-[18px]">
                {project.category}
              </span>
            </>
          )}
        </motion.div>

        <motion.p
          className="mb-5 text-[12px] font-medium uppercase tracking-[1.8px] text-[#525252] sm:text-[13px] md:text-[13px]"
          variants={fadeUpVariants(reducedMotion, 10)}
        >
          Role <span className="font-semibold">·</span> {project.role}
        </motion.p>

        <motion.p
          className={`max-w-[32rem] whitespace-pre-line text-[14px] leading-[1.65] text-[#3d3d3d] sm:text-[15px] sm:leading-[1.62] md:max-w-[40rem] md:text-[18px] md:leading-[1.62] ${project.outcome ? "mb-4" : "mb-6"}`}
          variants={fadeUpVariants(reducedMotion, 10)}
        >
          {project.description}
        </motion.p>

        {project.outcome && (
          <motion.p
            className="mb-5 whitespace-pre-line text-[15px] italic leading-[1.6] text-[#525252] sm:text-[15px] md:text-[16px] md:leading-[1.58]"
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            {project.outcome}
          </motion.p>
        )}

        <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex h-11 items-center justify-center gap-1 rounded-full border border-[#171717] bg-white px-4 text-xs font-medium text-[#171717] transition-colors duration-200 hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-[13px] md:h-14 md:px-8 md:text-base"
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
    </article>
  );
}
