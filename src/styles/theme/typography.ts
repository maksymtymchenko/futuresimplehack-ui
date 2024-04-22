export const createTypographyTheme = (value: number) => {
  const scaledValue = value * 2;


  return {
    h1: {
      fontSize: `${  56 + scaledValue }px`,
      lineHeight: `${ 60 + scaledValue }px`
    },
    h2: {
      fontSize: `${ 38 + scaledValue }px`,
      lineHeight: `${ 40 + scaledValue }px`
    },
    h3: {
      fontSize: `${ 28 + scaledValue }px`,
      lineHeight: `${ 32 + scaledValue }px`
    },
    h4: {
      fontSize: `${  24 + scaledValue }px`,
      lineHeight: `${ 28 + scaledValue }px`
    },
    h5: {
      fontSize: `${ 20 + scaledValue }px`,
      lineHeight: `${ 24 + scaledValue }px`
    },
    h6: {
      fontSize: `${ 18 + scaledValue }px`,
      lineHeight: `${ 28 + scaledValue }px`
    },
    subtitle1: {
      fontSize: `${  20 + scaledValue }px`,
      lineHeight: `${ 24 + scaledValue }px`
    },
    subtitle2: {
      fontSize: `${ 14 + scaledValue }px`,
      lineHeight: `${ 18 + scaledValue }px`
    },
    button: {
      fontSize: `${ 16 + scaledValue }px`,
      lineHeight: `${ 20 + scaledValue }px`
    },
    body1: {
      fontSize: `${ 16 + scaledValue }px`,
      lineHeight: `${ 24 + scaledValue }px`
    },
    body2: {
      fontSize: `${ 14 + scaledValue }px`,
      lineHeight: `${ 18 + scaledValue }px`
    }
  };
};
