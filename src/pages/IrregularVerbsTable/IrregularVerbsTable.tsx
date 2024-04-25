import * as React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, styled, Grid,
} from '@mui/material';
import {irregularVerbsData} from "./constants";

export const IrregularVerbsTable = () => {


  return  <Grid container>
    <Typography mb={3} mt={3} variant='h2' gutterBottom>
      Неправильні дієслова
    </Typography>


    <Grid container spacing={3} >
      <Grid item xs={4}>
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(231, 238, 243, 1)', p: 2}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: 'none'}}>INFINITIVE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {irregularVerbsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: 'none'}}>{row.infinitive}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={4}>
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(231, 238, 243, 1)', p: 2}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: 'none'}}>PAST SIMPLE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {irregularVerbsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: 'none'}}>{row.pastSimple}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={4}>
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(231, 238, 243, 1)', p: 2}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: 'none'}}>PAST PARTICIPLE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {irregularVerbsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: 'none'}}>{row.pastParticiple}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  </Grid>
};
