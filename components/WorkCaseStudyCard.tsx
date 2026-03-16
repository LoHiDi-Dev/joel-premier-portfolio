"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { fadeUpVariants, MOTION, staggerContainerVariants } from "@/lib/motion";

interface WorkCaseStudyCardProps {
  project: Project;
  variant?: "feature" | "compact";
  reverse?: boolean;
  priority?: boolean;
}

export function WorkCaseStudyCard({
  project,
  variant = "feature",
  reverse = false,
  priority = false,
}: WorkCaseStudyCardProps) {
  const isFeature = variant === "feature";
  const reducedMotion = Boolean(useReducedMotion());
  const isComingSoon = project.status === "coming-soon";

  return (
    <motion.article
      aria-label={
        isComingSoon ? `${project.title} case study — coming soon` : undefined
      }
      className={
        isFeature
          ? "grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-12 md:items-center md:gap-x-10 md:gap-y-6"
          : "flex h-full flex-col gap-4 sm:gap-6"
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariants(reducedMotion, 10)}
    >
      <motion.div
        className={`relative overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] shadow-[0_8px_24px_rgba(23,23,23,0.04)] ${
          isFeature
            ? `aspect-[16/11] w-full md:col-span-7 ${reverse ? "md:order-1" : "md:order-2"}`
            : "aspect-[16/11] w-full"
        }`}
        variants={fadeUpVariants(reducedMotion, 10)}
      >
        <motion.div
          className="relative h-full w-full"
          whileHover={
            reducedMotion || isComingSoon
              ? undefined
              : { scale: MOTION.scale.image }
          }
          transition={{ duration: MOTION.duration.base, ease: MOTION.easeOut }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority={priority}
            className="object-cover opacity-90"
            sizes={
              isFeature
                ? "(max-width: 768px) 100vw, 58vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
          aria-hidden="true"
        />

        {isComingSoon && (
          <div className="pointer-events-none absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.8px] text-[#525252] backdrop-blur">
              Coming Soon
            </span>
          </div>
        )}
      </motion.div>

      <motion.div
        className={`flex flex-1 flex-col ${
          isFeature
            ? `md:col-span-5 ${reverse ? "md:order-2" : "md:order-1"}`
            : ""
        }`}
        variants={staggerContainerVariants(0.06)}
      >
        <div className="flex flex-col">
          <motion.div
            className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1"
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            <motion.h3
              className={`font-medium tracking-[-0.35px] text-[#171717] ${
                isFeature
                  ? "text-[28px] leading-[1.02] sm:text-[34px] md:text-[44px] md:tracking-[-0.9px]"
                  : "text-[24px] leading-[1.06] sm:text-[28px] md:text-[32px] md:tracking-[-0.7px]"
              }`}
            >
              {project.title}
            </motion.h3>
            {!project.hideCategory && (
              <span
                className={`text-[14px] text-[#525252] ${
                  isFeature ? "sm:text-[15px] md:text-[18px]" : "sm:text-[14px] md:text-[16px]"
                }`}
              >
                {project.category}
              </span>
            )}
          </motion.div>

          <motion.p
            className="mb-5 text-[12px] font-medium uppercase tracking-[1.8px] text-[#525252] sm:text-[12px] md:text-[13px]"
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            Role <span className="font-semibold">·</span> {project.role}
          </motion.p>

          <motion.p
            className={`whitespace-pre-line text-[14px] leading-[1.65] text-[#3d3d3d] ${
              isFeature
                ? "mb-7 max-w-[32rem] sm:text-[15px] sm:leading-[1.62] md:max-w-[36rem] md:text-[18px] md:leading-[1.62]"
                : "mb-6 max-w-[32rem] sm:text-[14px] sm:leading-[1.6] md:max-w-[36rem] md:text-[16px] md:leading-[1.58]"
            }`}
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            {project.description}
          </motion.p>
        </div>

        {!isComingSoon && (
          <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
            <Link
              href={`/work/${project.slug}`}
              className={`group inline-flex items-center justify-center gap-1 rounded-full border border-[#171717] bg-white font-medium text-[#171717] transition-colors duration-200 hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 ${
                isFeature
                  ? "h-11 px-4 text-xs sm:h-10 sm:gap-2 sm:px-6 sm:text-[13px] md:h-12 md:px-7 md:text-sm"
                  : "h-11 px-4 text-xs sm:h-10 sm:gap-2 sm:px-6 sm:text-[13px] md:h-14 md:px-8 md:text-base"
              }`}
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
        )}
      </motion.div>
    </motion.article>
  );
}
