import {useEffect, useState} from "react";

type AuthStoreType = { isAuth: boolean, isInstallSpecialSettings: boolean, isHasLevel:boolean }

const initialState: AuthStoreType = { isAuth: false, isInstallSpecialSettings: false, isHasLevel: false }

export const useAuthLocalStorage = (key: string) => {
  const [authStore, setAuthStore] = useState<AuthStoreType>(initialState)

  useEffect(() => {
    const storage= localStorage.getItem(key)

    if (storage){
      setAuthStore(JSON.parse(storage))
    }
  },[localStorage.getItem(key)])

  const setToStorage =(value: AuthStoreType) => {
    localStorage.setItem(key,JSON.stringify(value))
  }

  return  { authStore , setToStorage }
}
