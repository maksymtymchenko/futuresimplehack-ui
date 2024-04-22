import { Box, Button, Grid, Link, styled } from '@mui/material';
import { SettingsDialog } from '../../common/components/SettingsDialog';

import logo from '../../common/static/images/futurePerfectLogo.png';
import Typography from '@mui/material/Typography';
import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';


const StyledLink = styled(Link)({
  color: 'rgba(0, 0, 0, 1)\n',
  textDecoration: 'none'
});

const StyledButton = styled(Button)({
  borderRadius: '40px',
  padding: '16px 30px'
});

export const Auth = () => {
  const navigate = useNavigate();

  const handleAuth = () => {
    localStorage.setItem('hackaton:auth', JSON.stringify({ isDiaAuth: true , isInstallSpecialSettings: false, isHasLevel: false }));

    navigate('/special-settings');
  };


  return <Box sx={{ display: 'flex' }}>
    <Box sx={{ width: '50%', height: '100vh', background: 'radial-gradient(129.89% 100% at 100% 100%, #DEEFD7 0%, #B6D8ED 49.82%, #D1E2EF 100%)' }}>
      <Grid container spacing={18} direction='column' p={5}>
        <Grid item >
          <SettingsDialog/>
        </Grid>
        <Grid item display='flex' justifyContent='center'>
          <img src={logo} style={{ width: '300px' }} />
        </Grid>
        <Grid item display='flex' justifyContent='center'>
          <Typography variant='h5' sx={{ width: '500px', textAlign: 'center' }}>Мовна програма втілюється за принципом lifelong learning — освіта протягом усього життя, доступна всім українцям та українкам.</Typography>
        </Grid>
        <Grid item spacing={3} container sx={{ position: 'absolute', bottom: 50 }}>
          <Grid item>
            <StyledLink href='/public-offer' >Публічна оферта</StyledLink>
          </Grid>
          <Grid item >
            <StyledLink href='/personal-data-processing'>Обробка персональних даних</StyledLink>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ width: '50%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container direction='column' spacing={3} >
        <Grid item display='flex' justifyContent='center'>
          <img src={logo} style={{ width: '300px' }} />
        </Grid>
        <Grid item display='flex' justifyContent='center'>
          <Typography variant='h5'>Авторизуйтесь для входу в кабінет</Typography>
        </Grid>
        <Grid item display='flex' justifyContent='center'>
          <StyledButton variant='contained' color='primary' onClick={handleAuth} endIcon={<ArrowForwardIosIcon/>}>Авторизуватись</StyledButton>
        </Grid>
      </Grid>
    </Box>
  </Box>;
};
