import React, { useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, Grid
} from '@mui/material';
import { TablePagination } from '@mui/material';

import { irregularVerbsData, rowsPerPage, tenses } from './constants';

export const IrregularVerbsTable = () => {
  const [ page, setPage ] = useState<number>(0);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);

  return (
    <Grid container>
      <Typography mb={3} mt={3} variant='h2' gutterBottom>
          Неправильні дієслова
      </Typography>

      <Grid container spacing={3}>
        {tenses?.map((header, index) => (
          <Grid item xs={4} key={index}>
            <TableContainer component={Paper} sx={{ border: '1px solid rgba(231, 238, 243, 1)', p: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ border: 'none' }}>{header}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? irregularVerbsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : irregularVerbsData
                  ).map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ border: 'none' }}>{header === 'INFINITIVE' ? row.infinitive : header === 'PAST SIMPLE' ? row.pastSimple : row.pastParticiple}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ))}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[ rowsPerPage ]}
        count={irregularVerbsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        style={{ marginBottom: '40px', border: 'none' }}
      />
    </Grid>
  );
};
