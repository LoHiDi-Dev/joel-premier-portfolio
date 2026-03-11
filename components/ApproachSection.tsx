import { APPROACH_ITEMS } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

export function ApproachSection() {
  return (
    <section
      id="process"
      className="px-6 py-24 md:py-32"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-[1152px]">
        <div className="mb-16 text-center">
          <SectionHeading
            eyebrow="Approach"
            title="Systems-Driven Design"
            description="Applying product strategy, accessibility, and systems thinking to simplify complex digital experiences."
            centered
          />
        </div>

        <div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {APPROACH_ITEMS.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#e5e5e5] bg-white p-6 text-center transition-colors hover:border-[#d4d4d4]"
              role="listitem"
            >
              <h3 className="text-xl font-semibold tracking-[-0.44px] text-[#171717]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-[1.45] text-[#525252]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
