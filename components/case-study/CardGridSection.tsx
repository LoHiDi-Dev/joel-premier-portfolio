"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { caseStudySectionViewport, fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import {
  LABEL_CLASS,
  LABEL_CLASS_DARK,
  SECTION_HEADING_CLASS,
  CARD_TITLE_CLASS,
  CAPTION_CLASS,
  SECTION_MAX,
  CONTENT_MAX_EDITORIAL,
  HEADING_MAX_EDITORIAL,
  RADIUS,
  SECTION_TIGHT,
  LEAD_CARD_BG,
} from "./constants";
import type { CardGridItem } from "./types";

interface CardGridSectionProps {
  eyebrow: string;
  title: string;
  items: CardGridItem[];
  reducedMotion: boolean;
  dark?: boolean;
  numbered?: boolean;
  /** Apply subtle tint to first card (Key Design Decisions lead card) */
  leadCardTint?: boolean;
}

export function CardGridSection({
  eyebrow,
  title,
  items,
  reducedMotion,
  dark = false,
  numbered = false,
  leadCardTint = false,
}: CardGridSectionProps) {
  return (
    <motion.section
      className={`${dark ? "bg-[#171717] text-white" : "bg-white"} ${SECTION_TIGHT}`}
      initial="hidden"
      whileInView="visible"
      viewport={caseStudySectionViewport}
      variants={staggerContainerVariants(0.06)}
    >
      <div className={`mx-auto ${SECTION_MAX}`}>
        <motion.div
          className={CONTENT_MAX_EDITORIAL}
          variants={fadeUpVariants(reducedMotion, 16)}
        >
          <p className={dark ? LABEL_CLASS_DARK : LABEL_CLASS}>{eyebrow}</p>
          <h2
            className={`${SECTION_HEADING_CLASS} ${HEADING_MAX_EDITORIAL} ${dark ? "text-white" : "text-[#171717]"}`}
          >
            {title}
          </h2>
        </motion.div>
        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 md:mt-10 md:gap-6"
          variants={staggerContainerVariants(0.06)}
        >
          {items.map((item, index) => {
            const cardNum = String(index + 1).padStart(2, "0");
            const cardBg = dark
              ? "border-white/12 bg-white/[0.05]"
              : index === 0 && leadCardTint
                ? `border-[#e8e8e8] ${LEAD_CARD_BG}`
                : "border-[#e8e8e8] bg-[#fafafa]";

            return (
              <motion.div
                key={item.title}
                variants={fadeUpVariants(reducedMotion, 10)}
              >
                {/* MOBILE: accordion button */}
                <MobileAccordionCard
                  item={item}
                  numbered={numbered}
                  dark={dark}
                  cardBg={cardBg}
                  cardNum={cardNum}
                />

                {/* DESKTOP: static card */}
                <article
                  className={`hidden sm:block ${RADIUS} border cursor-default px-5 py-6 sm:px-6 sm:py-7 ${cardBg}`}
                >
                  {numbered && (
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[1.8px] sm:text-[11px] ${
                        dark ? "text-white/72" : "text-[#525252]"
                      }`}
                    >
                      {cardNum}
                    </p>
                  )}
                  <h3
                    className={`${CARD_TITLE_CLASS} ${dark ? "text-white" : "text-[#171717]"} ${numbered ? "mt-3" : ""}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-5 ${CAPTION_CLASS} ${dark ? "text-white/78" : "text-[#525252]"}`}
                  >
                    {item.description}
                  </p>
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

function MobileAccordionCard({
  item,
  numbered,
  dark,
  cardBg,
  cardNum,
}: {
  item: CardGridItem;
  numbered: boolean;
  dark: boolean;
  cardBg: string;
  cardNum: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`sm:hidden ${RADIUS} border ${cardBg} overflow-hidden`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-3 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          {numbered && (
            <p
              className={`mb-1 hidden text-[10px] font-semibold uppercase tracking-[1.8px] ${
                dark ? "text-white/72" : "text-[#525252]"
              }`}
              aria-hidden="true"
            >
              {cardNum}
            </p>
          )}
          <h3
            className={`${CARD_TITLE_CLASS} ${dark ? "text-white" : "text-[#171717]"}`}
          >
            {item.title}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mt-1 flex-shrink-0 text-[18px] leading-none ${
            dark ? "text-white/60" : "text-[#525252]"
          }`}
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: { duration: 0.18 },
            }}
            className="overflow-hidden"
          >
            <p
              className={`px-5 pb-4 ${CAPTION_CLASS} ${
                dark ? "text-white/78" : "text-[#525252]"
              }`}
            >
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
