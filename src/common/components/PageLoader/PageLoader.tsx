import { Box, CircularProgress, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

export const PageLoader = () => {
  return ( <Grid container direction='column' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
    <Grid item>
      <CircularProgress size={100}  />
    </Grid>
    <Grid item>
      <Typography variant='h4'>Вибачте,сервер відпочивав і зараз швидко надасть вам потрібну інформацію</Typography>
    </Grid>
  </Grid>
  );
};
