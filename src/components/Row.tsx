import React from 'react';
import { RowStyle } from '../styles/Cell';

export type RowProps = {
  row: string;
};

const Row = ({ row }: RowProps) => {
  return <RowStyle>{row}</RowStyle>;
};

export default Row;
