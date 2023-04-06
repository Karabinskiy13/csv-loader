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
  saveData: (...data: CellType[]) => void;
};

export const createCellsSlice: StateCreator<CellsSlice> = (set, get) => ({
  cells: [],
  rows: [],
  saveData: (...data: CellType[]) => {
    let cells = get().cells;
    cells = data;
    console.log(cells);
    set({ cells });
  }
});
