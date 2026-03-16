"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X } from "lucide-react";

const RESUME_URL = "/Joel_Premier_Senior_Product_Designer_Resume.pdf";
const RESUME_DOWNLOAD_NAME = "Joel_Premier_Resume.pdf";

interface ResumePreviewSectionProps {
  open: boolean;
  onClose: () => void;
}

function ResumeModal({ open, onClose }: ResumePreviewSectionProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      queueMicrotask(() => closeBtnRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
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
  }, [open, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] grid place-items-center bg-black/65 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative flex h-[88vh] max-h-[900px] w-[92vw] max-w-[1280px] flex-col overflow-hidden rounded-xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-[#e0e0e0] px-5 py-3 sm:px-6">
          <h2
            id="resume-modal-title"
            className="text-[14px] font-medium text-[#171717] sm:text-[15px]"
          >
            Resume
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d4d4d8] bg-white text-[#525252] transition-colors hover:border-[#a1a1aa] hover:bg-[#fafafa] hover:text-[#171717] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 overflow-hidden bg-[#f5f5f5]">
          <iframe
            src={RESUME_URL}
            title="Joel Premier Resume"
            className="h-full w-full flex-1"
          />
        </div>

        <div className="flex shrink-0 items-center justify-center gap-4 border-t border-[#e0e0e0] px-5 py-4 sm:gap-6 sm:px-6">
          <a
            href={RESUME_URL}
            download={RESUME_DOWNLOAD_NAME}
            className="inline-flex h-9 items-center justify-center rounded-full bg-[#171717] px-5 text-[13px] font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 sm:h-10 sm:px-6 sm:text-sm"
          >
            Download Resume
          </a>
          <Link
            href="/work"
            className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-[#171717] bg-white px-5 text-[13px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 sm:h-10 sm:px-6 sm:text-sm"
          >
            View Work
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function ResumePreviewSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="group w-full max-w-[560px] cursor-pointer overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-white text-left shadow-[0_8px_24px_rgba(23,23,23,0.04)] transition-shadow hover:shadow-[0_12px_32px_rgba(23,23,23,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
        aria-label="View resume (opens in modal)"
      >
        <div className="relative aspect-[3/4] w-full bg-[#f5f5f5] sm:aspect-[4/3]">
          <iframe
            src={`${RESUME_URL}#page=1`}
            title="Resume preview"
            className="pointer-events-none absolute inset-0 h-full w-full"
            tabIndex={-1}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/95 px-3 py-2.5 text-[13px] font-medium text-[#171717] shadow-sm opacity-0 transition-opacity group-hover:opacity-100 sm:text-sm">
            Click to view full resume
          </div>
        </div>
      </button>

      <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-4">
        <a
          href={RESUME_URL}
          download={RESUME_DOWNLOAD_NAME}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#171717] px-4 text-[11px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
        >
          Download Resume
        </a>
        <Link
          href="/work"
          className="group inline-flex h-11 items-center justify-center gap-1 rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
        >
          View Work
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>

      <ResumeModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
