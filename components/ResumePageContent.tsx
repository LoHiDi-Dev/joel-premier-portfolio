"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION, fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import {
  BODY_CLASS,
  CONTENT_MAX_EDITORIAL,
  HEADING_MAX_EDITORIAL,
  LABEL_CLASS,
  SECTION_HEADING_CLASS,
} from "@/components/case-study/constants";
import { ExperienceAccordion } from "@/components/ExperienceAccordion";
import {
  CORE_COMPETENCIES_FLAT,
  EDUCATION,
  PROFESSIONAL_SUMMARY_HEADLINE,
  PROFESSIONAL_SUMMARY_PARAGRAPHS,
  TOOLS_AND_TECHNOLOGY,
} from "@/lib/resume-data";

const GRAY_BLEED_CLASS =
  "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-12 border-t border-[#e5e5e5] bg-[#f7f6f4] px-3 pt-8 pb-10 sm:mt-16 sm:px-6 sm:pt-10 sm:pb-12 md:mt-20 md:px-16 md:pt-12 md:pb-14";


export function ResumePageContent() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <>
      {/* [1] Hero — animate on mount (above fold) */}
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          className="max-w-[860px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: MOTION.easeOut }}
        >
          <h1
            id="resume-heading"
            className="text-[32px] font-medium leading-[0.98] tracking-[-1.1px] text-[#171717] sm:text-[44px] md:text-[64px] md:tracking-[-1.6px]"
          >
            Resume
          </h1>
          <p className="mt-4 max-w-[46rem] text-[14px] leading-[1.6] text-[#525252] sm:mt-5 sm:text-[16px] sm:leading-[1.58] md:text-[20px] md:leading-[1.5]">
            A concise overview of my experience across product design, systems
            thinking, UX strategy, and delivery.
          </p>
        </motion.div>
      </div>

      {/* [2] GRAY BLEED — Professional Summary */}
      <motion.div
        className={GRAY_BLEED_CLASS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainerVariants(0.08)}
      >
        <motion.div
          className="mx-auto max-w-[1280px] grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12"
          variants={staggerContainerVariants(0.06)}
        >
          <motion.p className={LABEL_CLASS} variants={fadeUpVariants(reducedMotion, 10)}>
            PROFESSIONAL SUMMARY
          </motion.p>
          <motion.div
            className={`mt-5 min-w-0 space-y-6 md:mt-0 ${CONTENT_MAX_EDITORIAL}`}
            variants={staggerContainerVariants(0.06)}
          >
            <motion.h2
              className={`whitespace-pre-line ${SECTION_HEADING_CLASS} ${HEADING_MAX_EDITORIAL}`}
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              {PROFESSIONAL_SUMMARY_HEADLINE}
            </motion.h2>
            {PROFESSIONAL_SUMMARY_PARAGRAPHS.map((paragraph, index) => (
              <motion.p
                key={`summary-p-${index}`}
                className={index > 0 ? "mt-5 " + BODY_CLASS : BODY_CLASS}
                variants={fadeUpVariants(reducedMotion, 10)}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* [3] WHITE — Professional Experience */}
      <motion.div
        className="mx-auto max-w-[1280px] mt-12 pt-10 sm:mt-16 md:mt-20 md:pt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainerVariants(0.08)}
      >
        <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12">
          <motion.p className={LABEL_CLASS} variants={fadeUpVariants(reducedMotion, 10)}>
            PROFESSIONAL EXPERIENCE
          </motion.p>
          <motion.div className="mt-5 min-w-0 max-w-[52rem] md:mt-0" variants={fadeUpVariants(reducedMotion, 10)}>
            <ExperienceAccordion />
          </motion.div>
        </div>
      </motion.div>

      {/* [4+5] GRAY BLEED — Core Competencies + Education */}
      <motion.div
        className={GRAY_BLEED_CLASS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainerVariants(0.08)}
      >
        <div className="mx-auto max-w-[1280px]">
          {/* Core Competencies */}
          <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12">
            <motion.p className={LABEL_CLASS} variants={fadeUpVariants(reducedMotion, 10)}>
              CORE COMPETENCIES
            </motion.p>
            <motion.ul
              className="mt-5 min-w-0 max-w-[52rem] flex flex-wrap gap-3 md:mt-0"
              role="list"
              variants={staggerContainerVariants(0.06)}
            >
              {CORE_COMPETENCIES_FLAT.map((item) => (
                <motion.li key={item} variants={fadeUpVariants(reducedMotion, 10)}>
                  <span className="inline-flex rounded-full border border-[#e5e5e5] bg-white px-4 py-2.5 text-[14px] font-normal leading-[1.3] text-[#171717] sm:text-[15px]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Tools & Technology */}
          <div className="mt-12 border-t border-[#e5e5e5] pt-10 sm:mt-16 md:mt-20 md:pt-12">
            <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12">
              <p className={LABEL_CLASS}>TOOLS & TECHNOLOGY</p>
              <div className="mt-5 min-w-0 max-w-[52rem] md:mt-0">
                <ul className="space-y-6 sm:space-y-7" role="list">
                  {TOOLS_AND_TECHNOLOGY.map((group) => (
                    <li key={group.label}>
                      <p
                        className={
                          group.muted
                            ? "text-[13px] font-medium leading-[1.4] text-[#737373] sm:text-[14px]"
                            : "text-[14px] font-semibold leading-[1.4] text-[#171717] sm:text-[15px]"
                        }
                      >
                        {group.label}
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap gap-3"
                        role="list"
                      >
                        {group.items.map((item) => (
                          <li key={item}>
                            <span
                              className={
                                group.muted
                                  ? "inline-flex rounded-full border border-[#e5e5e5] bg-white px-4 py-2.5 text-[13px] font-normal leading-[1.3] text-[#525252] sm:text-[14px]"
                                  : "inline-flex rounded-full border border-[#e5e5e5] bg-white px-4 py-2.5 text-[14px] font-normal leading-[1.3] text-[#171717] sm:text-[15px]"
                              }
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <motion.div
            className="mt-12 border-t border-[#e5e5e5] pt-10 sm:mt-16 md:mt-20 md:pt-12"
            variants={staggerContainerVariants(0.06)}
          >
            <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12">
              <motion.p className={LABEL_CLASS} variants={fadeUpVariants(reducedMotion, 10)}>
                EDUCATION
              </motion.p>
              <div className="mt-5 min-w-0 max-w-[52rem] md:mt-0">
                {/* M.A. — full width */}
                <motion.article
                  className="rounded-[20px] border border-[#e8e8e8] bg-[#f6f5f4] px-5 py-6 transition-colors duration-200 hover:bg-[#f0eeec] sm:px-6 sm:py-7"
                  variants={fadeUpVariants(reducedMotion, 10)}
                >
                  <p className="accordion-number text-[10px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[11px]">
                    01
                  </p>
                  <h3 className="mt-4 text-[18px] font-semibold leading-[1.12] tracking-[-0.35px] text-[#171717] sm:text-[20px] md:text-[22px]">
                    {EDUCATION[0].degree}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.62] text-[#3d3d3d] sm:leading-[1.62] md:text-[15px]">
                    {EDUCATION[0].institution}
                  </p>
                  {EDUCATION[0].dates ? (
                    <p className="mt-2 text-[13px] leading-[1.5] text-[#737373]">
                      {EDUCATION[0].dates}
                    </p>
                  ) : null}
                </motion.article>
                {/* B.A. and A.S. — two cards */}
                <motion.div
                  className="mt-4 grid gap-4 sm:grid-cols-2 md:gap-6"
                  variants={staggerContainerVariants(0.06)}
                >
                  {EDUCATION.slice(1).map((entry, index) => (
                    <motion.article
                      key={`${entry.degree}-${entry.institution}`}
                      className="rounded-[20px] border border-[#e8e8e8] bg-[#fafafa] px-5 py-6 transition-colors duration-200 hover:bg-[#f5f5f5] sm:px-6 sm:py-7"
                      variants={fadeUpVariants(reducedMotion, 10)}
                    >
                      <p className="accordion-number text-[10px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[11px]">
                        0{index + 2}
                      </p>
                      <h3 className="mt-4 text-[18px] font-semibold leading-[1.12] tracking-[-0.35px] text-[#171717] sm:text-[20px] md:text-[22px]">
                        {entry.degree}
                      </h3>
                      <p className="mt-4 text-[14px] leading-[1.62] text-[#3d3d3d] sm:leading-[1.62] md:text-[15px]">
                        {entry.institution}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
