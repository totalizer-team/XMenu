import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import { ContextMenu } from '@totalizer/xmenu';

import options from './options';

export default () => {
  return (
    <Stack alignItems="center">
      <ContextMenu
        options={options}
        onClick={(item) => {
          console.log(item);
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 80,
            borderRadius: 1,
            border: 1,
            borderStyle: 'dashed',
            borderColor: 'primary.main',
          }}
        >
          <Typography fontSize={14}>Right Click Here</Typography>
        </Box>
      </ContextMenu>
    </Stack>
  );
};
