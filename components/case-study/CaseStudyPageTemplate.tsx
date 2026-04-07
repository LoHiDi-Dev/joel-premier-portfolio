"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Header } from "@/components/Header";
import type { CaseStudy } from "@/lib/projects";
import { caseStudySectionViewport, fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import { LABEL_CLASS, SECTION_HEADING_CLASS, SECTION_MAX, CONTENT_MAX_EDITORIAL } from "./constants";
import type { CaseStudyPageConfig } from "./types";
import { CaseStudyHero } from "./CaseStudyHero";
import { CaseStudyMetaRow } from "./CaseStudyMetaRow";
import { EditorialSection } from "./EditorialSection";
import { SplitNarrativeSection } from "./SplitNarrativeSection";
import { EvidenceChapterSection } from "./EvidenceChapterSection";
import { CardGridSection } from "./CardGridSection";
import { CaseStudyEndcap } from "./CaseStudyEndcap";
import { BeforeAfterLightbox } from "./BeforeAfterLightbox";
import { BackToTopButton } from "./BackToTopButton";

interface CaseStudyPageTemplateProps {
  project: CaseStudy;
  nextProject: CaseStudy;
  config: CaseStudyPageConfig;
}

function hasApproachImage(
  approach: CaseStudyPageConfig["approach"],
): approach is CaseStudyPageConfig["approach"] & { image: NonNullable<CaseStudyPageConfig["approach"] extends { image?: infer I } ? I : never> } {
  return approach != null && "image" in approach && approach.image != null;
}

export function CaseStudyPageTemplate({
  project,
  nextProject,
  config,
}: CaseStudyPageTemplateProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightbox, setLightbox] = useState<
    | { type: "evidence"; chapterIndex: number; imageIndex: number }
    | { type: "approachGallery"; initialIndex: number }
    | null
  >(null);

  const openLightbox = useCallback((chapterIndex: number, imageIndex: number) => {
    setLightbox({ type: "evidence", chapterIndex, imageIndex });
  }, []);
  const openApproachGallery = useCallback((initialIndex: number) => {
    setLightbox({ type: "approachGallery", initialIndex });
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

  const approach = config.approach;
  const hasEvidence = config.evidenceChapters && config.evidenceChapters.length > 0;
  const isAuditLed = config.layoutVariant === "audit-led";

  return (
    <article className="bg-white overflow-x-clip">
      <Header heroOverlay />
      <CaseStudyHero
        project={project}
        heroTitle={config.heroTitle}
        heroSubtitle={config.heroSubtitle}
        heroSupportingLine={config.heroSupportingLine}
        heroEyebrow={config.heroEyebrow}
      />

      {config.heroMetaRow && config.heroMetaRow.length > 0 && (
        <CaseStudyMetaRow
          items={config.heroMetaRow}
          reducedMotion={reducedMotion}
          columns={config.heroMetaRow.length >= 4 ? 4 : 3}
        />
      )}

      <EditorialSection
        eyebrow={config.overview.eyebrow}
        title={config.overview.title}
        paragraphs={config.overview.paragraphs}
        reducedMotion={reducedMotion}
        wideContent={config.overview.wideContent}
        relaxedHeadingGap={config.overview.relaxedHeadingGap}
        compactGrid={config.overview.compactGrid}
        editorialMeasure={config.overview.editorialMeasure}
      />

      <EditorialSection
        eyebrow={config.challenge.eyebrow}
        title={config.challenge.title}
        paragraphs={config.challenge.paragraphs}
        reducedMotion={reducedMotion}
        muted
        wideContent={config.challenge.wideContent}
        compactGrid={config.challenge.compactGrid}
        editorialMeasure={config.challenge.editorialMeasure}
        relaxedBodyMeasure={config.challenge.relaxedBodyMeasure}
        compactBodyMeasure={config.challenge.compactBodyMeasure}
        wideBodyMeasure={config.challenge.wideBodyMeasure}
      />

      {approach != null &&
        (hasApproachImage(approach) ? (
          <SplitNarrativeSection
            eyebrow={approach.eyebrow}
            title={approach.title}
            paragraphs={approach.paragraphs}
            bullets={approach.bullets}
            image={approach.image}
            reducedMotion={reducedMotion}
            onLightboxOpen={
              "lightboxVisuals" in approach &&
              approach.lightboxVisuals?.length
                ? () => openApproachGallery(0)
                : undefined
            }
          />
        ) : (
          <EditorialSection
            eyebrow={approach.eyebrow}
            title={approach.title}
            paragraphs={approach.paragraphs}
            bullets={approach.bullets}
            reducedMotion={reducedMotion}
          />
        ))}

      {isAuditLed && config.designResponseIntro && (
        <EditorialSection
          eyebrow={config.designResponseIntro.eyebrow}
          title={config.designResponseIntro.title}
          paragraphs={config.designResponseIntro.paragraphs}
          reducedMotion={reducedMotion}
        />
      )}

      {hasEvidence && (
        <motion.section
          className="bg-white px-4 py-12 sm:px-8 sm:py-20 md:px-12 md:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={caseStudySectionViewport}
          variants={staggerContainerVariants(0.06)}
        >
          <div className={`mx-auto ${SECTION_MAX}`}>
            <motion.div
              className={`mb-12 ${CONTENT_MAX_EDITORIAL} md:mb-14`}
              variants={fadeUpVariants(reducedMotion, 16)}
            >
              <p className={LABEL_CLASS}>
                {config.evidenceSection?.eyebrow ?? "DESIGN EVOLUTION"}
              </p>
              <h2 className={SECTION_HEADING_CLASS}>
                {config.evidenceSection?.title ?? "Key moments where the experience became clearer."}
              </h2>
            </motion.div>
            <motion.div
              className="space-y-10 md:space-y-20"
              variants={staggerContainerVariants(0.08)}
            >
              {config.evidenceChapters!.map((chapter, idx) => (
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
      )}

      {lightbox != null && lightbox.type === "evidence" && hasEvidence && config.evidenceChapters && (
        <BeforeAfterLightbox
          key={`evidence-${lightbox.chapterIndex}-${lightbox.imageIndex}`}
          open
          visuals={config.evidenceChapters[lightbox.chapterIndex].visuals}
          initialIndex={lightbox.imageIndex}
          onClose={closeLightbox}
        />
      )}

      {lightbox != null &&
        lightbox.type === "approachGallery" &&
        approach &&
        "lightboxVisuals" in approach &&
        approach.lightboxVisuals &&
        approach.lightboxVisuals.length > 0 && (
          <BeforeAfterLightbox
            key="approach-gallery"
            open
            visuals={approach.lightboxVisuals}
            initialIndex={lightbox.initialIndex}
            onClose={closeLightbox}
          />
        )}

      {config.designAreas && (
        <CardGridSection
          eyebrow={config.designAreas.eyebrow}
          title={config.designAreas.title}
          items={config.designAreas.items}
          reducedMotion={reducedMotion}
          numbered={config.designAreas.numbered}
          leadCardTint
        />
      )}

      {isAuditLed && config.processApproach && (
        <EditorialSection
          eyebrow={config.processApproach.eyebrow}
          title={config.processApproach.title}
          paragraphs={config.processApproach.paragraphs}
          bullets={config.processApproach.bullets}
          reducedMotion={reducedMotion}
          muted
          spacious
        />
      )}

      {!isAuditLed && config.outcomes && (
        <EditorialSection
          eyebrow={config.outcomes.eyebrow}
          title={config.outcomes.title}
          paragraphs={config.outcomes.paragraphs}
          reducedMotion={reducedMotion}
        />
      )}

      {!isAuditLed && config.outcomeCards && (
        <CardGridSection
          eyebrow={config.outcomeCards.eyebrow}
          title={config.outcomeCards.title}
          items={config.outcomeCards.items}
          reducedMotion={reducedMotion}
          numbered={config.outcomeCards.numbered}
        />
      )}

      {config.reflection && (
        <EditorialSection
          eyebrow={config.reflection.eyebrow}
          title={config.reflection.title}
          paragraphs={config.reflection.paragraphs}
          reducedMotion={reducedMotion}
          muted
          spacious
          editorialMeasure={config.reflection.editorialMeasure}
          relaxedBodyMeasure={config.reflection.relaxedBodyMeasure}
          wideBodyMeasure={config.reflection.wideBodyMeasure}
        />
      )}

      <CaseStudyEndcap
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
