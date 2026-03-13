"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectFeatureCard } from "@/components/ProjectFeatureCard";
import { FEATURED_PROJECTS } from "@/lib/projects";
import { fadeUpVariants } from "@/lib/motion";

export function HomeFeaturedWorkSection() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section
      id="work"
      className="px-3 pt-12 pb-8 sm:px-6 sm:pt-20 sm:pb-12 md:px-16 md:pt-24 md:pb-12"
      aria-labelledby="featured-work-heading"
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          className="mb-6 sm:mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants(reducedMotion, 16)}
        >
          <SectionHeading
            headingId="featured-work-heading"
            title="Featured Work"
            description={'Selected case studies across e-commerce, healthcare,\ntravel, and enterprise product design.'}
          />
        </motion.div>

        <div className="flex flex-col gap-10 sm:gap-16 md:gap-24">
          {FEATURED_PROJECTS.slice(0, 2).map((project) => (
            <ProjectFeatureCard key={project.slug} project={project} />
          ))}
        </div>

        <motion.div
          className="mt-8 text-center sm:mt-12 md:mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants(reducedMotion, 16)}
        >
          <Link
            href="/work"
            className="group inline-flex h-8 items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity duration-200 hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            View All Work
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
