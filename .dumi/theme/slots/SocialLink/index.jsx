import React from 'react';

import { useSiteData } from 'dumi';

import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
export default () => {
  const { themeConfig } = useSiteData();

  if (themeConfig.socialLinks && themeConfig.socialLinks.github) {
    return (
      <IconButton
        onClick={() => {
          window.open(themeConfig.socialLinks.github);
        }}
      >
        <GitHubIcon />
      </IconButton>
    );
  }

  return <></>;
};
