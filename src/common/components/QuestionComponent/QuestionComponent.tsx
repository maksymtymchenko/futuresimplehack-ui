import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { AnswerItem } from '../UI/AnswerItem';

interface IQuestionComponent {
  title: string,
  answers:  {title: string, isCorrect: boolean}[]
}

export const QuestionComponent = ({ title, answers }: IQuestionComponent) => {

  return <Grid container spacing={2} mb={2}>
    <Grid xs item>
      <Typography variant='body2'>{title}</Typography>
    </Grid>
    <Grid item xs={12} container>
      {answers.map( ({ title, isCorrect }) =>  <Grid xs={6} item><AnswerItem title={title} isCorrect={isCorrect}/></Grid>)}
    </Grid>
  </Grid>;
};
