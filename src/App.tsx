import './styles/normilize.scss';
import { AppConfigWrapper } from './common/components/AppConfigWrapper';
import { Header } from './common/components/Header';
import { Footer } from './common/components/Footer';
import { AppRoutes } from './navigations/router';
import { Sidebar } from './common/components/Sidebar';
import { Achievements } from './common/components/Achievements';
import { useAuth } from './common/components/AuthProvider/AuthProvider';


const App = () =>  {
  const { authStore } = useAuth();

  return (
    <AppConfigWrapper>
      <>
        { authStore.isAuth && <Header/>}
        <div style={{ display: 'flex' }}>
          { authStore.isHasLevel && <Sidebar/>}
          <div style={{ marginLeft: authStore.isHasLevel? '400px': 'none', marginTop: authStore.isAuth ? '100px' : 'none', marginBottom: authStore.isAuth ? '100px' : 'none' , marginRight:authStore.isHasLevel ? '350px' : '',  width: '100%', display: 'flex' }}>
            <AppRoutes/>
            {authStore.isHasLevel && <Achievements/>}
          </div>
        </div>
        { authStore.isAuth  && <Footer/>}
      </>
    </AppConfigWrapper>
  );
};

export default App;
