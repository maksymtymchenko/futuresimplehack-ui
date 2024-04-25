import Typography from '@mui/material/Typography';
import { Grid, Paper, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)<{disabled?: boolean}>(({ disabled }) => ({
  padding: '20px',
  border: '2px solid',
  borderColor: disabled ? 'rgba(196,196,196,0.65)' : 'rgba(4, 198, 93, 1)',
  color: disabled ? 'rgba(196,196,196,0.65)': 'black'
}));

interface ICardProps {
    disabled?: boolean;
    path: string;
    title: string;
    units: string[];
}

export const Card = (props: ICardProps) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(props.path);

  return (
    <StyledPaper onClick={handleClick} disabled={props.disabled}>
      <Typography gutterBottom variant='h4'>{props.title}</Typography>
      <Grid container direction='column' spacing={1} mt={2}>
        {props.units.map((unit: string, index: number) => (
          <Grid item>
            <Typography key={index} variant='body1'>{unit}</Typography>
          </Grid>
        ))}
      </Grid>
    </StyledPaper>
  );
};