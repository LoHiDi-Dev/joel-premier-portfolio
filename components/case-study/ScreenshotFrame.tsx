"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";
import { MOTION } from "@/lib/motion";
import { CAPTION_CLASS, RADIUS } from "./constants";
import type { ScreenshotConfig } from "./types";

interface ScreenshotFrameProps extends ScreenshotConfig {
  onLightboxOpen?: () => void;
  aspectClass?: string;
  treatment?: "neutral" | "before" | "after" | "support";
}

export function ScreenshotFrame({
  src,
  alt,
  caption,
  label: _label,
  aspectClass = "aspect-[16/10]",
  treatment = "neutral",
  captionNowrap = false,
  captionFullWidth = false,
  badgeLabel,
  imageClassName,
  imageStyle,
  onLightboxOpen,
}: ScreenshotFrameProps) {
  void _label;
  const reducedMotion = Boolean(useReducedMotion());
  const resolvedBadgeLabel =
    badgeLabel ??
    (treatment === "before"
      ? "Before"
      : treatment === "after"
        ? "After"
        : undefined);
  const isLightboxable = onLightboxOpen != null;

  const frameClass =
    treatment === "before"
      ? `border border-[#d8d8d8] bg-[#f4f4f4] shadow-[0_4px_18px_rgba(0,0,0,0.04)] ${RADIUS}`
      : treatment === "after"
        ? `border border-[#d7d7d7] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)] ${RADIUS}`
        : treatment === "support"
          ? `border border-[#d9d9d9] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)] ${RADIUS}`
          : `border border-[#d7d7d7] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)] ${RADIUS}`;

  const imageBlock = (
    <div
        className={`relative w-full ${aspectClass} ${
          treatment === "before" ? "bg-[#f4f4f4]" : "bg-white"
        }`}
      >
      <Image
        src={src}
        alt={alt}
        fill
        className={
          imageClassName ??
          (treatment === "before"
            ? "object-contain p-1.5 opacity-[0.92] sm:p-2.5"
            : "object-contain p-1.5 sm:p-2.5")
        }
        style={imageStyle}
        sizes="(max-width: 768px) 100vw, 48vw"
      />
      {isLightboxable && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#171717] shadow-md">
            <Maximize2 className="h-5 w-5" strokeWidth={2} />
          </span>
        </div>
      )}
    </div>
  );

  const frameContent = (
    <motion.div
      className={`relative overflow-hidden ${frameClass} ${isLightboxable ? "group cursor-pointer" : ""}`}
      whileHover={
        reducedMotion || isLightboxable
          ? undefined
          : { scale: MOTION.scale.box }
      }
      transition={{ duration: MOTION.duration.base, ease: MOTION.easeOut }}
    >
      {isLightboxable ? (
        <button
          type="button"
          onClick={onLightboxOpen}
          className="block w-full text-left"
          aria-label={`View ${resolvedBadgeLabel?.toLowerCase() ?? "screenshot"} larger`}
        >
          {imageBlock}
        </button>
      ) : (
        imageBlock
      )}
    </motion.div>
  );

  return (
    <motion.figure variants={fadeUpVariants(reducedMotion, 16)}>
      {resolvedBadgeLabel && (
        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[1.6px] ${
            treatment === "before" ? "text-[#5a5a5a]" : "text-[#171717]"
          }`}
        >
          {resolvedBadgeLabel}
        </p>
      )}
      {frameContent}
      <figcaption className="mt-5 space-y-1.5">
        <p
          className={`${captionFullWidth ? "w-full" : "max-w-[36rem]"} ${CAPTION_CLASS} ${captionNowrap ? "md:whitespace-nowrap" : ""}`}
        >
          {caption}
        </p>
      </figcaption>
    </motion.figure>
  );
}
