import Link from "next/link";
import { Download } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Resume | Joel Stefano Premier",
  description: "A concise overview of experience across product design, UX strategy, design systems, and implementation-aware work.",
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-3 py-12 sm:px-6 sm:py-20 md:px-16 md:py-24"
          aria-labelledby="resume-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-6 sm:mb-10 md:mb-16">
              <SectionHeading
                headingId="resume-heading"
                title="Resume"
                description="A concise overview of my experience across product design, UX strategy, design systems, and implementation-aware work."
                level={1}
              />
            </div>

            <div className="overflow-hidden border border-[#e5e5e5] bg-white">
              <iframe
                src="/Joel_Premier_Senior_Product_Designer_Resume.pdf#page=1"
                title="Joel Stefano Premier Resume"
                className="h-[calc(100vh-200px)] min-h-[600px] w-full"
              />
            </div>

            <div className="mt-12 flex flex-wrap gap-2 sm:mt-16 sm:gap-4">
              <Link
                href="/"
                className="inline-flex h-8 items-center justify-center gap-1.5 rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                Back to Portfolio
              </Link>
              <a
                href="/Joel_Premier_Senior_Product_Designer_Resume.pdf"
                download="Joel_Premier_Resume.pdf"
                className="inline-flex h-8 items-center justify-center gap-1.5 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                Download PDF
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
