import React, { useState } from 'react';

import CallSplitIcon from '@mui/icons-material/CallSplit';
import DataArrayIcon from '@mui/icons-material/DataArray';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ImageIcon from '@mui/icons-material/Image';
import LoopIcon from '@mui/icons-material/Loop';
import NumbersIcon from '@mui/icons-material/Numbers';
import SettingsIcon from '@mui/icons-material/Settings';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import VideoIcon from '@mui/icons-material/VideoLibrary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CascadeSelect } from '@totalizer/xmenu';

const options = [
  {
    c: 'Title',
    title: '逻辑节点',
  },
  {
    label: '条件节点',
    value: 'if',
    description: '条件节点',
    icon: <CallSplitIcon />,
  },
  {
    label: '循环节点',
    value: 'for',
    description: '循环节点',
    icon: <LoopIcon />,
  },
  {
    c: 'Title',
    title: '生成节点',
  },
  {
    label: '图片生成',
    value: 'image',
    description: '图片生成',
    icon: <ImageIcon />,
    disabled: true,
  },
  {
    label: '视频生成',
    value: 'video',
    description: '视频生成',
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
      <Box sx={{ p: 2, width: 250, margin: 'auto' }}>
        <CascadeSelect
          options={options}
          onChange={(v) => {
            // do something
          }}
        >
          <Button size="small" startIcon={<SettingsIcon />}>
            Click
          </Button>
        </CascadeSelect>
      </Box>
    </Box>
  );
};
