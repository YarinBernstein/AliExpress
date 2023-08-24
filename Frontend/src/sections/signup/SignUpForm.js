import { useState } from 'react';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Checkbox, Divider, Select, MenuItem , FormControl  } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import InputLabel from '@mui/material/InputLabel';

// components
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Stack spacing={2}>
        <TextField name="personal number" label="Personal Number" />
        <TextField name="full name" label="FullName" />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Flight</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Flight"
       >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        <TextField name="phone number" label="Phone Number" />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Subject"
       >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>     
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
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
        <TextField
          name="password2"
          label="Reenter Password"
          type={showPassword ? 'text' : 'password'}
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
        
      <LoadingButton fullWidth size="large" type="submit" variant="contained">
        Sign Up
      </LoadingButton>
      </Stack>
      <Divider sx={{marginTop : 3}} />

    </>
  );
}
