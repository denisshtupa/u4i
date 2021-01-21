import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state 
const initialState = {
    products: [ 
        { id: 1, count: 3, name: 'Orange', price: 15 }, 
        { id: 2, count: 1, name: 'Apple', price: 4 }, 
        { id: 3, count: 6, name: 'Carrot', price: 9 } 
    ]
}

// Create context
export const GlobalContext = createContext(initialState);


// Provider component 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

     //Actions
     function randomizeCount_Prize() {
        dispatch({
            type: 'RANDOMIZE'
        });
    }

    return(<GlobalContext.Provider value={{
        products: state.products,
        randomizeCount_Prize
    }}>
        {children}
    </GlobalContext.Provider>)
}
