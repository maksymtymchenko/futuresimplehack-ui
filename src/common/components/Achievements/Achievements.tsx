import {Box, CircularProgress, Grid, Paper, styled} from "@mui/material";
import Typography from "@mui/material/Typography";

import storkLogo  from '../..//static/images/goose-menu-img 1.svg'
import {useHttpClient} from "../../hooks/useHttpClient";
import {API_URL} from "../../constants";
import {useEffect, useState} from "react";
import {PageLoader} from "../PageLoader";

const StyledCountGrid = styled(Grid)({
  border: '1px solid rgba(231, 238, 243, 1)',
  borderRadius: '8px' ,
  padding: 5,
  textAlign: 'center',
  width: '110px',
  height: '110px'
})

const StyledCount = styled(Grid)({
  backgroundColor: 'rgba(4, 198, 93, 0.2)', display: 'flex', justifyContent: 'space-between', padding: '8px', borderRadius: '8px'
})

export const Achievements =( ) => {
  const[achievements, setAchievements] = useState<Record<string, number>>({})
  const { loading, sendRequest } = useHttpClient();


  const fetchData = async () => {
    try {
      const data = await sendRequest({
        method: 'GET',
        url: `${ API_URL }/achievements`
      });

      setAchievements(data[0]);
    } catch (error){
      console.error(error);
    }
  };

  useEffect( () => {
    fetchData();
  }, []);

  if (loading){
    return   <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '330px', padding: '10px 30px'}}>
      <CircularProgress size={100}  />
    </Box>
  }


  const { averageMark,  finishedLessons, finishedProgram, lastMark, learntWords, spentHours} = achievements || {}


  return <Grid container  direction='column' sx={{ maxWidth: '330px', padding: '10px 30px', position: 'absolute', right: 0}}>
    <Grid item xs={1} p={3} display='flex' justifyContent='center' alignItems='center'>
      <Typography variant='h5'>Твої досягення</Typography>
    </Grid>

    <Grid container mb={3} spacing={2} display='flex' justifyContent='center' alignItems='center'>
      <Grid item xs={6} container justifyContent='center'>
        <StyledCountGrid item>
          <Typography variant='h2'>{finishedLessons}</Typography>
          <Typography variant='body2'>уроків пройдено</Typography>
        </StyledCountGrid>
      </Grid>
      <Grid item xs={6} container justifyContent='center'>
        <StyledCountGrid item>
          <Typography variant='h2'>{learntWords}</Typography>
          <Typography variant='body2'>слів вивчено</Typography>
        </StyledCountGrid>
      </Grid>
      <Grid item xs={6} container justifyContent='center'>
        <StyledCountGrid item>
          <Typography variant='h2'>{finishedProgram}%</Typography>
          <Typography variant='body2'>виконаної програми</Typography>
        </StyledCountGrid>
      </Grid>
      <Grid item xs={6} container justifyContent='center'>
        <StyledCountGrid item>
          <Typography variant='h2'>{spentHours}</Typography>
          <Typography variant='body2'>хвивилин на платформі</Typography>
        </StyledCountGrid>
      </Grid>
    </Grid>

    <Grid item mb={3} container display='flex'  direction='column'>
      <StyledCount item mb={1} >
        <Typography variant='body2'>Останній тест</Typography>
        <Typography variant='body2'>{lastMark} балів</Typography>
      </StyledCount>
      <StyledCount item>
        <Typography variant='body2'>Середний бал</Typography>
        <Typography variant='body2'>{averageMark} балів</Typography>
      </StyledCount>
    </Grid>

    <Grid item container display='flex' justifyContent='center' alignItems='center'>
      <Grid item mb={1}>
        <Paper sx={{ padding: '15px'}}>
          <Typography  gutterBottom variant='h5'>Хей, баді!</Typography>
          <Typography variant='body2'>Перший юніт вже чекає на тебе!</Typography>
        </Paper>
      </Grid>
      <Grid item>
        <img src={storkLogo}/>
      </Grid>
    </Grid>

  </Grid>
}
