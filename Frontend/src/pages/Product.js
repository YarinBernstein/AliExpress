import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
// utils


// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const StyledTitle = styled(Link)({
  height: 25,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 50,
  height: 50,
  position: 'absolute',
  left: '40%',
  bottom: theme.spacing(-2),
}));


const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------



export default function Product({ post, index }) {
  const { cover, title, view, comment, share, author, createdAt, baseName } = post;

  const POST_INFO = [
    { number: comment, icon: 'mdi:size-s' },
    { number: view, icon: 'mdi:size-m' },
    { number: share, icon: 'mdi:size-l' },
  ];

  return (
    <Grid item xs={16} sm={8} md={4}>
      <Card sx={{ position: 'relative' }}>
        <StyledCardMedia>
          <StyledAvatar alt={author.name} src={author.avatarUrl} />

          <StyledCover alt={title} src={cover} />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 3,
          }}
        >
          <Typography variant="subtitle2" textAlign={'center'} fontFamily={'inherit'} >
            {baseName}
          </Typography>
          <StyledTitle color="inherit" variant="subtitle1" underline="hover" textAlign={'center'}>
            {title}
          </StyledTitle>
        </CardContent>
      </Card>
    </Grid>
  );
}
