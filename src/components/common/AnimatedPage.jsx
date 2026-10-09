import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { pageVariants } from './motionVariants'

export default function AnimatedPage({ children }) {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const variants = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.15 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
      }
    : pageVariants

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="animated-page"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
