export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

export const springSnappy = {
  type: "spring" as const,
  stiffness: 420,
  damping: 30,
  mass: 0.75,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 180,
  damping: 24,
  mass: 0.95,
};

export const springReveal = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
  mass: 1.05,
};

export const springCinematic = {
  type: "spring" as const,
  stiffness: 90,
  damping: 18,
  mass: 1.1,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.05, ease: easeOutExpo },
  },
};

export const staggerChildren = (stagger = 0.1, delayChildren = 0.06) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const maskReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)", y: 28 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    y: 0,
    transition: { duration: 0.95, ease: easeOutExpo },
  },
};

export const curtain = {
  initial: { scaleY: 1 },
  animate: { scaleY: 0 },
  exit: { scaleY: 1 },
};
