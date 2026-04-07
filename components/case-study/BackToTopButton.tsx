"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

interface BackToTopButtonProps {
  visible: boolean;
  reducedMotion: boolean;
  onClick: () => void;
}

export function BackToTopButton({
  visible,
  reducedMotion,
  onClick,
}: BackToTopButtonProps) {
  return (
    <motion.div
      className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6 md:right-8 md:bottom-8"
      initial={false}
      animate={
        visible
          ? { opacity: 1, y: 0, pointerEvents: "auto" }
          : { opacity: 0, y: 10, pointerEvents: "none" }
      }
      transition={{
        duration: reducedMotion ? 0 : 0.22,
        ease: MOTION.easeOut,
      }}
      aria-hidden={!visible}
    >
      <div className="group relative">
        <button
          type="button"
          onClick={onClick}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#171717] text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-colors duration-200 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] sm:h-12 sm:w-12"
        >
          <ArrowUp
            className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
            strokeWidth={2.4}
          />
        </button>
        <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-white bg-[#171717] px-3.5 py-2 text-[12px] leading-none font-medium text-white opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-opacity duration-200 group-hover:opacity-100 md:block">
          Back to top
        </span>
      </div>
    </motion.div>
  );
}
