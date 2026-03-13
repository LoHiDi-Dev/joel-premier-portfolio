import Link from "next/link";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Contact",
  description:
    "Reach out about senior product design roles and select consulting engagements where thoughtful product work can make a clear difference.",
};

const CONTACT_ITEMS = [
  {
    label: "PHONE",
    value: "+1 214 243 4649",
    href: "tel:+12142434649",
    ariaLabel: "Call +1 214 243 4649",
  },
  {
    label: "EMAIL",
    value: "jojo.s.1er@gmail.com",
    href: "mailto:jojo.s.1er@gmail.com",
    ariaLabel: "Email jojo.s.1er@gmail.com",
  },
  { label: "LOCATION", value: "Irving, TX", href: null, ariaLabel: null },
  {
    label: "AVAILABILITY",
    value: "Open to remote and hybrid opportunities",
    href: null,
    ariaLabel: null,
  },
  {
    label: "CONSULTING",
    value: "Open to international consulting",
    href: null,
    ariaLabel: null,
  },
] as const;

const VALUE_ITEMS = [
  {
    title: "Enterprise Product Design",
    description:
      "Product, platform, and service work where usability, decision-making, and business priorities need to align across the full experience.",
  },
  {
    title: "Design Systems & Accessibility",
    description:
      "Organizations investing in shared foundations, consistent interfaces, and inclusive patterns that improve quality across products and teams.",
  },
  {
    title: "Cross-Functional Collaboration",
    description:
      "Environments where design, engineering, content, and analytics work closely to turn ambiguity into decisions teams can ship.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-6 sm:mb-10 md:mb-16">
              <SectionHeading
                headingId="contact-heading"
                title="Let's Connect"
                description="Open to senior product design roles and select consulting engagements where thoughtful design can help teams simplify complexity, improve usability, and move with confidence."
                level={1}
              />
            </div>

            <div className="grid grid-cols-1 gap-10 sm:gap-16 md:grid-cols-2 md:gap-x-16 md:gap-y-24">
              <div className="space-y-4 sm:space-y-8 md:space-y-12">
                <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px]">
                  Get in Touch
                </p>
                <ul className="space-y-4 sm:space-y-6">
                  {CONTACT_ITEMS.map((item) => (
                    <li key={item.label}>
                      <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px]">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-2 block max-w-[36rem] text-[15px] leading-[1.7] text-[#171717] transition-colors hover:text-[#404040] focus:text-[#404040] focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:text-[16px] sm:leading-[1.68] md:text-[18px] md:leading-[1.62]"
                          aria-label={item.ariaLabel ?? undefined}
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-2 max-w-[36rem] text-[15px] leading-[1.7] text-[#171717] sm:text-[16px] sm:leading-[1.68] md:text-[18px] md:leading-[1.62]">
                          {item.value}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 sm:space-y-8 md:space-y-12">
                <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px]">
                  Where I Add Value
                </p>
                <ul className="space-y-6 sm:space-y-8 md:space-y-12" role="list">
                  {VALUE_ITEMS.map((item) => (
                    <li key={item.title} role="listitem">
                      <h3 className="text-[15px] font-medium leading-[1.18] tracking-[-0.2px] text-[#171717] sm:text-[18px] md:text-[20px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[30rem] text-[14px] leading-[1.65] text-[#555555] sm:text-[15px] sm:leading-[1.62] md:text-[16px]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-[#e5e5e5] pt-10 sm:mt-16 md:mt-24 md:pt-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:mb-6 sm:text-[11px]">
                Opportunity Fit
              </p>
              <div className="max-w-[46rem] space-y-5">
                <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                  I&apos;m a strong fit for teams hiring across core product,
                  service flows, platform work, or system-level UX where senior
                  product design judgment is needed.
                </p>
                <p className="text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]">
                  If the work calls for thoughtful design, close partnership,
                  and steady execution from definition through delivery,
                  I&apos;d be glad to connect.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-2 sm:mt-16 sm:gap-4">
              <a
                href="mailto:jojo.s.1er@gmail.com"
                aria-label="Email Joel Premier"
                className="inline-flex h-8 items-center justify-center gap-1 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                Email Me
              </a>
              <Link
                href="/work"
                className="group inline-flex h-8 items-center justify-center gap-1 rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                View All Work
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
      </main>
    </>
  );
}
