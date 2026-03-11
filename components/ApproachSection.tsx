import { APPROACH_ITEMS } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

export function ApproachSection() {
  return (
    <section
      id="process"
      className="px-3 py-14 sm:px-6 sm:py-20 md:py-24"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-[1152px]">
        <div className="mb-8 text-center sm:mb-12">
          <SectionHeading
            headingId="approach-heading"
            title="Systems-Driven Design"
            description="Applying product strategy, accessibility, and systems thinking to simplify complex digital experiences."
            centered
          />
        </div>

        <div className="grid grid-cols-3 gap-x-2 gap-y-6 sm:gap-x-6 sm:gap-y-8" role="list">
          {APPROACH_ITEMS.map((item) => (
            <div key={item.title} className="text-center" role="listitem">
              <h3 className="text-[11px] font-semibold leading-tight tracking-[-0.2px] text-[#171717] sm:text-base md:text-xl">
                {item.title}
              </h3>
              <p className="mt-1 text-[10px] leading-[1.35] text-[#525252] sm:mt-2 sm:text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
