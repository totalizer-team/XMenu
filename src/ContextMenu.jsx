import Menu from '@mui/material/Menu';
import React from 'react';
import BaseMenuList from './BaseMenuList';

export default function ContextMenu({
  width = '',
  children,
  options,
  onSelect = () => {},
  onOpenChange = () => {},
  sx = {},
  ...other
}) {
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null,
    );
    onOpenChange(true);
  };

  const handleClose = () => {
    setContextMenu(null);
    onOpenChange(false);
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
      {children}

      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <BaseMenuList
          options={options}
          onSelect={(el) => {
            onSelect(el);
            handleClose();
          }}
          sx={{
            py: 0,
            ...sx,
          }}
          {...other}
        />
      </Menu>
    </div>
  );
}
