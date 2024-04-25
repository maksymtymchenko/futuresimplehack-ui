import { Grid, Icon, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { ProgramUnitItem } from './components/ProgramUnitItem';
import { unitsLessons} from "./constants";

export const ProgramUnit = () => {
  const { title, units } = unitsLessons
  return <Grid container direction='column' spacing={3}>
    <Grid item display='flex' gap={2} mt={3} mb={3}>
      <IconButton ><ArrowBackIosNewRoundedIcon /></IconButton>
      <Typography variant='h2'>{title}</Typography>
    </Grid>

    {units.map(({title, lessons, disabled}) => (
      <Grid item>
        <ProgramUnitItem title={title} lessons={lessons} disabled={disabled}/>
      </Grid>
    ))}
  </Grid>;
};
