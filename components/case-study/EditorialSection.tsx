"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import {
  LABEL_CLASS,
  SECTION_HEADING_CLASS,
  BODY_CLASS,
  SECTION_MAX,
  CONTENT_MAX,
  SECTION_DEFAULT,
  SECTION_LOOSE,
} from "./constants";

interface EditorialSectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  reducedMotion: boolean;
  muted?: boolean;
  /** Use SECTION_LOOSE for concluding sections (process, reflection) to match Ulta/CVS weight */
  spacious?: boolean;
}

export function EditorialSection({
  eyebrow,
  title,
  paragraphs,
  bullets,
  reducedMotion,
  muted = false,
  spacious = false,
}: EditorialSectionProps) {
  const sectionPadding = spacious ? SECTION_LOOSE : SECTION_DEFAULT;
  return (
    <motion.section
      className={`${muted ? "bg-[#f7f6f4]" : "bg-white"} ${sectionPadding}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.06)}
    >
      <div className={`mx-auto ${SECTION_MAX} md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-12`}>
        <motion.div variants={fadeUpVariants(reducedMotion, 16)}>
          <p className={LABEL_CLASS}>{eyebrow}</p>
        </motion.div>
        <motion.div
          className={`mt-5 ${CONTENT_MAX} space-y-6 md:mt-0`}
          variants={staggerContainerVariants(0.06)}
        >
          <motion.h2
            className={SECTION_HEADING_CLASS}
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            {title}
          </motion.h2>
          <div className="space-y-5">
            {paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                className={BODY_CLASS}
                variants={fadeUpVariants(reducedMotion, 10)}
              >
                {paragraph}
              </motion.p>
            ))}
            {bullets && bullets.length > 0 && (
              <ul className="space-y-2.5 border-l-2 border-[#e5e5e5] pl-5">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={`${BODY_CLASS} pl-0`}
                    style={{ listStyle: "none" }}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
