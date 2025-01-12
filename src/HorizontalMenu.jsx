/* eslint-disable react/no-array-index-key */
import { Popover, Stack } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useRef, useState } from 'react';
import BaseMenuItem from './BaseMenuItem';
import BaseMenuList from './BaseMenuList';
import hasSelectedNode from './utils/hasSelectedNode';

const ListContent = ({
  item,
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
      <BaseMenuItem
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

const HorizontalMenu = function ({
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
              onClick={onClick}
            />
          );
        } else {
          return (
            <BaseMenuItem
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
};

export default HorizontalMenu;
