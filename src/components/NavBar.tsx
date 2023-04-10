import React from 'react';

export type NavBarProps = {
  changeHandler: (event: any) => void;
};

const NavBar = ({ changeHandler }: NavBarProps) => {
  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: 'block', margin: '10px auto' }}
      />
    </div>
  );
};

export default NavBar;
