import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useHttpClient } from '../../common/hooks/useHttpClient';
import { API_URL } from '../../common/constants';

import { PageLoader } from '../../common/components/PageLoader';

export const Dictionary = () => {
  const [ dictionaries, setDictionaries ] = useState<any[]>([]);

  const { loading, sendRequest } = useHttpClient();

  const fetchDictionaries = async () => {
    try {
      const data = await sendRequest({ method: 'GET', url: `${ API_URL }/dictionaries` });

      if(!data) throw new Error('No dictionaries data');

      setDictionaries(data);
    } catch (error){
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDictionaries();
  }, []);

  const [ searchValue, setSearchValue ] = useState('');

  const filteredData = dictionaries.filter(item =>
    item.originalWord.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  if (loading){
    return <PageLoader/>;
  }
    
  return (
    <div>
      <Container maxWidth='md' sx={{ maxWidth: 500, boxShadow: 'none', marginTop: 2, marginLeft: 0, marginRight: 'auto' }}>
        <Typography variant='h2'>Словник</Typography>
        <TextField
          placeholder='введіть слово або вираз'
          variant='standard'
          value={searchValue}
          onChange={handleSearchChange}
          fullWidth
          margin='normal'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
          InputLabelProps={{ shrink: false }}
          style={{ marginBottom: '20px', marginTop: '20px' }}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Слово або вираз</TableCell>
                <TableCell>Переклад</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow key={row.originalWord}>
                  <TableCell>{row.originalWord}</TableCell>
                  <TableCell>{row.translatedWord}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};