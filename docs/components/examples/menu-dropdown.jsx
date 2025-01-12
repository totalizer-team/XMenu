import React from 'react';

import { Button, Stack } from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';

import { DropdownMenu } from '@totalizer/xmenu';

import options from './options';
export default () => {
  return (
    <Stack alignItems="center">
      <DropdownMenu
        options={options}
        onClick={(item) => {
          console.log(item);
        }}
      >
        <Button size="small" startIcon={<SettingsIcon />}>
          Click
        </Button>
      </DropdownMenu>
    </Stack>
  );
};
