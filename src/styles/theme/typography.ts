export const createTypographyTheme = (value: number) => {
  const scaledValue = value;


  return {
    h1: {
      fontSize: `${  56 + scaledValue }px`,
      lineHeight: `${ 60 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    h2: {
      fontSize: `${ 38 + scaledValue }px`,
      lineHeight: `${ 40 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    h3: {
      fontSize: `${ 28 + scaledValue }px`,
      lineHeight: `${ 32 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    h4: {
      fontSize: `${  24 + scaledValue }px`,
      lineHeight: `${ 28 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    h5: {
      fontSize: `${ 20 + scaledValue }px`,
      lineHeight: `${ 24 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    h6: {
      fontSize: `${ 18 + scaledValue }px`,
      lineHeight: `${ 28 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    subtitle1: {
      fontSize: `${  20 + scaledValue }px`,
      lineHeight: `${ 24 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    subtitle2: {
      fontSize: `${ 14 + scaledValue }px`,
      lineHeight: `${ 18 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    button: {
      fontSize: `${ 16 + scaledValue }px`,
      lineHeight: `${ 20 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    body1: {
      fontSize: `${ 16 + scaledValue }px`,
      lineHeight: `${ 24 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    },
    body2: {
      fontSize: `${ 14 + scaledValue }px`,
      lineHeight: `${ 18 + scaledValue }px`,
      fontFamily: 'e-Ukraine'
    }
  };
};
