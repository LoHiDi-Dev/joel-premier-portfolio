"use client";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUp, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Header } from "@/components/Header";
import { fadeUpVariants, MOTION, staggerContainerVariants } from "@/lib/motion";
import type { CaseStudy } from "@/lib/projects";

interface CaseStudyUltaContentProps {
  project: CaseStudy;
  nextProject: CaseStudy;
}

interface EditorialSectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  reducedMotion: boolean;
  muted?: boolean;
}

interface SplitNarrativeSectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: ScreenshotConfig;
  reducedMotion: boolean;
  muted?: boolean;
}

interface ScreenshotConfig {
  src: string;
  alt: string;
  caption: string;
  label: string;
  aspectClass?: string;
  treatment?: "neutral" | "before" | "after" | "support";
  captionNowrap?: boolean;
}

interface EvidenceChapter {
  label: string;
  title: string;
  paragraphs: string[];
  before: ScreenshotConfig;
  after: ScreenshotConfig;
}

const ULTA_ASSETS = {
  homepageBefore: "/ulta/00-ulta-homepage-before.png",
  homepageAfter: "/ulta/00-ulta-homepage-after.png",
  navigationBefore: "/ulta/1-ulta-shop-navigation-before.png",
  navigationAfter: "/ulta/1-ulta-shop-navigation-after.png",
  shopPageBefore: "/ulta/2-ulta-shoppage-before.png",
  shopPageAfter: "/ulta/2-ulta-shoppage-after.png",
  loginBefore: "/ulta/3-ulta-login-before.png",
  loginAfter: "/ulta/3-ulta-login-after.png",
} as const;

const DESIGN_AREAS = [
  {
    title: "Homepage & Merchandising Hierarchy",
    description:
      "Reduced visual competition across promotional content so customers could scan priorities faster and enter shopping with more clarity.",
  },
  {
    title: "Navigation & Browse Pathways",
    description:
      "Simplified category access and browse structure so users could move from intent to exploration with less friction.",
  },
  {
    title: "Category Discovery",
    description:
      "Made subcategory entry points easier to scan and compare, helping customers orient quickly and move into the right part of the assortment.",
  },
  {
    title: "Account & Loyalty Entry",
    description:
      "Clarified sign-in, account creation, and loyalty value so account access felt more focused, trustworthy, and easier to act on.",
  },
] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Kept for potential reuse
const OUTCOME_HIGHLIGHTS = [
  {
    title: "Clearer continuity",
    description:
      "The experience better supported movement from homepage to browse, from browse to category entry, and from shopping to account actions.",
  },
  {
    title: "Stronger hierarchy",
    description:
      "Merchandising, navigation, and key actions were easier to scan because visual competition was reduced across major entry points.",
  },
  {
    title: "More purchase confidence",
    description:
      "Customers were given clearer paths into discovery and sign-in moments that felt easier to trust and continue through.",
  },
] as const;

const EVIDENCE_CHAPTERS: EvidenceChapter[] = [
  {
    label: "HOMEPAGE",
    title: "Creating a clearer homepage entry into shopping.",
    paragraphs: [
      "The homepage shifted from a crowded promotional surface to a clearer entry into shopping.",
      "Stronger merchandising hierarchy made it easier to scan, orient, and move into the journey.",
    ],
    before: {
      src: ULTA_ASSETS.homepageBefore,
      alt: "Ulta Beauty homepage before redesign showing a dense promotional layout with multiple competing merchandising areas.",
      caption:
        "Promotions, navigation, and hero messaging competed more heavily for attention.",
      label: "Before — Competing promotional signals",
      treatment: "before",
    },
    after: {
      src: ULTA_ASSETS.homepageAfter,
      alt: "Ulta Beauty homepage after redesign showing clearer merchandising hierarchy and more structured promotional organization.",
      caption:
        "A cleaner structure created clearer pathways into shopping and a more modern promotional rhythm.",
      label: "After — Clearer merchandising hierarchy",
      treatment: "after",
    },
  },
  {
    label: "NAVIGATION",
    title: "Creating clearer paths into shopping.",
    paragraphs: [
      "Navigation was simplified to reduce decision friction at the top of the journey.",
      "Clearer category entry points made it easier to move from intent into exploration.",
    ],
    before: {
      src: ULTA_ASSETS.navigationBefore,
      alt: "Ulta Beauty shop navigation before redesign showing a dense browse structure with many competing navigation options.",
      caption:
        "The earlier navigation placed more decision weight on users at the start of the journey.",
      label: "Before — Dense browse structure",
      treatment: "before",
    },
    after: {
      src: ULTA_ASSETS.navigationAfter,
      alt: "Ulta Beauty shop navigation after redesign showing cleaner category pathways and clearer browse entry points.",
      caption:
        "Clearer entry points and a more structured browse model made navigation easier to scan and act on.",
      label: "After — Cleaner category access",
      treatment: "after",
    },
  },
  {
    label: "CATEGORY DISCOVERY",
    title: "Making category entry easier to scan and act on.",
    paragraphs: [
      "Category entry was streamlined so subcategories were easier to scan and compare.",
      "A clearer structure helped customers move into the right part of the assortment faster.",
    ],
    before: {
      src: ULTA_ASSETS.shopPageBefore,
      alt: "Ulta Beauty category page before redesign showing a hero-led presentation with discovery competing with broader framing.",
      caption:
        "Discovery depended more on broader framing and less on direct entry points.",
      label: "Before — Discovery competed with presentation",
      treatment: "before",
    },
    after: {
      src: ULTA_ASSETS.shopPageAfter,
      alt: "Ulta Beauty category page after redesign showing more direct subcategory entry and clearer discovery pathways.",
      caption:
        "A more scannable structure helped customers reach the right subcategory faster.",
      label: "After — More direct category entry",
      treatment: "after",
    },
  },
  {
    label: "ACCOUNT & LOYALTY",
    title: "Clarifying sign-in and loyalty entry.",
    paragraphs: [
      "Account entry was clarified to feel more trustworthy and easier to act on.",
      "Sign-in, account creation, and loyalty value were organized so the next step felt immediately clear.",
    ],
    before: {
      src: ULTA_ASSETS.loginBefore,
      alt: "Ulta Beauty sign-in modal before redesign showing multiple competing account actions and benefit messages.",
      caption:
        "Sign-in, account creation, and benefit messaging competed within a more crowded modal flow.",
      label: "Before — Split attention across account actions",
      treatment: "before",
    },
    after: {
      src: ULTA_ASSETS.loginAfter,
      alt: "Ulta Beauty sign-in experience after redesign showing a more focused and trustworthy account access flow.",
      caption:
        "A more focused sign-in experience created stronger clarity, better trust, and a clearer path into loyalty.",
      label: "After — More focused account access",
      treatment: "after",
    },
  },
];

const LABEL_CLASS =
  "text-[10px] font-semibold uppercase tracking-[1.8px] text-[#737373] sm:text-[11px]";
const LABEL_CLASS_DARK =
  "text-[10px] font-semibold uppercase tracking-[1.8px] text-white/72 sm:text-[11px]";
const SECTION_HEADING_CLASS =
  "mt-5 text-[28px] font-medium leading-[1.04] tracking-[-0.8px] text-[#171717] sm:text-[34px] md:text-[44px] md:tracking-[-1.1px]";
const BODY_CLASS =
  "text-[15px] leading-[1.72] text-[#3d3d3d] sm:text-[16px] sm:leading-[1.7] md:text-[18px] md:leading-[1.66]";
const CARD_TITLE_CLASS =
  "text-[18px] font-medium leading-[1.12] tracking-[-0.35px] sm:text-[20px] md:text-[22px]";
const CAPTION_CLASS =
  "text-[14px] leading-[1.65] text-[#4c4c4c] sm:text-[14px] sm:leading-[1.66] md:text-[15px] md:leading-[1.62]";

const SECTION_MAX = "max-w-[1280px]";
const CONTENT_MAX = "max-w-[46rem]";
const RADIUS = "rounded-[20px]";

interface BeforeAfterLightboxProps {
  open: boolean;
  before: ScreenshotConfig;
  after: ScreenshotConfig;
  initialIndex: 0 | 1;
  onClose: () => void;
}

function BeforeAfterLightbox({
  open,
  before,
  after,
  initialIndex,
  onClose,
}: BeforeAfterLightboxProps) {
  const [index, setIndex] = useState<0 | 1>(initialIndex);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const pair = [before, after] as const;
  const current = pair[index];
  const stateLabel = index === 0 ? "Before" : "After";

  useEffect(() => {
    if (open) {
      queueMicrotask(() => closeBtnRef.current?.focus());
    }
  }, [open]);

  const goPrev = useCallback(() => setIndex((i) => (i === 0 ? 1 : 0)), []);
  const goNext = useCallback(() => setIndex((i) => (i === 1 ? 0 : 1)), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "ArrowLeft") {
        goPrev();
        return;
      }

      if (e.key === "ArrowRight") {
        goNext();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, goPrev, goNext]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!open) return null;

  const canGoPrev = index === 1;
  const canGoNext = index === 0;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] grid place-items-center bg-black/65 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-desc"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative flex h-[88vh] max-h-[900px] w-[92vw] max-w-[1280px] flex-col overflow-hidden rounded-xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-[#e0e0e0] px-5 py-3 sm:px-6">
          <h2
            id="lightbox-title"
            className="text-[14px] font-medium text-[#171717] sm:text-[15px]"
          >
            Image preview
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d4d4d8] bg-white text-[#525252] transition-colors hover:border-[#a1a1aa] hover:bg-[#fafafa] hover:text-[#171717] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2"
            aria-label="Close lightbox"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto p-5 sm:p-6">
          <div className="relative h-full w-full max-w-[1100px] mx-auto">
            <Image
              id="lightbox-desc"
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 92vw, 1100px"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center gap-8 border-t border-[#e0e0e0] px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous image (Before)"
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 sm:text-sm ${
              canGoPrev
                ? "border-[#e4e4e7] bg-[#fafafa] text-[#3f3f46] hover:border-[#d4d4d8] hover:bg-[#f4f4f5]"
                : "cursor-not-allowed border-[#e4e4e7] bg-[#fafafa] text-[#a1a1aa]"
            }`}
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
            Previous
          </button>
          <p className="min-w-[110px] text-center text-[13px] font-medium text-[#525252] sm:text-sm">
            {stateLabel} ({index + 1} / 2)
          </p>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next image (After)"
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 sm:text-sm ${
              canGoNext
                ? "border-[#e4e4e7] bg-[#fafafa] text-[#3f3f46] hover:border-[#d4d4d8] hover:bg-[#f4f4f5]"
                : "cursor-not-allowed border-[#e4e4e7] bg-[#fafafa] text-[#a1a1aa]"
            }`}
          >
            Next
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

const SECTION_TIGHT = "px-4 py-16 sm:px-8 sm:py-18 md:px-12 md:py-22";
const SECTION_DEFAULT = "px-4 py-18 sm:px-8 sm:py-22 md:px-12 md:py-26";
const SECTION_LOOSE = "px-4 py-22 sm:px-8 sm:py-26 md:px-12 md:py-32";

function ScreenshotFrame({
  src,
  alt,
  caption,
  label: _label, // retained for interface, badge shows Before/After
  aspectClass = "aspect-[16/10]",
  treatment = "neutral",
  captionNowrap = false,
  onLightboxOpen,
}: ScreenshotConfig & { onLightboxOpen?: () => void }) {
  void _label;
  const reducedMotion = Boolean(useReducedMotion());
  const showRoleBadge = treatment === "before" || treatment === "after";
  const isLightboxable =
    (treatment === "before" || treatment === "after") && onLightboxOpen != null;

  const frameClass =
    treatment === "before"
      ? `border border-[#d8d8d8] bg-[#f4f4f4] shadow-[0_4px_18px_rgba(0,0,0,0.04)] ${RADIUS}`
      : treatment === "after"
        ? `border border-[#d7d7d7] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)] ${RADIUS}`
        : treatment === "support"
          ? `border border-[#d9d9d9] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)] ${RADIUS}`
          : `border border-[#d7d7d7] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)] ${RADIUS}`;

  const imageBlock = (
    <div className={`relative w-full ${aspectClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={
          treatment === "before"
            ? "object-contain p-1.5 opacity-[0.92] sm:p-2.5"
            : "object-contain p-1.5 sm:p-2.5"
        }
        sizes="(max-width: 768px) 100vw, 48vw"
      />
      {isLightboxable && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#171717] shadow-md">
            <Maximize2 className="h-5 w-5" strokeWidth={2} />
          </span>
        </div>
      )}
    </div>
  );

  const frameContent = (
    <motion.div
      className={`relative overflow-hidden ${frameClass} ${isLightboxable ? "group cursor-pointer" : ""}`}
      whileHover={
        reducedMotion || isLightboxable
          ? undefined
          : { scale: MOTION.scale.box }
      }
      transition={{ duration: MOTION.duration.base, ease: MOTION.easeOut }}
    >
      {isLightboxable ? (
        <button
          type="button"
          onClick={onLightboxOpen}
          className="block w-full text-left"
          aria-label={`View ${treatment === "before" ? "before" : "after"} screenshot larger`}
        >
          {imageBlock}
        </button>
      ) : (
        imageBlock
      )}
    </motion.div>
  );

  return (
    <motion.figure variants={fadeUpVariants(reducedMotion, 16)}>
      {showRoleBadge && (
        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[1.6px] ${
            treatment === "before" ? "text-[#5a5a5a]" : "text-[#171717]"
          }`}
        >
          {treatment === "before" ? "Before" : "After"}
        </p>
      )}
      {frameContent}
      <figcaption className="mt-5 space-y-1.5">
        <p className={`max-w-[36rem] ${CAPTION_CLASS} ${captionNowrap ? "md:whitespace-nowrap" : ""}`}>{caption}</p>
      </figcaption>
    </motion.figure>
  );
}

function EditorialSection({
  eyebrow,
  title,
  paragraphs,
  reducedMotion,
  muted = false,
}: EditorialSectionProps) {
  return (
    <motion.section
      className={`${muted ? "bg-[#f7f6f4]" : "bg-white"} ${SECTION_DEFAULT}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.06)}
    >
      <div className={`mx-auto ${SECTION_MAX} md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-12`}>
        <motion.div variants={fadeUpVariants(reducedMotion, 16)}>
          <p className={LABEL_CLASS}>{eyebrow}</p>
        </motion.div>
        <motion.div
          className={`mt-5 ${CONTENT_MAX} space-y-6 md:mt-0`}
          variants={staggerContainerVariants(0.06)}
        >
          <motion.h2
            className={SECTION_HEADING_CLASS}
            variants={fadeUpVariants(reducedMotion, 10)}
          >
            {title}
          </motion.h2>
          <div className="space-y-5">
            {paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                className={BODY_CLASS}
                variants={fadeUpVariants(reducedMotion, 10)}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function SplitNarrativeSection({
  eyebrow,
  title,
  paragraphs,
  image,
  reducedMotion,
  muted = false,
}: SplitNarrativeSectionProps) {
  return (
    <motion.section
      className={`${muted ? "bg-[#f7f6f4]" : "bg-white"} ${SECTION_DEFAULT}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.06)}
    >
      <div className={`mx-auto grid ${SECTION_MAX} gap-10 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:items-start md:gap-16`}>
        <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
          <p className={LABEL_CLASS}>{eyebrow}</p>
          <h2 className={SECTION_HEADING_CLASS}>{title}</h2>
          <div className={`mt-5 ${CONTENT_MAX} space-y-5`}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={BODY_CLASS}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
        <ScreenshotFrame {...image} treatment="support" />
      </div>
    </motion.section>
  );
}

function EvidenceChapterSection({
  chapter,
  chapterIndex,
  reducedMotion,
  onOpenLightbox,
}: {
  chapter: EvidenceChapter;
  chapterIndex: number;
  reducedMotion: boolean;
  onOpenLightbox: (chapterIndex: number, imageIndex: 0 | 1) => void;
}) {
  return (
    <motion.article
      className="grid gap-8 border-t border-[#ebebeb] pt-10 md:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] md:gap-16 md:pt-12"
      variants={staggerContainerVariants(0.06)}
    >
      <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
        <p className={LABEL_CLASS}>{chapter.label}</p>
        <h3 className="mt-5 text-[24px] font-medium leading-[1.08] tracking-[-0.55px] text-[#171717] sm:text-[28px] md:text-[32px] md:tracking-[-0.8px]">
          {chapter.title}
        </h3>
        <div className="mt-5 max-w-[30rem] space-y-4">
          {chapter.paragraphs.map((paragraph) => (
            <p key={paragraph} className={BODY_CLASS}>
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="grid gap-6 md:grid-cols-2 md:gap-8"
        variants={staggerContainerVariants(0.06)}
      >
        <ScreenshotFrame
          {...chapter.before}
          aspectClass="aspect-[4/3]"
          onLightboxOpen={() => onOpenLightbox(chapterIndex, 0)}
        />
        <ScreenshotFrame
          {...chapter.after}
          aspectClass="aspect-[4/3]"
          onLightboxOpen={() => onOpenLightbox(chapterIndex, 1)}
        />
      </motion.div>
    </motion.article>
  );
}

function CardGridSection({
  eyebrow,
  title,
  items,
  reducedMotion,
  dark = false,
  numbered = false,
}: {
  eyebrow: string;
  title: string;
  items: ReadonlyArray<{ title: string; description: string }>;
  reducedMotion: boolean;
  dark?: boolean;
  numbered?: boolean;
}) {
  return (
    <motion.section
      className={`${dark ? "bg-[#171717] text-white" : "bg-white"} ${SECTION_TIGHT}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.06)}
    >
      <div className={`mx-auto ${SECTION_MAX}`}>
        <motion.div className="max-w-[50rem]" variants={fadeUpVariants(reducedMotion, 16)}>
          <p className={dark ? LABEL_CLASS_DARK : LABEL_CLASS}>{eyebrow}</p>
          <h2 className={`${SECTION_HEADING_CLASS} ${dark ? "text-white" : "text-[#171717]"}`}>
            {title}
          </h2>
        </motion.div>
        <motion.div
          className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6"
          variants={staggerContainerVariants(0.06)}
        >
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className={`${RADIUS} border px-5 py-6 sm:px-6 sm:py-7 ${
                dark
                  ? "border-white/12 bg-white/[0.05]"
                  : "border-[#e8e8e8] bg-[#fafafa]"
              }`}
              variants={fadeUpVariants(reducedMotion, 10)}
            >
              {numbered && (
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[1.8px] sm:text-[11px] ${
                    dark ? "text-white/60" : "text-[#737373]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
              )}
              <h3
                className={`${CARD_TITLE_CLASS} ${dark ? "text-white" : "text-[#171717]"} ${numbered ? "mt-3" : ""}`}
              >
                {item.title}
              </h3>
              <p className={`mt-5 ${CAPTION_CLASS} ${dark ? "text-white/78" : "text-[#555555]"}`}>
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function UltaCaseStudyEndcap({
  nextProject,
  reducedMotion,
}: {
  nextProject: CaseStudy;
  reducedMotion: boolean;
}) {
  return (
    <motion.section
      className="border-t border-[#242424] bg-[#171717] px-4 py-16 text-white sm:px-8 sm:py-20 md:px-12 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants(0.08)}
      aria-labelledby="ulta-endcap-title"
    >
      <div className={`mx-auto ${SECTION_MAX}`}>
        <div className="mx-auto max-w-[896px] text-center">
          <motion.div
            className="flex flex-col items-center"
            variants={fadeUpVariants(reducedMotion, 16)}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[1.8px] text-white/52 sm:text-sm">
              NEXT CASE STUDY
            </p>
            <h2
              id="ulta-endcap-title"
              className="mt-6 max-w-[11ch] text-[42px] font-medium leading-[0.94] tracking-[-1.3px] text-white sm:text-[56px] sm:tracking-[-1.8px] md:text-[72px] md:tracking-[-2px]"
            >
              {nextProject.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[36rem] text-[14px] leading-[1.62] text-[#c7c7c7] sm:mt-6 sm:text-[16px] sm:leading-[1.58] md:max-w-[40rem] md:text-[18px] md:leading-[1.56]">
              {nextProject.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-4">
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex h-8 items-center justify-center gap-1 rounded-full bg-white px-4 text-[11px] font-medium text-[#171717] transition-opacity duration-200 hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                View Next Case Study
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              <Link
                href="/work"
                className="group flex h-8 items-center justify-center gap-1 rounded-full border border-white bg-transparent px-4 text-[11px] font-medium text-white transition-colors duration-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717] sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
              >
                View All Work
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function BackToTopButton({
  visible,
  reducedMotion,
  onClick,
}: {
  visible: boolean;
  reducedMotion: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6 md:right-8 md:bottom-8"
      initial={false}
      animate={
        visible
          ? { opacity: 1, y: 0, pointerEvents: "auto" }
          : { opacity: 0, y: 10, pointerEvents: "none" }
      }
      transition={{
        duration: reducedMotion ? 0 : 0.22,
        ease: MOTION.easeOut,
      }}
      aria-hidden={!visible}
    >
      <div className="group relative">
        <button
          type="button"
          onClick={onClick}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/92 text-[#171717] shadow-[0_10px_24px_rgba(0,0,0,0.10)] backdrop-blur-sm transition-colors duration-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-12 sm:w-12"
        >
          <ArrowUp className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.2} />
        </button>
        <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-black/8 bg-white/96 px-3.5 py-2 text-[12px] leading-none font-medium text-[#3d3d3d] opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-opacity duration-200 group-hover:opacity-100 md:block">
          Back to top
        </span>
      </div>
    </motion.div>
  );
}

export function CaseStudyUltaContent({
  project,
  nextProject,
}: CaseStudyUltaContentProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightbox, setLightbox] = useState<{
    chapterIndex: number;
    imageIndex: 0 | 1;
  } | null>(null);
  const openLightbox = useCallback((chapterIndex: number, imageIndex: 0 | 1) => {
    setLightbox({ chapterIndex, imageIndex });
  }, []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 720);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <article className="bg-white">
      <Header heroOverlay />

      <section
        id="ulta-hero"
        className="relative isolate -mt-14 overflow-hidden bg-[#121212] md:-mt-[72px]"
        aria-labelledby="ulta-case-study-title"
      >
        <motion.div
          className="absolute inset-0"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants(reducedMotion, 16)}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 24%" }}
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.36)_24%,rgba(8,8,8,0.24)_52%,rgba(8,8,8,0.86)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          className={`relative z-10 mx-auto flex min-h-[84svh] ${SECTION_MAX} flex-col px-4 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 md:min-h-[90svh] md:px-12 md:pb-20 md:pt-[96px]`}
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants(0.08)}
        >
          <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[11px] font-medium text-white/84 transition-colors duration-200 hover:text-white focus:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] sm:text-sm"
            >
              <span aria-hidden="true">←</span>
              Back to Work
            </Link>
          </motion.div>

          <div className="mt-auto max-w-[860px] pt-14 sm:pt-20 md:pt-24">
            <motion.p
              className="text-[11px] font-semibold uppercase tracking-[1.8px] text-white/68 sm:text-sm"
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              CASE STUDY
            </motion.p>
            <motion.h1
              id="ulta-case-study-title"
              className="mt-5 max-w-[11ch] text-[40px] font-medium leading-[0.92] tracking-[-1.4px] text-white sm:text-[56px] sm:tracking-[-1.8px] md:text-[82px] md:tracking-[-2.4px]"
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="mt-6 max-w-[32rem] text-[16px] leading-[1.54] text-white/92 sm:text-[19px] sm:leading-[1.5] md:text-[25px] md:leading-[1.38]"
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              Designing a clearer browse-to-buy journey across discovery,
              navigation, and loyalty.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <EditorialSection
        eyebrow="OVERVIEW"
        title="Designing a more coherent browse-to-buy journey for Ulta Beauty."
        paragraphs={[
          "At Ulta, I designed across connected moments in the commerce experience — treating homepage, browse, category entry, and account access as parts of one journey rather than separate screens.",
          "My focus was to bring stronger hierarchy to merchandising, clearer paths into shopping, and smoother transitions between discovery and loyalty so customers could move through the experience with more confidence.",
        ]}
        reducedMotion={reducedMotion}
      />

      <EditorialSection
        eyebrow="CHALLENGE"
        title="Balancing merchandising complexity with customer clarity."
        paragraphs={[
          "Ulta needed to support high-volume promotions, broad product discovery, and loyalty value without overwhelming customers at key moments in the journey.",
          "The challenge was not simply to modernize the interface, but to create stronger continuity across homepage, browse, category entry, and account access so customers could keep moving with less friction and more confidence.",
        ]}
        reducedMotion={reducedMotion}
        muted
      />

      <SplitNarrativeSection
        eyebrow="APPROACH"
        title="Designing for continuity across the shopping journey."
        paragraphs={[
          "I approached the experience as a connected system, shaping how homepage, browse, category entry, and account access worked together rather than optimizing each moment in isolation.",
          "The focus was on creating clearer pathways, stronger hierarchy, and a smoother progression from discovery to action.",
        ]}
        image={{
          src: ULTA_ASSETS.navigationAfter,
          alt: "Ulta Beauty shop navigation showing connected pathways across browse and account entry.",
          caption:
            "Browse and account entry patterns were refined to feel more continuous across the journey.",
          label: "Connected pathways",
          aspectClass: "aspect-[1024/498]",
          captionNowrap: true,
        }}
        reducedMotion={reducedMotion}
      />

      <motion.section
        className={`bg-white ${SECTION_LOOSE}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants(0.06)}
      >
        <div className={`mx-auto ${SECTION_MAX}`}>
          <motion.div
            className={`mb-10 ${CONTENT_MAX}`}
            variants={fadeUpVariants(reducedMotion, 16)}
          >
            <p className={LABEL_CLASS}>DESIGN EVOLUTION</p>
            <h2 className={SECTION_HEADING_CLASS}>
              Key moments where the shopping journey became clearer.
            </h2>
          </motion.div>

          <motion.div className="space-y-10 md:space-y-12" variants={staggerContainerVariants(0.08)}>
            {EVIDENCE_CHAPTERS.map((chapter, idx) => (
              <EvidenceChapterSection
                key={chapter.label}
                chapter={chapter}
                chapterIndex={idx}
                reducedMotion={reducedMotion}
                onOpenLightbox={openLightbox}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {lightbox != null && (
        <BeforeAfterLightbox
          key={`${lightbox.chapterIndex}-${lightbox.imageIndex}`}
          open
          before={EVIDENCE_CHAPTERS[lightbox.chapterIndex].before}
          after={EVIDENCE_CHAPTERS[lightbox.chapterIndex].after}
          initialIndex={lightbox.imageIndex}
          onClose={closeLightbox}
        />
      )}

      <CardGridSection
        eyebrow="KEY DESIGN AREAS"
        title="Key moments where hierarchy, trust, and task flow had to align."
        items={DESIGN_AREAS}
        reducedMotion={reducedMotion}
        numbered
      />

      <EditorialSection
        eyebrow="REFLECTION"
        title="Designing across the journey, not just the screens."
        paragraphs={[
          "This work reinforced the value of thinking in systems. The strongest decisions came from treating homepage, navigation, category discovery, and account access as connected parts of one commerce experience rather than isolated touchpoints.",
          "It also underscored how easily merchandising can compete with clarity in high-volume retail environments. Better outcomes came from creating stronger hierarchy, clearer paths into action, and a more continuous sense of movement across the journey.",
        ]}
        reducedMotion={reducedMotion}
        muted
      />

      <UltaCaseStudyEndcap
        nextProject={nextProject}
        reducedMotion={reducedMotion}
      />

      <BackToTopButton
        visible={showBackToTop}
        reducedMotion={reducedMotion}
        onClick={scrollToTop}
      />
    </article>
  );
}
