import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Grid, Link, styled, SvgIcon } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const StyledLink = styled(Link)({
  color: 'rgba(255, 255, 255, 1)\n'
});

export const Footer = () => {
  return (
    <AppBar position='fixed' color='secondary' sx={{ top: 'auto', bottom: 0, height: '88px', padding: '30px 80px' }}>
      <Grid container display='flex' justifyContent='space-between'>
        <Grid container display='flex' justifyContent='space-between'>
          <Grid item xs={6} spacing={3} container>
            <Grid item>
              <SvgIcon component={AccountBalanceIcon} viewBox='0 0 24 24' />
            </Grid>
            <Grid item >
              <SvgIcon component={AccountBalanceIcon} viewBox='0 0 24 24' />
            </Grid>
          </Grid>
          <Grid item xs={6} spacing={3} container justifyContent='end'>
            <Grid item>
              <StyledLink href='/public-offer' >Публічна оферта</StyledLink>
            </Grid>
            <Grid item >
              <StyledLink href='/personal-data-processing'>Обробка персональних даних</StyledLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};
