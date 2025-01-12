import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Box from '@mui/material/Box';
export default ({
  children,
  hover = true,
  icon = AddRoundedIcon,
  size = 24,
  sx = {},
  ...other
}) => {
  const offset = -(size / 2 + 1);
  const C = icon;
  const iconSx = {
    position: 'absolute',
    fontSize: size,
    color: 'GrayText',
    zIndex: 20,
  };
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        position: 'relative',
        border: 2,
        borderStyle: 'dashed',
        borderColor: 'divider',
        ...sx,
      }}
      {...other}
    >
      <C
        sx={{
          top: offset,
          left: offset,
          ...iconSx,
        }}
      />
      <C
        sx={{
          top: offset,
          right: offset,
          ...iconSx,
        }}
      />
      <C
        sx={{
          bottom: offset,
          left: offset,
          ...iconSx,
        }}
      />
      <C
        sx={{
          bottom: offset,
          right: offset,
          ...iconSx,
        }}
      />
      {children}
    </Box>
  );
};
