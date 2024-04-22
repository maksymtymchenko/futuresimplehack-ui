import { Button as MuiButton } from '@mui/material';
import { ButtonOwnProps } from '@mui/material/Button/Button';
import { FC } from 'react';

interface IButton extends ButtonOwnProps {

}

export const Button: FC<IButton> = ({ children, ...restProps }) => {
  return <MuiButton {...restProps}>{children}</MuiButton>;
};
