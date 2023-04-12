/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { StateCreator } from 'zustand';
import { CellType } from '../src/types/types';

export type Comments = {
  id: string;
  comment: string;
  currentPage: string;
};

export type DataProps = {
  data: CellType;
};

export type CellsSlice = {
  cells: CellType[];
  rows: string[];
  filteredCells: CellType[];
  saveData: (data: CellType[]) => void;
  saveRows: (data: string[]) => void;
  changeType: (data: CellType, field: string) => void;
  filterByStatus: (array: CellType[], data: string) => void;
};

export const createCellsSlice: StateCreator<CellsSlice> = (set, get) => ({
  cells: [],
  rows: [],
  filteredCells: [],
  saveData: (data: CellType[]) => {
    let cells = get().cells;
    cells = data;

    set({ cells });
  },
  saveRows: (data: string[]) => {
    let rows = get().rows;
    rows = data;
    set({ rows });
  },
  changeType: (data: CellType, field: string) => {
    const cells = get().cells;
    const findProduct = cells.find((el) => el.TransactionId === data.TransactionId);
    if (findProduct) {
      findProduct.Type = field;
    }
    set({ cells });
  },
  filterByStatus: (array: CellType[], data: string) => {
    let filteredCells = get().filteredCells;
    if (data === 'Pending') {
      filteredCells = [];
      filteredCells.push(...array.filter((el) => el.Status === data));
    }
    if (data === 'Completed') {
      filteredCells = [];
      filteredCells.push(...array.filter((el) => el.Status === data));
    }
    if (data === 'Cancelled') {
      filteredCells = [];
      filteredCells.push(...array.filter((el) => el.Status === data));
    }
    if (data === 'All') {
      filteredCells = array;
    }
    set({ filteredCells });
  }
});
