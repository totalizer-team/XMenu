import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import {
  BaseMenuList,
  FileTree,
  HorizontalMenu,
  SidebarMenu,
} from '@totalizer/xmenu';
import options from './options.jsx';

import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import SettingsIcon from '@mui/icons-material/Settings';

import ApiIcon from '@mui/icons-material/Api';
import ContrastIcon from '@mui/icons-material/Contrast';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import KeyIcon from '@mui/icons-material/Key';

const hOptions = [
  {
    icon: <SettingsIcon />,
    title: 'Settings',
    children: [
      {
        icon: <KeyIcon />,
        title: 'Keys',
      },
      {
        icon: <ContrastIcon />,
        title: 'Theme',
        children: [
          {
            title: 'Color',
          },
          {
            title: 'Icon',
          },
          {
            title: 'Window',
          },
        ],
      },
      {
        icon: <ApiIcon />,
        title: 'API',
        disabled: true,
      },
    ],
  },
  {
    icon: <Diversity3Icon />,
    title: 'Team',
    open: true,
    children: [
      {
        title: 'Create',
      },
      {
        title: 'Invite users',
      },
      {
        title: 'Support',
        info: 'VIP Only',
      },
    ],
  },
  {
    icon: <DoNotTouchIcon />,
    title: 'Disabled',
    disabled: true,
  },
];

const content = [
  {
    name: 'src',
    open: true,
    children: [
      {
        name: 'components',
        open: true,
        children: [
          {
            name: 'header.tsx',
          },
          {
            name: 'footer.tsx',
          },
        ],
      },
      {
        name: 'pages',
        open: true,
        children: [{ name: 'index.tsx' }, { name: 'dashboard.tsx' }],
      },
    ],
  },
  {
    name: 'package.json',
  },
];

export default () => {
  return (
    <Box
      component={Paper}
      sx={{
        display: 'flex',
        p: 10,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          p: 4,
          border: 1,
          borderColor: 'divider',
        }}
      >
        <HorizontalMenu
          component={Paper}
          sx={{
            p: 1,
            width: 713,
            mb: 3,
          }}
          options={hOptions}
        />

        <Stack direction={'row'}>
          <SidebarMenu
            component={Paper}
            sx={{
              width: 50,
              borderRadius: 2,
            }}
            options={options}
          />
          <BaseMenuList
            component={Paper}
            sx={{
              ml: 32,
              width: 200,
              borderRadius: 2,
            }}
            options={options}
          ></BaseMenuList>
          <FileTree
            component={Paper}
            sx={{
              ml: 4,
              p: 2,
            }}
            options={content}
          />
        </Stack>
      </Box>
    </Box>
  );
};
