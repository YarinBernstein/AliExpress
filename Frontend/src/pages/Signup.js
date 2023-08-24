import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import { Link, Container, Typography, Divider, Stack, Button, Card, Box } from '@mui/material';
import SignUpForm from '../sections/signup/SignUpForm';

// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';

import background from './background.jpg';
import backgorund1 from './background-check.png';
// sections
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  minWidth: '100vw',
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
  alignItems: 'center',
}));

// ----------------------------------------------------------------------

export default function Signup() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login To Afsen.io </title>
      </Helmet>

      <StyledRoot>
        <StyledContent>
            <Stack direction="column" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
              <Logo
                sx={{
                  position: 'fixed',
                  top: { xs: 16, sm: 24, md: 40 },
                  left: { xs: 16, sm: 24, md: 40 },
                }}
              />
              <Typography variant="h3" gutterBottom color={'#5034b2'}>
                Sign Up to Afsen.io
              </Typography>
              <SignUpForm />
            </Stack>
        </StyledContent>
      </StyledRoot>
    </>
  );
}
