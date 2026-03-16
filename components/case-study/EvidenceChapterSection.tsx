"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import { LABEL_CLASS, BODY_CLASS, EVIDENCE_ASPECT } from "./constants";
import { ScreenshotFrame } from "./ScreenshotFrame";
import type { EvidenceChapter } from "./types";

interface EvidenceChapterSectionProps {
  chapter: EvidenceChapter;
  chapterIndex: number;
  reducedMotion: boolean;
  onOpenLightbox: (chapterIndex: number, imageIndex: number) => void;
}

export function EvidenceChapterSection({
  chapter,
  chapterIndex,
  reducedMotion,
  onOpenLightbox,
}: EvidenceChapterSectionProps) {
  return (
    <motion.article
      className="grid gap-6 border-t border-[#ebebeb] pt-8 md:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] md:gap-16 md:pt-12"
      variants={staggerContainerVariants(0.06)}
    >
      <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
        <p className={LABEL_CLASS}>{chapter.label}</p>
        <h3 className="mt-5 text-[24px] font-medium leading-[1.08] tracking-[-0.55px] text-[#171717] sm:text-[28px] md:text-[32px] md:tracking-[-0.8px]">
          {chapter.title}
        </h3>
        <div className="mt-5 max-w-[30rem] space-y-4">
          {chapter.paragraphs.map((paragraph) => (
            <p key={paragraph} className={BODY_CLASS}>
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
      <motion.div
        className={`grid gap-6 md:gap-8 ${chapter.visuals.length > 1 ? "md:grid-cols-2" : "md:max-w-[calc((100%-2rem)/2)] md:ml-auto"}`}
        variants={staggerContainerVariants(0.06)}
      >
        {chapter.visuals.map((visual, imageIndex) => (
          <ScreenshotFrame
            key={`${chapter.label}-${visual.src}-${imageIndex}`}
            {...visual}
            aspectClass={visual.aspectClass ?? EVIDENCE_ASPECT}
            onLightboxOpen={() => onOpenLightbox(chapterIndex, imageIndex)}
          />
        ))}
      </motion.div>
    </motion.article>
  );
}
