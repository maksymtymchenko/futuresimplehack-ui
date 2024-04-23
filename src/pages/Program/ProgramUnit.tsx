import { Grid, Icon, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { ProgramUnitItem } from './components/ProgramUnitItem';

export const ProgramUnit = () => {
  return <Grid container direction='column' spacing={3}>
    <Grid item display='flex' gap={2} mb={4}>
      <IconButton ><ArrowBackIosNewRoundedIcon /></IconButton>
      <Typography variant='h2'>Unit 1: Introduction to B1 Level</Typography>
    </Grid>

    <Grid item>
      <ProgramUnitItem disabled={false}/>
    </Grid>
    <Grid item>
      <ProgramUnitItem disabled={true}/>
    </Grid>
  </Grid>;
};
