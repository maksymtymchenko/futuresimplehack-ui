import { createContext  } from 'react';

interface AppSettings {
  toggleColorMode: () => void;
  toggleBlackMode: () => void;
  toggleFontSize: (value: 'up' | 'down') => void;
  resetSettings: () => void;
}

export const AppSettingsContext = createContext<AppSettings>({
  toggleColorMode: () => {},
  toggleBlackMode:  () => {},
  toggleFontSize: (value) => {},
  resetSettings: () => {}
});

