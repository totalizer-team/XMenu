import ArticleIcon from '@mui/icons-material/Article';
import RadioButtonCheckedSharpIcon from '@mui/icons-material/RadioButtonCheckedSharp';
import { VerticalMenu } from '@totalizer/xmenu';
import { history, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import React, { useMemo } from 'react';
import './index.less';

const Sidebar = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();

  if (!sidebar) return null;

  const [mainOptions, groupOptions] = useMemo(() => {
    const main = [];
    const groups = [];

    sidebar.forEach((item) => {
      if (item.title) {
        const group = [];
        group.push({
          c: 'Title',
          title: item.title,
        });
        item.children.forEach((el) =>
          group.push({
            icon: (
              <RadioButtonCheckedSharpIcon
                sx={{ ml: 0.5, mr: 0.5, fontSize: '10px !important' }}
              />
            ),
            title: el.title,
            link: el.link,
            onClick: () => {
              history.push(el.link);
            },
          }),
        );
        groups.push(group);
      } else {
        item.children.forEach((el) =>
          main.push({
            icon: <ArticleIcon />,
            title: el.title,
            link: el.link,
            onClick: () => {
              history.push(el.link);
            },
          }),
        );
      }
    });

    return [main, groups];
  }, [sidebar]);

  return (
    <div className="dumi-default-sidebar">
      {!!mainOptions.length && (
        <VerticalMenu
          options={mainOptions}
          isSelected={(el) => el.link === pathname}
        />
      )}
      {!!groupOptions.length &&
        groupOptions.map((group, i) => (
          <VerticalMenu
            key={group[0].title}
            options={group}
            isSelected={(el) => el.link === pathname}
          />
        ))}
    </div>
  );
};

export default Sidebar;
