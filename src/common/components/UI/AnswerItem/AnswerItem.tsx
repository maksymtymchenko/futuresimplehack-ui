import { useState } from 'react';
import { Box, Checkbox } from '@mui/material';
import Typography from '@mui/material/Typography';


export const AnswerItem = ({ title, isCorrect }: { title: string, isCorrect?: boolean}) => {
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
        cursor: 'pointer',
        ...( checked ? { border: `2px solid ${ isCorrect? 'rgba(4, 198, 93, 0.2)' : 'rgba(224,33,33,0.2)' }` }: {})
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
