"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCE } from "@/lib/resume-data";

export function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {EXPERIENCE.map((entry, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={entry.company} className={index > 0 ? "mt-3" : ""}>
            {/* Mobile: accordion button */}
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full md:hidden"
              aria-expanded={isOpen}
              aria-controls={`experience-${index}`}
            >
              <div className="flex items-start justify-between gap-4 rounded-[16px] border border-[#e5e5e5] bg-white px-4 py-4 text-left transition-colors duration-200 hover:bg-[#f7f6f4] active:bg-[#f0eeec]">
                <div>
                  <p className="text-[16px] font-semibold leading-[1.2] tracking-[-0.3px] text-[#171717]">
                    {entry.company}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[1.8px] text-[#525252]">
                    {entry.title}
                  </p>
                  <p className="mt-0.5 text-[12px] text-[#737373]">
                    {entry.dates}
                  </p>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-1 flex-shrink-0 text-[18px] leading-none text-[#525252]"
                  aria-hidden="true"
                >
                  ↓
                </motion.span>
              </div>
            </button>

            {/* Mobile: accordion content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`experience-${index}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: {
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.2,
                    },
                  }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="px-4 pb-4 pt-3">
                    <p className="mb-3 text-[12px] text-[#737373]">
                      {entry.location}
                    </p>
                    <ul className="space-y-3">
                      {entry.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[13px] leading-[1.65] text-[#3d3d3d]"
                        >
                          <span className="mt-[0.4em] flex-shrink-0 text-[11px] text-[#525252]">
                            –
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop: full layout — no bullet dot, flush left */}
            <div
              className={`hidden md:block ${
                index > 0 ? "mt-10 border-t border-[#e5e5e5] pt-10" : ""
              }`}
            >
              <div className="flex flex-row items-start justify-between gap-4">
                <div>
                  <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.4px] text-[#171717] md:text-[24px]">
                    {entry.company}
                  </h3>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[1.8px] text-[#525252]">
                    {entry.title}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-[1.5] text-[#737373]">
                    {entry.location}
                  </p>
                </div>
                <p className="flex-shrink-0 pt-1 text-right text-[13px] leading-[1.5] text-[#737373]">
                  {entry.dates}
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15px] leading-[1.62] text-[#3d3d3d] md:text-[16px]"
                  >
                    <span className="mt-[0.4em] flex-shrink-0 text-[12px] text-[#525252]">
                      –
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
