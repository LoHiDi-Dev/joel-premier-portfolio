"use client";

import Link from "next/link";
import { Eye, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white/90 backdrop-blur-sm"
      role="banner"
    >
      <nav
        className="mx-auto flex h-[56px] max-w-[1408px] items-center justify-between px-3 sm:px-6 md:h-[72px] md:px-16"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          aria-label="Joel Stefano Premier - Home"
          className="text-[11px] font-medium tracking-[-0.2px] text-[#171717] sm:text-sm md:text-[20px] md:tracking-[-0.45px]"
        >
          Joel Stefano Premier
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 sm:gap-5 md:flex md:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] text-[#404040] transition-colors hover:text-[#171717] focus:text-[#171717] sm:text-sm md:text-base"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="flex h-8 items-center gap-1.5 rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white sm:h-10 sm:gap-2 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
            <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            Resume
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#171717] transition-colors hover:bg-[#f5f5f5] focus:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[56px] z-40 bg-white md:hidden ${
          !menuOpen ? "hidden" : ""
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
        onKeyDown={(e) => e.key === "Escape" && closeMenu()}
      >
        <div
          className={`flex flex-col gap-1 px-4 py-6 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#171717] transition-colors hover:bg-[#f5f5f5] focus:bg-[#f5f5f5] focus:outline-none"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume"
            onClick={closeMenu}
            className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full border border-[#171717] bg-white px-6 text-base font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none"
          >
            <Eye className="h-4 w-4" aria-hidden />
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
