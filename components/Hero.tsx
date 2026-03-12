import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export function Hero() {
  return (
    <section
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
            <span className="hero-selection-box inline-block shrink-0 border-2 border-transparent px-1 pt-px pb-1 text-[32px] font-medium leading-[0.98] tracking-[-1.2px] text-[#171717] sm:px-1.5 sm:pb-1.5 sm:text-5xl md:px-2 md:pb-2 md:text-7xl lg:px-2.5 lg:pb-2 lg:text-[96px]">
              products
            </span>

            <Image
              src="/hero-chip-product-design.png"
              alt=""
              aria-hidden
              width={120}
              height={40}
              className="hero-product-chip pointer-events-none absolute right-[-24px] top-0 h-auto w-[56px] object-contain object-left sm:right-[-48px] sm:top-[-4px] sm:w-[86px] md:right-[-56px] md:top-[-6px] md:w-[98px] lg:right-[-64px] lg:top-[-8px] lg:w-[110px]"
            />

            <Image
              src="/hero-chip-ux-writing.png"
              alt=""
              aria-hidden
              width={110}
              height={36}
              className="hero-ux-chip pointer-events-none absolute bottom-[-20px] right-[-20px] h-auto w-[54px] object-contain object-left sm:bottom-[-36px] sm:right-[-40px] sm:w-[84px] md:bottom-[-44px] md:right-[-48px] md:w-[96px] lg:bottom-[-52px] lg:right-[-56px] lg:w-[108px]"
            />
          </span>

          <span className="mt-0.5 block text-[32px] font-medium leading-[0.98] tracking-[-1.2px] text-[#737373] sm:mt-0.5 sm:text-5xl sm:whitespace-nowrap md:mt-1 md:text-7xl lg:text-[96px] lg:leading-[105px]">
            people can actually use
          </span>
        </h1>

        <p className="mx-auto mt-2 max-w-[780px] text-center text-[13px] leading-[1.45] text-[#525252] sm:mt-3 sm:text-base md:mt-4 md:text-2xl">
          I design accessible, systems-driven digital experiences that reduce
          friction, improve clarity, and drive measurable outcomes.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-4 md:mt-6">
          <Link
            href="/work"
            className="flex h-8 items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            View Case Studies
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href="/Joel_Premier_Senior_Product_Designer_Resume.pdf"
            download="Joel_Premier_Resume.pdf"
            className="flex h-8 items-center justify-center gap-1.5 rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
