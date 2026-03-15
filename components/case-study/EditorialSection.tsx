"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import {
  LABEL_CLASS,
  SECTION_HEADING_CLASS,
  BODY_CLASS,
  SECTION_MAX,
  CONTENT_MAX,
  CONTENT_MAX_WIDE,
  CONTENT_MAX_EDITORIAL,
  CONTENT_MAX_RELAXED,
  CONTENT_MAX_COMPACT,
  HEADING_MAX_EDITORIAL,
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
  /** Use wider measure so long paragraphs wrap to 2 lines instead of 3 */
  wideContent?: boolean;
  /** Add extra space between heading and body for visual balance */
  relaxedHeadingGap?: boolean;
  /** Tighter grid gap for better label–content alignment (Overview, Challenge) */
  compactGrid?: boolean;
  /** Use editorial measure for cleaner heading/body wrap; decouples heading width from body */
  editorialMeasure?: boolean;
  /** Use relaxed body measure (62rem) for sections where 52rem causes awkward paragraph wrapping */
  relaxedBodyMeasure?: boolean;
  /** Use compact body measure (44rem) for cleaner, more even line breaks in dense paragraphs */
  compactBodyMeasure?: boolean;
  /** Use slightly wider body (54rem) with editorial measure when 52rem causes orphan lines */
  wideBodyMeasure?: boolean;
}

export function EditorialSection({
  eyebrow,
  title,
  paragraphs,
  bullets,
  reducedMotion,
  muted = false,
  spacious = false,
  wideContent = false,
  relaxedHeadingGap = false,
  compactGrid = false,
  editorialMeasure = false,
  relaxedBodyMeasure = false,
  compactBodyMeasure = false,
  wideBodyMeasure = false,
}: EditorialSectionProps) {
  const sectionPadding = spacious ? SECTION_LOOSE : SECTION_DEFAULT;
  const contentMax = compactBodyMeasure
    ? CONTENT_MAX_COMPACT
    : relaxedBodyMeasure
      ? CONTENT_MAX_RELAXED
      : editorialMeasure
        ? wideBodyMeasure
          ? CONTENT_MAX_WIDE
          : CONTENT_MAX_EDITORIAL
        : wideContent
          ? CONTENT_MAX_WIDE
          : CONTENT_MAX;
  const headingMax = editorialMeasure ? HEADING_MAX_EDITORIAL : contentMax;
  const gridGap = compactGrid ? "md:gap-x-8" : "md:gap-x-12";
  return (
    <motion.section
      className={`${muted ? "bg-[#f7f6f4]" : "bg-white"} ${sectionPadding}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.06)}
    >
      <div className={`mx-auto ${SECTION_MAX} md:grid md:grid-cols-[180px_minmax(0,1fr)] ${gridGap}`}>
        <motion.div variants={fadeUpVariants(reducedMotion, 16)}>
          <p className={LABEL_CLASS}>{eyebrow}</p>
        </motion.div>
        <motion.div
          className={`mt-5 min-w-0 space-y-6 md:mt-0`}
          variants={staggerContainerVariants(0.06)}
        >
          <motion.h2
            className={`${SECTION_HEADING_CLASS} ${headingMax} ${title.includes("\n") ? "whitespace-pre-line" : ""}`}
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            {title}
          </motion.h2>
          <div className={`space-y-5 ${contentMax} ${relaxedHeadingGap ? "!mt-10" : ""}`}>
            {paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                className={`${BODY_CLASS} ${paragraph.includes("\n") ? "whitespace-pre-line" : ""}`}
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
