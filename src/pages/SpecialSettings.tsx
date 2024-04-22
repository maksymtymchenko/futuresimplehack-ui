import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Button, Checkbox, Grid, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)({
  padding: '10px 30px',
  borderRadius: 40
});

export const SpecialSettings = ( ) => {
  const navigate = useNavigate();
  const [ isSelect, setIsSelect ] = useState(false);
  const [ question, setQuestion ] = useState<{sentence?: string, options?: any[]}>({});

  const fetchData = async () => {
    try {
      const response = await axios.get('https://futuresimplehack-api.onrender.com/api/sentences/6626163c31d714ab051d2f3e');

      if (response.status){
        setQuestion(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveSpecial = () => {
    setIsSelect(true);
  };

  const handleSave = () => {
    localStorage.setItem('hackaton:auth', JSON.stringify({ isDiaAuth: true , isInstallSpecialSettings: true, isHasLevel: false }));

    navigate('/check-level');
  };


  return (
    isSelect ? (
      <Grid container direction='column' spacing={3} p={20}>
        <Grid item display='flex' justifyContent='center'>
          <Typography variant='h2'>Тепер система адаптована під ваші потреби!</Typography>
        </Grid>
        <Grid item  display='flex' justifyContent='center'>
          <Typography variant='h4' sx={{ textAlign: 'center' }}>Наступний крок - визначення вашого рівня мови. Це допоможе нам підібрати вам оптиамальну програму навчання.</Typography>
        </Grid>
        <Grid item display='flex' justifyContent='center'>
          <Typography variant='h4'>Якщо готові, тисніть Далі. Тест займе не більше 7 хвилин.</Typography>
        </Grid>
        <Grid item xs display='flex' justifyContent='center'>
          <StyledButton onClick={handleSave} variant='contained' endIcon={<ArrowForwardIosIcon/>}>Далі</StyledButton>
        </Grid>
      </Grid>
    ) : (
      <Grid container spacing={3} p={5}>
        <Grid item display='flex' justifyContent='center'>
          <Box p={5} sx={{ maxWidth: '60%', textAlign: 'center' }}>
            <Typography variant='h4'>{question?.sentence}</Typography>
          </Box>
        </Grid>
        <Grid item container spacing={2} display='flex' justifyContent='center'>
          {question?.options?.map(item => (
            <Grid item xs={6} key={item.id}>
              <Box sx={{ border: '1px solid rgba(231, 238, 243, 1)', display: 'flex', alignItems: 'center', padding: 2, m: 1 }}>
                <Checkbox sx={{ borderRadius: '50%' }}/>
                <Typography>{item.option}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid item xs display='flex' justifyContent='flex-end'>
          <StyledButton onClick={handleSaveSpecial} variant='contained' endIcon={<ArrowForwardIosIcon/>}>Зберегти</StyledButton>
        </Grid>
      </Grid>
    )
  );
};



