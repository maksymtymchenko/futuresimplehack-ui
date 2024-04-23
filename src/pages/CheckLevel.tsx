import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import { SyntheticEvent, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Button, Checkbox, Grid, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledButton = styled(Button)({
  padding: '10px 30px',
  borderRadius: 40
});

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${ index }`}
      aria-labelledby={`simple-tab-${ index }`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${ index }`,
    'aria-controls': `simple-tabpanel-${ index }`
  };
}

export const CheckLevel =() => {
  const navigate = useNavigate();
  const [ value, setValue ] = useState(0);
  const [ isHasResult, setIsHasResult ] = useState(false);
  const [ question, setQuestion ] = useState<{id: string,sentence?: string, options?: any[]}[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://futuresimplehack-api.onrender.com/api/sentences');

      if (response.status){
        setQuestion(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect( () => {
    fetchData();

    if(value === 2){
      setIsHasResult(true);
    }
  }, []);

  useEffect(() => {
    if(value === 2){
      setIsHasResult(true);
    }
  }, [ value ]);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSave = () => {
    localStorage.setItem('hackaton:auth', JSON.stringify({ isDiaAuth: true , isInstallSpecialSettings: true, isHasLevel: true }));

    navigate('/program');
  };


  if (isHasResult){
    return (
      <Grid container direction='column' alignItems='center' pt={12} >
        <Grid item mb={2}>
          <PieChart
            colors={[ '#007EFF', '#AA2B8E', '#FFDB4D', '#89DB33', '#FF3800' ]}
            series={[
              {
                data: [
                  { id: 0, value: 25, label: 'Grammar' },
                  { id: 1, value: 25, label: 'Reading' },
                  { id: 2, value: 25, label: 'Listening' },
                  { id: 3, value: 12, label: 'Writing' },
                  { id: 4, value: 13, label: 'Speaking' }
                ]
              }
            ]}
            width={500}
            height={300}
          />
        </Grid>
        <Grid item mb={2}>
          <Typography variant='h2'>Вітаємо з успішним проходженням тесту!
            Ваш рівень англійської В1.
          </Typography>
        </Grid>
        <Grid item mb={2}>
          <Typography variant='h4'>
            Ласкаво просимо до нашої платформи. Рушайте вперед у вивченні!
          </Typography>
        </Grid>
        <Grid item xs display='flex' justifyContent='flex-end'>
          <StyledButton onClick={handleSave} variant='contained' endIcon={<ArrowForwardIosIcon/>}>Далі</StyledButton>
        </Grid>
      </Grid>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} >
          <Tab  {...a11yProps(0)} />
          <Tab  {...a11yProps(1)} />
          <Tab {...a11yProps(2)} />
        </Tabs>
      </Box>
      {question?.map((item, index) => (      <CustomTabPanel value={value} index={index}>
        <Typography>{item.sentence}</Typography>
        <Grid item container spacing={2} display='flex' >
          {item?.options?.map(item => (
            <Grid item xs={6} key={item.id}>
              <Box sx={{ border: '1px solid rgba(231, 238, 243, 1)', display: 'flex', alignItems: 'center', padding: 2, m: 1 }}>
                <Checkbox sx={{ borderRadius: '50%' }}/>
                <Typography>{item.option}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>))}
      <Grid item xs display='flex' justifyContent='flex-end'>
        <StyledButton onClick={()=> setValue((prevState)=> prevState +1)} variant='contained' endIcon={<ArrowForwardIosIcon/>}>Зберегти</StyledButton>
      </Grid>
    </Box>
  );
};
