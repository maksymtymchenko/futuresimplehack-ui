import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Auth } from '../pages/Auth';
import { SpecialSettings } from '../pages/SpecialSettings';
import { CheckLevel } from '../pages/CheckLevel';
import { useAuthLocalStorage } from '../common/hooks/useAuthLocalStorage';
import { LOCALSTORAGE_AUTH_KEY } from '../common/constants';
import { Translator } from '../pages/Translator';
import { CustomTable } from '../pages/CustomTable';
import { Program } from '../pages/Program/Program';
import { ProgramUnit } from '../pages/Program/ProgramUnit';
import { ProgramLesson } from '../pages/Program/ProgramLesson';


export const AppRoutes = () => {
  const { authStore } = useAuthLocalStorage(LOCALSTORAGE_AUTH_KEY);

  if (authStore.isAuth){
    return <Routes>
      <Route path='/special-settings' element={<SpecialSettings />} />
      <Route path='/check-level' element={<CheckLevel />} />
      <Route path='/program' element={<Program/>} />
      <Route path='/program/:unitId' element={<ProgramUnit/>} />
      <Route path='/program/:unitId/:lessonId' element={<ProgramLesson/>} />
      <Route path='/grammar' element={<>Граматика</>} />
      <Route path='/translator' element={<Translator/>} />
      <Route path='/dictionary' element={<>dictionary</>} />
      <Route path='/irregular-verbs' element={<CustomTable/>} />

      <Route path='*' element={<Navigate to='/special-settings' />} />
    </Routes>;
  }

  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />

      <Route path='*' element={<Navigate to='/auth' />} />
    </Routes>
  );
};

