import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { ROLE_DASHBOARD_PATH } from '../../data/mockData'
import {
  Box, Paper, Typography, TextField, Button, Checkbox, FormControlLabel,
  IconButton, Alert, CircularProgress, InputAdornment,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { motion } from 'framer-motion'
import { fadeUp, fadeScale, staggerContainer } from '../../components/common/motionVariants'

const MotionPaper = motion.create(Paper)
const MotionBox = motion.create(Box)

const roleLabel = {
  student: 'Student',
  teacher: 'Teacher / Staff',
  parent: 'Parent / Guardian',
  principal: 'Principal / HOD',
  management: 'Management / Trustee',
  examcontroller: 'Exam Controller',
}

export default function Login() {
  const navigate = useNavigate()
  const { login, pendingRole, setPendingRole, isAuthenticated, user } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!pendingRole) navigate('/select-role')
    if (isAuthenticated && user) navigate(ROLE_DASHBOARD_PATH[user.role])
  }, [pendingRole, isAuthenticated, user, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!pendingRole) return
    setError('')
    setLoading(true)
    const res = await login(email, password, pendingRole)
    setLoading(false)
    if (!res.success) {
      setError(res.message || 'Login failed')
      return
    }
    if (res.requiresOTP) {
      navigate('/2fa')
      return
    }
    navigate(ROLE_DASHBOARD_PATH[pendingRole])
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      <Paper
        elevation={0}
        sx={{
          px: 2.5, py: 1.75, display: 'flex', alignItems: 'center', gap: 1.5,
          borderBottom: '1px solid', borderColor: 'divider',
        }}
      >
        <IconButton
          size="small"
          onClick={() => {
            setPendingRole(null)
            navigate('/select-role')
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography fontWeight={700}>Login as {roleLabel[pendingRole] || 'User'}</Typography>
      </Paper>

      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
        <MotionPaper
          variants={fadeScale}
          initial="initial"
          animate="animate"
          elevation={0}
          sx={{ width: '100%', maxWidth: 420, p: 4, borderRadius: 4 }}
        >
          <MotionBox variants={staggerContainer} initial="initial" animate="animate">
            <MotionBox variants={fadeUp} sx={{ textAlign: 'center', mb: 3 }}>
              <Box
                sx={{
                  width: 64, height: 64, borderRadius: '50%', mx: 'auto', mb: 1.5,
                  background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(30,64,175,0.3)',
                }}
              >
                <LockOutlinedIcon sx={{ color: 'white', fontSize: 30 }} />
              </Box>
              <Typography variant="h5" fontWeight={700}>Sign in to MiTRAA-Edu</Typography>
            </MotionBox>

            <Box component="form" onSubmit={handleSubmit}>
              <MotionBox variants={fadeUp} sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  label="Email / User ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon color="action" fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              </MotionBox>
              <MotionBox variants={fadeUp} sx={{ mb: 1 }}>
                <TextField
                  fullWidth
                  label="Password"
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon color="action" fontSize="small" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setShowPw(!showPw)} edge="end">
                          {showPw ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </MotionBox>
              <MotionBox
                variants={fadeUp}
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
              >
                <FormControlLabel
                  control={<Checkbox size="small" checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
                  label={<Typography variant="body2">Remember me</Typography>}
                />
                <Button size="small" onClick={() => navigate('/forgot-password')}>
                  Forgot Password?
                </Button>
              </MotionBox>
              {error && (
                <MotionBox variants={fadeUp} sx={{ mb: 2 }}>
                  <Alert severity="error" variant="filled" sx={{ borderRadius: 2 }}>{error}</Alert>
                </MotionBox>
              )}
              <MotionBox variants={fadeUp}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ py: 1.4 }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                </Button>
              </MotionBox>
              <MotionBox variants={fadeUp} sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Need an account?{' '}
                  <Button size="small" onClick={() => navigate('/register')}>Register</Button>
                </Typography>
              </MotionBox>
            </Box>
          </MotionBox>
        </MotionPaper>
      </Box>
    </Box>
  )
}
