import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { ROLE_DASHBOARD_PATH } from '../../data/mockData'
import {
  Box, Paper, Typography, Button, Alert, CircularProgress, TextField,
} from '@mui/material'
import SecurityIcon from '@mui/icons-material/Security'
import { motion } from 'framer-motion'
import { fadeScale, fadeUp, staggerContainer } from '../../components/common/motionVariants'

const MotionPaper = motion.create(Paper)
const MotionBox = motion.create(Box)

export default function TwoFactor() {
  const navigate = useNavigate()
  const { verifyOTP, pendingRole, user, isAuthenticated } = useAuth()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const inputs = useRef([])

  useEffect(() => {
    if (isAuthenticated && user) navigate(ROLE_DASHBOARD_PATH[user.role])
  }, [isAuthenticated, user, navigate])

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const next = [...otp]
    next[index] = value.slice(-1)
    setOtp(next)
    if (value && index < 5) inputs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const code = otp.join('')
    if (code.length < 6) {
      setError('Enter complete 6-digit OTP')
      return
    }
    setLoading(true)
    setError('')
    const ok = await verifyOTP(code)
    setLoading(false)
    if (ok) {
      navigate(ROLE_DASHBOARD_PATH[pendingRole || 'principal'])
    } else {
      setError('Invalid OTP. Demo OTP is 123456')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh', bgcolor: 'background.default',
        display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3,
      }}
    >
      <MotionPaper
        variants={fadeScale}
        initial="initial"
        animate="animate"
        elevation={0}
        sx={{ width: '100%', maxWidth: 420, p: 4, borderRadius: 4, textAlign: 'center' }}
      >
        <MotionBox variants={staggerContainer} initial="initial" animate="animate">
          <MotionBox
            variants={fadeUp}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            sx={{ mb: 2 }}
          >
            <Box
              sx={{
                width: 72, height: 72, borderRadius: '50%', mx: 'auto',
                background: 'linear-gradient(135deg, #1e40af, #0ea5e9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 28px rgba(30,64,175,0.35)',
              }}
            >
              <SecurityIcon sx={{ color: 'white', fontSize: 36 }} />
            </Box>
          </MotionBox>
          <MotionBox variants={fadeUp}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Two-Factor Authentication
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Enter the 6-digit OTP sent to your registered device
            </Typography>
          </MotionBox>

          <Box component="form" onSubmit={handleSubmit}>
            <MotionBox
              variants={fadeUp}
              sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 2.5 }}
            >
              {otp.map((d, i) => (
                <TextField
                  key={i}
                  inputRef={(el) => { inputs.current[i] = el }}
                  value={d}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  inputProps={{
                    maxLength: 1,
                    inputMode: 'numeric',
                    style: { textAlign: 'center', fontSize: '1.35rem', fontWeight: 700, padding: '12px 0' },
                  }}
                  sx={{ width: 48 }}
                />
              ))}
            </MotionBox>
            {error && (
              <MotionBox variants={fadeUp} sx={{ mb: 2 }}>
                <Alert severity="error" variant="filled" sx={{ borderRadius: 2 }}>{error}</Alert>
              </MotionBox>
            )}
            <MotionBox variants={fadeUp}>
              <Button type="submit" fullWidth variant="contained" size="large" disabled={loading} sx={{ py: 1.4 }}>
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Verify'}
              </Button>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                Demo OTP: <strong>123456</strong>
              </Typography>
            </MotionBox>
          </Box>
        </MotionBox>
      </MotionPaper>
    </Box>
  )
}
