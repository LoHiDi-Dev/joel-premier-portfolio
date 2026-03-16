"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APPROACH_ITEMS } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

export function ApproachSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="process"
      className="px-3 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-20 md:px-16 md:pt-16 md:pb-24"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-[1280px] border-t border-[#e8e8e8] pt-10 sm:pt-10 md:pt-12">
        <div className="mb-6 text-center sm:mb-10 md:mb-16">
          <SectionHeading
            headingId="approach-heading"
            title="Designing for Clarity"
            description={
              "Using product strategy, accessibility, and systems\u00A0thinking\nto simplify complex digital experiences."
            }
            centered
          />
        </div>

        {/* Mobile only: accordion */}
        <div className="flex flex-col gap-2 md:hidden" role="list">
          {APPROACH_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.title} role="listitem">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left"
                  aria-expanded={isOpen}
                  aria-controls={`approach-item-${index}`}
                >
                  <div className="flex items-start justify-between gap-4 rounded-[16px] border border-[#e5e5e5] bg-white px-4 py-4 transition-colors duration-200 hover:bg-[#f7f6f4] active:bg-[#f0eeec]">
                    <div className="flex items-start gap-3">
                      <p className="text-[16px] font-semibold leading-[1.2] tracking-[-0.3px] text-[#171717]">
                        {item.title}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mt-1 flex-shrink-0 text-[18px] leading-none text-[#525252]"
                      aria-hidden
                    >
                      ↓
                    </motion.span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`approach-item-${index}`}
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
                      <div className="px-4 pb-4 pt-3">
                        <p className="whitespace-pre-line text-[15px] leading-[1.62] text-[#525252]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: unchanged grid — hidden below md */}
        <div
          className="hidden md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8"
          role="list"
        >
          {APPROACH_ITEMS.map((item) => (
            <div
              key={item.title}
              className="mx-auto max-w-[18rem] text-center"
              role="listitem"
            >
              <h3 className="text-[15px] font-medium leading-[1.18] tracking-[-0.2px] text-[#171717] sm:text-[18px] md:text-[20px]">
                {item.title}
              </h3>
              <p className="mt-3 whitespace-pre-line text-[15px] leading-[1.62] text-[#525252] sm:text-[16px] md:text-[16px] md:leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
