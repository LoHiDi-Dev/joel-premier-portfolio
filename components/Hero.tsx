"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { MOTION } from "@/lib/motion";

export function Hero() {
  const reducedMotion = Boolean(useReducedMotion());
  const productDesignChipControls = useAnimationControls();
  const highlightControls = useAnimationControls();
  const uxWritingChipControls = useAnimationControls();

  useEffect(() => {
    let isCancelled = false;

    const runSequence = async () => {
      if (reducedMotion) {
        productDesignChipControls.set({ opacity: 1, x: 0, y: 0, scale: 1 });
        highlightControls.set({ opacity: 1, scale: 1 });
        uxWritingChipControls.set({ opacity: 1, x: 0, y: 0, scale: 1 });
        return;
      }

      const viewportWidth = window.innerWidth;
      const productDesignChipOffset =
        viewportWidth < 640
          ? { x: 42, y: 30, scale: 0.95 }
          : viewportWidth < 1024
            ? { x: 68, y: 42, scale: 0.945 }
            : { x: 92, y: 56, scale: 0.94 };
      const uxWritingChipOffset =
        viewportWidth < 640
          ? { x: 8, y: 8, scale: 0.985 }
          : viewportWidth < 1024
            ? { x: 10, y: 9, scale: 0.982 }
            : { x: 12, y: 10, scale: 0.98 };
      const pause = (duration: number) =>
        new Promise<void>((resolve) => {
          window.setTimeout(resolve, duration);
        });

      productDesignChipControls.set({ opacity: 0, ...productDesignChipOffset });
      highlightControls.set({ opacity: 0, scale: 1.01 });
      uxWritingChipControls.set({ opacity: 0, ...uxWritingChipOffset });

      await uxWritingChipControls.start({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 1.16,
          ease: MOTION.easeOut,
        },
      });

      if (isCancelled) {
        return;
      }

      await pause(90);

      if (isCancelled) {
        return;
      }

      await highlightControls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.38,
          ease: MOTION.easeOut,
        },
      });

      if (isCancelled) {
        return;
      }

      await pause(80);

      if (isCancelled) {
        return;
      }

      await productDesignChipControls.start({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.78,
          ease: MOTION.easeOut,
        },
      });
    };

    void runSequence();

    return () => {
      isCancelled = true;
    };
  }, [
    highlightControls,
    productDesignChipControls,
    reducedMotion,
    uxWritingChipControls,
  ]);

  return (
    <section
      id="hero"
      className="relative overflow-x-hidden overflow-y-visible bg-gradient-to-b from-[#f5f5f5] via-white to-[#fafafa] px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28 md:pt-24 md:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1104px]">
        <h1
          id="hero-heading"
          className="relative mx-auto flex max-w-[980px] flex-col items-center text-center"
        >
          <span className="block text-[32px] font-medium leading-[0.98] tracking-[-1.2px] text-[#171717] sm:text-5xl md:text-7xl lg:text-[96px] lg:leading-[105px]">
            Designing complex
          </span>

          <span className="relative mt-0.5 inline-block sm:mt-0.5 md:mt-1 lg:mt-1">
            <span className="relative inline-block shrink-0 border-2 border-transparent px-1 pt-px pb-1 text-[32px] font-medium leading-[0.98] tracking-[-1.2px] text-[#171717] sm:px-1.5 sm:pb-1.5 sm:text-5xl md:px-2 md:pb-2 md:text-7xl lg:px-2.5 lg:pb-2 lg:text-[96px]">
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[-2px] border-2 border-[#8b5cf6]"
                initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 1.01 }}
                animate={highlightControls}
              />
              <span className="relative">products</span>
            </span>

            <motion.div
              className="pointer-events-none absolute right-[-24px] top-0 h-auto w-[56px] object-contain object-left sm:right-[-48px] sm:top-[-4px] sm:w-[86px] md:right-[-56px] md:top-[-6px] md:w-[98px] lg:right-[-64px] lg:top-[-8px] lg:w-[110px]"
              initial={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : 88, y: reducedMotion ? 0 : 58, scale: reducedMotion ? 1 : 0.94 }}
              animate={productDesignChipControls}
            >
              <Image
                src="/hero-chip-product-design.png"
                alt=""
                aria-hidden
                priority
                width={120}
                height={40}
              />
            </motion.div>

            <motion.div
              className="pointer-events-none absolute bottom-[-20px] right-[-20px] h-auto w-[54px] object-contain object-left sm:bottom-[-36px] sm:right-[-40px] sm:w-[84px] md:bottom-[-44px] md:right-[-48px] md:w-[96px] lg:bottom-[-52px] lg:right-[-56px] lg:w-[108px]"
              initial={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : 12, y: reducedMotion ? 0 : 10, scale: reducedMotion ? 1 : 0.98 }}
              animate={uxWritingChipControls}
            >
              <Image
                src="/hero-chip-ux-writing.png"
                alt=""
                aria-hidden
                width={110}
                height={36}
              />
            </motion.div>
          </span>

          <span className="mt-0.5 block text-[32px] font-medium leading-[0.98] tracking-[-1.2px] text-[#525252] sm:mt-0.5 sm:text-5xl sm:whitespace-nowrap md:mt-1 md:text-7xl lg:text-[96px] lg:leading-[105px]">
            people can actually use
          </span>
        </h1>

        <p className="mx-auto mt-2 max-w-[780px] text-center text-[14px] leading-[1.55] text-[#525252] sm:mt-3 sm:text-base sm:leading-[1.6] md:mt-4 md:text-2xl md:leading-[1.5]">
          I design system-aware digital experiences that reduce friction,
          support better decisions, and move work forward.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-4 md:mt-6">
          <Link
            href="/work"
            className="group flex h-8 items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity duration-200 hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            View All Work
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
            >
              →
            </span>
          </Link>
          <Link
            href="/resume"
            className="group flex h-8 items-center justify-center gap-1 rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors duration-200 hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            View Resume
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
