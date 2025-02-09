/* eslint-disable react/no-array-index-key */
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useRef, useState } from 'react';
import BaseMenuItem from './BaseMenuItem';
import BaseMenuList from './BaseMenuList';
import hasSelectedNode from './utils/hasSelectedNode';

const ListContent = ({
  item,
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
      <BaseMenuItem
        _ref={itemRef}
        item={item}
        onMouseEnter={onExpanded}
        onMouseLeave={onClose}
        selected={hasSelectedNode(isSelected, item)}
        actived={expanded}
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
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={() => {
          onClose();
        }}
        sx={{
          pointerEvents: 'none',
          transform: 'translateY(-2px)',
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

const HorizontalMenu = function ({
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
    <Stack
      direction="row"
      spacing={0.25}
      alignItems={'inherit'}
      flexWrap="wrap"
      sx={{
        ...sx,
      }}
      {...other}
    >
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
            <BaseMenuItem
              key={i}
              item={item}
              selected={isSelected(item)}
              onSelect={(e) => {
                onSelect(item, e);
              }}
            />
          );
        }
      })}
    </Stack>
  );
};

export default HorizontalMenu;
