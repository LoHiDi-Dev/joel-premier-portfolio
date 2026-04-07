import type { Variants } from "framer-motion";

/**
 * Case study sections can be very tall (e.g. many evidence chapters). Using a high
 * `amount` (like 0.2) requires that fraction of the *entire* section to intersect the
 * viewport at once, which is impossible for long blocks—so content stays at opacity 0.
 */
export const caseStudySectionViewport = {
  once: true,
  amount: "some" as const,
  margin: "0px 0px 120px 0px",
};

export const MOTION = {
  duration: {
    fast: 0.24,
    base: 0.38,
    slow: 0.52,
  },
  easeOut: [0.22, 1, 0.36, 1],
  easeStandard: [0.4, 0, 0.2, 1],
  distance: {
    text: 12,
    section: 16,
  },
  scale: {
    image: 1.03,
    box: 1.02,
  },
} as const;

export function staggerContainerVariants(
  staggerChildren = 0.08,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

export function fadeUpVariants(
  reducedMotion: boolean,
  distance: number = MOTION.distance.text,
  duration: number = MOTION.duration.base,
): Variants {
  return {
    hidden: {
      // Prefer reduced motion: stay readable without relying on scroll-driven opacity.
      opacity: reducedMotion ? 1 : 0,
      ...(reducedMotion ? {} : { y: distance }),
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: MOTION.easeOut,
      },
    },
  };
}

export function scaleRevealVariants(
  reducedMotion: boolean,
  {
    y = 8,
    scale = MOTION.scale.box,
    duration = MOTION.duration.base,
  }: {
    y?: number;
    scale?: number;
    duration?: number;
  } = {},
): Variants {
  return {
    hidden: {
      opacity: 0,
      ...(reducedMotion ? {} : { y, scale }),
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: MOTION.easeOut,
      },
    },
  };
}

export function directionalRevealVariants(
  reducedMotion: boolean,
  {
    x = 0,
    y = 0,
    duration = MOTION.duration.base,
  }: {
    x?: number;
    y?: number;
    duration?: number;
  } = {},
): Variants {
  return {
    hidden: {
      opacity: 0,
      ...(reducedMotion ? {} : { x, y }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: MOTION.easeOut,
      },
    },
  };
}
