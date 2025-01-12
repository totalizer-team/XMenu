import React, { useState } from 'react';

import { Box } from '@mui/material';

import { BaseMenuList } from '@totalizer/xmenu';

import options from './options';

export default () => {
  const [title, setTitle] = useState('');
  return (
    <Box sx={{ width: 250, margin: '0 auto' }}>
      <BaseMenuList
        options={options}
        onClick={(item) => {
          console.log(item);
          if (item.children) return false;
          else setTitle(item.title);
        }}
        isSelected={(item) => item.title === title}
      />
    </Box>
  );
};
