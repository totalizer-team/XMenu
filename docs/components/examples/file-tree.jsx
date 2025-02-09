import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { FileTree } from '@totalizer/xmenu';

const options = [
  {
    name: 'src',
    children: [
      {
        name: 'components',
        children: [
          {
            name: 'header.tsx',
          },
          {
            name: 'footer.tsx',
          },
        ],
      },
      {
        name: 'pages',
        children: [{ name: 'index.tsx' }, { name: 'dashboard.tsx' }],
      },
    ],
  },
  {
    name: 'package.json',
  },
];

export default () => {
  const [value, setValue] = useState('/src/components/header.tsx');
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
        <span>Current Path</span>
        <Chip label={value} size="small" sx={{ ml: 1, borderRadius: 1 }}></Chip>
      </Box>
      <Box sx={{ p: 2, width: 250, margin: 'auto' }}>
        <FileTree
          options={options}
          value={value}
          onChange={(path, item) => {
            setValue(path, item);
          }}
        />
      </Box>
    </Box>
  );
};
