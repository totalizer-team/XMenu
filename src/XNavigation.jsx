/* eslint-disable react/no-array-index-key */
import {
  Box,
  Button,
  Chip,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import React, { useMemo, useRef, useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const DefaultItem = ({
  icon = null,
  title = '',
  info = '',
  secondary = '',
  label = '',
  labelColor = '', // 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  disabled = false,
  onClick = () => {},
  _selected = false,
  _hasSelected = false,
  _parent = false,
  _isOpen = false,
  _child = false,
  _globalClickEvent = () => {},
}) => {
  const theme = useTheme();

  return (
    <MenuItem
      onClick={(e) => {
        onClick(e);
        _globalClickEvent(e);
        e.stopPropagation();
      }}
      selected={_selected}
      disabled={disabled}
      sx={{
        pl: _child ? 1 : 2,
        pr: 2,
        pt: 0.5,
        pb: 0.5,
        minHeight: '44px !important',
        borderRadius: 2,
      }}
    >
      {icon && (
        <ListItemIcon
          sx={{
            minWidth: '0 !important',
            mr: 1,
            '.MuiSvgIcon-root': {
              fontSize: 20,
              color:
                _selected || _hasSelected
                  ? theme.palette.primary.main
                  : 'inherit',
              transition: 'all 0.2s ease-in-out',
            },
          }}
        >
          {icon}
        </ListItemIcon>
      )}
      <ListItemText
        sx={{
          '.MuiTypography-root': {
            lineHeight: 1.5,
          },
        }}
      >
        <Typography
          variant="body2"
          noWrap
          color={_selected || _hasSelected ? 'primary' : 'inherit'}
        >
          {title}
        </Typography>
        {!!info && (
          <Typography
            variant="body2"
            fontSize={12}
            noWrap
            color={
              _selected || _hasSelected
                ? theme.palette.primary.main
                : 'GrayText'
            }
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
        {_parent &&
          (_isOpen ? (
            <KeyboardArrowDownIcon fontSize="small" color="action" />
          ) : (
            <KeyboardArrowRightIcon fontSize="small" color="action" />
          ))}
      </Stack>
    </MenuItem>
  );
};

const SidebarItem = ({
  icon = null,
  title = '',
  info = '',
  secondary = '',
  label = '',
  labelColor = '',
  disabled = false,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  _selected = false,
  _hasSelected = false,
  _parent = false,
  _isOpen = false,
  _child = false,
  _globalClickEvent = () => {},
  _ref = null,
}) => {
  const theme = useTheme();

  return (
    <>
      <Tooltip title={_parent ? '' : title} placement={'right'}>
        <Box component={'span'} ref={_ref}>
          <IconButton
            selected={_selected}
            disabled={disabled}
            onClick={(e) => {
              onClick(e);
              _globalClickEvent(e);
              e.stopPropagation();
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            // size="large"
            sx={{
              '.MuiSvgIcon-root': {
                fontSize: 24,
                color:
                  _selected || _hasSelected
                    ? theme.palette.primary.main
                    : 'inherit',
                transition: 'all 0.2s ease-in-out',
              },
            }}
          >
            {icon}
          </IconButton>
        </Box>
      </Tooltip>
    </>
  );
};

const HorizontalItem = ({
  icon = null,
  title = '',
  info = '',
  secondary = '',
  label = '',
  labelColor = '',
  disabled = false,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  _selected = false,
  _hasSelected = false,
  _parent = false,
  _isOpen = false,
  _child = false,
  _globalClickEvent = () => {},
  _ref = null,
}) => {
  const theme = useTheme();

  return (
    <Button
      variant="text"
      ref={_ref}
      selected={_selected}
      disabled={disabled}
      onClick={(e) => {
        onClick(e);
        _globalClickEvent(e);
        e.stopPropagation();
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        textTransform: 'none',
        '.MuiSvgIcon-root': {
          fontSize: 20,
          color:
            _selected || _hasSelected
              ? theme.palette.primary.main
              : disabled
              ? 'inherit'
              : 'GrayText',
          transition: 'all 0.2s ease-in-out',
        },
      }}
      color={_selected || _hasSelected ? 'primary' : 'inherit'}
      startIcon={icon}
    >
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Typography fontSize={14}>{title}</Typography>
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
      </Stack>
    </Button>
  );
};

const VerticalList = ({ item, isSelected, onClick = () => {} }) => {
  const hasSelcted = item.children.some(isSelected);

  const [open, setOpen] = useState(hasSelcted || item.open);

  return (
    <Box>
      <DefaultItem
        _parent
        _isOpen={open}
        {...item}
        onClick={() => setOpen(!open)}
        _globalClickEvent={(e) => onClick(item, e)}
        _selected={isSelected(item)}
        _hasSelected={item.children.some(isSelected)}
      />
      <Stack
        spacing={0.5}
        sx={{
          display: open ? 'block' : 'none',
          position: 'relative',
          pl: 3.25,
          pr: 0,
          transition: 'all 0.2s ease-in-out',
          ':before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 24,
            bottom: 0,
            width: 2,
            backgroundColor: 'divider',
          },
        }}
      >
        {item.children.map((el, j) => (
          <Box
            key={j}
            sx={{
              position: 'relative',
              pl: 1.25,
              ':before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: '50%',
                left: 0,
                width: 8,
                height: 2,
                transform: 'translateY(-50%)',
                backgroundColor: 'divider',
              },
            }}
          >
            <DefaultItem
              {...el}
              _child
              _selected={isSelected(el)}
              _globalClickEvent={(e) => onClick(el, e)}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const SidebarList = ({ item, isSelected, onClick = () => {} }) => {
  const hasSelcted = item.children.some(isSelected);

  const itemRef = useRef(null);

  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <SidebarItem
        _parent
        _isOpen={open}
        {...item}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _ref={itemRef}
        _globalClickEvent={(e) => onClick(item, e)}
        _selected={isSelected(item)}
        _hasSelected={item.children.some(isSelected)}
      />
      <Popover
        open={open}
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
            onMouseEnter: onOpen,
            onMouseLeave: onClose,
            sx: {
              ...(open && { pointerEvents: 'auto' }),
            },
          },
        }}
      >
        <Stack spacing={0.5} sx={{ width: 200, p: 1 }}>
          {item.children.map((el, j) => (
            <DefaultItem
              key={j}
              {...el}
              _child
              _selected={isSelected(el)}
              _globalClickEvent={(e) => {
                onClose();
                onClick(el, e);
              }}
            />
          ))}
        </Stack>
      </Popover>
    </>
  );
};

const HorizontalList = ({ item, isSelected, onClick = () => {} }) => {
  const hasSelcted = item.children.some(isSelected);

  const itemRef = useRef(null);

  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <HorizontalItem
        _parent
        _isOpen={open}
        {...item}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _ref={itemRef}
        _globalClickEvent={(e) => onClick(item, e)}
        _selected={isSelected(item)}
        _hasSelected={item.children.some(isSelected)}
      />
      <Popover
        open={open}
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
            onMouseEnter: onOpen,
            onMouseLeave: onClose,
            sx: {
              ...(open && { pointerEvents: 'auto' }),
            },
          },
        }}
      >
        <Stack spacing={0.5} sx={{ width: 200, p: 1 }}>
          {item.children.map((el, j) => (
            <DefaultItem
              key={j}
              {...el}
              _child
              _selected={isSelected(el)}
              _globalClickEvent={(e) => {
                onClose();
                onClick(el, e);
              }}
            />
          ))}
        </Stack>
      </Popover>
    </>
  );
};

const XNavigation = function ({
  variant = 'vertical', // vertical | horizontal | sidebar
  options = [],
  isSelected = () => {
    return false;
  },
  onClick = () => {
    return false;
  },
}) {
  const direction = useMemo(() => {
    if (variant === 'vertical') {
      return 'column';
    }
    if (variant === 'horizontal') {
      return 'row';
    } else {
      return 'column';
    }
  }, [variant]);

  const spacing = useMemo(() => {
    if (variant === 'vertical') {
      return 0.5;
    }
    if (variant === 'horizontal') {
      return 1;
    } else {
      return 0;
    }
  }, [variant]);

  return (
    <Stack
      direction={direction}
      spacing={spacing}
      alignItems={variant === 'vertical' ? 'inherit' : 'flex-start'}
    >
      {options.map((item, i) => {
        if (item.children) {
          if (variant === 'sidebar')
            return (
              <SidebarList
                key={i}
                item={item}
                isSelected={isSelected}
                onClick={onClick}
              />
            );
          if (variant === 'horizontal')
            return (
              <HorizontalList
                key={i}
                item={item}
                isSelected={isSelected}
                onClick={onClick}
              />
            );
          return (
            <VerticalList
              key={i}
              item={item}
              isSelected={isSelected}
              onClick={onClick}
            />
          );
        } else {
          if (variant === 'sidebar')
            return (
              <SidebarItem
                key={i}
                {...item}
                _selected={isSelected(item)}
                _globalClickEvent={(e) => {
                  onClick(item, e);
                }}
              />
            );

          if (variant === 'horizontal')
            return (
              <HorizontalItem
                key={i}
                {...item}
                _selected={isSelected(item)}
                _globalClickEvent={(e) => {
                  onClick(item, e);
                }}
              />
            );

          return (
            <DefaultItem
              key={i}
              {...item}
              _selected={isSelected(item)}
              _globalClickEvent={(e) => {
                onClick(item, e);
              }}
            />
          );
        }
      })}
    </Stack>
  );
};

export default XNavigation;
