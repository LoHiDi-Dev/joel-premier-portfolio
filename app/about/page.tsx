import Link from "next/link";
import { Header } from "@/components/Header";
import {
  BODY_CLASS,
  CONTENT_MAX_EDITORIAL,
  HEADING_MAX_EDITORIAL,
  LABEL_CLASS,
  SECTION_HEADING_CLASS,
  SECTION_MAX,
} from "@/components/case-study/constants";

export const metadata = {
  title: "About",
  description:
    "Senior Product Designer focused on complex digital products, systems thinking, accessibility, and outcomes that matter.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-3 pt-12 pb-14 sm:px-6 sm:pt-20 sm:pb-20 md:px-16 md:pt-24 md:pb-24"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[860px]">
              <h1
                id="about-heading"
                className="text-[32px] font-medium leading-[0.98] tracking-[-1.1px] text-[#171717] sm:text-[44px] md:text-[64px] md:tracking-[-1.6px]"
              >
                About
              </h1>
              <p className="mt-4 max-w-[46rem] text-[14px] leading-[1.6] text-[#525252] sm:mt-5 sm:text-[16px] sm:leading-[1.58] md:text-[20px] md:leading-[1.5]">
                Senior Product Designer focused on complex digital products,
                <br />
                systems thinking, accessibility, and outcomes that matter.
              </p>
            </div>
          </div>

          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-12 border-t border-[#e5e5e5] bg-[#f7f6f4] px-3 pt-8 pb-10 sm:mt-16 sm:px-6 sm:pt-10 sm:pb-12 md:mt-20 md:px-16 md:pt-12 md:pb-14">
            <div className="mx-auto max-w-[1280px]">
              <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-x-12">
                <p className={LABEL_CLASS}>APPROACH</p>
                <div className="mt-5 min-w-0 space-y-6 md:mt-0">
                  <h2
                    className={`${SECTION_HEADING_CLASS} ${HEADING_MAX_EDITORIAL}`}
                  >
                    Designing for clarity in complex
                    <br />
                    product environments.
                  </h2>
                  <div className={`space-y-5 ${CONTENT_MAX_EDITORIAL}`}>
                    <p className={BODY_CLASS}>
                      I design digital products with a focus on structure,
                      usability, and meaningful impact — helping make demanding
                      experiences easier to understand, easier to use, and more
                      effective for the people navigating them.
                    </p>
                    <p className={BODY_CLASS}>
                      Across e-commerce, healthcare, travel, and enterprise
                      products, I&apos;ve led work spanning discovery, flows,
                      navigation, shared systems, and close product-engineering
                      partnership. I care deeply about reducing friction,
                      improving access, and creating experiences that hold up
                      under real-world complexity.
                    </p>
                    <p className={BODY_CLASS}>
                      I do my best work in close partnership with product,
                      engineering, content, and leadership — connecting user
                      needs to business goals through a steady, thoughtful
                      approach to delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[1280px]">
            <div className="mt-12 pt-0 sm:mt-16 md:mt-20">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:mb-6 sm:text-[12px]">
                HOW I WORK
              </p>
              <h2 className="text-[28px] font-medium leading-[1.04] tracking-[-0.8px] text-[#171717] sm:text-[34px] md:text-[44px] md:tracking-[-1.1px]">
                Principles that shape how I design and deliver.
              </h2>
              <p className="mt-6 max-w-[42rem] text-[15px] leading-[1.72] text-[#3d3d3d] sm:mt-7 sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                I turn complexity into structure, simplify what matters most,
                and work closely with product and engineering to deliver clear,
                scalable experiences grounded in real-world execution.
              </p>
              <div className="mt-10 grid gap-4 sm:mt-12 md:mt-14 md:grid-cols-2 md:gap-6">
                {[
                  {
                    number: "01",
                    title: "Clarity over noise",
                    description:
                      "I reduce unnecessary complexity so the most important actions, content, and decisions are easier to understand and act on.",
                  },
                  {
                    number: "02",
                    title: "Systems before screens",
                    description:
                      "I look beyond individual interfaces to shape patterns, structures, and shared foundations that improve consistency as products evolve.",
                  },
                  {
                    number: "03",
                    title: "Collaboration in the work",
                    description:
                      "I partner closely with product, engineering, and stakeholders so design decisions hold up in delivery, not just in review.",
                  },
                  {
                    number: "04",
                    title: "Real-world usability",
                    description:
                      "I design for how people actually move through complex experiences, with attention to accessibility, context, and practical constraints.",
                  },
                ].map((card, index) => (
                  <article
                    key={card.number}
                    className={`rounded-[20px] border border-[#e8e8e8] px-5 py-6 transition-colors duration-200 sm:px-6 sm:py-7 ${index === 0 ? "bg-[#f6f5f4] hover:bg-[#f0eeec]" : "bg-[#fafafa] hover:bg-[#f5f5f5]"}`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[11px]">
                      {card.number}
                    </p>
                    <h3 className="mt-4 text-[18px] font-semibold leading-[1.12] tracking-[-0.35px] text-[#171717] sm:text-[20px] md:text-[22px]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-[1.62] text-[#3d3d3d] sm:text-[14px] sm:leading-[1.62] md:text-[15px] md:leading-[1.62]">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-10 max-w-[46rem] text-[13px] leading-[1.6] text-[#525252] sm:mt-12 sm:text-[14px] md:mt-14">
                This approach shapes how I work across healthcare, retail, operations, and service design — especially where complexity, scale, and delivery alignment matter.
              </p>
            </div>
          </div>
        </section>

        <section
          className="border-t border-[#242424] bg-[#171717] px-4 py-16 text-white sm:px-8 sm:py-20 md:px-12 md:py-24"
          aria-labelledby="about-work-endcap-title"
        >
          <div className={`mx-auto ${SECTION_MAX}`}>
            <div className="mx-auto max-w-[896px] text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[1.8px] text-white/72 sm:text-sm">
                SELECTED WORK
              </p>
              <h2
                id="about-work-endcap-title"
                className="mt-6 max-w-[20ch] text-[42px] font-medium leading-[0.94] tracking-[-1.3px] text-white sm:text-[56px] sm:tracking-[-1.8px] md:text-[72px] md:tracking-[-2px]"
              >
                The work behind
                <br />
                the thinking
              </h2>
              <p className="mx-auto mt-5 max-w-[36rem] whitespace-pre-line text-[14px] leading-[1.6] text-[#c7c7c7] sm:mt-6 sm:text-[16px] sm:leading-[1.58] md:max-w-[40rem] md:text-[18px] md:leading-[1.56]">
                A selection of product design case studies focused on structure,
                <br />
                usability, and delivery across complex systems.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-4">
                <Link
                  href="/work"
                  className="group flex h-8 items-center justify-center gap-1 rounded-full bg-white px-4 text-[11px] font-medium text-[#171717] transition-opacity duration-200 hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
                >
                  View Case Studies
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group flex h-8 items-center justify-center gap-1 rounded-full border border-white bg-transparent px-4 text-[11px] font-medium text-white transition-colors duration-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
                >
                  Get in Touch
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
