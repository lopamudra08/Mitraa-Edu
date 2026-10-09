import { ASSIGNMENTS, EXAMS, NOTICES, ATTENDANCE } from '../../data/mockData'
import {
  Box, Grid, Card, CardContent, Typography, Chip, Stack,
} from '@mui/material'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import AssignmentIcon from '@mui/icons-material/Assignment'
import QuizIcon from '@mui/icons-material/Quiz'
import GradeIcon from '@mui/icons-material/Grade'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../components/common/motionVariants'

const MotionCard = motion.create(Card)

const statIcons = [
  { icon: <EventAvailableIcon />, color: '#10b981' },
  { icon: <AssignmentIcon />, color: '#f59e0b' },
  { icon: <QuizIcon />, color: '#3b82f6' },
  { icon: <GradeIcon />, color: '#8b5cf6' },
]

export default function StudentHome() {
  const present = ATTENDANCE.filter((a) => a.status === 'present' || a.status === 'late').length
  const pct = Math.round((present / ATTENDANCE.length) * 100)
  const stats = [
    { label: 'Attendance', value: `${pct}%` },
    { label: 'Pending Assignments', value: ASSIGNMENTS.filter((a) => a.status === 'pending').length },
    { label: 'Upcoming Exams', value: EXAMS.filter((e) => e.status === 'upcoming').length },
    { label: 'Overall Grade', value: 'B+' },
  ]

  return (
    <Box component={motion.div} variants={staggerContainer} initial="initial" animate="animate">
      <motion.div variants={fadeUp}>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Welcome back, Aarav
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Class 10-A · Academic Year 2026-27
        </Typography>
      </motion.div>

      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        {stats.map((s, i) => (
          <Grid item xs={12} sm={6} md={3} key={s.label}>
            <MotionCard
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}
              elevation={0}
              sx={{ borderRadius: 3, overflow: 'hidden' }}
            >
              <Box sx={{ height: 4, bgcolor: statIcons[i].color }} />
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="h4" fontWeight={800} color="primary">
                      {s.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{s.label}</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 44, height: 44, borderRadius: 2,
                      bgcolor: `${statIcons[i].color}18`, color: statIcons[i].color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    {statIcons[i].icon}
                  </Box>
                </Stack>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={6}>
          <MotionCard variants={fadeUp} elevation={0} sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Typography fontWeight={700} sx={{ mb: 2 }}>Upcoming Tasks</Typography>
              <Stack spacing={1.5}>
                {ASSIGNMENTS.filter((a) => a.status === 'pending' || a.status === 'overdue').map((a) => (
                  <Box
                    key={a.id}
                    sx={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      p: 1.5, borderRadius: 2, bgcolor: 'grey.50',
                    }}
                  >
                    <Box>
                      <Typography fontWeight={600} fontSize={14}>{a.title}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {a.subject} · Due {a.dueDate}
                      </Typography>
                    </Box>
                    <Chip
                      size="small"
                      label={a.status}
                      color={a.status === 'overdue' ? 'error' : 'warning'}
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </MotionCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <MotionCard variants={fadeUp} elevation={0} sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Typography fontWeight={700} sx={{ mb: 2 }}>Latest Notices</Typography>
              <Stack spacing={1.5}>
                {NOTICES.slice(0, 3).map((n) => (
                  <Box key={n.id} sx={{ p: 1.5, borderRadius: 2, bgcolor: 'grey.50' }}>
                    <Typography fontWeight={600} fontSize={14}>{n.title}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {n.date} · {n.from}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </MotionCard>
        </Grid>
      </Grid>
    </Box>
  )
}
