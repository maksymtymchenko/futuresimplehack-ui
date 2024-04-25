import * as React from 'react';
import { Grid, Paper, Typography, TextField, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useMemo, useState} from 'react';
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

  const onEnterPresed = (e: any) => {
    if(e.key === 'Enter') {
      translateWord();
    }
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


    <Grid item container display='flex' direction='column'>
      <Grid item xs>
        {firstSectionFirst ? ( <Paper elevation={0} style={{ padding: 20, border: '2px solid #E7EEF3', height: '500px'}}>
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
        </Paper>):  ( <Paper elevation={0} style={{ padding: 20, border: '2px solid #E7EEF3', height: '500px'}}>
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
        </Paper>)}
      </Grid>

      <Grid item xs={8} style={{ textAlign: 'center' }}>
        <IconButton  style={{ backgroundColor: 'black', color: 'white', borderRadius: '50%', width: '50px', height: '50px' }}  color='primary' onClick={toggleSectionOrder}>
          <Grid container direction='column' alignItems='center'>
            <ArrowForwardIcon />
            <ArrowBackIcon/>
          </Grid>
        </IconButton>
      </Grid>


      <Grid item xs>
        {firstSectionFirst ? <Paper elevation={0} style={{padding: 20, border: '2px solid #E7EEF3', height: '500px'}}>
          <Typography variant='h3'>Ukrainian</Typography>
          <TextField
            variant='filled'
            fullWidth
            margin='normal'
            value={ukInputValue}
            InputProps={{
              disableUnderline: true,
              style: {backgroundColor: 'white'}
            }}
          />
        </Paper> : <Paper elevation={0} style={{ padding: 20, border: '2px solid #E7EEF3', height: '500px'}}>
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
        </Paper>}
      </Grid>
    </Grid>
  </Grid>

  // return (
  //   <Grid container spacing={2} alignItems='center' style={{  width: 750 }}>
  //     <Grid item xs={12}>
  //       <Typography variant='h2'>Перекладач</Typography>
  //     </Grid>
  //     {firstSectionFirst ? (
  //       <>
  //         <Grid item xs={12} sm={6} sx={{ maxWidth: 400 }}>
  //           <Paper elevation={0} style={{ padding: 20, border: '2px solid #E7EEF3', height: '300px', width: "100%" }}>
  //             <Typography variant='h3'>English</Typography>
  //             <TextField
  //               variant='filled'
  //               fullWidth
  //               margin='normal'
  //               onChange={handleSectionChange}
  //               onKeyPress={onEnterPresed}
  //               value={enInputValue}
  //               InputProps={{
  //                 disableUnderline: true,
  //                 style: { backgroundColor: 'white' }
  //               }}
  //             />
  //           </Paper>
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <Paper elevation={0} style={{ padding: 20, border: '2px solid #E7EEF3', height: '300px',width: "100%"}}>
  //             <Typography variant='h3'>Ukrainian</Typography>
  //             <TextField
  //               variant='filled'
  //               fullWidth
  //               margin='normal'
  //               value={ukInputValue}
  //               InputProps={{
  //                 disableUnderline: true,
  //                 style: { backgroundColor: 'white' }
  //               }}
  //             />
  //           </Paper>
  //         </Grid>
  //       </>
  //     ) : (
  //       <>
  //         <Grid item xs={12} sm={6}>
  //           <Paper elevation={0} style={{ padding: 20, border: '2px solid #E7EEF3', height: '300px', width: 250 }}>
  //             <Typography variant='h3'>Ukrainian</Typography>
  //             <TextField
  //               variant='filled'
  //               fullWidth
  //               margin='normal'
  //               InputProps={{
  //                 disableUnderline: true,
  //                 style: { backgroundColor: 'white' }
  //               }}
  //             />
  //           </Paper>
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <Paper elevation={0} style={{ padding: 20, border: '2px solid #E7EEF3', height: '300px', width: 250 }}>
  //             <Typography variant='h3'>English</Typography>
  //             <TextField
  //               variant='filled'
  //               fullWidth
  //               margin='normal'
  //               InputProps={{
  //                 disableUnderline: true,
  //                 style: { backgroundColor: 'white' }
  //               }}
  //             />
  //           </Paper>
  //         </Grid>
  //       </>
  //     )}
  //     <Grid item xs={11} style={{ textAlign: 'center' }}>
  //       <IconButton  style={{ backgroundColor: 'black', color: 'white', borderRadius: '50%', width: '50px', height: '50px' }}  color='primary' onClick={toggleSectionOrder}>
  //         <Grid container direction='column' alignItems='center'>
  //           <ArrowForwardIcon />
  //           <ArrowBackIcon/>
  //         </Grid>
  //       </IconButton>
  //     </Grid>
  //   </Grid>
  // );
};
