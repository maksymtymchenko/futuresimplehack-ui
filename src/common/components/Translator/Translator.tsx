import * as React from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, TextField, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';

export const Translator = () => {
  const [ firstSectionFirst, setFirstSectionFirst ] = React.useState<boolean>(true);
  const [ enInputValue, setEnInputValue ] = useState<string>('');
  const [ ukInputValue, setUkInputValue ] = useState<string>('');

  const toggleSectionOrder = () => {
    setFirstSectionFirst(prevState => !prevState);
  };

  const handleSectionChange = (e: any) => {
    const value = e.target.value;
    setEnInputValue(value);
  };

  const onEnterPresed = (e: any) => {
    if(e.key === 'Enter') {
      translateWord();
    }
  };

  const generateApiUrl = (endpoint: string) => `https://futuresimplehack-api.onrender.com/api/${ endpoint }`;

  const translateWord = async () => {
    try {
      const response = await axios.post(generateApiUrl('dictionaries'), {
        originalWord: enInputValue
      });

      if(!response || !response.data) throw new Error('No data for this word');
      const { translatedWord } = response.data;

      setUkInputValue(translatedWord);
    } catch (e) {
      console.error('Error while translating word', e);
    }
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={12}>
        <Typography variant='h2'>Перекладач</Typography>
      </Grid>
      {firstSectionFirst ? (
        <>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} style={{ padding: 20, border: '1px solid #ccc', height: '300px' }}>
              <Typography variant='h3'>English</Typography>
              <TextField
                variant='filled'
                fullWidth
                margin='normal'
                onChange={handleSectionChange}
                onKeyPress={onEnterPresed}
                value={enInputValue}
                InputProps={{
                  disableUnderline: true,
                  style: { backgroundColor: 'white' }
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} style={{ padding: 20, border: '1px solid #ccc', height: '300px' }}>
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
        </>
      ) : (
        <>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} style={{ padding: 20, border: '1px solid #ccc', height: '300px' }}>
              <Typography variant='h3'>Ukrainian</Typography>
              <TextField
                variant='filled'
                fullWidth
                margin='normal'
                InputProps={{
                  disableUnderline: true,
                  style: { backgroundColor: 'white' }
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} style={{ padding: 20, border: '1px solid #ccc', height: '300px' }}>
              <Typography variant='h3'>English</Typography>
              <TextField
                variant='filled'
                fullWidth
                margin='normal'
                InputProps={{
                  disableUnderline: true,
                  style: { backgroundColor: 'white' }
                }}
              />
            </Paper>
          </Grid>
        </>
      )}
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <IconButton  style={{ backgroundColor: 'black', color: 'white', borderRadius: '50%', width: '50px', height: '50px' }}  color='primary' onClick={toggleSectionOrder}>
          <Grid container direction='column' alignItems='center'>
            <ArrowForwardIcon />
            <ArrowBackIcon/>
          </Grid>
        </IconButton>
      </Grid>
    </Grid>
  );
};
