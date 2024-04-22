import { AppMode } from './common/types';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    mode: AppMode;
  }
}