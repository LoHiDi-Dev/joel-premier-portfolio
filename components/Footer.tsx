"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
] as const;

const navLinkClass =
  "text-[13px] font-normal text-[#b0b0b0] transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-2 hover:decoration-white/60 focus:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#525252] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] sm:text-sm";

const FOOTER_COPY = {
  name: "Joel Premier",
  description: `Senior Product Designer bringing structure, clarity,
and thoughtful execution to digital product teams.`,
  legal1: "Selected work presented for portfolio purposes.",
  legal2: "Designed & developed with ❤️ in Dallas, Texas 🇺🇸.",
} as const;

type FooterVariant = "home" | "inner";

function useFooterVariant(): FooterVariant {
  const pathname = usePathname();
  return pathname === "/" ? "home" : "inner";
}

const variantClasses = {
  home: {
    footer: "border-t border-[#2e2e2e] bg-[#171717] px-3 pt-3 pb-4 sm:px-6 sm:pt-10 sm:pb-8 md:px-16",
    mainGap: "gap-8 sm:flex-row sm:gap-6",
    leftGap: "space-y-2.5",
    dividerGap: "pt-3 md:mt-8 md:pt-6",
  },
  inner: {
    footer: "border-t border-[#2e2e2e] bg-[#171717] px-3 pt-3 pb-4 sm:px-6 sm:pt-10 sm:pb-6 md:px-16",
    mainGap: "gap-6 sm:flex-row sm:gap-4",
    leftGap: "space-y-2",
    dividerGap: "pt-3 md:mt-6 md:pt-5",
  },
} as const;

export function Footer() {
  const variant = useFooterVariant();
  const classes = variantClasses[variant];
  const pathname = usePathname();

  return (
    <footer className={classes.footer} role="contentinfo">
      <div className="mx-auto max-w-[1280px]">
        <div
          className={`hidden md:flex md:flex-row md:items-start md:justify-between ${classes.mainGap}`}
        >
          <div className={`${classes.leftGap} sm:pt-0`}>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
              aria-label="Joel Premier - Home"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-[#171717] focus-visible:ring-offset-2"
            >
              <Logo variant="white" />
            </Link>
            <p className="max-w-[430px] whitespace-pre-line text-[14px] leading-[1.6] text-[#b8b8b8] sm:text-sm sm:leading-[1.6] md:leading-[1.55]">
              {FOOTER_COPY.description}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6 sm:gap-y-0 sm:self-start"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href === "/work" && pathname.startsWith("/work/"));

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${navLinkClass} ${isActive ? "text-white" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className={`text-center pt-5 md:border-t md:border-[#2e2e2e] md:pt-6 ${classes.dividerGap}`}>
          <p className="text-[13px] leading-[1.55] text-[#a8a8a8] sm:text-sm sm:leading-[1.6]">
            {FOOTER_COPY.legal1}
          </p>
          <p className="mt-1 text-[13px] leading-[1.55] text-[#a8a8a8] sm:text-sm sm:leading-[1.6]">
            {FOOTER_COPY.legal2}
          </p>
        </div>
      </div>
    </footer>
  );
}
