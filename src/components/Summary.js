import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';import { InputGroup, FormControl } from 'react-bootstrap';

export const Summary = () => {
    const { products } = useContext(GlobalContext);
    let count = 0;
    let sumPrices = 0;
    let avgPrice = 0; 
    
    products.forEach(x => {count += x.count; sumPrices += x.price });
    avgPrice = (sumPrices/3).toFixed(2);

    return (
        <div className="row">
            <div className="col-6">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Count</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Count"
                    value={count}
                    readOnly
                    className="input-right"
                    aria-describedby="inputGroup-sizing-default"
                    />
              </InputGroup>
            </div>
            <div className="col-6">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Avg price</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Avg price"
                    value={avgPrice}
                    readOnly
                    className="input-right"
                    aria-describedby="inputGroup-sizing-default"
                    />
              </InputGroup>
            </div>
        </div>
    )
}
