import { Helmet } from 'react-helmet-async';
import React from 'react';
import { motion } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Stack, Typography, Modal, Box, Drawer, Divider, Button } from '@mui/material';
import Product from './Product';
// components
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';

import Iconify from '../components/iconify/Iconify';

import ProductCart from './productCart';

// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

const StyledRemoveButton = styled('div')(({ theme }) => ({
  // display: 'flex',
  // alignItems: 'center',
  cursor: 'pointer',
  color: '#B6B6B6',
  transition: 'color 0.3s ease',
  '&:hover': { color: '#989898' },
}));

// ----------------------------------------------------------------------

export default function BlogPage() {
  const [open, setOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [orderTitle, setOrderTitle] = React.useState('הזמן');
  const [x , setX] = React.useState(0);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  return (
    <>
      <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ marginBottom: '100px' }}>
          <Typography variant="h3" gutterBottom sx={{ color: '#613eb9' }}>
            Afsen.io Shop
          </Typography>
          <BlogPostsSearch posts={POSTS} />
        </Stack>

        <Grid container spacing={2}>
          {POSTS.map((post, index) => (
            <Grid lg={3} md={6} item key={post.id}>
              <BlogPostCard key={post.id} post={post} index={index} setOpen={setOpen} />
            </Grid>
          ))}
        </Grid>
        <ProductCartWidget setCartOpen={setCartOpen} />
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => {
            setCartOpen(false);
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: '27%',
              minWidth: '350px',
              paddingY: '30px',
            },
          }}
        >
          <Stack direction={'row'} justifyContent={'space-between'} sx={{ marginX: '5%' }}>
            <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5em', color: '#613eb9' }}>
              My Cart
            </Typography>
            <StyledRemoveButton>
              <Iconify icon="fa6-solid:x" width={30} height={30} margin={1} />
            </StyledRemoveButton>
          </Stack>
          <Stack spacing={2} sx={{ width: '100%', paddingX: '15px', overflow: 'auto' }}>
            <ProductCart />
            <Divider sx={{ backgroundColor: 'black' }} />
            <ProductCart />
            <Divider sx={{ backgroundColor: 'black' }} />
            <ProductCart />
            <Divider sx={{ backgroundColor: 'black' }} />
            <ProductCart />
            <Divider sx={{ backgroundColor: 'black' }} />
            <ProductCart />
            <Divider sx={{ backgroundColor: 'black' }} />
            <ProductCart />
            <Divider sx={{ backgroundColor: 'black' }} />
            <ProductCart />
          </Stack>
          <Divider sx={{ backgroundColor: '#D8D8D8', marginX: '5%', marginTop: '30px', height: '2px', opacity: 0.4 }} />

          <Button
            sx={{ color: '#805DD1', marginTop: '10px' }}
            onClick={() => {
              console.log('hello!');
              for (let i = orderTitle.length; i >= 0; i -= 1) {
                console.log(i);
                setOrderTitle((currentState) => currentState.substring(0, i));
              }
            }}
          >
            <motion.div
            animate={{x}}
            />
            <div>
              <Iconify icon="ion:airplane-sharp" width={30} height={30} margin={1} />
            </div>
            {orderTitle && orderTitle}
          </Button>
        </Drawer>
      </Container>
      <Modal
        open={open}
        sx={{ backgroundColor: 'trasnparent' }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box paddingTop={'40px'}>
          <Product />
        </Box>
      </Modal>
    </>
  );
}
