import { APPROACH_ITEMS } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

export function ApproachSection() {
  return (
    <section
      id="process"
      className="px-3 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 md:px-16 md:pt-8 md:pb-20"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-[1280px] border-t border-[#e8e8e8] pt-10 sm:pt-10 md:pt-12">
        <div className="mb-6 text-center sm:mb-10 md:mb-16">
          <SectionHeading
            headingId="approach-heading"
            title="Systems-Driven Design"
            description={
              "Using product strategy, accessibility, and systems thinking\nto simplify complex digital experiences."
            }
            centered
          />
        </div>

        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8" role="list">
          {APPROACH_ITEMS.map((item) => (
            <div key={item.title} className="mx-auto max-w-[18rem] text-center" role="listitem">
              <h3 className="text-[15px] font-medium leading-[1.18] tracking-[-0.2px] text-[#171717] sm:text-[18px] md:text-[20px]">
                {item.title}
              </h3>
              <p className="mt-3 whitespace-pre-line text-[15px] leading-[1.62] text-[#525252] sm:text-[16px] md:text-[16px] md:leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
