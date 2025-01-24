import React, { useState } from 'react';

import { Paper } from '@mui/material';

import { BaseMenuItem } from '@totalizer/xmenu';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default () => {
  const [title, setTitle] = useState('');
  return (
    <Paper sx={{ width: 250, margin: '0 auto' }}>
      <BaseMenuItem
        item={{
          icon: <AccountCircleIcon />,
          title: 'Profile',
          secondary: '⇧⌘P',
        }}
      />
    </Paper>
  );
};
