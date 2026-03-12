import { APPROACH_ITEMS } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

export function ApproachSection() {
  return (
    <section
      id="process"
      className="px-3 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 md:px-16 md:pt-16 md:pb-20"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-6 text-center sm:mb-10 md:mb-16">
          <SectionHeading
            headingId="approach-heading"
            title="Systems-Driven Design"
            description={
              "Applying product strategy, accessibility, and systems thinking\nto simplify complex digital experiences."
            }
            centered
          />
        </div>

        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8" role="list">
          {APPROACH_ITEMS.map((item) => (
            <div key={item.title} className="text-center" role="listitem">
              <h3 className="text-xs font-semibold leading-tight tracking-[-0.2px] text-[#171717] sm:text-base md:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 whitespace-pre-line text-xs leading-[1.55] text-[#525252] sm:mt-2.5 sm:text-[13px] md:text-base md:leading-[1.55]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
