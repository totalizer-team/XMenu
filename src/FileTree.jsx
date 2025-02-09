import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, { useRef, useState } from 'react';
import BaseFileItem from './BaseFileItem';

import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
const Expand = ({
  item = {},
  path = '',
  value = '',
  onClick = () => {},
  onChange = () => {},
  _inner = false,
}) => {
  const hasSelected = value.includes(path);
  const itemRef = useRef(null);
  const [expanded, setExpanded] = useState(hasSelected || item.open);

  return (
    <Box
      sx={{
        position: 'relative',
        px: 0,
        ':after': {
          content: '""',
          display: _inner ? 'block' : 'none',
          position: 'absolute',
          left: -9,
          top: 13,
          width: '7px',
          height: '1px',
          transform: 'translateY(-1px)',
          backgroundColor: 'divider',
        },
      }}
    >
      <BaseFileItem
        item={item}
        path={path}
        icon={expanded ? <FolderOpenOutlinedIcon /> : <FolderOutlinedIcon />}
        cb={(p, el, e) => {
          setExpanded(!expanded);
          onClick(p, el, e);
        }}
        _ref={itemRef}
      />

      <Box
        sx={{
          display: expanded ? 'block' : 'none',
          position: 'relative',
          pl: 2.25,
          pr: 0,
          pt: 0.25,
          transition: 'all 0.2s ease-in-out',
          ':before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 9,
            bottom: 11,
            width: '1px',
            backgroundColor: 'divider',
          },
        }}
      >
        <FileTree
          options={item.children}
          onClick={(p, el, e) => {
            onClick(p, el, e);
            onChange(p, el);
          }}
          value={value}
          _path={path}
          _inner={true}
        />
      </Box>
    </Box>
  );
};

const FileTree = ({
  options = [],
  value = '',
  onClick = () => {},
  onChange = () => {},
  _inner = false,
  _path = '',
  sx = {},
  ...other
}) => {
  return (
    <Stack sx={{ py: 0, ...sx }} {...other} spacing={0.25}>
      {options.map((item, i) => {
        if (item.children) {
          return (
            <Expand
              key={i}
              item={item}
              path={`${_path}/${item.name}`}
              onClick={onClick}
              onChange={onChange}
              value={value}
              _inner={_inner}
            />
          );
        }
        return (
          <Box
            key={i}
            sx={{
              position: 'relative',
              px: 0,
              ':after': {
                content: '""',
                display: _inner ? 'block' : 'none',
                position: 'absolute',
                left: -9,
                top: 13,
                width: '7px',
                height: '1px',
                transform: 'translateY(-1px)',
                backgroundColor: 'divider',
              },
            }}
          >
            <BaseFileItem
              item={item}
              icon={<InsertDriveFileOutlinedIcon />}
              path={`${_path}/${item.name}`}
              cb={(p, el, e) => {
                onClick(p, el, e);
                onChange(p, el);
              }}
              selected={value === `${_path}/${item.name}`}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default FileTree;
