 "use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudySection as CaseStudySectionData } from "@/lib/projects";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";

interface CaseStudySectionProps {
  title: string;
  content: CaseStudySectionData;
  tone?: "default" | "muted";
}

export function CaseStudySection({
  title,
  content,
  tone = "default",
}: CaseStudySectionProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.section
      className={`border-t border-[#ebebeb] ${
        tone === "muted" ? "bg-[#f7f6f4]" : "bg-white"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.06)}
    >
      <div className="mx-auto grid max-w-[1280px] gap-6 px-4 py-18 sm:px-8 sm:py-22 md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-12 md:px-12 md:py-26">
        <motion.div variants={fadeUpVariants(reducedMotion, 16)}>
          <h2 className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px]">
            {title}
          </h2>
        </motion.div>

        <motion.div
          className="space-y-5 sm:space-y-6"
          variants={staggerContainerVariants(0.06)}
        >
          {content.paragraphs?.map((paragraph) => (
            <motion.p
              key={paragraph}
              className="max-w-[46rem] text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]"
              variants={fadeUpVariants(reducedMotion, 10)}
            >
              {paragraph}
            </motion.p>
          ))}

          {content.bullets && content.bullets.length > 0 && (
            <motion.ul
              className="grid gap-4 pt-1 sm:grid-cols-2 sm:gap-5"
              variants={staggerContainerVariants(0.06)}
            >
              {content.bullets.map((bullet, index) => (
                <motion.li
                  key={bullet}
                  className="rounded-[20px] border border-[#e8e8e8] bg-[#fafafa] px-5 py-5 sm:px-6 sm:py-6"
                  variants={fadeUpVariants(reducedMotion, 10)}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.65] text-[#4c4c4c] sm:text-[14px] sm:leading-[1.66] md:text-[15px] md:leading-[1.62]">
                    {bullet}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
