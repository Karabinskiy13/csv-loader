import React, { useState } from 'react';
import { CellType } from '../types/types';
import { CellStyle, Wrapper } from '../styles/Cell';
import { useAppStore } from '../../store/store';

export type CellProps = {
  cell: CellType;
};

const Cell = ({ cell }: CellProps) => {
  const [value, setValue] = useState('');
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const { changeType } = useAppStore();
  return (
    <Wrapper>
      <CellStyle>{cell.TransactionId}</CellStyle>
      <CellStyle>{cell.Status}</CellStyle>
      <CellStyle>{cell.Type}</CellStyle>
      <CellStyle>{cell.ClientName}</CellStyle>
      <CellStyle>{cell.Amount}</CellStyle>
      <button onClick={() => changeType(cell, value)}>Change</button>
      <input type="text" onChange={onChange} />
    </Wrapper>
  );
};

export default Cell;
