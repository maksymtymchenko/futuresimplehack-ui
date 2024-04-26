import { Navigate, Route, Routes } from 'react-router-dom';
import { Auth } from '../pages/Auth';
import { SpecialSettings } from '../pages/SpecialSettings';
import { CheckLevel } from '../pages/CheckLevel';
import { Translator } from '../pages/Translator';
import { Dictionary } from '../pages/Dictionary';
import { IrregularVerbsTable } from '../pages/IrregularVerbsTable';
import { Program } from '../pages/Program/Program';
import { ProgramUnit } from '../pages/Program/ProgramUnit';
import { ProgramLesson } from '../pages/Program/ProgramLesson';
import { Grammar } from '../pages/Grammar/Grammar';
import { GrammarModule } from '../pages/Grammar/GrammarModule';
import { GrammarLesson } from '../pages/Grammar/GrammarLesson';
import {AuthStoreType, useAuth} from "../common/components/AuthProvider/AuthProvider";

const redirectPath = (authStore: AuthStoreType) => {
  if(!authStore.isInstallSpecialSettings) return '/special-settings'

  if(!authStore.isHasLevel) return '/check-level'

  return '/program'
}


export const AppRoutes = () => {
  const { authStore } = useAuth();
  const redirect = redirectPath(authStore)

  if (authStore.isAuth){
    return (
      <Routes>
        <Route path='/special-settings' element={<SpecialSettings />} />
        <Route path='/check-level' element={<CheckLevel />} />
        <Route path='/program' element={<Program/>} />
        <Route path='/program/:unitId' element={<ProgramUnit/>} />
        <Route path='/program/:unitId/:lessonId' element={<ProgramLesson/>} />
        <Route path='/grammar' element={<Grammar/>} />
        <Route path='/grammar/:moduleId' element={<GrammarModule/>} />
        <Route path='/grammar/:moduleId/:lessonId' element={<GrammarLesson/>} />
        <Route path='/translator' element={<Translator/>} />
        <Route path='/dictionary' element={<Dictionary/>} />
        <Route path='/irregular-verbs' element={<IrregularVerbsTable/>} />

        <Route path='*' element={<Navigate to={redirect} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />

      <Route path='*' element={<Navigate to='/auth' />} />
    </Routes>
  );
};

