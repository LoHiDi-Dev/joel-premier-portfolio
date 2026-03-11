import Link from "next/link";

export function CTASection() {
  return (
    <section
      id="about"
      className="bg-[#171717] px-3 py-12 sm:px-6 sm:py-20 md:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-[896px] text-center">
        <h2
          id="cta-heading"
          className="text-[36px] font-medium leading-[0.95] tracking-[-1.1px] text-white sm:text-4xl md:text-6xl"
        >
          Let&apos;s design better
          <br />
          digital experiences
        </h2>

        <p className="mx-auto mt-4 max-w-[672px] text-[12px] leading-[1.4] text-[#a1a1a1] sm:mt-6 sm:text-base md:text-xl">
          Open to senior product design roles and select consulting opportunities
          focused on accessible, scalable digital products.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-4">
          <a
            href="mailto:hello@joelstefanopremier.com"
            className="flex h-8 items-center justify-center rounded-full bg-white px-4 text-[11px] font-medium text-[#171717] transition-opacity hover:opacity-90 focus:opacity-90 sm:h-10 sm:px-6 sm:text-xs md:h-12 md:text-base"
          >
            Let&apos;s Connect
          </a>
          <Link
            href="/resume"
            className="flex h-8 items-center justify-center rounded-full border border-white bg-transparent px-4 text-[11px] font-medium text-white transition-colors hover:bg-white/10 focus:bg-white/10 sm:h-10 sm:px-6 sm:text-xs md:h-12 md:text-base"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
