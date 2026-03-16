"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";

const CONTACT_ITEMS = [
  { label: "PHONE", value: "+1 214 243 4649", href: "tel:+12142434649", ariaLabel: "Call +1 214 243 4649" },
  { label: "EMAIL", value: "jojo.s.1er@gmail.com", href: "mailto:jojo.s.1er@gmail.com", ariaLabel: "Email jojo.s.1er@gmail.com" },
  { label: "LOCATION", value: "Irving, TX", href: null, ariaLabel: null },
  { label: "AVAILABILITY", value: "Open to remote and hybrid opportunities", href: null, ariaLabel: null },
  { label: "CONSULTING", value: "Open to international consulting", href: null, ariaLabel: null },
] as const;

const VALUE_ITEMS = [
  { title: "Enterprise Product Design", description: "Product, platform, and service work where usability, decision-making, and business priorities need to align across the full experience." },
  { title: "Design Systems & Accessibility", description: "Teams investing in shared foundations, consistent interfaces, and inclusive patterns that improve quality across products and teams." },
  { title: "Cross-Functional Collaboration", description: "Environments where design, engineering, content, and analytics work closely to turn ambiguity into decisions teams can ship." },
] as const;

export function ContactPageContent() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section
      className="px-3 pt-12 pb-0 sm:px-6 sm:pt-20 sm:pb-0 md:px-16 md:pt-24 md:pb-0"
      aria-labelledby="contact-heading"
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
            id="contact-heading"
            className="text-[32px] font-medium leading-[0.98] tracking-[-1.1px] text-[#171717] sm:text-[44px] md:text-[64px] md:tracking-[-1.6px]"
            variants={fadeUpVariants(reducedMotion, 16)}
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            className="mt-4 max-w-[46rem] whitespace-pre-line text-[15px] leading-[1.6] text-[#525252] sm:mt-5 sm:text-[16px] sm:leading-[1.58] md:text-[20px] md:leading-[1.5]"
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            Open to senior product design roles and select consulting engagements focused on clarity, usability, and thoughtful execution.
          </motion.p>
        </motion.div>

        <div className="mt-12 space-y-0 pt-8 sm:mt-16 sm:pt-10 md:mt-20 md:pt-12">
          {/* GET IN TOUCH */}
          <motion.div
            className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-b border-[#e5e5e5] bg-[#f7f6f4] px-3 py-8 sm:px-6 sm:py-10 md:px-16 md:py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainerVariants(0.08)}
          >
            <motion.div className="mx-auto max-w-[1280px]" variants={fadeUpVariants(reducedMotion, 10)}>
              <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12">
                <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[12px]">
                  GET IN TOUCH
                </p>
                <motion.ul
                  className="mt-5 space-y-6 sm:space-y-8 md:mt-0"
                  variants={staggerContainerVariants(0.06)}
                >
                  {CONTACT_ITEMS.map((item) => {
                    const isPrimary = item.label === "PHONE" || item.label === "EMAIL";
                    const isEmail = item.label === "EMAIL";
                    return (
                      <motion.li key={item.label} variants={fadeUpVariants(reducedMotion, 10)}>
                        <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[12px]">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className={isEmail
                              ? "mt-2 block max-w-[36rem] text-[16px] font-medium leading-[1.7] text-[#171717] underline underline-offset-2 decoration-[#525252]/40 transition-colors hover:text-[#404040] hover:decoration-[#171717] focus:text-[#404040] focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:text-[17px] sm:leading-[1.68] md:text-[18px] md:leading-[1.62]"
                              : `mt-2 block max-w-[36rem] leading-[1.7] text-[#171717] transition-colors hover:text-[#404040] focus:text-[#404040] focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:leading-[1.68] md:leading-[1.62] ${isPrimary ? "text-[16px] font-medium sm:text-[17px] md:text-[18px]" : "text-[15px] sm:text-[16px] md:text-[18px]"}`}
                            aria-label={item.ariaLabel ?? undefined}
                            {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className={`mt-2 max-w-[36rem] leading-[1.7] text-[#171717] sm:leading-[1.68] md:leading-[1.62] ${isPrimary ? "text-[16px] font-medium sm:text-[17px] md:text-[18px]" : "text-[15px] sm:text-[16px] md:text-[18px]"}`}>
                            {item.value}
                          </p>
                        )}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>

          {/* BEST FIT */}
          <motion.div
            className="py-8 sm:py-10 md:py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainerVariants(0.08)}
          >
            <motion.div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12" variants={fadeUpVariants(reducedMotion, 10)}>
              <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[12px]">
                BEST FIT
              </p>
              <motion.ul
                className="mt-5 space-y-0 md:mt-0"
                role="list"
                variants={staggerContainerVariants(0.06)}
              >
                {VALUE_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.title}
                    role="listitem"
                    className={`flex gap-4 py-6 ${index > 0 ? "border-t border-[#e5e5e5]" : ""}`}
                    variants={fadeUpVariants(reducedMotion, 10)}
                  >
                    <div>
                      <h3 className="text-[16px] font-semibold leading-[1.18] tracking-[-0.2px] text-[#171717] sm:text-[18px] md:text-[20px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[32rem] text-[14px] leading-[1.62] text-[#525252] sm:text-[15px] md:text-[16px]">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* LET'S TALK */}
          <motion.div
            className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-t border-[#e5e5e5] bg-[#f7f6f4] px-3 py-8 sm:px-6 sm:py-10 md:px-16 md:py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainerVariants(0.08)}
          >
            <motion.div className="mx-auto max-w-[1280px]" variants={fadeUpVariants(reducedMotion, 10)}>
              <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12">
                <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[12px]">
                  LET&apos;S TALK
                </p>
                <div className="mt-5 md:mt-0">
                  <div className="max-w-[46rem] space-y-5">
                    <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                      If you&apos;re hiring for product work that needs clarity,
                      systems thinking, and steady cross-functional execution,
                      I&apos;d be glad to connect.
                    </p>
                    <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                      Whether it&apos;s a senior product design role, platform
                      work, or a consulting engagement, I&apos;m open to
                      conversations where thoughtful design can help teams move
                      forward with confidence.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-4">
                    <a
                      href="mailto:jojo.s.1er@gmail.com"
                      aria-label="Email Joel Premier"
                      className="inline-flex h-11 items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
                    >
                      Email me
                    </a>
                        <Link
                          href="/work"
                          className="group inline-flex h-11 items-center justify-center gap-1 rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
                        >
                      View All Work
                      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
