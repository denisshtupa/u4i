import './App.css';
import React, { useState, useEffect } from 'react';
import StartIcon from './icons/StartIcon';
import EndIcon from './icons/EndIcon';
import { lochmara, frenchGray, pistachio } from './icons/Constants/Constants';
import PathLine from './icons/PathLine';
import CircleIcon from './icons/CircleIcon';
import StartIconG from './icons/StartIconG';

const App = () => {

  const [fill, setFill] = useState(lochmara);
  const [fillCircle, setFillCircle] = useState(lochmara);

  const toggle = () => {
    if (fill === lochmara) {
      setFill(frenchGray);
    } else if (fill === frenchGray) {
      setFill(lochmara);
    }
  }

  const toggleCircle = () => {
    if (fillCircle === lochmara) {
      setFillCircle(pistachio);
    } else if (fillCircle === pistachio) {
      setFillCircle(lochmara);
    }
  }

  const startIconX = 78;
  const firstPathX = 140;
  const startCircleC = 205;
  const step = 80;
  const yAxis = 138.5;
  const circleRadius = 15;
  const circleWidth = circleRadius * 2;
  const lineLength = 50;

  let pathStarts = [firstPathX, firstPathX + step, firstPathX + step * 2, firstPathX + step * 3, firstPathX + step * 4, firstPathX + step * 5];
  let circleStartC = [startCircleC, startCircleC + step, startCircleC + step * 2, startCircleC + step * 3, startCircleC + step * 4];

  // should be "nr of paths * length of paths" by adding "nr of circles * 30" by adding startX of start icon
  // 
  let xOfEnd = (pathStarts.length * lineLength) + (circleStartC.length * circleWidth) + firstPathX;

  return (

    <svg xmlns="http://www.w3.org/2000/svg" className="main-container"
    >
      <StartIcon fillColor={fill} toggleColor={toggle} x={startIconX} y={yAxis - 13.3} />
      <EndIcon fillColor={fill} toggleColor={toggle} x={xOfEnd} y={yAxis + 11.5} />

      {pathStarts.map((ps, index) =>
        <PathLine key={index+1} strokeColor={fill} toggleStroke={toggle} startX={ps} startY={yAxis} length={lineLength} />
      )};

      {circleStartC.map((stc, index) =>
        <CircleIcon key={index+1} fillColor={fillCircle} toggleColor={toggleCircle} circleNumber={index+7} cx={stc} cy={yAxis} r={circleRadius} />
      )}


      {/* <CircleIcon fillColor={fillCircle} toggleColor={toggleCircle} cx={205} cy={138.5} r={15} />

        <CircleIcon fillColor={fillCircle} toggleColor={toggleCircle} cx={285} cy={138.5} r={15} /> */}


      {/* startX should be "startX of the first path" + "length of first line" + "2 * r of the circle" --- for ex. 140 + 50 + 2*15 = 230 */}

      {/* <PathLine strokeColor={fill} toggleStroke={toggle} startX={220} startY={138.5} length={50}/> */}

      {/* <CircleIcon fillColor={fillCircle} toggleColor={toggleCircle}/> */}

    </svg>
    
    
    
    // <div style={{
    //   height: "500px",
    //   width: "700px",
    //   display: "flex",
    //   flexDirection: "row"
    // }}>
    //   <div style={{
    //     display: "flex",
    //     flexDirection: "row"
    //   }}>

    //     <div style={{ position:"absolute", height: "50%", width: "100%", borderBottom: "5px solid red", marginTop: "2px", zIndex: "-3" }}></div>
    //     <div>
    //       <StartIconG height={100} />
    //     </div>
    //     <div style={{ marginLeft: 10, height: 100, width: 100, borderRadius: 50, backgroundColor: "red" }}></div>
    //     <div style={{ marginLeft: 10, height: 100, width: 100, borderRadius: 50, backgroundColor: "red" }}></div>
    //     <div style={{ marginLeft: 10, height: 100, width: 100, borderRadius: 50, backgroundColor: "red" }}></div>

    //   </div>

    // </div>
  );
}

export default App;
