import React, { useMemo, forwardRef, Ref } from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ModeIcon from '@mui/icons-material/Mode';
import TranslateIcon from '@mui/icons-material/Translate';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import { useAuthLocalStorage } from '../../hooks/useAuthLocalStorage';
import { LOCALSTORAGE_AUTH_KEY } from '../../constants';

export const sidebarItem = [
  { title: 'Програма', route: '/program', Icon: InboxIcon },
  { title: 'Граматика', route: '/grammar', Icon: ModeIcon },
  { title: 'Перекладач', route: '/translator', Icon: TranslateIcon },
  { title: 'Словник', route: '/dictionary', Icon: TurnedInNotIcon },
  { title: 'Неправильні дієслова', route: '/irregular-verbs', Icon: ContentPasteRoundedIcon }
];


export const Sidebar = () => {
  const { authStore } = useAuthLocalStorage(LOCALSTORAGE_AUTH_KEY);


  const ListItemComponent = useMemo(() => {
    return forwardRef<HTMLAnchorElement, { to: string }>(({ to, ...linkProps }, ref) => (
      <NavLink
        to={to}
        ref={ref}
        {...linkProps}
        style={{ padding: '10px 10px 10px 40px' }}
      />
    ));
  }, []);

  return (
    <List sx={{ width: '400px',height: '87vh',zIndex: 0, backgroundColor: 'rgba(231, 238, 243, 1)' }}>
      {sidebarItem.map(({ title, route, Icon }) => (
        <ListItem key={title} disablePadding>
          <ListItemButton component={ListItemComponent} to={route}>
            <ListItemIcon>
              <Icon  />
            </ListItemIcon>
            <ListItemText primary={title} />
            <ListItemIcon>
              <KeyboardArrowRightIcon  />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
