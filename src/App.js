import './App.css';
import React, { useContext, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import { ProductList } from './components/ProductList';
import { GlobalContext, GlobalProvider } from './context/GlobalState';
import { Summary } from './components/Summary';
import { Button } from './components/Button';
import UseScript from './UseScript';

const App = () => {
  const { products } = useContext(GlobalContext);

  const dataId = `dfbba82e-f5d3-11eb-b839-0cc47a188158`;
  const url = `https://player.3qsdn.com/js3q.latest.js`;
  const container = "3q-player";

  UseScript(url, dataId, container);

  return (
    <>
      <div className="main-container">

        {/* <GlobalProvider>
        <div className="jumbotron center main-container">          
          <h3 className="title">Products List</h3>
          <Table className="striped bordered hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Counts</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              <ProductList products={products}/>         
            </tbody>
          </Table>
          <Button/>
          <Summary/>
        </div>
      </GlobalProvider> */}

        <div id={container}></div>
      </div>


    </>
  );
}

export default App;
