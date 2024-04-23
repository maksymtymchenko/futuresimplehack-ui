import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

import FutureSimpleLogoMain from '../../static/images/FutureSimpleLogoMain.svg';
import { SettingsDialog } from '../SettingsDialog';


export const Header = () => {
  return <AppBar position='static' sx={{ padding: '10px 40px', background: 'linear-gradient(107.59deg, #CCB4C8 0%, #B0D8C5 50.24%, #72B7FB 100%)' }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <NavLink to={'/'}>
        <img src={FutureSimpleLogoMain} alt={'logo'} />
      </NavLink>
      <SettingsDialog/>
    </Toolbar>
  </AppBar>;
};
