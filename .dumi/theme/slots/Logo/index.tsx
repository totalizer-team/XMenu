import {
  Avatar,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { history, useLocale, useSiteData } from 'dumi';
import React, { type FC } from 'react';

const Logo: FC = () => {
  const { themeConfig } = useSiteData();
  const locale = useLocale();

  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      onClick={() => {
        history.push('base' in locale ? locale.base : '/');
      }}
    >
      <Button
        startIcon={
          themeConfig.logo ? (
            <Avatar
              sx={{
                width: 30,
                height: 30,
                borderRadius: 2,
              }}
              src={themeConfig.logo}
            />
          ) : (
            ''
          )
        }
        sx={{
          pl: 2,
          textTransform: 'none',
          borderColor: 'divider',
          alignItems: 'center',
        }}
        color="inherit"
      >
        <Stack alignItems="flex-start">
          <Typography fontSize={12} lineHeight={1}>
            @totalizer
          </Typography>
          <Typography fontSize={14} fontWeight={'bold'} lineHeight={1}>
            {themeConfig.name}
          </Typography>
        </Stack>
      </Button>
      <Divider orientation="vertical" sx={{ height: 20, mx: 1 }} />
    </Stack>
  );
};

export default Logo;
