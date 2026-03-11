import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#262626] bg-[#171717] px-6 pt-16 pb-8 md:px-16"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-base text-[#a1a1a1]">Joel Stefano Premier</p>
            <p className="max-w-[400px] text-sm text-[#737373]">
              Senior Product Designer focused on complex digital products,
              systems thinking, and accessibility.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-8"
            aria-label="Footer navigation"
          >
            <Link
              href="/#work"
              className="text-base font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white"
            >
              Work
            </Link>
            <Link
              href="/resume"
              className="text-base font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white"
            >
              Resume
            </Link>
            <a
              href="mailto:hello@joelstefanopremier.com"
              className="text-base font-medium text-[#a1a1a1] transition-colors hover:text-white focus:text-white"
            >
              Email
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-[#262626] pt-8">
          <p className="text-sm text-[#737373]">
            © {currentYear} Joel Stefano Premier. All rights reserved. Designed
            & developed with ❤️ in Dallas, Texas.
          </p>
        </div>
      </div>
    </footer>
  );
}
