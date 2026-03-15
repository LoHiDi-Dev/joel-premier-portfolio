import { Header } from "@/components/Header";
import { ResumePreviewSection } from "@/components/ResumePreviewSection";

export const metadata = {
  title: "Resume",
  description:
    "A concise overview of experience across product design, systems thinking, and delivery.",
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="px-3 pt-12 pb-14 sm:px-6 sm:pt-20 sm:pb-20 md:px-16 md:pt-24 md:pb-24"
          aria-labelledby="resume-heading"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[860px]">
              <h1
                id="resume-heading"
                className="text-[32px] font-medium leading-[0.98] tracking-[-1.1px] text-[#171717] sm:text-[44px] md:text-[64px] md:tracking-[-1.6px]"
              >
                Resume
              </h1>
              <p className="mt-4 max-w-[46rem] text-[14px] leading-[1.6] text-[#525252] sm:mt-5 sm:text-[16px] sm:leading-[1.58] md:text-[20px] md:leading-[1.5]">
                A concise overview of my experience across product design,
                systems thinking, and delivery.
              </p>
            </div>

            <div className="mt-12 border-t border-[#e5e5e5] pt-8 sm:mt-16 sm:pt-10 md:mt-20 md:pt-12">
              <ResumePreviewSection />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
