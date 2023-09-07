import PropTypes from 'prop-types';
import React from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, Modal } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';

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

const StyledInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: theme.spacing(1),
  color: theme.palette.text.disabled,
}));

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index, setOpen }) {
  const { cover, title, view, comment, share, author, createdAt, baseName } = post;
  const POST_INFO = [
    { number: comment, icon: 'mdi:size-s' },
    { number: view, icon: 'mdi:size-m' },
    { number: share, icon: 'mdi:size-l' },
  ];

  return (
    <Card sx={{ position: 'relative'  }}>
      <StyledCardMedia>
        <StyledAvatar alt={author.name} src={author.avatarUrl} />

        <StyledCover alt={title} src={cover} />
      </StyledCardMedia>

      <CardContent
        sx={{
          pt: 3,
        }}
      >
        <Typography variant="subtitle2" textAlign={'center'} fontFamily={'inherit'}>
          {baseName}
        </Typography>
        <StyledTitle
          color="inherit"
          variant="subtitle1"
          underline="hover"
          textAlign={'center'}
          onClick={() => {
            setOpen(true);
          }}
        >
          {title}
        </StyledTitle>
        <StyledInfo>
          {POST_INFO.map((info, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: index === 0 ? 0 : 1.5,
              }}
            >
              <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
              <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
            </Box>
          ))}
        </StyledInfo>
      </CardContent>
    </Card>
  );
}
