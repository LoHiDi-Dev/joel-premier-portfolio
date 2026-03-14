"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "@/lib/projects";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import { SECTION_MAX } from "./constants";

interface CaseStudyEndcapProps {
  nextProject: CaseStudy;
  reducedMotion: boolean;
}

export function CaseStudyEndcap({
  nextProject,
  reducedMotion,
}: CaseStudyEndcapProps) {
  return (
    <motion.section
      className="border-t border-[#242424] bg-[#171717] px-4 py-16 text-white sm:px-8 sm:py-20 md:px-12 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.08)}
      aria-labelledby="case-study-endcap-title"
    >
      <div className={`mx-auto ${SECTION_MAX}`}>
        <div className="mx-auto max-w-[896px] text-center">
          <motion.div
            className="flex flex-col items-center"
            variants={fadeUpVariants(reducedMotion, 16)}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-white/52 sm:text-sm">
              NEXT CASE STUDY
            </p>
            <h2
              id="case-study-endcap-title"
              className="mt-6 max-w-[11ch] text-[42px] font-medium leading-[0.94] tracking-[-1.3px] text-white sm:text-[56px] sm:tracking-[-1.8px] md:text-[72px] md:tracking-[-2px]"
            >
              {nextProject.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[36rem] text-[14px] leading-[1.62] text-[#c7c7c7] sm:mt-6 sm:text-[16px] sm:leading-[1.58] md:max-w-[40rem] md:text-[18px] md:leading-[1.56]">
              {nextProject.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-4">
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex h-8 items-center justify-center gap-1 rounded-full bg-white px-4 text-[11px] font-medium text-[#171717] transition-opacity duration-200 hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                View Next Case Study
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              <Link
                href="/work"
                className="group flex h-8 items-center justify-center gap-1 rounded-full border border-white bg-transparent px-4 text-[11px] font-medium text-white transition-colors duration-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                View All Work
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
