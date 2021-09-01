import './App.css';
import React, {useContext} from 'react';
import { Table } from 'react-bootstrap';
import { ProductList } from './components/ProductList';
import { GlobalContext, GlobalProvider } from './context/GlobalState';
import { Summary } from './components/Summary';
import { Button } from './components/Button';

function App() {
  const { products } = useContext(GlobalContext);
  return (
    <div>
      <GlobalProvider>
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
      </GlobalProvider>
    </div>
  );
}

export default App;
