import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
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

const Expand = ({
  item = {},
  onClick = () => {},
  isSelected = () => {
    return false;
  },
}) => {
  const hasSelected = hasSelectedNode(isSelected, item);
  const itemRef = useRef(null);
  const [expanded, setExpanded] = useState(hasSelected);

  return (
    <Box sx={{ px: 0.5 }}>
      <BaseMenuItem
        item={item}
        onClick={() => {
          setExpanded(!expanded);
        }}
        selected={hasSelected}
        cb={(e) => onClick(item, e)}
        _ref={itemRef}
        extra={
          <KeyboardArrowRightIcon
            sx={{
              fontSize: 18,
              color: 'GrayText',
              transition: 'all ease-out .3s',
              transform: expanded ? 'rotate(90deg)' : '',
              transformOrigin: 'center',
            }}
          />
        }
      />

      <Box
        sx={{
          display: expanded ? 'block' : 'none',
          position: 'relative',
          pl: 3.25,
          pr: 0,
          pt: 0.25,
          transition: 'all 0.2s ease-in-out',
          ':before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 20,
            bottom: 0,
            width: '1px',
            backgroundColor: 'divider',
          },
        }}
      >
        <VerticalMenu
          options={item.children}
          onClick={(el, e) => {
            onClick(el, e);
          }}
          isSelected={isSelected}
        />
      </Box>
    </Box>
  );
};

const VerticalMenu = ({
  options = [],
  onClick = () => {},
  isSelected = () => {
    return false;
  },
  sx = {},
  ...other
}) => {
  return (
    <Stack sx={{ py: 0.5, ...sx }} {...other} spacing={0.5}>
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
              onClick={onClick}
              isSelected={isSelected}
            />
          );
        }
        return (
          <Box key={i} sx={{ px: 0.5 }}>
            <BaseMenuItem
              item={item}
              cb={(el, e) => {
                onClick(el, e);
              }}
              selected={isSelected(item)}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default VerticalMenu;
