import Typography from '@mui/material/Typography';
import { Grid, IconButton, Paper, styled } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ProgramItem } from './components/ProgramItem';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { ProgramUnitItem } from './components/ProgramUnitItem';

const StyledPaper = styled(Paper)({
  padding: '20px',
  margin: '30px 0px'
});

export const Program = () => {
  return <Grid container direction='column' spacing={3}>
    <Grid item display='flex' gap={2} mb={2}>
      <Typography variant='h2'> Програма: B1 Level</Typography>
    </Grid>

    <Grid item>
      <ProgramItem disabled={false}/>
    </Grid>
    <Grid item>
      <ProgramItem disabled={true}/>
    </Grid>
    <Grid item>
      <ProgramItem disabled={true}/>
    </Grid>
  </Grid>;
};
