import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Cell from '../components/Cell';
import Row from '../components/Row';
import { Wrapper } from '../styles/Cell';
import { useAppStore } from '../../store/store';
import NavBar from '../components/NavBar';

const Home = () => {
  const { saveData, cells, saveRows, rows } = useAppStore();
  const [domLoaded, setDomLoaded] = useState(false);
  const changeHandler = (event: any) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: any) {
        const rowsArray: any = [];
        results.data.map((d: any) => {
          rowsArray.push(Object.keys(d));
        });
        saveRows(rowsArray[0]);
        saveData(results.data);
      }
    });
  };
  useEffect(() => {
    setDomLoaded(true);
  });

  return (
    <div>
      <NavBar changeHandler={changeHandler} />
      <Wrapper style={{ display: 'flex' }}>
        {rows && domLoaded && rows.map((rows, index) => <Row key={index} row={rows} />)}
      </Wrapper>

      {cells && domLoaded && cells.map((cell) => <Cell key={cell.TransactionId} cell={cell} />)}
    </div>
  );
};

export default Home;
