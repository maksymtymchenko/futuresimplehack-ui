import { AppMode, AppModeEnum } from '../../common/types';
import { mainPalette } from './mainPalette';
import { createTypographyTheme } from './typography';
import { ThemeOptions } from '@mui/material/styles/createTheme';

export const getThemeSettings = (mode: AppMode, fontSize: number): ThemeOptions => ({
  typography: createTypographyTheme(fontSize),
  ...(mode === AppModeEnum.main ? { palette: { mode, ...mainPalette } } : {}),
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          filter: mode === AppModeEnum.special ? 'grayscale(1)' : 'none'
        }
      }
    }
  }
});
