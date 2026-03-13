interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
  headingId?: string;
  level?: 1 | 2;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  headingId,
  level = 2,
}: SectionHeadingProps) {
  const HeadingTag = level === 1 ? "h1" : "h2";
  const titleClass =
    level === 1
      ? "text-[32px] font-medium leading-[0.98] tracking-[-1.1px] text-[#171717] sm:text-[44px] md:text-[64px] md:tracking-[-1.6px]"
      : "text-[28px] font-medium leading-[1.02] tracking-[-0.8px] text-[#171717] sm:text-[34px] md:text-[44px] md:tracking-[-1.1px]";
  const descriptionClass =
    level === 1
      ? "mt-4 max-w-[46rem] whitespace-pre-line text-[14px] leading-[1.6] text-[#525252] sm:mt-5 sm:text-[16px] sm:leading-[1.58] md:text-[20px] md:leading-[1.5]"
      : "mt-3 max-w-[42rem] whitespace-pre-line text-[14px] leading-[1.6] text-[#525252] sm:mt-4 sm:text-[16px] sm:leading-[1.55] md:text-[18px] md:leading-[1.52]";

  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px] ${
            centered ? "" : "mb-3"
          }`}
          role="doc-subtitle"
        >
          {eyebrow}
        </p>
      )}
      <HeadingTag
        id={headingId}
        className={titleClass}
      >
        {title}
      </HeadingTag>
      <p
        className={`${descriptionClass} ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
