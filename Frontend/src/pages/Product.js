import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

// utils

const StyledCardMedia = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '60vh',
  height: '30vw',
  minHeight: '50%',
  minWidth: '50%',
});

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

// ----------------------------------------------------------------------

export default function Product() {
  return (
    <Container sx={{ height: '60%', width: '70%', alignSelf: 'center', direction: 'rtl' }}>
      <Card>
        <Grid container xs={16} sm={16} md={16} justifyContent="center" sx={{ width: '100%' }}>
          <Grid item xl={7}>
            <StyledCardMedia>
              <StyledCover alt="product" src={photo} />
            </StyledCardMedia>
          </Grid>
          <Grid item xl={5}>
            <Stack
              direction="column"
              useFlexGap
              justifyContent={'space-between'}
              sx={{ width: '100%', height: '100%', paddingBottom: '50px' }}
            >
              <CardContent>
                <Stack direction="column" justifyContent={'right'} sx={{ width: '100%', height: '100%' }}>
                  <Typography variant="h3" sx={{ textAlign: 'right' }}>
                    Product
                  </Typography>
                  <Typography variant="subtitle1"> מוצר: חולצה מדי א בנים</Typography>
                  <Typography variant="subtitle1">מוצר: חולצה מדי א</Typography>
                  <Typography variant="subtitle1">כמות במלאי: 16</Typography>
                  {/* Select option for sizes */}
                  <Stack direction={'row'} alignItems={'center'} sx={{ width: '100%' }}>
                    <Typography variant="subtitle2" marginLeft={'3%'}>
                      בחר מידה{' '}
                    </Typography>
                    <Select size={'medium'} sx={{ width: '50%' }}>
                      <MenuItem value="small">Small</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="large">Large</MenuItem>
                    </Select>
                  </Stack>
                  {/* "Add to Cart" button */}
                </Stack>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginRight: '2 %'}}>
                <Button variant="contained" color="primary" sx={{ textAlign: 'center', width: '27%' }}>
                  Add to Cart
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
