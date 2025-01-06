/* eslint-disable react/no-array-index-key */
import { Menu } from '@mui/material';
import { cloneElement, useState } from 'react';

import BaseMenuList from './BaseMenuList';

export default function ActionMenu({
  children,
  arrow = false,
  options,
  placement = 'bottom',
  onClick = () => {},
  isSelected = () => {},
  sx = {},
  ...other
}) {
  let av;
  let ah;
  let tv;
  let th;
  let arrowStyle = {};
  switch (placement) {
    case 'top-start':
      [av, ah, tv, th] = ['top', 'left', 'bottom', 'left'];
      arrowStyle = {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: -10,
        left: 16,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: ' translateY(-50%) rotate(-45deg)',
        zIndex: 0,
      };
      break;
    case 'top':
      [av, ah, tv, th] = ['top', 'center', 'bottom', 'center'];
      arrowStyle = {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: -10,
        left: '50%',
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateX(-50%) translateY(-50%) rotate(-45deg)',
        zIndex: 0,
      };
      break;
    case 'top-end':
      [av, ah, tv, th] = ['top', 'right', 'bottom', 'right'];
      arrowStyle = {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: -10,
        right: 16,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: ' translateY(-50%) rotate(-45deg)',
        zIndex: 0,
      };
      break;
    case 'bottom-start':
      [av, ah, tv, th] = ['bottom', 'left', 'top', 'left'];
      arrowStyle = {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 16,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: ' translateY(-50%) rotate(45deg)',
        zIndex: 0,
      };
      break;
    case 'bottom':
      [av, ah, tv, th] = ['bottom', 'center', 'top', 'center'];
      arrowStyle = {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: '50%',
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
        zIndex: 0,
      };
      break;
    case 'bottom-end':
    default:
      [av, ah, tv, th] = ['bottom', 'right', 'top', 'right'];
      arrowStyle = {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 16,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      };
  }

  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      {cloneElement(children, {
        onClick: (event) => {
          setAnchorEl(event.currentTarget);
        },
      })}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: av,
          horizontal: ah,
        }}
        transformOrigin={{
          vertical: tv,
          horizontal: th,
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 0,
              '&::before': arrow ? arrowStyle : {},
            },
          },
        }}
      >
        <BaseMenuList
          options={options}
          onClick={(el, e) => {
            onClick(el, e);
            setAnchorEl(null);
          }}
          isSelected={isSelected}
          sx={{
            py: 0,
            ...sx,
          }}
          {...other}
        />
      </Menu>
    </>
  );
}
