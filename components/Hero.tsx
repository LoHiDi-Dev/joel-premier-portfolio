import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#f5f5f5] via-white to-[#fafafa] px-3 py-10 sm:px-6 sm:py-16 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1104px]">
        <h1
          id="hero-heading"
          className="text-center text-[42px] font-medium leading-[0.98] tracking-[-1.2px] text-[#171717] sm:text-5xl md:text-7xl lg:text-[96px] lg:leading-[105px]"
        >
          <span className="block">Designing complex</span>
          <span className="block">
            <span className="border-b-2 border-[#c294ff]">products</span>
          </span>
          <span className="block text-[#737373]">people can actually use</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[780px] text-center text-[13px] leading-[1.45] text-[#525252] sm:mt-8 sm:text-base md:text-2xl">
          I design accessible, systems-driven digital experiences that reduce
          friction, improve clarity, and drive measurable outcomes.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-4">
          <Link
            href="/#work"
            className="flex h-8 items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            View Case Study
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/resume"
            className="flex h-8 items-center justify-center rounded-full border border-[#d4d4d4] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:border-[#171717] hover:bg-[#fafafa] focus:border-[#171717] sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
