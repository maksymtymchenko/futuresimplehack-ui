import { useNavigate } from 'react-router-dom';

import { Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { firstUnitTopics, secondUnitTopics } from './constants';
import { Card } from '../../common/Card';

export const GrammarModule = () => {
  const navigate = useNavigate();

  const goBack = () => navigate('/grammar');
  const handleClick = () => navigate('/grammar/module-1/lesson-1');

  return <Grid container direction='column' spacing={3}>
    <Grid item display='flex' gap={2} mb={2}>
      <IconButton onClick={goBack}><ArrowBackIosNewRoundedIcon /></IconButton>
      <Typography variant='h2'>Module 1: Nouns and articles</Typography>
    </Grid>

    <Grid onClick={handleClick} item>
      <Card path='/grammar/module-1' title='Unit 1: Nouns' units={firstUnitTopics}/>
    </Grid>
    <Grid item>
      <Card disabled path='/grammar/module-1' title='Unit 2: Articles a/an, the, no article' units={secondUnitTopics}/>
    </Grid>
  </Grid>;
};
