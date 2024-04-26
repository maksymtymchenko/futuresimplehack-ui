import { ReactElement, useEffect, useMemo, useState } from 'react';
import { AppMode, AppModeEnum } from '../../types';
import { createTheme, ThemeProvider } from '@mui/material';
import { getThemeSettings } from '../../../styles/theme/theme';
import { AppSettingsContext } from '../../context/AppSettingsContext';
import {
  THEME_SETTINGS_FONT_KEY,
  THEME_SETTINGS_MODE_KEY
} from '../../constants';

export const AppConfigWrapper = ({ children }: { children: ReactElement}) => {
  const [ mode, setMode ] = useState<AppMode>(AppModeEnum.main);
  const [ fontSize, setFontSize ] = useState(1);

  useEffect(() => {
    const mode= localStorage.getItem(THEME_SETTINGS_MODE_KEY);
    const fontSize= localStorage.getItem(THEME_SETTINGS_FONT_KEY);

    if (mode) setMode(mode as AppModeEnum);

    if (fontSize) setFontSize(JSON.parse(fontSize));
  },[]);


  const toggleBlackMode = () => {
    localStorage.setItem(THEME_SETTINGS_MODE_KEY, AppModeEnum.special);
    setMode(AppModeEnum.special);
  };

  const toggleColorMode = () => {
    localStorage.setItem(THEME_SETTINGS_MODE_KEY, AppModeEnum.main);
    setMode(AppModeEnum.main);
  };

  const toggleFontSize = (direction: 'up' | 'down') => {
    setFontSize((prevState) => {
      const newValue = direction === 'up' ? prevState + 1 : prevState - 1;

      localStorage.setItem(THEME_SETTINGS_FONT_KEY, String(newValue));
      return newValue;
    });
  };

  const resetSettings =()=> {
    setMode(AppModeEnum.main);
    setFontSize(1);
    localStorage.setItem(THEME_SETTINGS_MODE_KEY, AppModeEnum.main);
    localStorage.setItem(THEME_SETTINGS_FONT_KEY, String(1));
  };

  const appSettings = useMemo(
    () => ({ toggleBlackMode, toggleColorMode, toggleFontSize, resetSettings }),
    [ setMode, setFontSize ]
  );

  const theme = useMemo(() => createTheme(getThemeSettings(mode, fontSize)), [ mode, fontSize ]);

  return (
    <AppSettingsContext.Provider value={appSettings}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppSettingsContext.Provider>
  );
};
