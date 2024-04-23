import './styles/normilize.scss';
import { AppConfigWrapper } from './common/components/AppConfigWrapper';
import { Header } from './common/components/Header';
import { Footer } from './common/components/Footer';
import { AppRoutes } from './navigations/router';
import {useAuthLocalStorage} from "./common/hooks/useAuthLocalStorage";
import {LOCALSTORAGE_AUTH_KEY} from "./common/constants";


const App = () =>  {
  const { authStore, } = useAuthLocalStorage(LOCALSTORAGE_AUTH_KEY)

  return (
    <AppConfigWrapper>
      <>
        { authStore.isAuth && <Header/>}
        <AppRoutes/>
        { authStore.isAuth  && <Footer/>}
      </>
    </AppConfigWrapper>
  );
};

export default App;
