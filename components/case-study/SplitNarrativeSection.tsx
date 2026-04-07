"use client";

import { motion } from "framer-motion";
import { caseStudySectionViewport, fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import {
  LABEL_CLASS,
  SECTION_HEADING_CLASS,
  BODY_CLASS,
  SECTION_MAX,
  CONTENT_MAX_EDITORIAL,
  HEADING_MAX_EDITORIAL,
  SECTION_DEFAULT,
} from "./constants";
import { ScreenshotFrame } from "./ScreenshotFrame";
import type { ScreenshotConfig } from "./types";

interface SplitNarrativeSectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image: ScreenshotConfig;
  reducedMotion: boolean;
  muted?: boolean;
  /** When provided, the image becomes clickable and opens a lightbox */
  onLightboxOpen?: () => void;
}

export function SplitNarrativeSection({
  eyebrow,
  title,
  paragraphs,
  bullets,
  image,
  reducedMotion,
  muted = false,
  onLightboxOpen,
}: SplitNarrativeSectionProps) {
  return (
    <motion.section
      className={`${muted ? "bg-[#f7f6f4]" : "bg-white"} ${SECTION_DEFAULT}`}
      initial="hidden"
      whileInView="visible"
      viewport={caseStudySectionViewport}
      variants={staggerContainerVariants(0.06)}
    >
      <div
        className={`mx-auto grid ${SECTION_MAX} gap-10 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:items-start md:gap-16`}
      >
        <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
          <p className={LABEL_CLASS}>{eyebrow}</p>
          <h2 className={`${SECTION_HEADING_CLASS} ${HEADING_MAX_EDITORIAL}`}>{title}</h2>
          <div className={`mt-5 ${CONTENT_MAX_EDITORIAL} space-y-5`}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={BODY_CLASS}>
                {paragraph}
              </p>
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
        <ScreenshotFrame
          {...image}
          treatment="support"
          onLightboxOpen={onLightboxOpen}
        />
      </div>
    </motion.section>
  );
}
