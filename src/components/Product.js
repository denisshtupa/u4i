import React from 'react';

export const Product = ({product}) => {
    return (
        <>            
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.count}</td>
                <td>{product.price}</td>
            </tr>
        </>
    )
}
