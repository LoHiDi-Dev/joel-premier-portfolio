"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "@/lib/projects";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";

interface CaseStudyHeroProps {
  project: CaseStudy;
  /** When true, adds top padding to clear an overlaid header */
  headerOverlay?: boolean;
}

export function CaseStudyHero({
  project,
  headerOverlay = false,
}: CaseStudyHeroProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section
      className={`relative isolate overflow-hidden bg-[#121212] ${
        headerOverlay ? "-mt-14 md:-mt-[72px]" : ""
      }`}
      aria-labelledby="case-study-title"
    >
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants(reducedMotion, 16)}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.34)_24%,rgba(8,8,8,0.24)_52%,rgba(8,8,8,0.86)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]"
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        className={`relative z-10 mx-auto flex min-h-[84svh] max-w-[1280px] flex-col px-4 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 md:min-h-[90svh] md:px-12 md:pb-20 ${
          headerOverlay
            ? "md:pt-[96px]"
            : "sm:pt-14 md:pt-16"
        }`}
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariants(0.08)}
      >
        <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[11px] font-medium text-white/78 transition-colors duration-200 hover:text-white focus:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] sm:text-sm"
          >
            <span aria-hidden="true">←</span>
            Back to Work
          </Link>
        </motion.div>

        <div className="mt-auto max-w-[920px] pt-16 sm:pt-20 md:pt-24">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[1.8px] text-white/68 sm:text-sm"
            variants={fadeUpVariants(reducedMotion, 16)}
          >
            Case Study
          </motion.p>
          <motion.h1
            id="case-study-title"
            className="mt-5 max-w-[11ch] text-[40px] font-medium leading-[0.92] tracking-[-1.4px] text-white sm:text-[56px] sm:tracking-[-1.8px] md:text-[82px] md:tracking-[-2.4px]"
            variants={fadeUpVariants(reducedMotion, 16)}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-[34rem] text-[16px] leading-[1.54] text-white/92 sm:text-[19px] sm:leading-[1.5] md:text-[25px] md:leading-[1.38]"
            variants={fadeUpVariants(reducedMotion, 16)}
          >
            {project.summary}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
