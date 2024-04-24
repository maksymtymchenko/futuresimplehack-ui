import * as React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, styled,
} from '@mui/material';
import {irregularVerbsData} from "./constants";


const StyledTableContainer = styled(TableContainer)`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
  width: 100%;
`;

const StyledTableCell = styled(TableCell)`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
`;

const StyledTableHeaderCell = styled(TableCell)`
  border: 1px solid #dddddd;
  text-Align: center;
  padding: 8px;
  font-weight: bold;
`;

export const IrregularVerbsTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650, boxShadow: 'none' }}>
      <Typography mb={3} mt={3} variant='h2' gutterBottom>
        Неправильні дієслова
      </Typography>
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableHeaderCell>INFINITIVE</StyledTableHeaderCell>
              <StyledTableHeaderCell>PAST SIMPLE</StyledTableHeaderCell>
              <StyledTableHeaderCell>PAST PARTICIPLE</StyledTableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {irregularVerbsData.map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell>{row.infinitive}</StyledTableCell>
                <StyledTableCell>{row.pastSimple}</StyledTableCell>
                <StyledTableCell>{row.pastParticiple}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </TableContainer>
  );
};
