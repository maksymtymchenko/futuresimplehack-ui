
import { AppMode, AppModeEnum } from '../../common/types';
import { mainPalette } from './mainPalette';
import { specialPalette } from './specialPalette';
import { createTypographyTheme } from './typography';

export const getThemeSettings = (mode: AppMode, fontSize: number) => ({
  typography: createTypographyTheme(fontSize),
  palette: { mode, ...(mode === AppModeEnum.main ? mainPalette: specialPalette) }
});
