import AnalyticsIcon from '@mui/icons-material/Analytics';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ContentPaste from '@mui/icons-material/ContentPaste';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BookIcon from '@mui/icons-material/Book';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import Settings from '@mui/icons-material/Settings';

export default [
  {
    icon: <AnalyticsIcon />,
    title: 'About',
    path: '/About',
    secondary: 'control + A',
  },
  {
    icon: <SupervisedUserCircleIcon />,
    title: 'User',
    children: [
      {
        icon: <AssignmentIndIcon />,
        title: 'Profile',
        secondary: '⌘P',
        path: '/Profile'
      },
      {
        icon: <CreditCardIcon />,
        title: 'Account',
        secondary: '⌘A',
        path: '/Account'
      },
    ],
  },
  {
    icon: <BookIcon />,
    title: 'Blog',
    info: 'Description',
    label: '+2',
    labelColor: 'primary',
    children: [
      {
        title: 'Create',
        label: '1',
        labelColor: 'error',
        path: '/Create',
      },
      {
        title: 'List',
        label: '20',
        path: '/List'
      },
    ],
  },
  {
    icon: <DoNotTouchIcon />,
    title: 'Disabled',
    disabled: true,
  },
];
