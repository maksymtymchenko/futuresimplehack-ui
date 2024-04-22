import './styles/normilize.scss';
import { AppConfigWrapper } from './common/components/AppConfigWrapper';
import { Header } from './common/components/Header';
import { Footer } from './common/components/Footer';
import { AppRoutes } from './navigations/router';
import { useEffect, useState } from 'react';


const App = () =>  {
  const [ isAuth, setAuth ] = useState<{ isDiaAuth?: boolean }>({ isDiaAuth: false });
  const token = localStorage.getItem('hackaton:auth');

  useEffect(()=> {
    const parseToken= JSON.parse( token || '{}');

    setAuth(parseToken);
  },[ token ]);


  return (
    <AppConfigWrapper>
      <>
        { isAuth.isDiaAuth && <Header/>}
        <AppRoutes/>
        { isAuth.isDiaAuth && <Footer/>}
      </>
    </AppConfigWrapper>
  );
};

export default App;
