import Stack from '@mui/material/Stack';
import { VerticalMenu } from '@totalizer/xmenu';
import React from 'react';

import options from './options';

export default () => {
  const [title, setTitle] = React.useState('Keys');

  return (
    <Stack alignItems="center">
      <VerticalMenu
        options={options}
        isSelected={(item) => item.title === title}
        onClick={(item) => {
          if (!item.children) setTitle(item.title);
        }}
      />
    </Stack>
  );
};
