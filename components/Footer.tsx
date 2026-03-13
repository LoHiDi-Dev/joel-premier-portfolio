"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
] as const;

const navLinkClass =
  "text-xs font-medium text-[#a8a8a8] transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-2 hover:decoration-white/60 focus:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#525252] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] sm:text-sm";

const FOOTER_COPY = {
  name: "Joel Premier",
  description: `Senior Product Designer bringing structure, usability,
and thoughtful execution to digital product teams.`,
  legal1: "All work presented for portfolio purposes.",
  legal2: "Designed & developed with ❤️ in Dallas, Texas🇺🇸.",
} as const;

type FooterVariant = "home" | "inner";

function useFooterVariant(): FooterVariant {
  const pathname = usePathname();
  return pathname === "/" ? "home" : "inner";
}

const variantClasses = {
  home: {
    footer: "border-t border-[#2e2e2e] bg-[#171717] px-3 pt-10 pb-6 sm:px-6 sm:pt-14 sm:pb-8 md:px-16",
    mainGap: "gap-8 sm:flex-row sm:gap-6",
    leftGap: "space-y-2.5",
    dividerGap: "mt-8 sm:mt-10 pt-5 sm:pt-6",
  },
  inner: {
    footer: "border-t border-[#2e2e2e] bg-[#171717] px-3 pt-6 pb-4 sm:px-6 sm:pt-8 sm:pb-6 md:px-16",
    mainGap: "gap-6 sm:flex-row sm:gap-4",
    leftGap: "space-y-2",
    dividerGap: "mt-6 sm:mt-8 pt-4 sm:pt-5",
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
          className={`flex flex-col sm:items-start sm:justify-between ${classes.mainGap}`}
        >
          <div className={classes.leftGap}>
            <p className="text-[13px] font-medium text-[#b3b3b3] sm:text-sm">
              {FOOTER_COPY.name}
            </p>
            <p className="max-w-[430px] whitespace-pre-line text-[13px] leading-[1.6] text-[#adadad] sm:text-sm sm:leading-[1.6] md:leading-[1.55]">
              {FOOTER_COPY.description}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6 sm:gap-y-0"
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

        <div className={`border-t border-[#2e2e2e] text-center ${classes.dividerGap}`}>
          <p className="text-xs leading-[1.6] text-[#a8a8a8] sm:text-[13px]">
            {FOOTER_COPY.legal1}
          </p>
          <p className="mt-1 text-xs leading-[1.6] text-[#a8a8a8] sm:text-[13px]">
            {FOOTER_COPY.legal2}
          </p>
        </div>
      </div>
    </footer>
  );
}
