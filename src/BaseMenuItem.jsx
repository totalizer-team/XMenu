/* eslint-disable react/no-array-index-key */
import {
  Avatar,
  Chip,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import React from 'react';

export default ({
  _ref = null,
  item = {},
  selected = false,
  cb = () => {},
  extra = null,
  sx,
  ...other
}) => {
  const theme = useTheme();

  const {
    avatar = '',
    icon = null,
    title = '',
    info = '',
    secondary = '',
    label = '',
    labelColor = '',
    disabled = false,
    onClick = () => {},
  } = item;

  return (
    <MenuItem
      ref={_ref}
      onClick={(e) => {
        onClick(item, e);
        cb(item, e);
        e.stopPropagation();
      }}
      selected={selected}
      disabled={disabled}
      sx={{
        py: 0.75,
        px: 1,
        minHeight: '0px !important',
        borderRadius: 1,
        ...sx,
      }}
      {...other}
    >
      {avatar && (
        <ListItemAvatar sx={{ mr: 1, minWidth: 0 }}>
          <Avatar src={avatar} />
        </ListItemAvatar>
      )}
      {icon && (
        <ListItemIcon
          sx={{
            minWidth: '0 !important',
            mr: 1,
            '.MuiSvgIcon-root': {
              fontSize: 18,
              color: selected ? theme.palette.primary.main : 'inherit',
              transition: 'all 0.2s ease-in-out',
            },
          }}
        >
          {icon}
        </ListItemIcon>
      )}
      <ListItemText
        sx={{
          mr: 1,
          '.MuiTypography-root': {
            lineHeight: '20px',
          },
        }}
      >
        <Typography
          variant="body2"
          noWrap
          color={selected ? 'primary' : 'inherit'}
          fontSize={14}
        >
          {title}
        </Typography>
        {!!info && (
          <Typography
            variant="body2"
            fontSize={12}
            noWrap
            color={selected ? theme.palette.primary.main : 'GrayText'}
          >
            {info}
          </Typography>
        )}
      </ListItemText>

      <Stack direction="row" spacing={0.5} alignItems="center">
        {!!label && (
          <Chip
            label={label}
            color={labelColor}
            size="small"
            sx={{
              height: 18,
              fontSize: 12,
            }}
          ></Chip>
        )}
        {secondary && (
          <Typography variant="caption" color="text.secondary">
            {secondary}
          </Typography>
        )}

        {extra}
      </Stack>
    </MenuItem>
  );
};
