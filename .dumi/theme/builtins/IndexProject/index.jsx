/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import HoverEffect from './CardEffect';
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
    img: '/avatar_2.jpeg',
    link: 'https://totalizer-x-menu.github.io/',
  },
  {
    title: 'XTable',
    description: 'Comming Soon',
    img: '/avatar_3.jpeg',
    disabled: true,
  },
  {
    title: 'XLayout',
    description: 'layout',
    img: '/avatar_4.jpeg',
    disabled: true,
  },
  {
    title: 'XCard',
    description: 'card',
    img: '/avatar_1.jpeg',
    disabled: true,
  },
  {
    title: 'XBackground',
    description: 'components',
    img: '/avatar_1.jpeg',
    disabled: true,
  },
  {
    title: 'XComponent',
    description: 'component',
    img: '/avatar_1.jpeg',
    disabled: true,
  },
  {
    title: 'XTemplate',
    description: 'Template',
    img: '/avatar_1.jpeg',
    disabled: true,
  },
];

const Advantages = () => {
  const theme = useTheme();

  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin={'0 auto'}
      paddingX={2}
      paddingY={{ xs: 4, sm: 6, md: 8 }}
    >
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          gutterBottom
          sx={{
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          Totalizer{' '}
          <Typography
            component={'span'}
            color={'primary.main'}
            fontSize={28}
            fontWeight={700}
          >
            X
          </Typography>{' '}
          Series Project
        </Typography>
        <Typography align={'center'} color={'textSecondary'} fontSize={20}>
          Dedicated to providing outstanding user experiences and intuitive
          technical components, <br />
          streamlining design and front-end development for maximum efficiency.
        </Typography>
      </Box>
      <HoverEffect items={mock} />
    </Box>
  );
};

export default Advantages;
