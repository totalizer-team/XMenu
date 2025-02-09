import React from 'react';

import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import BookIcon from '@mui/icons-material/Book';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import DnsIcon from '@mui/icons-material/Dns';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import ExploreIcon from '@mui/icons-material/Explore';
import InboxIcon from '@mui/icons-material/Inbox';
import InputIcon from '@mui/icons-material/Input';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { HorizontalMenu } from '@totalizer/xmenu';
import { history, useLocation, useNavData } from 'dumi';

const ICONS = {
  guide: <ExploreIcon />,
  components: <CategoryRoundedIcon />,
  pro: <MilitaryTechRoundedIcon />,
  blog: <BookIcon />,
  pricing: <AttachMoneyRoundedIcon />,
  examples: <DnsIcon />,
  playground: <SportsEsportsIcon />,
  input: <InputIcon />,
  enhancement: <DynamicFormIcon />,
  form: <InboxIcon />,
};

export default ({ data }) => {
  const nav = useNavData();
  const { pathname } = useLocation();

  const config = nav.map((item) => {
    const icon = ICONS[item.title.toLowerCase()] || <AssignmentIcon />;
    return {
      icon,
      title: item.title,
      path: item.activePath,
      link: item.link,
      children: item.children
        ? item.children.map((child) => {
            return {
              // icon: <GpsFixedIcon />,
              title: child.title,
              path: child.activePath,
              link: child.link,
            };
          })
        : undefined,
    };
  });

  return (
    <HorizontalMenu
      variant="horizontal"
      options={config}
      isSelected={(item) => pathname.startsWith(item.path)}
      onSelect={(item) => {
        if (item.link) history.push(item.link);
      }}
    />
  );
};
