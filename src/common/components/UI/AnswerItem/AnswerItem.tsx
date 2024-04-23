import { useState } from 'react';
import { Box, Checkbox } from '@mui/material';
import Typography from '@mui/material/Typography';

// border: 2px solid;
//
// border-image-source: linear-gradient(90deg, #D7F64D 0%, #007EFF 100%);



export const AnswerItem = ({ title }: { title: string}) => {
  const [ checked, setChecked ] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <Box
      sx={{
        border: '2px solid rgba(231, 238, 243, 1)',
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        m: 1,
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <Checkbox
        sx={{ borderRadius: '50%' }}
        checked={checked}
        onChange={() => setChecked(!checked)}
        onClick={(e) => e.stopPropagation()}
      />
      <Typography>{title}</Typography>
    </Box>
  );
};
