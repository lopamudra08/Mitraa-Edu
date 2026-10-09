import { motion, useReducedMotion } from 'framer-motion'

export default function Preloader() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      role="status"
      aria-label="Loading MiTRAA-Edu"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: reduceMotion ? 0.15 : 0.75, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 45%, #fff 0%, #f7f6ff 52%, #eeedff 100%)',
      }}
    >
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.25, 0.48, 0.25] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: 'min(72vw, 560px)',
              aspectRatio: 1,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(96,88,225,0.17), rgba(96,88,225,0) 68%)',
            }}
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: 260,
              height: 260,
              borderRadius: '50%',
              border: '1px solid rgba(96,88,225,0.12)',
            }}
          />
        </>
      )}

      <div style={{ position: 'relative', display: 'grid', justifyItems: 'center', gap: 26 }}>
        <motion.img
          src="/logo.svg"
          alt="MiTRAA"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.82, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: 'min(54vw, 220px)', height: 'auto' }}
        />
        <div
          aria-hidden="true"
          style={{
            width: 148,
            height: 3,
            overflow: 'hidden',
            borderRadius: 999,
            background: 'rgba(96,88,225,0.12)',
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduceMotion ? 0.01 : 1.35, ease: [0.65, 0, 0.35, 1] }}
            style={{
              height: '100%',
              borderRadius: 999,
              background: 'linear-gradient(90deg, #a59fff, #6058e1)',
              transformOrigin: 'left',
            }}
          />
        </div>
        <span
          style={{
            marginTop: -18,
            color: '#777493',
            fontFamily: 'inherit',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Connected learning
        </span>
      </div>
    </motion.div>
  )
}
