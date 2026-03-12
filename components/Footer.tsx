import Link from "next/link";

export function Footer() {
  const navLinkClass =
    "text-xs font-medium text-[#a8a8a8] transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-2 hover:decoration-white/60 focus:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#525252] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] sm:text-sm";

  return (
    <footer
      className="border-t border-[#2e2e2e] bg-[#171717] px-3 pt-10 pb-6 sm:px-6 sm:pt-14 sm:pb-8 md:px-16"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="space-y-2.5">
            <p className="text-[13px] font-medium text-[#b3b3b3] sm:text-sm">
              Joel Premier
            </p>
            <p className="max-w-[430px] whitespace-pre-line text-[13px] leading-[1.6] text-[#adadad] sm:text-sm sm:leading-[1.6] md:leading-[1.55]">
              {`Senior Product Designer bringing structure, usability,
and thoughtful execution to digital product teams.`}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6 sm:gap-y-0"
            aria-label="Footer navigation"
          >
            <Link href="/work" className={navLinkClass}>
              Work
            </Link>
            <Link href="/about" className={navLinkClass}>
              About
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
            <Link href="/resume" className={navLinkClass}>
              Resume
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-[#2e2e2e] pt-5 text-center sm:mt-10 sm:pt-6">
          <p className="text-xs leading-[1.6] text-[#a8a8a8] sm:text-[13px]">
            All work presented for portfolio purposes.
          </p>
          <p className="mt-1 text-xs leading-[1.6] text-[#a8a8a8] sm:text-[13px]">
            Designed & developed with ❤️ in Dallas, Texas🇺🇸.
          </p>
        </div>
      </div>
    </footer>
  );
}
