import React from 'react';

import { Box } from '@mui/material';

import XNavigation from '@totalizer/xcomponents/XNavigation';

import config from '../navigation-config';

export default () => {
  const [path, setPath] = React.useState('/Account');

  return (
    <Box sx={{ width: 300 }}>
      <XNavigation
        variant="vertical"
        options={config}
        isSelected={(item) => item.path === path}
        onClick={(item) => {
          if (item.path) setPath(item.path);
        }}
      />
    </Box>
  );
};
