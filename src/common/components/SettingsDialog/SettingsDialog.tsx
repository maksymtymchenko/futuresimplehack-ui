import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  Popover,
  DialogTitle,
  Grid,
  IconButton, styled
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useContext, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { AppSettingsContext } from '../../context/AppSettingsContext';
import CloseIcon from '@mui/icons-material/Close';

const StyledButton = styled(Button)({
  color: 'rgba(0, 0, 0, 1)',
  fontWeight: '200',
  textTransform: 'none'
});

const StyledActionButton = styled(Button)({
  color: 'rgba(0, 0, 0, 1)',
  border: '1px solid rgba(0, 0, 0, 1)',
  padding: '16px',
  fontSize: '16px'
});

const StyledResetButton = styled(Button)({
  color: 'rgba(0, 0, 0, 1)',
  border: '1px solid rgba(0, 0, 0, 1)',
  padding: '16px',
  borderRadius: 40
});

export const SettingsDialog = () => {
  const [ anchorEl, setAnchorEl ] = useState(null);
  const { toggleColorMode, toggleFontSize, resetSettings } = useContext(AppSettingsContext);


  const handleClickDialog = (event: any) => setAnchorEl(event.currentTarget);

  return <>
    <StyledButton onClick={handleClickDialog} startIcon={<VisibilityIcon />}>
      Людям з порушенням зору
    </StyledButton>
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <DialogTitle display='flex' justifyContent='space-between'>
        <Typography variant='h2' sx={{ fontWeight: '300' }}>Зовнішній вигляд системи</Typography>
        <IconButton onClick={handleClickDialog}><CloseIcon /></IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <Typography gutterBottom variant='h4'>Розмір тексту</Typography>
            <Box display='flex' gap={1}>
              <StyledActionButton variant='outlined' onClick={() => toggleFontSize('down')}>-</StyledActionButton>
              <StyledActionButton variant='outlined' onClick={() => toggleFontSize('up')}>+</StyledActionButton>
            </Box>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant='h4'>Коліру</Typography>
            <Box display='flex' gap={1}>
              <StyledActionButton startIcon={<InvertColorsIcon/>} onClick={toggleColorMode} variant='outlined'>Ч/Б</StyledActionButton>
              <StyledActionButton startIcon={<InvertColorsIcon/>} onClick={toggleColorMode} variant='outlined'>Колір</StyledActionButton>
            </Box>
          </Grid>
        </Grid>

      </DialogContent>
      <DialogActions sx={{ display:'flex', justifyContent: 'start', p: 3 }} >
        <StyledResetButton variant='outlined' endIcon={<RotateLeftIcon/>} onClick={resetSettings}>Скинути всі налаштування</StyledResetButton>
      </DialogActions>
    </Popover>
  </>;
};
