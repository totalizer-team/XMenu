import React from 'react';

import SidebarMenu from '@totalizer/xmenu/SidebarMenu';

import options from './options';

export default () => {
  const [title, setTitle] = React.useState('Keys');

  return (
    <SidebarMenu
      options={options}
      isSelected={(item) => item.title === title}
      onClick={(item) => {
        if (!item.children) setTitle(item.title);
      }}
    />
  );
};
