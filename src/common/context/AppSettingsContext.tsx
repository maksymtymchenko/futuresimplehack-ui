import { createContext  } from 'react';

interface AppSettings {
  toggleColorMode: () => void;
  toggleFontSize: (value: 'up' | 'down') => void;
  resetSettings: () => void;
}

export const AppSettingsContext = createContext<AppSettings>({
  toggleColorMode: () => {},
  toggleFontSize: (value) => {},
  resetSettings: () => {}
});

