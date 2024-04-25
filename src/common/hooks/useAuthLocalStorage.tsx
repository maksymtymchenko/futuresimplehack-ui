import { useEffect, useState } from 'react';

type AuthStoreType = { isAuth: boolean, isInstallSpecialSettings: boolean, isHasLevel:boolean }

const initialState: AuthStoreType = { isAuth: false, isInstallSpecialSettings: false, isHasLevel: false };

export const useAuthLocalStorage = (storageKey: string) => {
  const [ authStore, setAuthStore ] = useState<AuthStoreType>(initialState);

  useEffect(() => {
    const storage= localStorage.getItem(storageKey);

    if (storage){
      setAuthStore(JSON.parse(storage));
    }
  },[ localStorage.getItem(storageKey) ]);

  const setToStorage =(value: AuthStoreType) => {
    localStorage.setItem(storageKey,JSON.stringify(value));
    window.dispatchEvent(new Event('storage'));
  };

  const logOut =() => {
    localStorage.setItem(storageKey,JSON.stringify(initialState));
    window.dispatchEvent(new Event('storage'));
  };

  return  { authStore , setToStorage, logOut };
};
