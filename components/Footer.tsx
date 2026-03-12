import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#262626] bg-[#171717] px-3 pt-8 pb-4 sm:px-6 sm:pt-12 md:px-16"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="space-y-1.5">
            <p className="text-[11px] text-[#a1a1a1] sm:text-sm">Joel Stefano Premier</p>
            <p className="max-w-[430px] text-[10px] leading-[1.5] text-[#a1a1a1] sm:text-xs md:text-sm">
              Senior Product Designer shaping clear, accessible experiences for
              complex digital products.
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 sm:gap-6" aria-label="Footer navigation">
            <Link
              href="/work"
              className="text-[11px] font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white sm:text-xs md:text-sm"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-[11px] font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white sm:text-xs md:text-sm"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[11px] font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white sm:text-xs md:text-sm"
            >
              Contact
            </Link>
            <Link
              href="/resume"
              className="text-[11px] font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white sm:text-xs md:text-sm"
            >
              Resume
            </Link>
          </nav>
        </div>

        <div className="mt-6 border-t border-[#262626] pt-4 text-center">
          <p className="text-[10px] leading-[1.5] text-[#a1a1a1] sm:text-xs">
            © {currentYear} Joel Stefano Premier. All rights reserved.
          </p>
          <p className="mt-0.5 text-[10px] leading-[1.5] text-[#a1a1a1] sm:text-xs">
            Designed & developed with ❤️ in Dallas, Texas.
          </p>
        </div>
      </div>
    </footer>
  );
}
