import { Button, Grid, Link, styled } from '@mui/material';

import FutureSimpleLogoMain from './../common/static/images/FutureSimpleLogoMain.svg';
import SimpleLogo from './../common/static/images/SimpleLogo.png';
import DiaBlackLogo from './../common/static/images/DiaBlackLogo.png';
import Typography from '@mui/material/Typography';
import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { SettingsDialog } from '../common/components/SettingsDialog';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../common/components/AuthProvider/AuthProvider';


const StyledLink = styled(Link)({
  color: 'rgba(0, 0, 0, 1)',
  textDecoration: 'none'
});

const StyledButton = styled(Button)({
  borderRadius: '40px',
  padding: '16px 30px'
});

export const Auth = () => {
  const { setToStorage } = useAuth();

  const navigate = useNavigate();

  // const goBack = () => navigate('/special-settings');

  const handleAuth = () => {
    setToStorage({ isAuth: true, isInstallSpecialSettings: false, isHasLevel: false });
    // goBack();
    // // mock auth reloading
    // window.location.reload();
  };


  return  (<Grid container>
    <Grid item container direction='column' position='relative'  xs={6} sx={{ height: '100vh',background: 'radial-gradient(129.89% 100% at 100% 100%, #DEEFD7 0%, #B6D8ED 49.82%, #D1E2EF 100%)' }}>
      <Grid item p={3} mb={24}>
        <SettingsDialog />
      </Grid>
      <Grid item display='flex' justifyContent='center' mb={12}>
        <img src={FutureSimpleLogoMain} style={{ width: '300px' }} />
      </Grid>
      <Grid item display='flex' justifyContent='center'>
        <Typography variant='h5' sx={{ maxWidth: '500px', textAlign: 'center' }}>Мовна програма втілюється за принципом lifelong learning — освіта протягом усього життя, доступна всім українцям та українкам.</Typography>
      </Grid>
      <Grid item p={5}  spacing={3} container position='absolute' bottom={0} display='flex' flexWrap='wrap' >
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
    <Grid item xs={6} sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container direction='column' spacing={3} >
        <Grid item display='flex' justifyContent='center' gap={3}>
          <img src={SimpleLogo} style={{ width: '120px', height:' 120px' }}/>
          <img src={DiaBlackLogo} style={{ width: '120px', height:' 120px' }}/>
        </Grid>
        <Grid item display='flex' justifyContent='center'>
          <Typography variant='h5'>Авторизуйтесь для входу в кабінет</Typography>
        </Grid>
        <Grid item display='flex' justifyContent='center'>
          <StyledButton variant='contained' color='primary' onClick={handleAuth} endIcon={<ArrowForwardIosIcon/>}>Авторизуватись</StyledButton>
        </Grid>
      </Grid>
    </Grid>
  </Grid>);

};
