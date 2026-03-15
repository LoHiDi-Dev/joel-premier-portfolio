"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";

export function CTASection() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.section
      id="about"
      className="bg-[#171717] px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
      aria-labelledby="cta-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariants(reducedMotion, 20, 0.52)}
    >
      <motion.div
        className="mx-auto max-w-[896px] text-center"
        variants={staggerContainerVariants(0.1)}
      >
        <motion.h2
          id="cta-heading"
          className="text-[28px] font-medium leading-[0.95] tracking-[-1.1px] text-white sm:text-4xl md:text-6xl"
          variants={fadeUpVariants(reducedMotion)}
        >
          Let&apos;s design better
          <br />
          digital experiences
        </motion.h2>

        <motion.p
          className="mx-auto mt-4 max-w-[720px] whitespace-pre-line text-[14px] leading-[1.6] text-[#c2c2c2] sm:mt-6 sm:text-base sm:leading-[1.55] md:max-w-[820px] md:text-xl md:leading-[1.5]"
          variants={fadeUpVariants(reducedMotion)}
        >
          {"Open to senior product design roles and select consulting engagements\nwhere thoughtful design brings more clarity, consistency,\nand confidence to complex products and services."}
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-4"
          variants={staggerContainerVariants(0.08)}
        >
          <motion.div variants={fadeUpVariants(reducedMotion)}>
            <Link
              href="/contact"
              className="group flex h-8 items-center justify-center gap-1 rounded-full bg-white px-4 text-[11px] font-medium text-[#171717] transition-opacity duration-200 hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
            >
              Get in Touch
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </motion.div>
          <motion.div variants={fadeUpVariants(reducedMotion)}>
            <Link
              href="/resume"
              className="group flex h-8 items-center justify-center gap-1 rounded-full border border-white bg-transparent px-4 text-[11px] font-medium text-white transition-colors duration-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
            >
              View Resume
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
