"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
  const [toolsOpenIndex, setToolsOpenIndex] = useState<number | null>(null);
  const [toolsActiveTab, setToolsActiveTab] = useState(0);

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
            className="mt-5 min-w-0 space-y-6 md:mt-0 max-w-[52rem]"
            variants={staggerContainerVariants(0.06)}
          >
            <motion.h2
              className={`whitespace-pre-line ${SECTION_HEADING_CLASS}`}
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              {PROFESSIONAL_SUMMARY_HEADLINE}
            </motion.h2>
            {PROFESSIONAL_SUMMARY_PARAGRAPHS.map((paragraph, index) => (
              <motion.p
                key={`summary-p-${index}`}
                className={`${index > 0 ? "mt-5 " : ""}${BODY_CLASS} whitespace-pre-line`}
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
        <div className="mx-auto max-w-[1280px] pb-10 md:pb-14">
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
        </div>

        {/* Tools & Technology — full-bleed white band */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-2 w-screen bg-white px-3 pt-12 pb-10 sm:px-6 md:px-16 md:pt-14 md:pb-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12">
              <p className={LABEL_CLASS}>TOOLS & TECHNOLOGY</p>
              <div className="mt-5 min-w-0 max-w-[52rem] md:mt-0">
                {/* Mobile: accordion */}
                <div className="md:hidden">
                  {TOOLS_AND_TECHNOLOGY.map((group, index) => {
                    const isOpen = toolsOpenIndex === index;
                    return (
                      <div key={group.label} className={index > 0 ? "mt-3" : ""}>
                        <button
                          type="button"
                          onClick={() =>
                            setToolsOpenIndex(isOpen ? null : index)
                          }
                          className="w-full text-left"
                          aria-expanded={isOpen}
                          aria-controls={`tools-tech-${index}`}
                        >
                          <div className="flex items-center justify-between gap-4 rounded-[16px] border border-[#e5e5e5] bg-white px-4 py-4 transition-colors duration-200 hover:bg-[#f7f6f4] active:bg-[#f0eeec]">
                            <span
                              className={
                                group.muted
                                  ? "text-[13px] font-medium leading-[1.4] text-[#737373] sm:text-[14px]"
                                  : "text-[14px] font-semibold leading-[1.4] text-[#171717] sm:text-[15px]"
                              }
                            >
                              {group.label}
                            </span>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{
                                duration: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="flex-shrink-0 text-[18px] leading-none text-[#525252]"
                              aria-hidden="true"
                            >
                              ↓
                            </motion.span>
                          </div>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`tools-tech-${index}`}
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                height: {
                                  duration: 0.3,
                                  ease: [0.22, 1, 0.36, 1],
                                },
                                opacity: { duration: 0.2 },
                              }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-wrap gap-3 px-4 pb-4 pt-3">
                                {group.items.map((item) => (
                                  <span
                                    key={item}
                                    className={
                                      group.muted
                                        ? "inline-flex rounded-full border border-[#e5e5e5] bg-white px-4 py-2.5 text-[13px] font-normal leading-[1.3] text-[#525252] sm:text-[14px]"
                                        : "inline-flex rounded-full border border-[#e5e5e5] bg-white px-4 py-2.5 text-[14px] font-normal leading-[1.3] text-[#171717] sm:text-[15px]"
                                    }
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
                {/* Desktop: 4-tab layout — editorial, minimal */}
                <div className="hidden md:block">
                  <div
                    className="flex flex-wrap gap-x-8 gap-y-0 border-b border-[#e5e5e5]"
                    role="tablist"
                    aria-label="Tools & Technology groups"
                  >
                    {TOOLS_AND_TECHNOLOGY.map((group, index) => {
                      const isActive = toolsActiveTab === index;
                      const isMutedLabel = group.muted;
                      return (
                        <button
                          key={group.label}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-controls={`tools-tabpanel-${index}`}
                          id={`tools-tab-${index}`}
                          onClick={() => setToolsActiveTab(index)}
                          className={`relative border-b-2 pb-3 pt-0 text-[14px] transition-colors duration-150 sm:text-[15px] ${
                            isActive
                              ? isMutedLabel
                                ? "-mb-px border-[#525252] font-semibold text-[#525252]"
                                : "-mb-px border-[#171717] font-semibold text-[#171717]"
                              : "-mb-[1px] border-transparent font-normal text-[#737373] hover:text-[#525252]"
                          }`}
                        >
                          {group.label}
                        </button>
                      );
                    })}
                  </div>
                  <div
                    id={`tools-tabpanel-${toolsActiveTab}`}
                    role="tabpanel"
                    aria-labelledby={`tools-tab-${toolsActiveTab}`}
                    className="mt-5 flex flex-wrap gap-3"
                  >
                    {TOOLS_AND_TECHNOLOGY[toolsActiveTab].items.map((item) => (
                      <span
                        key={item}
                        className={
                          TOOLS_AND_TECHNOLOGY[toolsActiveTab].muted
                            ? "inline-flex rounded-full border border-[#e5e5e5] bg-white px-4 py-2.5 text-[13px] font-normal leading-[1.3] text-[#525252] sm:text-[14px]"
                            : "inline-flex rounded-full border border-[#e5e5e5] bg-white px-4 py-2.5 text-[14px] font-normal leading-[1.3] text-[#171717] sm:text-[15px]"
                        }
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px]">
          {/* Education */}
          <motion.div
            className="mt-8 pt-10 sm:mt-10 md:mt-12 md:pt-12"
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
                  <h3 className="text-[18px] font-semibold leading-[1.12] tracking-[-0.35px] text-[#171717] sm:text-[20px] md:text-[22px]">
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
                  {EDUCATION.slice(1).map((entry) => (
                    <motion.article
                      key={`${entry.degree}-${entry.institution}`}
                      className="rounded-[20px] border border-[#e8e8e8] bg-[#fafafa] px-5 py-6 transition-colors duration-200 hover:bg-[#f5f5f5] sm:px-6 sm:py-7"
                      variants={fadeUpVariants(reducedMotion, 10)}
                    >
                      <h3 className="text-[18px] font-semibold leading-[1.12] tracking-[-0.35px] text-[#171717] sm:text-[20px] md:text-[22px]">
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
