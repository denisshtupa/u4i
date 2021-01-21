import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Product} from './Product';

export const ProductList = () => {
    const { products } = useContext(GlobalContext);

    return (
        <>
            {products.map(prod => (<Product product={prod} key={prod.id} />))}
        </>
    )
}
