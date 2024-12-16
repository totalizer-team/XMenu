import React from 'react';

import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Button, IconButton, Stack } from '@mui/material';

import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

import XActionMenu from '@totalizer/xcomponents/XActionMenu';

export default () => {
  const options01 = [
    {
      c: 'Title',
      title: 'Action',
    },
    {
      icon: <ContentCut />,
      title: 'Cut',
    },
    {
      icon: <ContentCopy />,
      title: 'Copy',
    },
    {
      icon: <ContentPaste />,
      title: 'Paste',
    },
  ];

  const options02 = [
    {
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      title: 'My Name',
      info: 'Id: 301841',
    },
    {
      c: 'Divider',
    },
    {
      icon: <AccountCircleIcon />,
      title: 'User',
      info: 'Id: 301841',
      secondary: '⌘U',
      onClick: (e) => {
        console.log(e);
      },
    },
    {
      icon: <MarkUnreadChatAltIcon />,
      title: 'Message',
      label: '+2',
      labelColor: 'primary',
    },
    {
      icon: <DoNotTouchIcon />,
      title: 'Disabled',
      disabled: true,
    },
  ];
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <XActionMenu
        options={options01}
        placement="bottom-start"
        onClick={(item) => {
          console.log(item);
        }}
      >
        <Button variant="outlined" startIcon={<SettingsIcon />}>
          More
        </Button>
      </XActionMenu>

      <XActionMenu
        options={options02}
        placement="bottom"
        onClick={(item) => {
          console.log(item);
        }}
      >
        <IconButton
          sx={{
            padding: 0.25,
            border: 2,
            borderColor: 'divider',
          }}
        >
          <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
        </IconButton>
      </XActionMenu>
    </Stack>
  );
};
