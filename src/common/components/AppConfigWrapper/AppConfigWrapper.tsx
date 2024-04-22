import { ReactElement, useMemo, useState } from 'react';
import { AppMode, AppModeEnum } from '../../types';
import { createTheme, ThemeProvider } from '@mui/material';
import { getThemeSettings } from '../../../styles/theme/theme';
import { AppSettingsContext } from '../../context/AppSettingsContext';

export const AppConfigWrapper = ({ children }: { children: ReactElement}) => {
  const [ mode, setMode ] = useState<AppMode>(AppModeEnum.main);
  const [ fontSize, setFontSize ] = useState(1);

  const appSettings = useMemo(
    () => ({
      toggleColorMode: () => setMode((prevMode: AppMode) => prevMode === AppModeEnum.main ? AppModeEnum.special : AppModeEnum.main),
      toggleFontSize: (value: 'up' | 'down') => setFontSize((prevState) => value === 'up' ? prevState + 1 : prevState - 1),
      resetSettings: () => {
        setMode(AppModeEnum.main);
        setFontSize(1);
      }
    }),
    [ setMode, setFontSize ]
  );

  const theme = useMemo(() => createTheme(getThemeSettings(mode, fontSize)), [ mode, fontSize ]);

  return (
    <AppSettingsContext.Provider value={appSettings}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppSettingsContext.Provider>
  );
};
