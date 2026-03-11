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
    <div
      className={
        centered ? "text-center" : ""
      }
    >
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-[1.8px] text-[#737373] ${centered ? "" : "mb-4"}`}
          role="doc-subtitle"
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={headingId}
        className="text-3xl font-medium tracking-[-0.85px] text-[#171717] md:text-5xl md:leading-[60px]"
      >
        {title}
      </h2>
      <p
        className={`mt-4 max-w-[672px] text-lg leading-[1.5] text-[#525252] md:text-xl ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
