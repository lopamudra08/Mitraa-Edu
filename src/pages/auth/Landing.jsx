import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReducedMotion, motion } from 'framer-motion'
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import { useAuth } from '../../contexts/AuthContext'
import { ROLE_DASHBOARD_PATH } from '../../data/mockData'

const MotionBox = motion.create(Box)
const MotionPaper = motion.create(Paper)

const roles = ['Students', 'Teachers', 'Families', 'School leaders']

export default function Landing() {
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const { isAuthenticated, user } = useAuth()

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(ROLE_DASHBOARD_PATH[user.role] || '/')
    }
  }, [isAuthenticated, user, navigate])

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fbfaff', color: '#17172b', overflow: 'hidden' }}>
      <Box
        component="header"
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1320,
          mx: 'auto',
          px: { xs: 2.5, md: 6 },
          py: { xs: 2, md: 2.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box component="img" src="/logo.svg" alt="MiTRAA" sx={{ width: 116, height: 'auto' }} />
          <Box sx={{ width: '1px', height: 26, bgcolor: '#dedcf0' }} />
          <Typography sx={{ fontWeight: 750, letterSpacing: '-0.035em', fontSize: 18 }}>
            Edu
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Button
            href="#community"
            sx={{ display: { xs: 'none', sm: 'inline-flex' }, color: '#67657b', fontWeight: 600 }}
          >
            Our community
          </Button>
          <Button
            onClick={() => navigate('/select-role')}
            sx={{ color: '#4d49ba', fontWeight: 700, px: { xs: 1, sm: 2 } }}
          >
            Sign in
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/register')}
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              px: { xs: 1.5, sm: 2.25 },
              py: 1.1,
              borderRadius: 2.5,
              bgcolor: '#6058df',
              boxShadow: '0 8px 22px rgba(96,88,223,0.2)',
              '&:hover': { bgcolor: '#5149cf', boxShadow: '0 12px 28px rgba(96,88,223,0.28)' },
            }}
          >
            Get started
          </Button>
        </Stack>
      </Box>

      <Box
        component="main"
        sx={{
          maxWidth: 1320,
          mx: 'auto',
          px: { xs: 2.5, md: 6 },
          pt: { xs: 4, md: 8 },
          pb: { xs: 5, md: 8 },
        }}
      >
        <Box
          sx={{
            minHeight: { md: 490 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.94fr 1.06fr' },
            alignItems: 'center',
            gap: { xs: 5, md: 4 },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 610 }}>
            <MotionBox {...reveal(0.05)}>
              <Chip
                icon={<AutoAwesomeRoundedIcon sx={{ fontSize: '16px !important' }} />}
                label="ONE CAMPUS. EVERY CONNECTION."
                sx={{
                  mb: 3,
                  pl: 0.5,
                  color: '#5149ba',
                  bgcolor: '#f0efff',
                  border: '1px solid #e5e3ff',
                  fontSize: 10,
                  letterSpacing: '0.11em',
                  fontWeight: 800,
                  '& .MuiChip-icon': { color: '#7369e8' },
                }}
              />
            </MotionBox>
            <MotionBox {...reveal(0.14)}>
              <Typography
                component="h1"
                sx={{
                  maxWidth: 630,
                  fontSize: { xs: '2.8rem', sm: '3.8rem', lg: '4.6rem' },
                  lineHeight: { xs: 1.08, md: 1.04 },
                  letterSpacing: '-0.065em',
                  fontWeight: 760,
                  color: '#17172b',
                  mb: 2.5,
                }}
              >
                Make every school day{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#655de0',
                    background: 'linear-gradient(105deg, #766eff 10%, #a16de5 88%)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  work better.
                </Box>
              </Typography>
            </MotionBox>
            <MotionBox {...reveal(0.24)}>
              <Typography
                sx={{
                  maxWidth: 510,
                  color: '#6d6b80',
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.8,
                  mb: 3.5,
                }}
              >
                One thoughtful space for students, teachers, and families to stay in sync with learning—so the whole school community can move forward together.
              </Typography>
            </MotionBox>
            <MotionBox {...reveal(0.34)}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon />}
                  onClick={() => navigate('/select-role')}
                  sx={{
                    px: 3,
                    py: 1.55,
                    borderRadius: 2.5,
                    bgcolor: '#6058df',
                    fontWeight: 700,
                    boxShadow: '0 12px 28px rgba(96,88,223,0.24)',
                    '&:hover': { bgcolor: '#5149cf', boxShadow: '0 16px 32px rgba(96,88,223,0.3)' },
                  }}
                >
                  Explore your portal
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/register')}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 2.5,
                    color: '#37354c',
                    borderColor: '#dedced',
                    bgcolor: 'rgba(255,255,255,0.72)',
                    '&:hover': { borderColor: '#a8a3e7', bgcolor: '#fff' },
                  }}
                >
                  Create an account
                </Button>
              </Stack>
            </MotionBox>
            <MotionBox {...reveal(0.45)} sx={{ mt: 4 }}>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" alignItems="center">
                <CheckCircleRoundedIcon sx={{ fontSize: 18, color: '#6d63dc' }} />
                <Typography sx={{ color: '#858397', fontSize: 13, fontWeight: 550 }}>
                  Made for the people who make school happen
                </Typography>
              </Stack>
            </MotionBox>
          </Box>

          <Box
            aria-label="Preview of the MiTRAA-Edu learning portal"
            sx={{
              minHeight: { xs: 365, sm: 450, md: 500 },
              position: 'relative',
              display: 'grid',
              placeItems: 'center',
              isolation: 'isolate',
            }}
          >
            <MotionBox
              aria-hidden="true"
              animate={reduceMotion ? undefined : { rotate: [0, 6, 0], scale: [1, 1.035, 1] }}
              transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
              sx={{
                position: 'absolute',
                zIndex: -1,
                width: { xs: 300, sm: 410, md: 470 },
                height: { xs: 300, sm: 410, md: 470 },
                borderRadius: '40% 60% 59% 41% / 45% 41% 59% 55%',
                background: 'linear-gradient(145deg, #efedff 2%, #e7e3ff 48%, #f7e9ff 100%)',
                filter: 'blur(0.2px)',
              }}
            />
            <Box
              aria-hidden="true"
              sx={{
                position: 'absolute',
                width: { xs: 310, sm: 430, md: 500 },
                height: { xs: 310, sm: 430, md: 500 },
                borderRadius: '50%',
                border: '1px solid rgba(111,101,219,0.16)',
              }}
            />
            <MotionPaper
              initial={reduceMotion ? false : { opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
              elevation={0}
              sx={{
                width: { xs: 'min(100%, 430px)', sm: 430 },
                p: { xs: 2, sm: 2.5 },
                borderRadius: 4,
                bgcolor: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,255,255,0.95)',
                boxShadow: '0 28px 90px rgba(62,54,139,0.15), 0 4px 18px rgba(53,48,104,0.05)',
                backdropFilter: 'blur(18px)',
                transform: { md: 'translate(4px, -4px)' },
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
                <Stack direction="row" alignItems="center" spacing={1.2}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      color: '#6259dd',
                      bgcolor: '#f0efff',
                    }}
                  >
                    <SchoolRoundedIcon />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: 13, fontWeight: 750, color: '#28263e' }}>Learning hub</Typography>
                    <Typography sx={{ fontSize: 10, color: '#9693a8' }}>Your school, in sync</Typography>
                  </Box>
                </Stack>
                <Chip
                  size="small"
                  label="TODAY"
                  sx={{ height: 24, fontSize: 9, letterSpacing: '0.08em', fontWeight: 750, color: '#6e67c6', bgcolor: '#f3f1ff' }}
                />
              </Stack>

              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  mb: 1.5,
                  borderRadius: 3,
                  background: 'linear-gradient(115deg, #f5f3ff, #fbf8ff)',
                  border: '1px solid #f0edff',
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography sx={{ fontSize: 10, color: '#858198', mb: 0.5 }}>Your learning journey</Typography>
                    <Typography sx={{ fontSize: 19, fontWeight: 750, letterSpacing: '-0.04em', color: '#28263e' }}>
                      A great week starts here.
                    </Typography>
                  </Box>
                  <AutoAwesomeRoundedIcon sx={{ color: '#877eea', fontSize: 21 }} />
                </Stack>
                <Stack direction="row" spacing={0.6} alignItems="flex-end" sx={{ height: 46, mt: 1.5 }}>
                  {[30, 48, 37, 65, 51, 78, 60, 92, 70, 100, 75, 88, 64, 96, 74, 100, 83, 94].map((height, index) => (
                    <MotionBox
                      key={`${height}-${index}`}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.65 + index * 0.025, ease: 'easeOut' }}
                      sx={{
                        flex: 1,
                        height: `${height}%`,
                        transformOrigin: 'bottom',
                        borderRadius: '4px 4px 2px 2px',
                        background: index > 13 ? 'linear-gradient(180deg, #aaa3ff, #796de9)' : '#d9d5ff',
                      }}
                    />
                  ))}
                </Stack>
              </Paper>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Paper elevation={0} sx={{ flex: 1, p: 1.7, borderRadius: 3, border: '1px solid #f0eff6', bgcolor: '#fff' }}>
                  <Typography sx={{ color: '#9290a2', fontSize: 10, mb: 1.1 }}>UP NEXT</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: 3, height: 34, borderRadius: 2, bgcolor: '#8c81ef' }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: '#353349', fontSize: 12 }}>Science · Lab work</Typography>
                      <Typography sx={{ color: '#9693a8', fontSize: 10 }}>10:30 AM · Room 204</Typography>
                    </Box>
                  </Stack>
                </Paper>
                <Paper elevation={0} sx={{ flex: 1, p: 1.7, borderRadius: 3, border: '1px solid #f0eff6', bgcolor: '#fff' }}>
                  <Typography sx={{ color: '#9290a2', fontSize: 10, mb: 1.1 }}>WEEKLY PROGRESS</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography sx={{ fontWeight: 800, fontSize: 25, color: '#655cda', letterSpacing: '-0.05em' }}>86%</Typography>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ height: 6, borderRadius: 10, bgcolor: '#efedfa', overflow: 'hidden' }}>
                        <MotionBox
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.8, ease: 'easeOut' }}
                          sx={{ height: '100%', bgcolor: '#8177ea', transformOrigin: 'left', borderRadius: 10 }}
                        />
                      </Box>
                      <Typography sx={{ color: '#9693a8', fontSize: 9, mt: 0.7 }}>You’re right on track</Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            </MotionPaper>

            <MotionPaper
              initial={reduceMotion ? false : { opacity: 0, x: 20, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.75 }}
              aria-hidden="true"
              elevation={0}
              sx={{
                position: 'absolute',
                right: { xs: -4, sm: -3, md: -8 },
                top: { xs: 18, sm: 48 },
                p: 1.5,
                borderRadius: 3,
                bgcolor: 'rgba(255,255,255,0.96)',
                border: '1px solid #f1eff8',
                boxShadow: '0 16px 40px rgba(62,54,139,0.12)',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{ width: 30, height: 30, display: 'grid', placeItems: 'center', borderRadius: '50%', color: '#288a70', bgcolor: '#e8f7f1' }}>
                  <CheckCircleRoundedIcon sx={{ fontSize: 17 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 10, fontWeight: 750, color: '#3b394e' }}>You’re all caught up</Typography>
                  <Typography sx={{ fontSize: 9, color: '#9693a8' }}>Nice work this week</Typography>
                </Box>
              </Stack>
            </MotionPaper>

            <MotionBox
              aria-hidden="true"
              animate={reduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              sx={{
                position: 'absolute',
                bottom: { xs: 0, sm: 22 },
                left: { xs: -4, sm: -10 },
                width: 50,
                height: 50,
                borderRadius: 3,
                display: 'grid',
                placeItems: 'center',
                color: '#fff',
                background: 'linear-gradient(145deg, #9d7bea, #725ee0)',
                boxShadow: '0 14px 28px rgba(114,94,224,0.26)',
                transform: 'rotate(-8deg)',
              }}
            >
              <SchoolRoundedIcon />
            </MotionBox>
          </Box>
        </Box>

        <Box
          id="community"
          sx={{
            mt: { xs: 3, md: 4 },
            pt: 3,
            borderTop: '1px solid #eeecf5',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography sx={{ color: '#8a879b', fontSize: 12, fontWeight: 650, letterSpacing: '0.04em' }}>
            A shared space for
          </Typography>
          <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1}>
            {roles.map(role => (
              <Chip
                key={role}
                label={role}
                size="small"
                sx={{ bgcolor: '#fff', color: '#69667d', border: '1px solid #eeecf5', fontSize: 11, fontWeight: 650 }}
              />
            ))}
          </Stack>
          <Typography sx={{ color: '#aaa7b7', fontSize: 11 }}>
            © 2026 MiTRAA-Edu
          </Typography>
        </Box>

      </Box>
    </Box>
  )
}
