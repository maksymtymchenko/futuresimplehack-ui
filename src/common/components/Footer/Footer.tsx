import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Grid, Link, styled, SvgIcon } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Typography from '@mui/material/Typography';

import DiaWhiteLogo from '../../static/images/diaWhileLogo.png';
import UkraineWhiteLogo from '../../static/images/UkraineWhiteLogo.png';

const StyledLink = styled(Link)({
  color: 'rgba(255, 255, 255, 1)\n'
});

export const Footer = () => {
  return (
    <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0, height: '88px', padding: '30px 80px' }}>
      <Grid container display='flex' justifyContent='space-between'>
        <Grid container display='flex' justifyContent='space-between'>
          <Grid item xs={6} spacing={3} container display='flex' alignItems='center'>
            <Grid item>
              <img src={UkraineWhiteLogo}/>
            </Grid>
            <Grid item>
              <img src={DiaWhiteLogo}/>
            </Grid>
          </Grid>
          <Grid item xs={6} spacing={3} container justifyContent='end'>
            <Grid item>
              <StyledLink href='/public-offer' >
                <Typography variant='subtitle2'>Публічна оферта</Typography>
              </StyledLink>
            </Grid>
            <Grid item >
              <StyledLink href='/personal-data-processing'>
                <Typography variant='subtitle2'>Обробка персональних даних</Typography>
              </StyledLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};
