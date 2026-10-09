import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Alert, Box, Button, MenuItem, Paper, TextField, Typography,
} from '@mui/material'
import { useAuth } from '../../contexts/AuthContext'

const roles = [
  { value: 'student', label: 'Student' },
  { value: 'teacher', label: 'Teacher / Staff' },
  { value: 'parent', label: 'Parent / Guardian' },
  { value: 'principal', label: 'Principal / HOD' },
  { value: 'management', label: 'Management / Trustee' },
  { value: 'examcontroller', label: 'Exam Controller' },
]

export default function ForgotPassword() {
  const { pendingRole, setPendingRole, resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [role, setRole] = useState(pendingRole || '')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess(false)
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    const result = await resetPassword({ email, password, role })
    setLoading(false)
    if (!result.success) {
      setError(result.message)
      return
    }
    setPendingRole(role)
    setSuccess(true)
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
      <Paper elevation={0} sx={{ width: '100%', maxWidth: 440, p: 4, borderRadius: 4 }}>
        <Typography variant="h5" fontWeight={700} textAlign="center" gutterBottom>
          Reset your password
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 3 }}>
          Enter your account email and role, then choose a new password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            autoComplete="email"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            select
            label="Role"
            value={role}
            onChange={event => setRole(event.target.value)}
            required
            sx={{ mb: 2 }}
          >
            {roles.map(option => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="New password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            autoComplete="new-password"
            required
            inputProps={{ minLength: 8 }}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Confirm new password"
            type="password"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
            autoComplete="new-password"
            required
            sx={{ mb: 2 }}
          />
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Password updated in this browser. You can now sign in with your new password.
            </Alert>
          )}
          <Button fullWidth type="submit" variant="contained" size="large" disabled={loading || !role}>
            {loading ? 'Updating password…' : 'Update password'}
          </Button>
        </Box>
        <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
          <Button component={RouterLink} to="/login" size="small">Back to login</Button>
        </Typography>
      </Paper>
    </Box>
  )
}
