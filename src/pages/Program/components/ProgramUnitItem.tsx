import Typography from '@mui/material/Typography';
import { Grid, Paper, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)<{disabled?: boolean}>(({ disabled }) => ({
  padding: '20px',
  border: '2px solid',
  borderColor: disabled? 'rgba(196,196,196,0.65)' : 'rgba(4, 198, 93, 1)',
  color: disabled? 'rgba(196,196,196,0.65)': 'black'
}));

export const ProgramUnitItem = ({ disabled }: { disabled: boolean}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/program/unit1/lesson1');
  };

  return<StyledPaper onClick={handleClick} disabled={disabled}>
    <Typography gutterBottom variant='h4'>Lesson 1: Me and my language</Typography>
    <Grid container direction='column' spacing={1} mt={2}>
      <Grid item>
        <Typography variant='body2'>Reading: Bilinguals exotic birds or everyday people?</Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>Vocabulary</Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>Grammar: Question forms</Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>Writing: Emails of introduction</Typography>
      </Grid>
    </Grid>
  </StyledPaper>;
};
