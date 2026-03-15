"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
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
      viewport={{ once: true, amount: 0.2 }}
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
          className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6"
          variants={staggerContainerVariants(0.06)}
        >
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className={`${RADIUS} border px-5 py-6 sm:px-6 sm:py-7 ${
                dark
                  ? "border-white/12 bg-white/[0.05]"
                  : index === 0 && leadCardTint
                    ? `border-[#e8e8e8] ${LEAD_CARD_BG}`
                    : "border-[#e8e8e8] bg-[#fafafa]"
              }`}
              variants={fadeUpVariants(reducedMotion, 10)}
            >
              {numbered && (
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[1.8px] sm:text-[11px] ${
                    dark ? "text-white/72" : "text-[#525252]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
