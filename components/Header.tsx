"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const SCROLL_THRESHOLD = 32;
const HERO_VISIBILITY_THRESHOLD = 0.15;

const NAV_TRANSITION = {
  duration: 0.34,
  ease: [0.22, 1, 0.36, 1] as const,
};

const NAV_TRANSITION_REDUCED = {
  duration: 0.1,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reducedMotion = Boolean(useReducedMotion());
  const isHomepage = pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isHomepage) {
      const hero = document.getElementById("hero");
      if (!hero) {
        setIsScrolled(false);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsScrolled((entry?.intersectionRatio ?? 1) < HERO_VISIBILITY_THRESHOLD);
        },
        {
          threshold: [0, HERO_VISIBILITY_THRESHOLD, 0.5, 1],
          rootMargin: "0px",
        }
      );
      observer.observe(hero);
      return () => observer.disconnect();
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const navVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0.82)",
      borderColor: "rgba(229, 229, 229, 0.55)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      backdropFilter: "blur(6px)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.97)",
      borderColor: "rgba(229, 229, 229, 1)",
      boxShadow: "0 1px 10px rgba(0, 0, 0, 0.04)",
      backdropFilter: "blur(12px)",
    },
  };

  return (
    <motion.header
      className="sticky top-0 z-50 border-b"
      role="banner"
      initial={false}
      animate={isScrolled ? "scrolled" : "top"}
      variants={navVariants}
      transition={reducedMotion ? NAV_TRANSITION_REDUCED : NAV_TRANSITION}
    >
      <nav
        className="mx-auto flex h-[56px] max-w-[1408px] items-center justify-between px-3 sm:px-6 md:h-[72px] md:px-16"
        aria-label="Main navigation"
      >
        <a
          href="/"
          aria-label="Joel Premier - Home"
          className="text-[11px] font-medium tracking-[-0.2px] text-[#171717] sm:text-sm md:text-[20px] md:tracking-[-0.45px]"
        >
          Joel Premier
        </a>

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
            className="flex h-8 items-center rounded-full border border-[#171717] bg-white px-4 text-[11px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base"
          >
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
            className="mt-2 flex h-12 items-center justify-center rounded-full border border-[#171717] bg-white px-6 text-base font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none"
          >
            Resume
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
