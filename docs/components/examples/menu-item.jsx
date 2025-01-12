import React, { useState } from 'react';

import { Box } from '@mui/material';

import { BaseMenuItem } from '@totalizer/xmenu';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default () => {
  const [title, setTitle] = useState('');
  return (
    <Box sx={{ width: 250, margin: '0 auto' }}>
      <BaseMenuItem
        item={{
          icon: <AccountCircleIcon />,
          title: 'Profile',
          secondary: '⇧⌘P',
        }}
      />
    </Box>
  );
};
