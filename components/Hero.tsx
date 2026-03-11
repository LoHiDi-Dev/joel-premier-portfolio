import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-[870px] overflow-hidden bg-gradient-to-b from-[#f5f5f5] via-white to-[#fafafa] px-6 py-24 md:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1104px]">
        <h1
          id="hero-heading"
          className="text-center text-5xl font-medium leading-[1.1] tracking-[-2.4px] text-[#171717] md:text-7xl lg:text-[96px] lg:leading-[105px]"
        >
          <span className="block">Designing complex </span>
          <span className="relative inline-block">
            <span className="border-b-2 border-[#c294ff]">products</span>
          </span>
          <span className="block text-[#737373]"> people can actually use</span>
        </h1>

        <p className="mx-auto mt-12 max-w-[780px] text-center text-xl leading-[1.6] tracking-wide text-[#525252] md:text-2xl">
          I design accessible, systems-driven digital experiences that reduce
          friction, improve clarity, and drive measurable outcomes.
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#work"
            className="flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-full bg-[#171717] px-8 text-base font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90"
          >
            View Case Studies
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 min-w-[180px] items-center justify-center rounded-full border-2 border-[#d4d4d4] bg-white px-8 text-base font-medium text-[#171717] transition-colors hover:border-[#171717] hover:bg-[#fafafa] focus:border-[#171717]"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
