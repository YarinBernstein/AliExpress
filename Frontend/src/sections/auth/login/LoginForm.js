import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  
  return (
    <>
      <Stack sx alignItems="center" justifyContent="space-between" spacing={3}>
        <TextField
          name="personal number"
          label="Personal Number"
          fullWidth
          sx={{ width: '100%' }} // Set the width to 100%
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          sx={{ width: '100%' }} // Set the width to 100%
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
        sx={{ width: '100%' }} // Set the width to 100%
      >
        Login
      </LoadingButton>
      </Stack>

      
    </>
  );
}
