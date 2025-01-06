import { Divider, Stack } from '@mui/material';

import SearchBar from 'dumi/theme/slots/SearchBar';
import ColorSwitch from '../ColorSwitch';
import Logo from '../Logo';
import Navbar from '../Navbar';
import SocialLink from '../SocialLink';

import { useRouteMeta, useSiteData } from 'dumi';
import React, { useState } from 'react';

import './index.less';

const Header = () => {
  const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);
  const { themeConfig } = useSiteData();

  return (
    <Stack
      sx={{
        p: 2,
        pt: 1,
        pb: 1,
        position: 'sticky',
        zIndex: 10,
        top: 0,
        flexGrow: 1,
        backgroundColor: 'background.paper',
      }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Logo />
        <Navbar />
      </Stack>
      <Stack direction="row" alignItems="center">
        <SearchBar />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mr: 2, ml: 2 }}
        />
        <SocialLink />
        <ColorSwitch />
      </Stack>
    </Stack>
  );
};

export default Header;
