import Paper from '@mui/material/Paper';
import { VerticalMenu } from '@totalizer/xmenu';
import React from 'react';

import options from './options';

export default () => {
  const [title, setTitle] = React.useState('Keys');

  return (
    <Paper sx={{ width: 250, margin: '0 auto' }}>
      <VerticalMenu
        options={options}
        isSelected={(item) => item.title === title}
        onClick={(item) => {
          if (!item.children) setTitle(item.title);
        }}
      />
    </Paper>
  );
};
