import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CellsSlice, createCellsSlice } from './FinancialSlice';

export const useAppStore = create<CellsSlice>()(
  persist(
    (...a) => ({
      ...createCellsSlice(...a)
    }),
    {
      name: 'cells'
    }
  )
);
