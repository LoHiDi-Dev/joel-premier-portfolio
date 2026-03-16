/** Shared design tokens for case study pages. Matches Ulta reference. */

export const LABEL_CLASS =
  "text-[11px] font-semibold uppercase tracking-[1.8px] text-[#525252] sm:text-[12px]";
export const LABEL_CLASS_DARK =
  "text-[11px] font-semibold uppercase tracking-[1.8px] text-white/78 sm:text-[12px]";
export const SECTION_HEADING_CLASS =
  "mt-5 text-[28px] font-medium leading-[1.04] tracking-[-0.8px] text-[#171717] sm:text-[34px] md:text-[44px] md:tracking-[-1.1px]";
export const BODY_CLASS =
  "text-[15px] leading-[1.65] text-[#2d2d2d] sm:text-[16px] sm:leading-[1.62] md:text-[18px] md:leading-[1.66]";
export const CARD_TITLE_CLASS =
  "text-[18px] font-medium leading-[1.12] tracking-[-0.35px] sm:text-[20px] md:text-[22px]";
export const CAPTION_CLASS =
  "text-[14px] leading-[1.6] text-[#3d3d3d] sm:text-[15px] sm:leading-[1.62] md:text-[16px] md:leading-[1.62]";

export const SECTION_MAX = "max-w-[1280px]";
export const CONTENT_MAX = "max-w-[46rem]";
/** Wider measure for paragraphs that benefit from 2-line wrap (e.g. Tractor challenge) */
export const CONTENT_MAX_WIDE = "max-w-[54rem]";
/** Balanced editorial measure for cleaner heading/body wrap (Overview, Challenge, Reflection) */
export const CONTENT_MAX_EDITORIAL = "max-w-[52rem]";
/** Slightly wider for headings so they break naturally, not forced by body measure */
export const HEADING_MAX_EDITORIAL = "max-w-[56rem]";
/** Relaxed body measure for sections where 52rem causes awkward wrapping (e.g. CVS Reflection) */
export const CONTENT_MAX_RELAXED = "max-w-[62rem]";
/** Compact body measure aligned to heading first-line width (e.g. CVS Challenge ~"stakes") */
export const CONTENT_MAX_COMPACT = "max-w-[40rem]";
export const RADIUS = "rounded-[20px]";
/** Evidence thumbnail aspect ratio. Ulta source of truth. */
export const EVIDENCE_ASPECT = "aspect-[4/3]";
/** Subtle background tint for lead/anchor card in Key Design Decisions. Same on Ulta and CVS. */
export const LEAD_CARD_BG = "bg-[#f6f5f4]";

export const SECTION_TIGHT = "px-4 py-16 sm:px-8 sm:py-18 md:px-12 md:py-22";
export const SECTION_DEFAULT = "px-4 py-18 sm:px-8 sm:py-22 md:px-12 md:py-26";
export const SECTION_LOOSE = "px-4 py-22 sm:px-8 sm:py-26 md:px-12 md:py-32";
