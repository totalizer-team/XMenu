import React, { useState } from 'react';

import { Paper } from '@mui/material';

import { BaseMenuList } from '@totalizer/xmenu';

import options from './options';

export default () => {
  const [title, setTitle] = useState('');
  return (
    <Paper sx={{ width: 250, margin: '0 auto' }}>
      <BaseMenuList
        options={options}
        isSelected={(item) => item.title === title}
        onSelect={(item) => {
          setTitle(item.title);
        }}
      />
    </Paper>
  );
};
