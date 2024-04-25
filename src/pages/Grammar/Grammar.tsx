import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import { firstModuleUnits, secondModuleUnits } from './constants';
import { Card } from '../../common/Card';

export const Grammar = () => {
  return <Grid container direction='column' spacing={3}>
    <Grid item display='flex' gap={2} mb={2}>
      <Typography variant='h2'> Граматика: B1 Level</Typography>
    </Grid>

    <Grid item>
      <Card path='/grammar/module-1' disabled={false} title='Module 1: Nouns and articles' units={firstModuleUnits}/>
    </Grid>
    <Grid item>
      <Card path='/grammar/module-2' disabled={true} title='Module 2: Possessives, pronouns and quantifiers' units={secondModuleUnits}/>
    </Grid>
  </Grid>;
};