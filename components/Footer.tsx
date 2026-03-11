import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#262626] bg-[#171717] px-3 pt-8 pb-4 sm:px-6 sm:pt-12 md:px-16"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[10px] text-[#a1a1a1] sm:text-sm">Joel Stefano Premier</p>
            <p className="max-w-[430px] text-[9px] text-[#737373] sm:text-xs md:text-sm">
              Senior Product Designer focused on complex digital products,
              systems thinking, and accessibility.
            </p>
          </div>

          <nav className="flex gap-3 sm:gap-6" aria-label="Footer navigation">
            <Link
              href="/#work"
              className="text-[10px] font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white sm:text-xs md:text-sm"
            >
              Work
            </Link>
            <Link
              href="/resume"
              className="text-[10px] font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white sm:text-xs md:text-sm"
            >
              Resume
            </Link>
            <a
              href="mailto:hello@joelstefanopremier.com"
              className="text-[10px] font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white sm:text-xs md:text-sm"
            >
              Email
            </a>
          </nav>
        </div>

        <div className="mt-6 border-t border-[#262626] pt-4">
          <p className="text-[9px] text-[#737373] sm:text-xs">
            © {currentYear} Joel Stefano Premier. All rights reserved. Designed
            & developed with ❤️ in Dallas, Texas.
          </p>
        </div>
      </div>
    </footer>
  );
}
