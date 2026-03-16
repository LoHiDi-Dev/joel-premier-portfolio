"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import {
  BODY_CLASS,
  CONTENT_MAX_EDITORIAL,
  HEADING_MAX_EDITORIAL,
  LABEL_CLASS,
  SECTION_HEADING_CLASS,
  SECTION_MAX,
} from "@/components/case-study/constants";

const PRINCIPLES = [
  { number: "01", title: "Clarity over noise", description: "I reduce unnecessary complexity so the most important actions, content, and decisions are easier to understand and act on." },
  { number: "02", title: "Systems before screens", description: "I look beyond individual interfaces to shape patterns, structures, and shared foundations that improve consistency as products evolve." },
  { number: "03", title: "Collaboration in the work", description: "I partner closely with product, engineering, and stakeholders so design decisions hold up in delivery, not just in review." },
  { number: "04", title: "Real-world usability", description: "I design for how people actually move through complex experiences, with attention to accessibility, context, and practical constraints." },
] as const;

export function AboutPageContent() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <>
      <section
        className="px-3 pt-12 pb-10 sm:px-6 sm:pt-20 sm:pb-12 md:px-16 md:pt-24 md:pb-14"
        aria-labelledby="about-heading"
      >
      <div className="mx-auto max-w-[1280px]">
        {/* Hero */}
        <motion.div
          className="max-w-[860px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants(0.08)}
        >
          <motion.h1
            id="about-heading"
            className="text-[32px] font-medium leading-[0.98] tracking-[-1.1px] text-[#171717] sm:text-[44px] md:text-[64px] md:tracking-[-1.6px]"
            variants={fadeUpVariants(reducedMotion, 16)}
          >
            About
          </motion.h1>
          <motion.p
            className="mt-4 max-w-[46rem] text-[14px] leading-[1.6] text-[#525252] sm:mt-5 sm:text-[16px] sm:leading-[1.58] md:text-[20px] md:leading-[1.5]"
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            Senior Product Designer focused on complex digital{"\u00A0"}
            products,
            <br className="hidden sm:block" />
            systems thinking, accessibility, and outcomes that matter.
          </motion.p>
        </motion.div>
      </div>

      {/* APPROACH section — full bleed outside max-width container */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 w-screen border-t border-[#e5e5e5] bg-[#f7f6f4] px-3 pt-8 pb-10 sm:mt-16 sm:px-6 sm:pt-10 sm:pb-12 md:mt-20 md:px-16 md:pt-12 md:pb-14">
        <motion.div
          className="mx-auto max-w-[1280px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants(0.08)}
        >
          <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12">
            <motion.p
              className={LABEL_CLASS}
              variants={fadeUpVariants(reducedMotion, 10)}
            >
              APPROACH
            </motion.p>
            <motion.div
              className="mt-5 min-w-0 space-y-6 md:mt-0"
              variants={staggerContainerVariants(0.06)}
            >
              <motion.h2
                className={`${SECTION_HEADING_CLASS} ${HEADING_MAX_EDITORIAL}`}
                variants={fadeUpVariants(reducedMotion, 16)}
              >
                Designing for clarity in complex
                <br />
                product environments.
              </motion.h2>
              <div className={`space-y-5 ${CONTENT_MAX_EDITORIAL}`}>
                <motion.p
                  className={BODY_CLASS}
                  variants={fadeUpVariants(reducedMotion, 10)}
                >
                  I design digital products with a focus on structure,
                  usability, and meaningful impact — helping make demanding
                  experiences easier to understand, easier to use, and more
                  effective for the people navigating them.
                </motion.p>
                <motion.p
                  className={BODY_CLASS}
                  variants={fadeUpVariants(reducedMotion, 10)}
                >
                  Across e-commerce, healthcare, travel, and enterprise
                  products, I&apos;ve led work spanning discovery, flows,
                  navigation, shared systems, and close product-engineering
                  partnership. I care deeply about reducing friction,
                  improving access, and creating experiences that hold up
                  under real-world complexity.
                </motion.p>
                <motion.p
                  className={BODY_CLASS}
                  variants={fadeUpVariants(reducedMotion, 10)}
                >
                  I do my best work in close partnership with product,
                  engineering, content, and leadership — connecting user
                  needs to business goals through a steady, thoughtful
                  approach to delivery.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1280px]">
        {/* HOW I WORK */}
        <motion.div
          className="mx-auto max-w-[1280px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants(0.08)}
        >
          <div className="mt-12 pt-0 sm:mt-16 md:mt-20">
            <motion.p
              className="mb-5 text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:mb-6 sm:text-[12px]"
              variants={fadeUpVariants(reducedMotion, 10)}
            >
              HOW I WORK
            </motion.p>
            <motion.h2
              className="text-[28px] font-medium leading-[1.04] tracking-[-0.8px] text-[#171717] sm:text-[34px] md:text-[44px] md:tracking-[-1.1px]"
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              Principles that shape how I design and deliver.
            </motion.h2>
            <motion.p
              className="mt-6 max-w-[36rem] text-[15px] leading-[1.72] text-[#3d3d3d] sm:mt-7 sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]"
              variants={fadeUpVariants(reducedMotion, 10)}
            >
              I turn complexity into structure, simplify what matters most,
              and work closely with product and engineering to deliver clear,
              scalable experiences grounded in real-world execution.
            </motion.p>
            <motion.div
              className="mt-10 grid gap-4 sm:mt-12 md:mt-14 md:grid-cols-2 md:gap-6"
              variants={staggerContainerVariants(0.06)}
            >
              {PRINCIPLES.map((card) => (
                <PrincipleAccordionCard key={card.number} card={card} />
              ))}
            </motion.div>
            <motion.p
              className="mt-14 max-w-[46rem] text-[13px] leading-[1.6] text-[#525252] sm:mt-16 sm:text-[14px] md:mt-20"
              variants={fadeUpVariants(reducedMotion, 10)}
            >
              This approach shapes how I work — especially where complexity, scale, and delivery alignment matter.
            </motion.p>
          </div>
        </motion.div>
      </div>
      </section>

      {/* Dark endcap — no scroll animation per requirements */}
      <section
        className="border-t border-[#242424] bg-[#171717] px-4 py-16 text-white sm:px-8 sm:py-20 md:px-12 md:py-24"
        aria-labelledby="about-work-endcap-title"
      >
        <div className={`mx-auto ${SECTION_MAX}`}>
          <div className="mx-auto max-w-[896px] text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[1.8px] text-white/72 sm:text-sm">
              SELECTED WORK
            </p>
            <h2
              id="about-work-endcap-title"
              className="mt-6 max-w-[20ch] text-[42px] font-medium leading-[0.94] tracking-[-1.3px] text-white sm:text-[56px] sm:tracking-[-1.8px] md:text-[72px] md:tracking-[-2px]"
            >
              The work behind{" "}
              <br className="hidden sm:block" />
              the thinking
            </h2>
            <p className="mx-auto mt-5 max-w-[36rem] whitespace-pre-line text-[14px] leading-[1.6] text-[#c7c7c7] sm:mt-6 sm:text-[16px] sm:leading-[1.58] md:max-w-[40rem] md:text-[18px] md:leading-[1.56] [text-wrap:balance]">
              A selection of product design case studies focused{"\u00A0"}
              on{"\u00A0"}structure,
              <br className="hidden sm:block" />
              usability, and delivery across complex systems.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-4">
              <Link
                href="/work"
                className="group flex h-11 items-center justify-center gap-1 rounded-full bg-white px-4 text-[11px] font-medium text-[#171717] transition-opacity duration-200 hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                View Case Studies
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="group flex h-11 items-center justify-center gap-1 rounded-full border border-white bg-transparent px-4 text-[11px] font-medium text-white transition-colors duration-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                Get in Touch
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PrincipleAccordionCard({
  card,
}: {
  card: { number: string; title: string; description: string };
}) {
  const [open, setOpen] = useState(false);
  const isFirst = card.number === "01";

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 },
        },
      }}
      className={`rounded-[20px] border border-[#e8e8e8] ${
        isFirst ? "bg-[#f6f5f4]" : "bg-[#fafafa]"
      }`}
    >
      {/* Mobile: accordion button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-3 px-5 py-5 text-left md:hidden"
        aria-expanded={open}
      >
        <div>
          <p className="accordion-number mb-2 hidden text-[10px] font-semibold uppercase tracking-[1.8px] text-[#525252] md:block">
            {card.number}
          </p>
          <h3 className="text-[18px] font-semibold leading-[1.12] tracking-[-0.35px] text-[#171717]">
            {card.title}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-1 flex-shrink-0 text-[18px] leading-none text-[#525252]"
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </button>

      {/* Mobile: collapsible description */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.18 },
            }}
            className="overflow-hidden md:hidden"
          >
            <p className="px-5 pb-5 text-[14px] leading-[1.62] text-[#3d3d3d]">
              {card.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop: fully expanded */}
      <div className="hidden px-6 py-7 md:block">
        <p className="accordion-number text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252]">
          {card.number}
        </p>
        <h3 className="mt-4 text-[20px] font-semibold leading-[1.12] tracking-[-0.35px] text-[#171717] md:text-[22px]">
          {card.title}
        </h3>
        <p className="mt-4 text-[14px] leading-[1.62] text-[#3d3d3d] md:text-[15px]">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}
