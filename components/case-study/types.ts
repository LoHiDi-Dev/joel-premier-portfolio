/** Shared types for the case study page system. Uses Ulta as the design reference. */

import type { CSSProperties } from "react";

export interface ScreenshotConfig {
  src: string;
  alt: string;
  caption: string;
  label: string;
  aspectClass?: string;
  treatment?: "neutral" | "before" | "after" | "support";
  captionNowrap?: boolean;
  /** When true, caption spans full width of image instead of max-w-[36rem] */
  captionFullWidth?: boolean;
  badgeLabel?: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
}

export interface EvidenceChapter {
  label: string;
  title: string;
  paragraphs: string[];
  visuals: ScreenshotConfig[];
}

export interface EditorialSectionContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface SplitNarrativeContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image: ScreenshotConfig;
}

export interface CardGridItem {
  title: string;
  description: string;
}

export interface AuditTile {
  src: string;
  alt: string;
  label: string;
}

export interface AuditSectionContent {
  intro: EditorialSectionContent;
  attribution?: string;
  tiles: AuditTile[];
}

export interface CaseStudyPageConfig {
  /** Layout variant: default (Ulta/CVS) or audit-led (Tractor Supply) */
  layoutVariant?: "default" | "audit-led";
  heroTitle?: string;
  heroSubtitle?: string;
  heroSupportingLine?: string;
  heroEyebrow?: string;
  heroMetaRow?: Array<{ label: string; value: string }>;
  metaCards?: Array<{
    label: string;
    value: string;
  }>;
  overview: EditorialSectionContent & { wideContent?: boolean; relaxedHeadingGap?: boolean; compactGrid?: boolean; editorialMeasure?: boolean };
  challenge: EditorialSectionContent & { wideContent?: boolean; compactGrid?: boolean; editorialMeasure?: boolean; relaxedBodyMeasure?: boolean; compactBodyMeasure?: boolean; wideBodyMeasure?: boolean };
  approach?: SplitNarrativeContent | (EditorialSectionContent & {
    bullets?: string[];
    image?: ScreenshotConfig;
    /** When present, the approach image opens a lightbox gallery with these visuals */
    lightboxVisuals?: ScreenshotConfig[];
  });
  /** Audit-led layout: compact 2x2 grid of audit findings */
  auditSection?: AuditSectionContent;
  /** Audit-led layout: intro before redesign sections */
  designResponseIntro?: EditorialSectionContent;
  /** Audit-led layout: process/approach section after evidence */
  processApproach?: EditorialSectionContent & { bullets?: string[] };
  /** Flexible evidence chapters; omit if no visual proof */
  evidenceChapters?: EvidenceChapter[];
  /** Section header for evidence chapters */
  evidenceSection?: { eyebrow: string; title: string };
  /** Key design areas or decisions as cards */
  designAreas?: {
    eyebrow: string;
    title: string;
    items: CardGridItem[];
    numbered?: boolean;
  };
  outcomes?: EditorialSectionContent;
  outcomeCards?: {
    eyebrow: string;
    title: string;
    items: CardGridItem[];
    numbered?: boolean;
  };
  reflection?: EditorialSectionContent & { editorialMeasure?: boolean; relaxedBodyMeasure?: boolean; wideBodyMeasure?: boolean };
}
