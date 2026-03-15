"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";

interface CaseStudyMetaRowProps {
  items: Array<{
    label: string;
    value: string;
  }>;
  reducedMotion: boolean;
  columns?: 3 | 4;
}

export function CaseStudyMetaRow({
  items,
  reducedMotion,
  columns = 3,
}: CaseStudyMetaRowProps) {
  const gridCols = columns === 4 ? "sm:grid-cols-2 md:grid-cols-4" : "md:grid-cols-3";
  return (
    <motion.section
      className="border-b border-[#e5e5e5] bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.06)}
      aria-label="Project metadata"
    >
      <div className={`mx-auto grid max-w-[1280px] gap-4 px-4 py-6 sm:px-8 sm:py-8 ${gridCols} md:gap-6 md:px-12 md:py-10`}>
        {items.map((item) => (
          <motion.div
            key={item.label}
            className="rounded-[24px] border border-[#e5e5e5] bg-[#fafafa] px-4 py-4 sm:px-5 sm:py-5"
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[12px]">
              {item.label}
            </p>
            <p className="mt-3 whitespace-pre-line text-[14px] leading-[1.6] text-[#171717] sm:text-sm sm:leading-[1.6] md:text-[15px]">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
