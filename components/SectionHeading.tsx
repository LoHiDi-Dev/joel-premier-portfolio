interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
  headingId?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  headingId,
}: SectionHeadingProps) {
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
      <h2
        id={headingId}
        className="text-[26px] font-medium tracking-[-0.6px] text-[#171717] sm:text-3xl md:text-5xl md:leading-[60px]"
      >
        {title}
      </h2>
      <p
        className={`mt-2 max-w-[672px] text-[12px] leading-[1.45] text-[#525252] sm:mt-4 sm:text-lg md:text-xl ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
