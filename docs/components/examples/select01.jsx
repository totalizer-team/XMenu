import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import DataArrayIcon from '@mui/icons-material/DataArray';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ImageIcon from '@mui/icons-material/Image';
import NumbersIcon from '@mui/icons-material/Numbers';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import VideoIcon from '@mui/icons-material/VideoLibrary';

import { CascadeSelect } from '@totalizer/xmenu';

const options = [
  {
    label: 'String',
    value: 'string',
    icon: <TextFormatIcon />,
  },
  {
    label: 'Number',
    value: 'number',
    icon: <NumbersIcon />,
  },
  {
    label: 'Boolean',
    value: 'boolean',
    icon: <ToggleOnIcon />,
  },
  {
    label: 'Object',
    value: 'object',
    icon: <DataObjectIcon />,
  },
  {
    label: 'Image',
    value: 'image',
    icon: <ImageIcon />,
    disabled: true,
  },
  {
    label: 'Video',
    value: 'video',
    icon: <VideoIcon />,
    disabled: true,
  },
  {
    label: 'Array',
    value: 'array',
    icon: <DataArrayIcon />,
    children: [
      { label: 'String', value: 'array_string', icon: <TextFormatIcon /> },
      { label: 'Number', value: 'array_number', icon: <NumbersIcon /> },
      { label: 'Boolean', value: 'array_boolean', icon: <ToggleOnIcon /> },
      { label: 'Object', value: 'array_object', icon: <DataObjectIcon /> },
      {
        label: 'Image',
        value: 'array_image',
        icon: <ImageIcon />,
        disabled: true,
      },
      {
        label: 'Video',
        value: 'array_video',
        icon: <VideoIcon />,
        disabled: true,
      },
    ],
  },
];

export default () => {
  const [value, setValue] = useState('number');
  return (
    <Box>
      <Box
        sx={{
          py: 1,
          px: 2,
          borderBottom: 1,
          borderColor: 'divider',
          alignItems: 'center',
          display: 'flex',
        }}
        fontSize={14}
      >
        <span>Current Value</span>
        <Chip label={value} size="small" sx={{ ml: 1, borderRadius: 1 }}></Chip>
      </Box>
      <Box sx={{ p: 2, width: 250, margin: 'auto' }}>
        <CascadeSelect
          options={options}
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
        />
      </Box>
    </Box>
  );
};
