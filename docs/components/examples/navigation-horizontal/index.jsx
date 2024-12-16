import React from 'react';

import config from '../navigation-config';

import XNavigation from '@totalizer/xcomponents/XNavigation';

export default () => {
  const [path, setPath] = React.useState('/Account');

  return (
    <XNavigation
      variant="horizontal"
      options={config}
      isSelected={(item) => item.path === path}
      onClick={(item) => {
        if (item.path) setPath(item.path);
      }}
    />
  );
};
