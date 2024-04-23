import * as React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export const CustomTable = () => {

  function createData(
    infinitive: string,
    pastSimple: string,
    pastParticiple: string
  ) {
    return { infinitive, pastSimple, pastParticiple };
  }


  const rows = [
    createData('eat', 'ate', 'eaten'),
    createData('eat', 'ate', 'eaten'),
    createData('eat', 'ate', 'eaten'),
    createData('eat', 'ate', 'eaten'),
    createData('eat', 'ate', 'eaten'),
    createData('eat', 'ate', 'eaten'),
    createData('eat', 'ate', 'eaten'),
    createData('eat', 'ate', 'eaten'),
    createData('eat', 'ate', 'eaten')
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650, boxShadow: 'none', marginTop: 5 }}>
      <Typography style={{ margin: 10 }} variant='h2' gutterBottom>
        Неправильні дієслова
      </Typography>
      <Table aria-label='Irregular verbs table'>
        <TableHead>
          <TableRow>
            <TableCell style={{ border: 'none', fontWeight: 700 }}>INFINITIVE</TableCell>
            <TableCell style={{ border: 'none', fontWeight: 700 }}>PAST SIMPLE</TableCell>
            <TableCell style={{ border: 'none', fontWeight: 700 }}>PAST PARTICIPLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.infinitive}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ border: 'none' }} component='th' scope='row'>
                {row.infinitive}
              </TableCell>
              <TableCell style={{ border: 'none' }}>{row.pastSimple}</TableCell>
              <TableCell style={{ border: 'none' }}>{row.pastParticiple}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};