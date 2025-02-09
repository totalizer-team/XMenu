import React from 'react';

import { Paper, Stack } from '@mui/material';

import { BaseMenuItem } from '@totalizer/xmenu';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default () => {
  return (
    <Stack spacing={2} alignItems="center">
      <Paper sx={{ width: 250 }}>
        <BaseMenuItem
          item={{
            icon: <AccountCircleIcon />,
            title: 'title',
          }}
        />
      </Paper>

      <Paper sx={{ width: 250 }}>
        <BaseMenuItem
          item={{
            icon: <AccountCircleIcon />,
            title: 'title',
            label: '+1',
          }}
        />
      </Paper>

      <Paper sx={{ width: 250 }}>
        <BaseMenuItem
          item={{
            icon: <AccountCircleIcon />,
            title: 'title',
            info: 'info',
            secondary: 'secondary',
          }}
        />
      </Paper>

      <Paper sx={{ width: 250 }}>
        <BaseMenuItem
          item={{
            avatar: 'https://mui.com/static/images/avatar/2.jpg',
            title: 'title',
            info: 'info',
          }}
        />
      </Paper>
    </Stack>
  );
};
