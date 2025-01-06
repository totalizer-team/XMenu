/* eslint-disable react/no-array-index-key */
import {
  Avatar,
  Box,
  IconButton,
  Popover,
  Stack,
  Tooltip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useRef, useState } from 'react';
import BaseMenuList from './BaseMenuList';
import hasSelectedNode from './utils/hasSelectedNode';

const IconItem = ({
  _parent = false,
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
    <Tooltip title={_parent ? '' : title} placement={'right'}>
      <Box component={'span'} ref={_ref}>
        <IconButton
          selected={selected}
          disabled={disabled}
          onClick={(e) => {
            onClick(e);
            cb(e);
            e.stopPropagation();
          }}
          sx={{
            '.MuiSvgIcon-root': {
              fontSize: 20,
              color: selected ? theme.palette.primary.main : 'inherit',
              transition: 'all 0.2s ease-in-out',
            },
            ...sx,
          }}
          {...other}
        >
          {avatar && <Avatar src={avatar} />}
          {icon}
        </IconButton>
      </Box>
    </Tooltip>
  );
};

const ListContent = ({
  item,
  open,
  isSelected,
  onClick = () => {},
  sx = {},
  ...other
}) => {
  const [expanded, setExpanded] = useState(false);

  const itemRef = useRef(null);

  const onExpanded = () => {
    setExpanded(true);
  };
  const onClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <IconItem
        _parent
        _ref={itemRef}
        item={item}
        onMouseEnter={onExpanded}
        onMouseLeave={onClose}
        selected={hasSelectedNode(isSelected, item)}
        cb={(e) => {
          onClick(item, e);
        }}
        extra={
          <KeyboardArrowDownIcon
            sx={{
              fontSize: 18,
              color: 'GrayText',
            }}
          />
        }
      />
      <Popover
        open={expanded}
        anchorEl={itemRef.current}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        onClose={() => {
          onClose();
        }}
        sx={{
          pointerEvents: 'none',
          transform: 'translateX(-2px)',
        }}
        disableRestoreFocus
        slotProps={{
          paper: {
            onMouseEnter: onExpanded,
            onMouseLeave: onClose,
            sx: {
              py: 0.5,
              ...(expanded && { pointerEvents: 'auto' }),
            },
          },
        }}
      >
        <BaseMenuList
          options={item.children}
          onClick={(el, e) => {
            onClick(el, e);
            onClose();
          }}
          isSelected={isSelected}
          sx={{
            py: 0,
            ...sx,
          }}
          {...other}
        />
      </Popover>
    </>
  );
};

export default function BaseMenuBar({
  size = 'medium', // medium
  options = [],
  isSelected = () => {
    return false;
  },
  onClick = () => {
    return false;
  },
  sx = {},
  ...other
}) {
  return (
    <Stack alignItems={'center'} sx={sx} {...other}>
      {options.map((item, i) => {
        if (item.c) return null;
        if (item.children) {
          return (
            <ListContent
              key={i}
              item={item}
              isSelected={isSelected}
              onClick={onClick}
            />
          );
        } else {
          return (
            <IconItem
              key={i}
              item={item}
              selected={isSelected(item)}
              cb={(e) => {
                onClick(item, e);
              }}
            />
          );
        }
      })}
    </Stack>
  );
}
