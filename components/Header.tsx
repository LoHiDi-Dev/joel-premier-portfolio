"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Logo } from "@/components/Logo";

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

interface HeaderProps {
  heroOverlay?: boolean;
}

export function Header({ heroOverlay = false }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reducedMotion = Boolean(useReducedMotion());
  const isHomepage = pathname === "/";
  const isHeroOverlay = heroOverlay;

  const closeMenu = () => setMenuOpen(false);

  // Reset menu when route changes so it never opens already-expanded on a new page
  useEffect(() => {
    const id = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(id);
  }, [pathname]);

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
      const threshold = isHeroOverlay ? 120 : SCROLL_THRESHOLD;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage, isHeroOverlay]);

  const scrollCloseActiveRef = useRef(false);
  const startYRef = useRef(0);

  useEffect(() => {
    if (!menuOpen) return;

    scrollCloseActiveRef.current = false;
    const ACTIVATE_DELAY_MS = 220;

    const timeoutId = window.setTimeout(() => {
      scrollCloseActiveRef.current = true;
      startYRef.current = window.scrollY;
    }, ACTIVATE_DELAY_MS);

    const handleScroll = () => {
      if (!scrollCloseActiveRef.current) return;
      const currentY = window.scrollY;
      if (Math.abs(currentY - startYRef.current) > 10) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const navVariants = isHeroOverlay
    ? {
        top: {
          backgroundColor: "rgba(12, 12, 12, 0.26)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          boxShadow: "0 1px 16px rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(10px)",
        },
        scrolled: {
          backgroundColor: "rgba(255, 255, 255, 0.97)",
          borderColor: "rgba(229, 229, 229, 1)",
          boxShadow: "0 1px 10px rgba(0, 0, 0, 0.04)",
          backdropFilter: "blur(12px)",
        },
      }
    : {
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

  const isOverlayTop = isHeroOverlay && !isScrolled;

  return (
    <motion.header
      className={`${isHeroOverlay ? "fixed inset-x-0 top-0" : "sticky top-0"} z-[1000] isolate border-b`}
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
        <Link
          href="/"
          aria-label="Joel Premier - Home"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.location.href = "/";
            }
          }}
          className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
        >
          <Logo variant={isOverlayTop ? "white" : "dark"} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 sm:gap-5 md:flex md:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/work" && pathname.startsWith("/work/"));

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[11px] transition-colors sm:text-sm md:text-base ${
                  isOverlayTop
                    ? isActive
                      ? "text-white"
                      : "text-white/78 hover:text-white"
                    : isActive
                      ? "text-[#171717]"
                      : "text-[#404040] hover:text-[#171717]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/resume"
            className={`flex h-11 items-center rounded-full border px-4 text-[11px] font-medium transition-colors sm:h-10 sm:px-6 sm:text-xs md:h-14 md:px-8 md:text-base ${
              isOverlayTop
                ? "border-white/40 bg-white/10 text-white hover:bg-white/20 focus:bg-white/20"
                : "border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white"
            }`}
          >
            Resume
          </Link>
        </div>

        {/* Mobile hamburger — relative z-10 so it stays on top within header */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`relative z-[1010] flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 md:hidden ${
            isOverlayTop
              ? "text-white hover:bg-white/10 focus:ring-white focus:ring-offset-[#171717]"
              : "text-[#171717] hover:bg-[#f5f5f5] focus:ring-[#171717] focus:ring-offset-white"
          }`}
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

      {/* Mobile nav drawer (push-down) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            className="relative z-[1005] overflow-hidden border-b border-[#e5e5e5] bg-white md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
              className="flex flex-col gap-1 px-4 py-4"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/work" && pathname.startsWith("/work/"));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors focus:outline-none ${
                      isActive
                        ? "bg-[#f5f5f5] text-[#171717]"
                        : "text-[#171717] hover:bg-[#f5f5f5]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/resume"
                onClick={closeMenu}
                className="mt-2 flex h-12 items-center justify-center rounded-full border border-[#171717] bg-white px-6 text-base font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white focus:bg-[#171717] focus:text-white focus:outline-none"
              >
                Resume
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile backdrop dim */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[995] bg-black/20 md:hidden"
            style={{ top: "56px" }}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
