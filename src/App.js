import './App.css';
import React, {useState} from 'react';
import StartIcon from './icons/StartIcon';
import EndIcon from './icons/EndIcon';
import { lochmara, frenchGray, pistachio } from './icons/Constants/Constants';
import PathLine from './icons/PathLine';
import CircleIcon from './icons/CircleIcon';

const App = () => {
  
  const [fill, setFill] = useState(lochmara);
  
  const [fillCircle, setFillCircle] = useState(lochmara)

  const toggle = () => {
    console.log("🚀 ~ file: App.js ~ line 15 ~ changeColor ~ fill", fill)

    if (fill === lochmara) {
      setFill(frenchGray);
    } else if (fill === frenchGray) {
      setFill(lochmara);
    }
  }

  
  const toggleCircle = () => {
    console.log("🚀 ~ file: App.js ~ line 15 ~ changeColor ~ fill", fill)

    if (fillCircle === lochmara) {
      setFillCircle(pistachio);
    } else if (fillCircle === pistachio) {
      setFillCircle(lochmara);
    }
  }
  
  // onClick={() => changeColor()}
  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="280mm"
      // height="297mm"
      // version="1.1"
      // viewBox="0 0 280 297" 
      className="main-container"
    >
      <StartIcon fillColor={fill} toggleColor={toggle}/>
      <EndIcon fillColor={fill} toggleColor={toggle}/>
      <PathLine strokeColor={fill} toggleStroke={toggle}/>
      <CircleIcon fillColor={fillCircle} toggleColor={toggleCircle}/>
    </svg>
  );
}

export default App;
