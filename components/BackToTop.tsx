"use client";

import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { BackToTopButton } from "@/components/case-study/BackToTopButton";

const SCROLL_THRESHOLD = 720;

export function BackToTop() {
  const reducedMotion = Boolean(useReducedMotion());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <BackToTopButton
      visible={visible}
      reducedMotion={reducedMotion}
      onClick={scrollToTop}
    />
  );
}
