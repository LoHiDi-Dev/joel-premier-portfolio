"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "@/lib/projects";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";

interface CaseStudyMetaRowProps {
  project: CaseStudy;
}

export function CaseStudyMetaRow({ project }: CaseStudyMetaRowProps) {
  const reducedMotion = Boolean(useReducedMotion());

  const items = [
    { label: "Role", value: project.role },
    { label: "Focus", value: project.description },
    { label: "Outcome", value: project.outcome ?? project.summary },
  ];

  return (
    <motion.section
      className="border-b border-[#e5e5e5] bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.06)}
      aria-label="Project metadata"
    >
      <div className="mx-auto grid max-w-[1280px] gap-4 px-3 py-6 sm:px-6 sm:py-8 md:grid-cols-3 md:gap-6 md:px-16 md:py-10">
        {items.map((item) => (
          <motion.div
            key={item.label}
            className="rounded-[24px] border border-[#e5e5e5] bg-[#fafafa] px-4 py-4 sm:px-5 sm:py-5"
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px]">
              {item.label}
            </p>
            <p className="mt-3 whitespace-pre-line text-[13px] leading-[1.55] text-[#171717] sm:text-sm sm:leading-[1.6] md:text-[15px]">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
