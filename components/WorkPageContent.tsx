"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WorkCaseStudyCard } from "@/components/WorkCaseStudyCard";
import { PRIMARY_CASE_STUDIES } from "@/lib/projects";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";

export function WorkPageContent() {
  const reducedMotion = Boolean(useReducedMotion());
  const introRef = useRef<HTMLElement | null>(null);
  const allCaseStudies = PRIMARY_CASE_STUDIES.slice(0, 4);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"],
  });

  const introScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reducedMotion ? 1 : 1.04],
  );
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reducedMotion ? 1 : 0.72],
  );

  return (
    <main>
      <section
        ref={introRef}
        className="px-3 pt-12 pb-10 sm:px-6 sm:pt-20 sm:pb-14 md:px-16 md:pt-24 md:pb-20"
        aria-labelledby="work-heading"
      >
        <motion.div
          className="mx-auto max-w-[1280px]"
          style={reducedMotion ? undefined : { scale: introScale, opacity: introOpacity }}
        >
          <motion.div
            className="max-w-[860px]"
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants(0.08)}
          >
            <motion.h1
              id="work-heading"
              className="text-[32px] font-medium leading-[0.98] tracking-[-1.1px] text-[#171717] sm:text-[44px] md:text-[64px] md:tracking-[-1.6px]"
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              Work
            </motion.h1>
            <motion.p
              className="mt-4 max-w-[46rem] text-[14px] leading-[1.6] text-[#525252] sm:mt-5 sm:text-[16px] sm:leading-[1.58] md:text-[20px] md:leading-[1.5]"
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              Enterprise product design across e-commerce,
              healthcare, and travel — building accessible, scalable experiences
              that deliver measurable impact.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-12 border-t border-[#e5e5e5] pt-8 sm:mt-16 sm:pt-10 md:mt-20 md:pt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants(0.08)}
          >
            <motion.div
              className="mb-8 sm:mb-10 md:mb-12"
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[12px]">
                Selected Case Studies
              </p>
            </motion.div>

            <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
              {allCaseStudies.map((project, index) => (
                <WorkCaseStudyCard
                  key={project.slug}
                  project={project}
                  variant="feature"
                  reverse={index % 2 === 1}
                  priority={index === 0}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
