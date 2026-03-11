"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white/80 backdrop-blur-sm"
      role="banner"
    >
      <nav
        className="mx-auto flex h-[72px] max-w-[1408px] items-center justify-between px-6 md:px-16"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-[20px] font-medium tracking-[-0.45px] text-[#171717] transition-opacity hover:opacity-80 focus:opacity-80"
        >
          Joel Stefano Premier
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-[#404040] transition-colors hover:text-[#171717] focus:text-[#171717]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="flex h-10 items-center gap-2 rounded-full bg-[#171717] px-6 py-2 text-base font-medium text-white transition-opacity hover:opacity-90 focus:opacity-90"
          >
            Resume
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`h-0.5 w-6 bg-[#171717] transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-[#171717] transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-[#171717] transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-[#e5e5e5] bg-white transition-all md:hidden ${mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-[#404040] transition-colors hover:text-[#171717]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#171717] text-base font-medium text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
