import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import { moduleLessons } from './constants';
import { ProgramUnitItem } from './components/ProgramUnitItem';

export const Grammar = () => {

  const { title, units } = moduleLessons;
  return <Grid container direction='column' spacing={3}>
    <Grid item display='flex' gap={2} mb={3} mt={3}>
      <Typography variant='h2'>{title}</Typography>
    </Grid>

    <Grid container direction='column' spacing={3}>
      {units.map(({ title, lessons, disabled }) => (
        <Grid item>
          <ProgramUnitItem title={title} lessons={lessons} disabled={disabled}/>
        </Grid>
      ))}
    </Grid>
  </Grid>;
};
