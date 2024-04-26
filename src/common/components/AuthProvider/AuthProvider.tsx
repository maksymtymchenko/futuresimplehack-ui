import React, {createContext, FC, ReactElement, useContext, useEffect, useState} from 'react';
import {LOCALSTORAGE_AUTH_KEY} from "../../constants";

export type AuthStoreType = { isAuth: boolean, isInstallSpecialSettings: boolean, isHasLevel: boolean };
const initialState: AuthStoreType = { isAuth: false, isInstallSpecialSettings: false, isHasLevel: false };

const AuthContext = createContext<{ authStore: AuthStoreType, setToStorage: (value: AuthStoreType) => void, logOut: () => void }>({
  authStore: initialState,
  setToStorage: () => {},
  logOut: () => {}
});

export const AuthProvider: FC<{ children: ReactElement}> = ({ children }) => {
  const storeData = JSON.parse(localStorage.getItem(LOCALSTORAGE_AUTH_KEY) || '{}')
  const [authStore, setAuthStore] = useState(storeData?.isAuth ? storeData : initialState);

  useEffect(() => {
    const storage= localStorage.getItem(LOCALSTORAGE_AUTH_KEY);

    if (storage){
      setAuthStore(JSON.parse(storage));
    }
  },[]);

  const setToStorage = (value: AuthStoreType) => {
    setAuthStore(value);
    localStorage.setItem(LOCALSTORAGE_AUTH_KEY, JSON.stringify(value));
  };

  const logOut = () => {
    setAuthStore(initialState);
    localStorage.removeItem(LOCALSTORAGE_AUTH_KEY);

    window.location.reload()
  };

  return (
    <AuthContext.Provider value={{ authStore, setToStorage, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
