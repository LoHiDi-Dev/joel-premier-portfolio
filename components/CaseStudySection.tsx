import type { CaseStudySection as CaseStudySectionData } from "@/lib/projects";

interface CaseStudySectionProps {
  title: string;
  content: CaseStudySectionData;
}

export function CaseStudySection({
  title,
  content,
}: CaseStudySectionProps) {
  return (
    <section className="border-t border-[#e5e5e5] py-8 sm:py-10 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 md:py-12">
      <div>
        <h2 className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-sm">
          {title}
        </h2>
      </div>

      <div className="mt-4 space-y-4 sm:mt-5 md:mt-0 md:space-y-5">
        {content.paragraphs?.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[11px] leading-[1.5] text-[#404040] sm:text-sm md:text-xl md:leading-[1.55]"
          >
            {paragraph}
          </p>
        ))}

        {content.bullets && content.bullets.length > 0 && (
          <ul className="space-y-3">
            {content.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-[11px] leading-[1.5] text-[#404040] sm:text-sm md:text-lg md:leading-[1.55]"
              >
                <span
                  className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#171717]"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
