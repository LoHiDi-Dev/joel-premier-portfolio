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
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-sm ${
            centered ? "" : "mb-3"
          }`}
          role="doc-subtitle"
        >
          {eyebrow}
        </p>
      )}
      <HeadingTag
        id={headingId}
        className="text-xl font-medium tracking-[-0.6px] text-[#171717] sm:text-3xl md:text-5xl md:leading-[60px]"
      >
        {title}
      </HeadingTag>
      <p
        className={`mt-2 max-w-[672px] whitespace-pre-line text-[13px] leading-[1.5] text-[#525252] sm:mt-4 sm:text-base sm:leading-[1.55] md:text-lg md:text-xl md:leading-[1.5] ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
