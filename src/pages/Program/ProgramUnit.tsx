import { Grid, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { ProgramUnitItem } from './components/ProgramUnitItem';
import { unitsLessons } from './constants';
import { Breadcrumb } from '../../common/components/Breadcrumb';


const breadcrumbItems = [
  { href: '/program', label: 'Програма' },
  { href: '/program/unit1', label: 'Unit 1' }
];

export const ProgramUnit = () => {
  const { title, units } = unitsLessons;

  const handleBack = () => window.history.back();

  return <Grid container direction='column'>
    <Breadcrumb items={breadcrumbItems}/>
    <Grid item display='flex' gap={2} mt={1} mb={3}>
      <IconButton onClick={handleBack} ><ArrowBackIosNewRoundedIcon /></IconButton>
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
