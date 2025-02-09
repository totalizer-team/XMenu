import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useRef, useState } from 'react';
import BaseMenuItem from './BaseMenuItem';
import hasSelectedNode from './utils/hasSelectedNode';

const COMPONENTS = {
  Title: ({ title }) => (
    <Typography
      variant="caption"
      sx={{ p: 1, py: 0.5, color: 'GrayText', fontWeight: 'bold' }}
    >
      {title}
    </Typography>
  ),
  Divider: () => <Divider />,
};

const Expand = ({ item = {}, isSelected = () => {}, onSelect = () => {} }) => {
  const itemRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const onExpanded = () => {
    setExpanded(true);
  };
  const onClose = () => {
    setExpanded(false);
  };
  return (
    <Box sx={{ px: 0.5 }}>
      <BaseMenuItem
        item={item}
        onMouseEnter={onExpanded}
        onMouseLeave={onClose}
        selected={hasSelectedNode(isSelected, item)}
        actived={expanded}
        _ref={itemRef}
        extra={
          <KeyboardArrowRightIcon
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
              ...(expanded && { pointerEvents: 'auto' }),
            },
          },
        }}
      >
        <MenuList
          options={item.children}
          isSelected={isSelected}
          onSelect={(el) => {
            onSelect(el);
            if (!el.hasOwnProperty('children')) onClose();
          }}
        />
      </Popover>
    </Box>
  );
};

const MenuList = ({
  options = [],
  isSelected = () => {},
  onSelect = () => {},
  sx = {},
  ...other
}) => {
  return (
    <Stack sx={{ py: 0.5, ...sx }} spacing={0.5} {...other}>
      {options.map((item, i) => {
        if (item.c && COMPONENTS.hasOwnProperty(item.c)) {
          const C = COMPONENTS[item.c];
          return <C key={i} {...item} />;
        }

        if (item.children) {
          return (
            <Expand
              key={i}
              item={item}
              onSelect={onSelect}
              isSelected={isSelected}
            />
          );
        }
        return (
          <Box key={i} sx={{ px: 0.5 }}>
            <BaseMenuItem
              item={item}
              onSelect={(el) => {
                onSelect(el);
              }}
              selected={isSelected(item)}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default MenuList;
