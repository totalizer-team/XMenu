import Stack from '@mui/material/Stack';
import React from 'react';

import { HorizontalMenu } from '@totalizer/xmenu';

import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import SettingsIcon from '@mui/icons-material/Settings';

import ApiIcon from '@mui/icons-material/Api';
import ContrastIcon from '@mui/icons-material/Contrast';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import KeyIcon from '@mui/icons-material/Key';

const options = [
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

export default () => {
  const [title, setTitle] = React.useState('Keys');

  return (
    <Stack alignItems="center">
      <HorizontalMenu
        options={options}
        isSelected={(item) => item.title === title}
        onSelect={(item) => {
          setTitle(item.title);
        }}
      />
    </Stack>
  );
};
