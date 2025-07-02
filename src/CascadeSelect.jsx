/* eslint-disable react/no-array-index-key */
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { cloneElement } from 'react';

import ArrowDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React, { useRef, useState } from 'react';
import BaseMenuList from './BaseMenuList2';
import findOptionByValue from './utils/findOptionByValue';

export default function ActionMenu({
  children,
  options,
  value = '',
  onChange = () => {},
  placeholder = 'Please select',
  disableClearable = false,
  disableArrow = false,
}) {
  const inputRef = useRef(null);

  const onSelect = (el) => {
    onChange(el.value);
  };
  const isSelected = (el) => {
    return value === el.value;
  };

  // 获取当前选中项的配置
  const selectedOption = value ? findOptionByValue(value, options) : null;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    // 延迟将焦点返回到触发元素，确保 Popover 完全关闭后再转移焦点
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  return (
    <>
      {children ? (
        cloneElement(children, {
          onClick: (event) => {
            setAnchorEl(event.currentTarget);
          },
        })
      ) : (
        <Paper
          variant="outlined"
          ref={inputRef}
          onClick={(event) => setAnchorEl(event.currentTarget)}
          tabIndex={0}
          role="button"
          aria-expanded={Boolean(anchorEl)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setAnchorEl(e.currentTarget);
            }
          }}
          sx={{
            px: value ? 0.5 : 1,
            py: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            height: 26,
            minWidth: 0,
            '&:hover': {
              borderColor: 'ButtonText',
            },
            borderColor: Boolean(anchorEl) ? 'primary.main' : 'divider',
          }}
        >
          {value ? (
            <Chip
              // onDelete={() => onChange('')}
              size="small"
              label={selectedOption?.label || value}
              variant="filled"
              sx={{
                m: 0,
                p: 0,
                fontSize: 12,
                height: 18,
                borderRadius: 1,
                maxWidth: '100%',
              }}
            />
          ) : (
            <Typography sx={{ fontSize: 12, color: 'GrayText' }}>
              {placeholder}
            </Typography>
          )}
          {/* </Box> */}
          {value && !disableClearable ? (
            <IconButton
              edge="end"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onChange('');
              }}
            >
              <CloseIcon sx={{ fontSize: 14 }} />
            </IconButton>
          ) : (
            !disableArrow && (
              <IconButton edge="end" size="small">
                <ArrowDownIcon sx={{ fontSize: 16 }} />
              </IconButton>
            )
          )}
        </Paper>
      )}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 0,
            },
          },
        }}
      >
        <BaseMenuList
          options={options}
          onSelect={(el) => {
            onSelect(el);
            handleClose();
          }}
          isSelected={isSelected}
          sx={{
            py: 0,
          }}
        />
      </Menu>
    </>
  );
}
