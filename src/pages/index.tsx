import React, { useEffect, useState } from 'react';

import Papa from 'papaparse';
import { useCSVDownloader } from 'react-papaparse';

import Cell from '../components/Cell';
import Row from '../components/Row';
import NavBar from '../components/NavBar';

import { Wrapper } from '../styles/Cell';
import { useAppStore } from '../../store/store';
import { MyPaginate } from '../styles/Pagination';

const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const { CSVDownloader, Type } = useCSVDownloader();
  const { saveData, cells, saveRows, rows } = useAppStore();

  const endOffset = itemOffset + 10;

  const currentItems = cells.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cells.length / 10);

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

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % cells.length;
    setItemOffset(newOffset);
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
      <div>
        {currentItems &&
          domLoaded &&
          currentItems.map((cell) => <Cell key={cell.TransactionId} cell={cell} />)}
      </div>
      <div>
        <CSVDownloader
          type={Type.Button}
          filename={'filename'}
          bom={true}
          data={() => {
            return cells;
          }}>
          Download
        </CSVDownloader>
      </div>
      <MyPaginate
        className="react-paginate"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Home;
