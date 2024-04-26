import { useNavigate } from 'react-router-dom';

import { Accordion, AccordionDetails, AccordionSummary, Grid, IconButton, styled, Typography } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { firstUnitTopics, matches, moduleUnitLessons, NOUNS, secondUnitTopics, tests } from './constants';
import { Card } from '../../common/Card';
import { Breadcrumb } from '../../common/components/Breadcrumb';
import { ProgramUnitItem } from './components/ProgramUnitItem';
import { ProgramItem } from './components/ProgramItem';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { QuestionComponent } from '../../common/components/QuestionComponent/QuestionComponent';
import { MatchWords } from '../../common/components/MatchWords/MatchWords';
import { VideoComponent } from '../../common/components/VideoComponent/VideoComponent';

const StyledAccordion = styled(Accordion)({
  backgroundColor: 'rgba(231, 238, 243, 0.5)',
  margin: '20px 0px',
  boxShadow: 'none',
  borderRadius: '8pxs',
  padding: '16px'
});

const breadcrumbItems = [
  { href: '/grammar', label: 'Граматика' },
  { href: '/grammar/module1', label: 'Модуль 1' }
];

export const GrammarModule = () => {
  const navigate = useNavigate();

  const { title, units } = moduleUnitLessons;

  const handleBack = () => navigate('/grammar');

  return <Grid container direction='column' spacing={3}>
    <Breadcrumb items={breadcrumbItems}/>
    <Grid item display='flex' gap={2} mt={1} mb={3}>
      <IconButton onClick={handleBack} ><ArrowBackIosNewRoundedIcon /></IconButton>
      <Typography variant='h2'>{title}</Typography>
    </Grid>

    <Grid container direction='column' spacing={3}>
      {units.map(({ title, lessons, disabled }) => (
        <Grid item>
          <ProgramItem title={title} lessons={lessons} disabled={disabled}/>
        </Grid>
      ))}
    </Grid>

    <Grid item>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} >
          <Typography variant='h4'>1. Choose the correct words</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {tests.map(({ title, answers }) =>  <QuestionComponent title={title} answers={answers}/>)}
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} >
          <Typography variant='h4'>2. Match sentences in each pair</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {matches.map(({ title, match }) =>  <MatchWords title={title} match={match}/> )}
        </AccordionDetails>
      </StyledAccordion>
    </Grid>
  </Grid>;
};
