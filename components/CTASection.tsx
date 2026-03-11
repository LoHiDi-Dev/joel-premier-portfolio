import Link from "next/link";

export function CTASection() {
  return (
    <section
      id="about"
      className="bg-[#171717] px-6 py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-[896px] text-center">
        <h2
          id="cta-heading"
          className="text-4xl font-medium leading-[1.1] tracking-[-1.7px] text-white md:text-5xl lg:text-7xl"
        >
          Let's design better
          <br />
          digital experiences
        </h2>

        <p className="mx-auto mt-8 max-w-[672px] text-xl leading-[1.5] text-[#a1a1a1] md:text-2xl">
          Open to senior product design roles and select consulting opportunities
          focused on accessible, scalable digital products.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@joelstefanopremier.com"
            className="flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium text-[#171717] shadow-md transition-opacity hover:opacity-90 focus:opacity-90"
          >
            Contact Me
          </a>
          <Link
            href="/resume"
            className="flex h-14 min-w-[160px] items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/10 focus:bg-white/10"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
