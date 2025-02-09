import React from 'react';

import { SidebarMenu } from '@totalizer/xmenu';

import options from './options';

export default () => {
  const [title, setTitle] = React.useState('Keys');

  return (
    <SidebarMenu
      options={options}
      isSelected={(item) => item.title === title}
      onSelect={(item) => {
        setTitle(item.title);
      }}
    />
  );
};
