import VerticalMenu from '@totalizer/xmenu/VerticalMenu';
import { history, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import React, { useMemo } from 'react';

import './index.less';

const Sidebar = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();

  if (!sidebar) return null;

  const [mainOptions, groupOptions] = useMemo(() => {
    const options = sidebar.map((item) => {
      return {
        title: item.title,
        secondary: item.children.length,
        children: item.children.map((el) => ({
          title: el.title,
          link: el.link,
          onClick: () => {
            history.push(el.link);
          },
        })),
      };
    });

    if (options[0].title) return [[], options];
    if (options.length > 1)
      return [options[0].children, options.filter((el, i) => i !== 0)];
    return [options[0].children, []];
  }, [sidebar]);

  return (
    <div className="dumi-default-sidebar">
      {!!mainOptions.length && (
        <VerticalMenu
          options={mainOptions}
          isSelected={(el) => el.link === pathname}
        />
      )}
      {!!groupOptions.length && (
        <VerticalMenu
          options={groupOptions}
          isSelected={(el) => el.link === pathname}
        />
      )}
    </div>
  );
};

export default Sidebar;
