import React, { useState } from 'react';
import Papa from 'papaparse';
import { CellType } from '../types/types';
import Cell from '../components/Cell';
import Row from '../components/Row';
import { Wrapper } from '../styles/Cell';
import { useAppStore } from '../../store/store';

const Home = () => {
  const { saveData, cells } = useAppStore();
  const [tableRows, setTableRows] = useState([]);
  const [data, setData] = useState<CellType[]>([]);
  const changeHandler = (event: any) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: any) {
        const rowsArray: any = [];
        results.data.map((d: any) => {
          rowsArray.push(Object.keys(d));
        });
        setTableRows(rowsArray[0]);
        setData(results.data);
        saveData(results.data);
      }
    });
  };
  console.log(cells);

  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: 'block', margin: '10px auto' }}
      />
      <br />
      <br />
      <Wrapper>
        {tableRows && tableRows.map((rows, index) => <Row key={index} row={rows} />)}
      </Wrapper>

      {data && data.map((cell) => <Cell key={cell.TransactionId} cell={cell} />)}
    </div>
  );
};

export default Home;
