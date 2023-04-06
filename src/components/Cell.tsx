import React from 'react';
import { CellType } from '../types/types';
import { CellStyle, Wrapper } from '../styles/Cell';

export type CellProps = {
  cell: CellType;
};

const Cell = ({ cell }: CellProps) => {
  return (
    <Wrapper>
      <CellStyle>{cell.Amount}</CellStyle>
      <CellStyle>{cell.ClientName}</CellStyle>
      <CellStyle>{cell.Status}</CellStyle>
      <CellStyle>{cell.TransactionId}</CellStyle>
      <CellStyle>{cell.Type}</CellStyle>
    </Wrapper>
  );
};

export default Cell;
