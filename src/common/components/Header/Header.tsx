import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

import FutureSimpleLogoMain from '../../static/images/FutureSimpleLogoMain.svg';
import { SettingsDialog } from '../SettingsDialog';


export const Header = () => {
  return <AppBar position='static' sx={{ padding: '10px 40px', zIndex:'10', boxShadow: 'none', background: 'linear-gradient(107.59deg, #D1E2EF 0%, #B6D8ED 50.24%, #DEEFD7 100%)' }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <NavLink to={'/'}>
        <img src={FutureSimpleLogoMain} style={{ width: '150px' }} alt={'logo'} />
      </NavLink>
      <SettingsDialog/>
    </Toolbar>
  </AppBar>;
};
