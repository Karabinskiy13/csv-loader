import React from 'react';
import { useAppStore } from '../../store/store';

export type NavBarProps = {
  changeHandler: (event: any) => void;
  // filterByType: (type: string) => void;
};

const NavBar = ({ changeHandler }: NavBarProps) => {
  const { filterByStatus, cells } = useAppStore();
  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: 'block', margin: '10px auto' }}
      />
      <button onClick={() => filterByStatus(cells, 'All')}>All</button>
      <button onClick={() => filterByStatus(cells, 'Cancelled')}>Cancelled</button>
      <button onClick={() => filterByStatus(cells, 'Completed')}>Completed</button>
      <button onClick={() => filterByStatus(cells, 'Pending')}>Pending</button>
    </div>
  );
};

export default NavBar;
