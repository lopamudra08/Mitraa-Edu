import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {
  Box, Typography, Paper, IconButton, Stack, Avatar,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SchoolIcon from '@mui/icons-material/School'
import PersonIcon from '@mui/icons-material/Person'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import BusinessIcon from '@mui/icons-material/Business'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../../components/common/motionVariants'

const MotionPaper = motion.create(Paper)

const ROLES = [
  { role: 'student', label: 'Student', icon: <SchoolIcon />, color: '#10b981', desc: 'Classes, assignments, exams & practice' },
  { role: 'teacher', label: 'Teacher / Staff', icon: <PersonIcon />, color: '#8b5cf6', desc: 'Attendance, assignments, question bank' },
  { role: 'parent', label: 'Parent / Guardian', icon: <FamilyRestroomIcon />, color: '#ec4899', desc: 'Child progress, fees & communication' },
  { role: 'principal', label: 'Principal / HOD', icon: <AccountBalanceIcon />, color: '#f59e0b', desc: 'Academic overview, staff & approvals' },
  { role: 'management', label: 'Management / Trustee', icon: <BusinessIcon />, color: '#eab308', desc: 'Multi-campus, finance & compliance' },
  { role: 'examcontroller', label: 'Exam Controller', icon: <AssignmentIcon />, color: '#ef4444', desc: 'Programmes, papers, evaluation & results' },
]

export default function SelectRole() {
  const navigate = useNavigate()
  const { setPendingRole } = useAuth()

  const select = (role) => {
    setPendingRole(role)
    navigate('/login')
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
        <IconButton onClick={() => navigate('/')} size="small">
          <ArrowBackIcon />
        </IconButton>
        <Typography fontWeight={700}>Select User Type</Typography>
      </Paper>

      <Box
        component={motion.div}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}
      >
        <Box sx={{ width: '100%', maxWidth: 480 }}>
          <motion.div variants={fadeUp}>
            <Typography variant="h5" textAlign="center" fontWeight={700} gutterBottom>
              Who are you logging in as?
            </Typography>
            <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ mb: 3 }}>
              Choose your role to continue
            </Typography>
          </motion.div>

          <Stack spacing={1.5}>
            {ROLES.map((r) => (
              <MotionPaper
                key={r.role}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02, boxShadow: '0 12px 28px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => select(r.role)}
                elevation={0}
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  cursor: 'pointer',
                  borderLeft: `4px solid ${r.color}`,
                  borderRadius: 2.5,
                }}
              >
                <Avatar sx={{ bgcolor: `${r.color}18`, color: r.color, width: 48, height: 48 }}>
                  {r.icon}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={600}>{r.label}</Typography>
                  <Typography variant="caption" color="text.secondary">{r.desc}</Typography>
                </Box>
                <ArrowForwardIosIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
              </MotionPaper>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
