"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import {
  LABEL_CLASS,
  BODY_CLASS,
  SECTION_HEADING_CLASS,
  SECTION_MAX,
  CONTENT_MAX,
  SECTION_DEFAULT,
  RADIUS,
} from "./constants";
import type { AuditSectionContent } from "./types";

interface AuditGridSectionProps {
  content: AuditSectionContent;
  reducedMotion: boolean;
  onTileClick: (index: number) => void;
}

/** Supporting audit evidence. Matches Ulta/CVS composition—polished, secondary to redesign work. */
export function AuditGridSection({
  content,
  reducedMotion,
  onTileClick,
}: AuditGridSectionProps) {
  const { intro, attribution, tiles } = content;

  return (
    <motion.section
      className={`bg-[#f7f6f4] ${SECTION_DEFAULT}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.06)}
    >
      <div className={`mx-auto ${SECTION_MAX}`}>
        <div className={`mb-10 ${CONTENT_MAX} md:mb-12`}>
          <p className={LABEL_CLASS}>{intro.eyebrow}</p>
          <h2 className={SECTION_HEADING_CLASS}>{intro.title}</h2>
          <div className="mt-5 space-y-5">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className={BODY_CLASS}>
                {paragraph}
              </p>
            ))}
          </div>
          {attribution && (
            <p className="mt-6 text-[13px] font-medium italic leading-[1.5] text-[#525252] sm:text-[14px]">
              {attribution}
            </p>
          )}
        </div>

        <motion.div
          className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:gap-6 md:gap-8"
          variants={staggerContainerVariants(0.05)}
        >
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.src}
              variants={fadeUpVariants(reducedMotion, 12)}
            >
              <button
                type="button"
                onClick={() => onTileClick(index)}
                className="group flex w-full flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f6f4]"
                aria-label={`View ${tile.label} larger`}
              >
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden border border-[#d9d9d9] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)] ${RADIUS}`}
                >
                    <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    className="object-contain p-1.5 sm:p-2.5"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    aria-hidden
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#171717] shadow-md">
                      <Maximize2 className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </div>
                </div>
                <p className={`mt-4 ${LABEL_CLASS}`}>
                  {tile.label}
                </p>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
