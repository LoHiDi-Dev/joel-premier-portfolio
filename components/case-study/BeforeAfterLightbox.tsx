"use client";

import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ScreenshotConfig } from "./types";

interface BeforeAfterLightboxProps {
  open: boolean;
  visuals: ScreenshotConfig[];
  initialIndex: number;
  onClose: () => void;
}

export function BeforeAfterLightbox({
  open,
  visuals,
  initialIndex,
  onClose,
}: BeforeAfterLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const current = visuals[index];
  const stateLabel = current.badgeLabel ?? current.label;

  useEffect(() => {
    if (open) {
      queueMicrotask(() => closeBtnRef.current?.focus());
    }
  }, [open]);

  const goPrev = useCallback(
    () => setIndex((i) => (i === 0 ? visuals.length - 1 : i - 1)),
    [visuals.length],
  );
  const goNext = useCallback(
    () => setIndex((i) => (i === visuals.length - 1 ? 0 : i + 1)),
    [visuals.length],
  );

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

  const showPagination = visuals.length > 1;

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

        <div className="flex min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-white p-5 sm:p-6">
          <div className="mx-auto flex min-h-full min-w-0 max-w-[1100px] items-start justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="lightbox-desc"
              src={current.src}
              alt={current.alt}
              className="max-w-full object-contain"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center gap-8 border-t border-[#e0e0e0] px-5 py-4 sm:px-6">
          {showPagination ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="flex items-center gap-2 rounded-full border border-[#e4e4e7] bg-[#fafafa] px-4 py-2 text-[14px] font-medium text-[#3f3f46] transition-colors hover:border-[#d4d4d8] hover:bg-[#f4f4f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 sm:text-sm"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={2} />
                Previous
              </button>
              <p className="min-w-[150px] text-center text-[14px] font-medium leading-[1.5] text-[#525252] sm:text-sm">
                {stateLabel} ({index + 1} of {visuals.length})
              </p>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="flex items-center gap-2 rounded-full border border-[#e4e4e7] bg-[#fafafa] px-4 py-2 text-[14px] font-medium text-[#3f3f46] transition-colors hover:border-[#d4d4d8] hover:bg-[#f4f4f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 sm:text-sm"
              >
                Next
                <ChevronRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </>
          ) : (
            <p className="text-center text-[14px] font-medium leading-[1.5] text-[#525252] sm:text-sm">
              {stateLabel}
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
