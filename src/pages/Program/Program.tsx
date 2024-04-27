import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { ProgramItem } from './components/ProgramItem';
import { lessons } from './constants';


export const Program = () => {
  return <Grid container direction='column' spacing={3}>
    <Grid item display='flex' gap={2} mb={3} mt={3}>
      <Typography variant='h2'>Програма: B1 Level</Typography>
    </Grid>

    {lessons.map(({ title, lessons, disabled })=> (
      <Grid item>
        <ProgramItem disabled={disabled} lessons={lessons} title={title}/>
      </Grid>
    ))}
  </Grid>;
};
