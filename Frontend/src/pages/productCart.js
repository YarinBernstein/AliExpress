import React, { useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
  Select,
  MenuItem,
  Button,
  Divider,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import photo from './idf-air-force-uniform.jpg';
import Iconify from '../components/iconify/Iconify';

// utils

const StyledCardMedia = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '40%',
  height: '100%',
});

const StyledCover = styled('img')({
  width: '100%',
  height: '85%',
});

const StyledRemoveButton = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '10px',
  color: '#F35050',
  transition: 'color 0.3s ease',
  '&:hover': { color: '#FF1B1B' },
}));

// ----------------------------------------------------------------------

export default function ProductCart() {
  return (
    <Container sx={{ direction: 'rtl' }}>
      <div style={{ height: '130px' }}>
        <Stack direction={'row'} justifyContent={'space-between'} sx={{ height: '100%' }}>
          <StyledCardMedia>
            <StyledCover alt="product" src={photo} />
          </StyledCardMedia>
          <Stack direction={'row'} justifyContent={'space-between'} paddingLeft={2} sx={{ width: '100%' }}>
            <div style={{ marginTop: '10px' }}>
              <Typography variant="subtitle1" sx={{ textAlign: 'right' }}>
                חולצה מדי א
              </Typography>
              <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
                <span>מין: </span>זכר
              </Typography>
              <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
                <span>מידה: </span>ק
              </Typography>
            </div>
            <Box sx={{ display: 'flex', alignSelf: 'end', margin: '5px' }}>
              <StyledRemoveButton>
                <Iconify icon="mdi:trash-can-outline" width={30} height={30} margin={1} />
              </StyledRemoveButton>
            </Box>
          </Stack>
        </Stack>
      </div>
    </Container>
  );
}

// <Container sx={{ direction: 'rtl' }}>
// <Card sx={{ height: '120px'}}>
//   <Stack direction={'row'} justifyContent={'space-between'} sx={{ height: '100%'}}>
//     <StyledCardMedia>
//       <StyledCover alt="product" src={photo} />
//     </StyledCardMedia>
//     <Stack direction={'row'} justifyContent={'space-between'} paddingLeft={2} sx={{ width: '100%' }}>
//       <div style={{marginTop: "10px"}}>
//         <Typography variant="h4" sx={{ textAlign: 'right' }}>
//           מדי א
//         </Typography>
//         <Typography variant="subtitle1" sx={{ textAlign: 'right' }}>
//           מדי א לגבר
//         </Typography>
//         <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
//           מידה 16
//         </Typography>
//       </div>
//       <Box sx={{ display: 'flex', alignSelf: 'center' }}>
//         <StyledRemoveButton>
//           <Iconify icon="clarity:remove-line" width={30} height={30} margin={1} />
//         </StyledRemoveButton>
//       </Box>
//     </Stack>
//   </Stack>
// </Card>
// </Container>
