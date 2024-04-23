import './styles/normilize.scss';
import { AppConfigWrapper } from './common/components/AppConfigWrapper';
import { Header } from './common/components/Header';
import { Footer } from './common/components/Footer';
import { AppRoutes } from './navigations/router';
import { useAuthLocalStorage } from './common/hooks/useAuthLocalStorage';
import { LOCALSTORAGE_AUTH_KEY } from './common/constants';
import { Sidebar } from './common/components/Sidebar';


const App = () =>  {
  const { authStore } = useAuthLocalStorage(LOCALSTORAGE_AUTH_KEY);

  return (
    <AppConfigWrapper>
      <>
        { authStore.isAuth && <Header/>}
        <div style={{ display: 'flex' }}>
          { authStore.isAuth && <Sidebar/>}
          <div style={{ marginLeft: authStore.isAuth? '20px': 'none', width: '100%', padding: '20px' }}>
            <AppRoutes/>
          </div>
        </div>
        { authStore.isAuth  && <Footer/>}
      </>
    </AppConfigWrapper>
  );
};

export default App;
