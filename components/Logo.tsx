"use client";

import { motion } from "framer-motion";

function Logo({ variant = "dark" }: { variant?: "dark" | "white" }) {
  const isDark = variant === "dark";

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      {/* JP circle — rotates on hover */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center rounded-full sm:h-[40px] sm:w-[40px] md:h-[48px] md:w-[48px] ${isDark ? "bg-[#171717]" : "bg-white"}`}
      >
        <span
          className={`text-[13px] font-semibold tracking-[-0.3px] sm:text-[14px] md:text-[16px] ${isDark ? "text-white" : "text-[#171717]"}`}
        >
          JP
        </span>
      </motion.div>

      {/* Text block — never rotates */}
      <div className="flex flex-col justify-center">
        <span
          className={`text-[13px] font-semibold leading-[1.2] tracking-[-0.2px] sm:text-[14px] md:text-[15px] ${isDark ? "text-[#171717]" : "text-white"}`}
        >
          Joel Premier
        </span>
        <span
          className={`text-[9px] font-medium uppercase tracking-[0.12em] sm:text-[10px] ${isDark ? "text-[#525252]" : "text-white/70"}`}
        >
          Product Designer
        </span>
      </div>
    </div>
  );
}

export { Logo };
