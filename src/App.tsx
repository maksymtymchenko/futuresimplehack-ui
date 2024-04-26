import './styles/normilize.scss';
import { AppConfigWrapper } from './common/components/AppConfigWrapper';
import { Header } from './common/components/Header';
import { Footer } from './common/components/Footer';
import { AppRoutes } from './navigations/router';
import { useAuthLocalStorage } from './common/hooks/useAuthLocalStorage';
import { LOCALSTORAGE_AUTH_KEY } from './common/constants';
import { Sidebar } from './common/components/Sidebar';
import { useEffect, useState } from 'react';
import { Achievements } from './common/components/Achievements';


const App = () =>  {
  const { authStore } = useAuthLocalStorage(LOCALSTORAGE_AUTH_KEY);

  const auth = JSON.parse(localStorage.getItem(LOCALSTORAGE_AUTH_KEY) || '{}');
  const [ state, setState ] = useState<any>(auth.isHasLevel);

  const updateAuth = () => {
    const key = JSON.parse(localStorage.getItem(LOCALSTORAGE_AUTH_KEY) || '{}');
    if(key) {
      setState(key.isHasLevel);
    }
  };

  //TODO: fix
  useEffect(() => {
    window.addEventListener('storage', updateAuth);

    return () => window.removeEventListener('storage', updateAuth);
  });

  return (
    <AppConfigWrapper>
      <>
        { authStore.isAuth && <Header/>}
        <div style={{ display: 'flex' }}>
          { state && <Sidebar/>}
          <div style={{ marginLeft: state? '400px': 'none', marginTop: authStore.isAuth ? '100px' : 'none', marginBottom: authStore.isAuth ? '100px' : 'none' , marginRight:state ? '350px' : '',  width: '100%', display: 'flex' }}>
            <AppRoutes/>
            {state && <Achievements/>}
          </div>
        </div>
        { authStore.isAuth  && <Footer/>}
      </>
    </AppConfigWrapper>
  );
};

export default App;
