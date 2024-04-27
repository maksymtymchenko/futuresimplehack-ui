import * as React from 'react';
import { Grid, Paper, Typography, TextField, IconButton, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMemo, useState } from 'react';
import { API_URL } from '../../common/constants';
import { useHttpClient } from '../../common/hooks/useHttpClient';

export const Translator = () => {
  const [ firstSectionFirst, setFirstSectionFirst ] = useState<boolean>(true);
  const [ enInputValue, setEnInputValue ] = useState<string>('');
  const [ ukInputValue, setUkInputValue ] = useState<string>('');

  const { sendRequest } = useHttpClient();


  const toggleSectionOrder = () => {
    setFirstSectionFirst(prevState => !prevState);
  };

  const handleSectionChange = (e: any) => {
    const value = e.target.value;
    setEnInputValue(value);
  };

  const translateWord = async () => {
    try {
      const response = await sendRequest({
        method: 'POST',
        url: `${ API_URL }/dictionaries`,
        data: {
          originalWord: enInputValue
        }
      });

      if(!response) throw new Error('No data for this word');

      const { translatedWord } = response;

      setUkInputValue(translatedWord);
    } catch (e) {
      console.error('Error while translating word', e);
    }
  };



  return <Grid container>
    <Grid item mt={3} xs={12} mb={3}>
      <Typography variant='h2'>Перекладач</Typography>
    </Grid>


    <Grid item container display='flex'>
      <Grid item xs={5} style={{ width: '400px' }}>
        <Paper elevation={0} style={{ padding: 20, border: '2px solid #E7EEF3', height: '500px', width: '350px' }}>
          <Typography variant='h3'>English</Typography>
          <TextField
            variant='filled'
            fullWidth
            margin='normal'
            onChange={handleSectionChange}
            value={enInputValue}
            InputProps={{
              disableUnderline: true,
              style: { backgroundColor: 'white' }
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={2} style={{ textAlign: 'center' }} pt={11}>
        <Button variant='outlined' sx={{ borderRadius: '8px', p: 2 }} onClick={translateWord} endIcon={<ArrowForwardIcon />}>
          <Typography  variant='body2' >Перекласти</Typography>
        </Button>
      </Grid>


      <Grid item xs={5} >
        <Paper elevation={0} style={{ padding: 20, border: '2px solid #E7EEF3', height: '500px', width: '350px', marginLeft: 60 }}>
          <Typography variant='h3'>Ukrainian</Typography>
          <TextField
            variant='filled'
            fullWidth
            margin='normal'
            value={ukInputValue}
            InputProps={{
              disableUnderline: true,
              style: { backgroundColor: 'white' }
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  </Grid>;
};
