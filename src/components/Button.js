import React, { useContext, useRef, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
}  

export const Button = () => {
    const {randomizeCount_Prize} = useContext(GlobalContext);
    const [counter, setCounter] = useState(0);

    useInterval(() => {
        setCounter(counter + 1);
    }, 1000);
    
    return (
        <>
        <div className="row some-padding">
            <div className="col-8">
                <button className="btn btn-primary wide-button" onClick={() => randomizeCount_Prize()}>Random count & price</button>
            </div>
        </div>
        <div className="row some-padding">
           <span>Counter: {counter}</span>
        </div>
        </>
    )
}
