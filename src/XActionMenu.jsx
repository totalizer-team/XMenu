/* eslint-disable react/no-array-index-key */
import {
  Avatar,
  Box,
  Chip,
  Divider,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { cloneElement, useState } from 'react';

const COMPONENTS = {
  DEFAULT: ({
    avatar = '',
    icon = null,
    title = '',
    info = '',
    secondary = '',
    label = '',
    labelColor = '',
    disabled = false,
    onClick = () => {},
    /** 内部事件，用于XIconMenu XButtonMenu XAvatarMenu中关闭菜单操作 */
    _callback = () => {},
  }) => {
    const theme = useTheme();

    return (
      <MenuItem
        onClick={(e) => {
          onClick(e);
          _callback(e);
          e.stopPropagation();
        }}
        disabled={disabled}
        sx={{
          pl: 2,
          pr: 2,
          pt: 0.5,
          pb: 0.5,
          minHeight: '44px !important',
        }}
      >
        {avatar && (
          <ListItemAvatar>
            <Avatar src={avatar} />
          </ListItemAvatar>
        )}
        {icon && (
          <ListItemIcon
            sx={{
              minWidth: '0 !important',
              mr: 1,
              '.MuiSvgIcon-root': {
                fontSize: 20,
                transition: 'all 0.2s ease-in-out',
              },
            }}
          >
            {icon}
          </ListItemIcon>
        )}
        <ListItemText
          sx={{
            mr: 2,
            '.MuiTypography-root': {
              lineHeight: 1.5,
            },
          }}
        >
          <Typography variant="body2" noWrap>
            {title}
          </Typography>
          {!!info && (
            <Typography variant="body2" fontSize={12} noWrap color={'GrayText'}>
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
        </Stack>
      </MenuItem>
    );
  },
  Title: ({ title }) => (
    <Box
      sx={{
        p: 2,
        pt: 1,
        pb: 1,
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: 'GrayText', fontWeight: 'bold' }}
      >
        {title}
      </Typography>
    </Box>
  ),
  Divider: () => <Divider />,
};

export default function XActionMenu({
  children,
  arrow = true,
  width = 'auto',
  options,
  placement = 'bottom',
  onClick = () => {},
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
  const open = Boolean(anchorEl);

  return (
    <>
      {cloneElement(children, {
        onClick: (event) => {
          setAnchorEl(event.currentTarget);
        },
      })}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: av,
          horizontal: ah,
        }}
        transformOrigin={{
          vertical: tv,
          horizontal: th,
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0,
            '&::before': arrow ? arrowStyle : {},
          },
        }}
      >
        <Box width={width}>
          {options.map((item, i) => {
            const C = COMPONENTS[item.c || 'DEFAULT'];
            return (
              <C
                key={i}
                {...item}
                _callback={() => {
                  onClick(item);
                  setAnchorEl(null);
                }}
              />
            );
          })}
        </Box>
      </Menu>
    </>
  );
}
