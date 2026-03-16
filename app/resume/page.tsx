import Link from "next/link";
import { Header } from "@/components/Header";
import { BackToTop } from "@/components/BackToTop";
import { ResumePageContent } from "@/components/ResumePageContent";
import {
  RESUME_DOWNLOAD_NAME,
  RESUME_PDF_URL,
} from "@/lib/resume-data";

export const metadata = {
  title: "Resume",
  description:
    "A concise overview of experience across product design, systems thinking, UX strategy, and delivery.",
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-3 pt-12 pb-0 sm:px-6 sm:pt-20 sm:pb-0 md:px-16 md:pt-24 md:pb-0"
          aria-labelledby="resume-heading"
        >
          <ResumePageContent />
        </section>

        {/* Dark endcap — no scroll animation */}
        <section
          className="border-t border-[#242424] bg-[#171717] px-4 py-16 text-white sm:px-8 sm:py-20 md:px-12 md:py-24"
          aria-labelledby="resume-endcap-title"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto max-w-[896px] text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[1.8px] text-white/72 sm:text-sm">
                RESUME
              </p>
              <h2
                id="resume-endcap-title"
                className="mt-6 max-w-[20ch] text-[42px] font-medium leading-[0.94] tracking-[-1.3px] text-white sm:text-[56px] sm:tracking-[-1.8px] md:text-[72px] md:tracking-[-2px]"
              >
                The experience
                <br />
                in one place
              </h2>
              <p className="mx-auto mt-5 max-w-[36rem] text-[14px] leading-[1.6] text-[#c7c7c7] sm:mt-6 sm:text-[16px] sm:leading-[1.58] md:max-w-[40rem] md:text-[18px] md:leading-[1.56]">
                A concise overview of product design, systems thinking, and
                delivery — with the work behind it available to explore.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-4">
                <a
                  href={RESUME_PDF_URL}
                  download={RESUME_DOWNLOAD_NAME}
                  className="group flex h-11 items-center justify-center gap-1 rounded-full bg-white px-4 text-[11px] font-medium text-[#171717] transition-opacity duration-200 hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
                >
                  Download Resume
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5">
                    →
                  </span>
                </a>
                <Link
                  href="/work"
                  className="group flex h-11 items-center justify-center gap-1 rounded-full border border-white bg-transparent px-4 text-[11px] font-medium text:white transition-colors duration-200 hover:bg:white/10 focus:bg:white/10 focus:outline-none focus:ring-2 focus:ring:white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
                >
                  View Work
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <BackToTop />
      </main>
    </>
  );
}
