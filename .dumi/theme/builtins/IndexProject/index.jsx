/* eslint-disable react/no-unescaped-entities */
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import Products from './Products';

const mock = [
  {
    title: 'XForm',
    description:
      'React components for building web forms using Material UI and Mobx, based on a JSON schema.',
    img: '/avatar_1.jpeg',
    link: 'https://totalizer-x-form.github.io/',
  },
  {
    title: 'XMenu',
    description:
      'A sleek and customizable menu component built on Material UI, designed to elevate your front-end experience with style and flexibility.',
    img: '/menu.jpg',
    link: 'https://totalizer-x-menu.github.io/',
  },
  {
    title: 'XTable',
    description: '-',
    img: '/comingsoon.png',
    disabled: true,
  },
  {
    title: 'XLayout',
    description: '-',
    img: '/comingsoon.png',
    disabled: true,
  },
  {
    title: 'XCard',
    description: '-',
    img: '/comingsoon.png',
    disabled: true,
  },
  {
    title: 'XBackground',
    description: '-',
    img: '/comingsoon.png',
    disabled: true,
  },
  {
    title: 'XComponent',
    description: '-',
    img: '/comingsoon.png',
    disabled: true,
  },
  {
    title: 'XTemplate',
    description: '-',
    img: '/comingsoon.png',
    disabled: true,
  },
];

export default () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin={'0 auto'}
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box marginBottom={4}>
          <Stack
            sx={{
              width: '100%',
            }}
            justifyContent={'center'}
            alignItems={'center'}
            direction={'row'}
            spacing={2}
          >
            <Typography fontSize={28}>Totalizer</Typography>
            <Avatar
              src="/logo.png"
              sx={{
                display: 'inline-block',
                width: 40,
                height: 40,
                borderRadius: 1,
              }}
            />
            <Typography fontSize={28}>Series Project</Typography>
          </Stack>
          <Typography align={'center'} color={'textSecondary'} fontSize={20}>
            Dedicated to providing outstanding user experiences and intuitive
            technical components, <br />
            streamlining design and front-end development for maximum
            efficiency.
          </Typography>
        </Box>
        <Products items={mock} />
      </Box>
    </Box>
  );
};
