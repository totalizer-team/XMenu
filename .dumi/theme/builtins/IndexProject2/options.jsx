import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import SettingsIcon from '@mui/icons-material/Settings';

import ApiIcon from '@mui/icons-material/Api';
import ContrastIcon from '@mui/icons-material/Contrast';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import MessageIcon from '@mui/icons-material/Message';
export default [
  {
    avatar: 'https://mui.com/static/images/avatar/2.jpg',
    title: 'My Name',
    info: 'Id: 301841',
  },
  {
    c: 'Divider',
  },
  {
    c: 'Title',
    title: 'Profile',
  },
  {
    icon: <AccountCircleIcon />,
    title: 'Profile',
    secondary: '⇧⌘P',
  },
  {
    icon: <CreditCardIcon />,
    title: 'Billing',
    secondary: '⌘B',
  },
  {
    icon: <MessageIcon />,
    title: 'Message',
    label: '+2',
    labelColor: 'primary',
  },
  {
    icon: <EmailIcon />,
    title: 'Email',
    label: '24',
  },
  {
    c: 'Divider',
  },
  {
    c: 'Title',
    title: 'Setting',
  },
  {
    icon: <SettingsIcon />,
    title: 'Settings',
    children: [
      {
        icon: <KeyIcon />,
        title: 'Keys',
      },
      {
        icon: <ContrastIcon />,
        title: 'Theme',
        children: [
          {
            title: 'Color',
          },
          {
            title: 'Icon',
          },
          {
            title: 'Window',
          },
        ],
      },
      {
        icon: <ApiIcon />,
        title: 'API',
        disabled: true,
      },
    ],
  },
  {
    icon: <Diversity3Icon />,
    title: 'Team',
    info: 'VIP Only',
    children: [
      {
        title: 'Create',
      },
      {
        title: 'Invite users',
      },
      {
        title: 'Support',
      },
    ],
  },
  {
    icon: <DoNotTouchIcon />,
    title: 'Disabled',
    disabled: true,
  },
];
