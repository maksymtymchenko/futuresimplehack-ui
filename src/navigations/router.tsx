import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Auth } from '../pages/Auth/Auth';
import { useEffect, useState } from 'react';
import { SpecialSettings } from '../pages/SpecialSettings';
import { CheckLevel } from '../pages/CheckLevel';

export const AppRoutes = () => {
  const [ token, settoken ]= useState<{ isDiaAuth?: boolean, isInstallSpecialSettings?: boolean, isHasLevel?: boolean }>({});
  const localToken = localStorage.getItem('hackaton:auth');

  useEffect(() => {
    const parseToken= JSON.parse( localToken || '{}');

    settoken(parseToken);
  }, [ localToken ]);

  const { isDiaAuth, isInstallSpecialSettings, isHasLevel } = token;

  return (
    <Routes>
      { isDiaAuth ? (
        <>
          {isInstallSpecialSettings && isHasLevel ? (
            <>
              <Route path='/program' element={<div>program</div>} />
              <Route path='*' element={<Navigate to='/program' />} />
            </>
          ) : (<>
            <Route path='/special-settings' element={<SpecialSettings/>} />
            <Route path='/check-level' element={<CheckLevel/>} />

            {!isInstallSpecialSettings && <Route path='*' element={<Navigate to='/special-settings' />} />}
            {!isHasLevel && <Route path='*' element={<Navigate to='/check-level' />} />}
          </>) }
        </>
      ): (
        <>
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Navigate to='/auth' />} />
        </>
      )}

    </Routes>
  );
};
