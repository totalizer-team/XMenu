/* eslint-disable react/no-array-index-key */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import React, { useRef, useState } from 'react';
import BaseMenuList from './BaseMenuList';
import hasSelectedNode from './utils/hasSelectedNode';

const IconItem = ({
  _parent = false,
  _ref = null,
  item = {},
  selected = false,
  onSelect = () => {},
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
            onClick(e, item);
            onSelect(item);
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
  onSelect = () => {},
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
          onSelect={(el) => {
            onSelect(el);
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
  onSelect = () => {},
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
              onSelect={onSelect}
            />
          );
        } else {
          return (
            <IconItem
              key={i}
              item={item}
              selected={isSelected(item)}
              onSelect={(el) => {
                onSelect(el);
              }}
            />
          );
        }
      })}
    </Stack>
  );
}
