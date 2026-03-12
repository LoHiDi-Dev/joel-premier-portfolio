import { Download } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="about"
      className="bg-[#171717] px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-[896px] text-center">
        <h2
          id="cta-heading"
          className="text-[28px] font-medium leading-[0.95] tracking-[-1.1px] text-white sm:text-4xl md:text-6xl"
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
            href="mailto:jojo.s.1er@gmail.com"
            className="flex h-8 items-center justify-center rounded-full bg-white px-4 text-[11px] font-medium text-[#171717] transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            Let&apos;s Connect
          </a>
          <a
            href="/Joel_Premier_Senior_Product_Designer_Resume.pdf"
            download="Joel_Premier_Resume.pdf"
            className="flex h-8 items-center justify-center gap-1.5 rounded-full border border-white bg-transparent px-4 text-[11px] font-medium text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
