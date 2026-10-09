/** Shared Framer Motion variants – jaw-drop level polish */

export const pageVariants = {
  initial: { opacity: 0, y: 28, scale: 0.98, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    filter: 'blur(2px)',
    transition: { duration: 0.25 },
  },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
}

export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeScale = {
  initial: { opacity: 0, scale: 0.85 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
}

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
}

export const popIn = {
  initial: { opacity: 0, scale: 0.5, rotate: -8 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 400, damping: 18 },
  },
}

export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
    transition: { type: 'spring', stiffness: 400, damping: 18 },
  },
  tap: { scale: 0.98 },
}

export const navItem = {
  initial: { opacity: 0, x: -16 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.04 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
}

export const floatY = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(30,64,175,0.35)',
      '0 0 0 16px rgba(30,64,175,0)',
      '0 0 0 0 rgba(30,64,175,0.35)',
    ],
    transition: { duration: 2.2, repeat: Infinity },
  },
}

export const progressBar = {
  initial: { scaleX: 0, originX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}
