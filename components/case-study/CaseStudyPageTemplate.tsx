"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Header } from "@/components/Header";
import type { CaseStudy } from "@/lib/projects";
import { caseStudySectionViewport, fadeUpVariants, staggerContainerVariants } from "@/lib/motion";
import { LABEL_CLASS, SECTION_HEADING_CLASS, SECTION_MAX, CONTENT_MAX_EDITORIAL, BODY_CLASS } from "./constants";
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
    | { type: "overview" }
    | null
  >(null);

  const openLightbox = useCallback((chapterIndex: number, imageIndex: number) => {
    setLightbox({ type: "evidence", chapterIndex, imageIndex });
  }, []);
  const openApproachGallery = useCallback((initialIndex: number) => {
    setLightbox({ type: "approachGallery", initialIndex });
  }, []);
  const openOverviewLightbox = useCallback(() => {
    setLightbox({ type: "overview" });
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
  const overviewImage = config.overview.image;
  const designToProduction = config.designToProduction;

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

      {overviewImage ? (
        <SplitNarrativeSection
          eyebrow={config.overview.eyebrow}
          title={config.overview.title}
          paragraphs={config.overview.paragraphs}
          image={overviewImage}
          reducedMotion={reducedMotion}
          onLightboxOpen={openOverviewLightbox}
        />
      ) : (
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
      )}

      {lightbox != null && lightbox.type === "overview" && overviewImage && (
        <BeforeAfterLightbox
          key="overview"
          open
          visuals={[overviewImage]}
          initialIndex={0}
          onClose={closeLightbox}
        />
      )}

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
              <h2
                className={`${SECTION_HEADING_CLASS} ${
                  config.evidenceSection?.title?.includes("\n")
                    ? "whitespace-pre-line"
                    : ""
                }`}
              >
                {config.evidenceSection?.title ?? "Key moments where the experience became clearer."}
              </h2>
              {config.evidenceSection?.paragraphs &&
                config.evidenceSection.paragraphs.length > 0 && (
                  <div className="mt-5 space-y-4">
                    {config.evidenceSection.paragraphs.map((paragraph) => (
                      <p key={paragraph} className={BODY_CLASS}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
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

      {designToProduction && (
        <motion.section
          className="bg-[#f7f6f4] px-4 py-12 sm:px-8 sm:py-20 md:px-12 md:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={caseStudySectionViewport}
          variants={staggerContainerVariants(0.06)}
        >
          <div className={`mx-auto ${SECTION_MAX} md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-12`}>
            <motion.div variants={fadeUpVariants(reducedMotion, 16)}>
              <p className={`${LABEL_CLASS} whitespace-nowrap`}>
                {designToProduction.eyebrow}
              </p>
            </motion.div>
            <motion.div
              className="mt-5 min-w-0 space-y-6 md:mt-0"
              variants={staggerContainerVariants(0.06)}
            >
              <motion.h2
                className={`${SECTION_HEADING_CLASS} ${CONTENT_MAX_EDITORIAL}`}
                variants={fadeUpVariants(reducedMotion, 10)}
              >
                {designToProduction.title}
              </motion.h2>
              <div className={`space-y-5 ${CONTENT_MAX_EDITORIAL}`}>
                {designToProduction.paragraphs.map((paragraph) => (
                  <motion.p
                    key={paragraph}
                    className="text-[15px] leading-[1.65] text-[#2d2d2d] sm:text-[16px] sm:leading-[1.62] md:text-[18px] md:leading-[1.66]"
                    variants={fadeUpVariants(reducedMotion, 10)}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {designToProduction.capabilityGroups &&
                designToProduction.capabilityGroups.length > 0 && (
                  <motion.div
                    className="mt-8 space-y-6"
                    variants={staggerContainerVariants(0.06)}
                  >
                    {designToProduction.capabilityGroups.map((group) => (
                      <motion.div
                        key={group.label}
                        variants={fadeUpVariants(reducedMotion, 10)}
                      >
                        <p className="text-[13px] font-semibold uppercase tracking-[1.6px] text-[#525252]">
                          {group.label}
                        </p>
                        <ul
                          className="mt-3 flex flex-wrap gap-2.5"
                          role="list"
                          aria-label={group.label}
                        >
                          {group.items.map((item) => (
                            <li key={item}>
                              <span className="inline-flex rounded-full border border-[#e5e5e5] bg-white px-3.5 py-2 text-[13px] font-normal leading-[1.3] text-[#171717] sm:text-[14px]">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

              {designToProduction.liveProductCta && (
                <motion.div variants={fadeUpVariants(reducedMotion, 10)}>
                  <a
                    href={designToProduction.liveProductCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-[#171717] bg-white px-5 text-[12px] font-medium text-[#171717] transition-colors duration-200 hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 sm:h-12 sm:px-6 sm:text-[13px]"
                  >
                    {designToProduction.liveProductCta.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.section>
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
