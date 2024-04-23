import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Auth } from '../pages/Auth';
import { SpecialSettings } from '../pages/SpecialSettings';
import { CheckLevel } from '../pages/CheckLevel';
import {useAuthLocalStorage} from "../common/hooks/useAuthLocalStorage";
import {LOCALSTORAGE_AUTH_KEY} from "../common/constants";

export const AppRoutes = () => {
  const { authStore } = useAuthLocalStorage(LOCALSTORAGE_AUTH_KEY)

  console.log('authStore', authStore.isAuth)

  if (authStore.isAuth){
    return <Routes>
      <Route path='/special-settings' element={<SpecialSettings />} />
      <Route path='/check-level' element={<CheckLevel />} />
      <Route path='/program' element={<>program</>} />

      <Route path='*' element={<Navigate to='/special-settings' />} />
    </Routes>
  }

  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />

      <Route path='*' element={<Navigate to='/auth' />} />
    </Routes>
  );
};
