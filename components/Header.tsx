import Link from "next/link";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
] as const;

export function Header() {
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
          className="text-[11px] font-medium tracking-[-0.2px] text-[#171717] sm:text-sm md:text-[20px] md:tracking-[-0.45px]"
        >
          Joel Stefano Premier
        </Link>

        <div className="flex items-center gap-3 sm:gap-5 md:gap-10">
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
            className="flex h-7 items-center rounded-full bg-[#171717] px-3 text-[11px] font-medium text-white transition-opacity hover:opacity-90 focus:opacity-90 sm:h-8 sm:px-4 sm:text-xs md:h-10 md:px-6 md:text-base"
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
