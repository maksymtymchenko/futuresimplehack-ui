import React, { useMemo, forwardRef, Ref } from 'react';
import { NavLink, useLocation, useMatch, useNavigate, useNavigation } from 'react-router-dom';
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
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const sidebarItem = [
  { title: 'Програма', route: '/program', Icon: InboxIcon },
  { title: 'Граматика', route: '/grammar', Icon: ModeIcon },
  { title: 'Перекладач', route: '/translator', Icon: TranslateIcon },
  { title: 'Словник', route: '/dictionary', Icon: TurnedInNotIcon },
  { title: 'Неправильні дієслова', route: '/irregular-verbs', Icon: ContentPasteRoundedIcon }
];


export const Sidebar = () => {
  const { pathname } = useLocation();
  // const { logOut } = useAuthLocalStorage(LOCALSTORAGE_AUTH_KEY);

  const navigate = useNavigate();
  const goHome = () => navigate('/auth');

  const logout = () => {
    localStorage.removeItem(LOCALSTORAGE_AUTH_KEY);
    goHome();

    // mock auth reloading
    window.location.reload();
  };

  const ListItemComponent = useMemo(() => {
    return forwardRef<HTMLAnchorElement, { to: string }>(({ to, ...linkProps }, ref) => (
      <NavLink
        to={to}
        style={{
          padding: '10px 10px 10px 40px',
          backgroundColor: pathname.startsWith(to)? 'rgba(0, 0, 0, 1)': 'transparent',
          color:   pathname.startsWith(to) ? 'white': 'rgba(0, 0, 0, 1)'
        }}
        ref={ref}
        {...linkProps}
      />
    ));
  }, [ pathname ]);

  return (
    <List sx={{ top: 76, position: 'fixed', width: '350px',height: '100vh',zIndex: 0, backgroundColor: 'rgba(231, 238, 243, 1)' }}>
      {sidebarItem.map(({ title, route, Icon }) => (
        <ListItem key={title} disablePadding>
          <ListItemButton component={ListItemComponent} to={route}>
            <ListItemIcon>
              <Icon  sx={{ color:  pathname.startsWith(route) ? 'white': 'rgba(0, 0, 0, 1)' }}/>
            </ListItemIcon>
            <ListItemText primary={title} />
            <ListItemIcon>
              <KeyboardArrowRightIcon  sx={{ color: pathname.startsWith(route)  ? 'white': 'rgba(0, 0, 0, 1)' }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
      <Button fullWidth onClick={logout} sx={{ padding: 2, position: 'absolute', bottom: 165 }} startIcon={<LogoutIcon />}>Вийти</Button>
    </List>
  );
};
