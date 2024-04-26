import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  IconButton,
  Paper,
  styled, Table, TableBody, TableCell,
  TableContainer, TableRow
} from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Typography from '@mui/material/Typography';

import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { READING, terminology, questions, grammarRows1, SPANISH_CLASS_EMAIL, NEW_DIRECTOR_EMAIL } from './constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Breadcrumb } from '../../common/components/Breadcrumb';

const StyledAccordion = styled(Accordion)({
  backgroundColor: 'rgba(231, 238, 243, 0.5)',
  margin: '20px 0px',
  boxShadow: 'none',
  borderRadius: '8pxs',
  padding: '16px'
});

const StyledListItemText = styled(ListItemText)({
  display: 'flex',
  alignItems: 'center'
});

const breadcrumbItems = [
  { href: '/program', label: 'Програма' },
  { href: '/program/unit1', label: 'Unit 1' },
  { href: '/program/unit1/lesson1', label: 'Lesson 1' }
];

export const ProgramLesson = () => {
  const handleBack = () => window.history.back();


  return <Grid container direction='column'>
    <Breadcrumb items={breadcrumbItems}/>
    <Grid item display='flex' gap={2} mb={3} mt={1}>
      <IconButton onClick={handleBack}><ArrowBackIosNewRoundedIcon /></IconButton>
      <Typography variant='h2'>Lesson 1: Me and my language</Typography>
    </Grid>

    <Grid item>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} >
          <Typography variant='h4'>Reading: Bilinguals exotic birds or everyday people?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            {READING}
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} >
          <Typography variant='h4'>Vocabulary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ mb: 3 }}>
            {terminology.map(({ term, definition }, index) => (
              <ListItem key={index}>
                <StyledListItemText
                  primary={<Typography sx={{ mr: '5px' }} variant='subtitle2' fontWeight='bold'>{term} -</Typography>}
                  secondary={<Typography variant='body2' >{definition}</Typography>}
                />
              </ListItem>
            ))}
          </List>

          <Typography variant='h5'>Answer the questions</Typography>
          <List>
            {questions.map((question, index) => (
              <ListItem key={index}>
                <StyledListItemText
                  primary={<Typography variant='body2'>{index+ 1}.{question}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} >
          <Typography variant='h4'>Grammar: Question forms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item container mt={1} mb={3} direction='column'>
              <Grid item>
                <Typography gutterBottom mb={2} variant='h5'> Object questions </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant='body1'>Object questions use the word order: question word + auxiliary verb + subject + infinitive</Typography>
              </Grid>
              <Grid item mt={2} mb={2} >
                <TableContainer component={Paper}>
                  <Table>
                    <TableBody>
                      {grammarRows1.map((row, rowIndex) => (
                        <TableRow key={rowIndex} sx={{ backgroundColor: rowIndex === 0 ? 'rgba(231, 238, 243, 1)' : 'transparent' }}>
                          {row.map((cell, cellIndex) => (
                            <TableCell sx={{ border: '1px solid grey' }} key={cellIndex}>{cell}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} >
          <Typography variant='h4'>Writing: Emails of introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item mb={3}>
              <Typography variant='h5'>
                  Read the emails. Why are the people writing? Which sentences to tell us?
              </Typography>
            </Grid>

            <Grid item mb={3}>
              <Typography variant='body2'>1</Typography>
              <Typography variant='body2'>{SPANISH_CLASS_EMAIL}</Typography>
            </Grid>

            <Grid item >
              <Typography variant='body2'>2</Typography>
              <Typography variant='body2'>{NEW_DIRECTOR_EMAIL}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} >
          <Typography variant='h4'>Practice exercises</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </Grid>

  </Grid>;
};
