import React, { FC, useEffect, useMemo, useState } from 'react';
import { Box, Grid, styled, TextField, Typography } from '@mui/material';
import { AnswerItem } from '../UI/AnswerItem';
import { transformWords } from './helpers';

export interface IMatchWords {
  title: string,
  match: {
    id: number,
    eng: string,
    ukr: string
  }[]
}

const StyledTypography = styled(Typography)({
  cursor: 'pointer',
  padding: '20px',
  margin: '10px 5px',
  borderRadius: '4px',
  border: '1px solid rgba(231, 238, 243, 1)',

  '&:hover': {
    backgroundColor: 'rgba(89,255,163,0.2)'
  }
});

export const MatchWords: FC<IMatchWords> = ({ title, match }) => {
  const [ selectedEng, setSelectedEng ] = useState<number | null>(null);
  const [ selectedUkr, setSelectedUkr ] = useState<number | null>(null);

  const [ selectedIds, setSelectedIds ] = useState<number[]>([]);

  useEffect(() => {
    if((selectedEng && selectedUkr) && (selectedEng === selectedUkr)){
      setSelectedIds(prevState => [ ...prevState, selectedEng ]);
    }

    if((selectedEng && selectedUkr) && (selectedEng !== selectedUkr)){
      const timeoutId = setTimeout(() => {
        setSelectedEng(null);
        setSelectedUkr(null);
        clearTimeout(timeoutId);
      },700);
    }
  }, [ selectedEng, selectedUkr ]);

  const { wordsUkr, wordsEng } = useMemo(()=> transformWords(match), []);



  const handleEngSelect = (id: number) => {
    setSelectedEng(id);
  };

  const handleUkrSelect = (id: number) => {
    setSelectedUkr(id);
  };

  return (<>
    <Typography gutterBottom variant='h5'>{title}</Typography>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {wordsEng.map((item) => (
          <StyledTypography
            key={item.id}
            onClick={() => {
              if(!selectedIds.includes(item.id)){
                handleEngSelect(item.id);
              }
            }}
            style={{
              backgroundColor: selectedEng === item.id? 'grey': 'transparent',
              ...(selectedIds.includes(item.id) && { backgroundColor:'rgba(4, 198, 93, 0.2)' })
            }}
          >
            {item.eng}
          </StyledTypography>
        ))}
      </Grid>
      <Grid item xs={6}>
        {wordsUkr.map((item) => (
          <StyledTypography
            key={item.id}
            onClick={() => {
              if(!selectedIds.includes(item.id)){
                handleUkrSelect(item.id);
              }
            }}
            style={{
              backgroundColor: selectedUkr === item.id? 'grey': 'transparent',
              ...(selectedIds.includes(item.id) && { backgroundColor:'rgba(4, 198, 93, 0.2)' })
            }}
          >
            {item.ukr}
          </StyledTypography>
        ))}
      </Grid>
    </Grid>
  </>
  );
};
