import './styles/normilize.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { AppConfigWrapper } from './common/components/AppConfigWrapper';
import { Header } from './common/components/Header';
import { Footer } from './common/components/Footer';


const App = () =>  {
  return (
    <AppConfigWrapper>
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<div style={{ height: '100' }}>
            <Typography variant='h2' color='primary' >test</Typography>
          </div>} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer/>
      </>
    </AppConfigWrapper>
  );
};

export default App;
