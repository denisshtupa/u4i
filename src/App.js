import './App.css';
import React, { useState, useEffect } from 'react';
import StartIcon from './icons/StartIcon';
import EndIcon from './icons/EndIcon';
import { lochmara, frenchGray, pistachio } from './icons/Constants/Constants';
import PathLine from './icons/PathLine';
import CircleIcon from './icons/CircleIcon';
import StartIconG from './icons/StartIconG';
import WeekContent from './icons/WeekContent';


const randomNumber = Math.floor(Math.random() * 8) + 3;

const pathForWeeksCalc = (firstPathX, step) => {
  let pathStarts = [];
  for (var i = 0; i <= randomNumber; i++) {
    pathStarts.push(firstPathX + step * i)
  }
  return pathStarts;
}

const circleForWeeksCalc = (startCircleC, step) => {
  let circleStartC = [];

  for (var i = 0; i < randomNumber; i++) {
    let circleC = {
      startCircleC: startCircleC + step * i,
      weekId: i + 100
    }
    circleStartC.push(circleC);
  }

  return circleStartC;
}

const App = () => {

  const [fill, setFill] = useState(lochmara);
  const [fillCircle, setFillCircle] = useState(lochmara);
  const [weekTopics, setWeekTopics] = useState([]);
  const [WeekId, setWeekId] = useState(null);

  const startIconX = 78;
  const firstPathX = 140;
  const startCircleC = 205;
  const step = 80;
  const yAxis = 30;
  const circleRadius = 15;
  const circleWidth = circleRadius * 2;
  const lineLength = 50;

  let weekObjects = [];

  const pathStarts = pathForWeeksCalc(firstPathX, step);
  const circleStartC = circleForWeeksCalc(startCircleC, step);

  // should be "nr of paths * length of paths" by adding "nr of circles * 30" by adding startX of start icon
  let xOfEnd = (pathStarts.length * lineLength) + (circleStartC.length * circleWidth) + firstPathX;

  useEffect(() => {
    if (weekObjects.length === 0) {
      setTimeout(() => {
        fillWeekObjects(circleStartC);
      }, 500);
    }
  }, [])

  const toggle = () => {
    if (fill === lochmara) {
      setFill(frenchGray);
    } else if (fill === frenchGray) {
      setFill(lochmara);
    }
  }

  const toggleCircle = (weekId, cx, cy) => {

    if (weekTopics.length === 0) {
      setWeekTopics(weekObjects);
    }

    if (WeekId !== weekId) {
      const updatedWeekObjects = [...weekTopics];
      updatedWeekObjects.map(x => x.visible = false)

      let index = updatedWeekObjects.findIndex(u => u.weekId === weekId);
      updatedWeekObjects[index].visible = true;

      setWeekTopics(updatedWeekObjects);
      setFillCircle(pistachio);
    }

    else {
      if (fillCircle === lochmara) {

        const updatedWeekObjects = [...weekTopics];
        updatedWeekObjects.map(x => x.visible = false)

        let index = updatedWeekObjects.findIndex(u => u.weekId === weekId);
        updatedWeekObjects[index].visible = true;

        setWeekTopics(updatedWeekObjects);

        setFillCircle(pistachio);

      } else if (fillCircle === pistachio) {

        const updatedWeekObjects = [...weekTopics];
        updatedWeekObjects.map(x => x.visible = false)

        let index = updatedWeekObjects.findIndex(u => u.weekId === weekId);
        updatedWeekObjects[index].visible = false;

        setWeekTopics(updatedWeekObjects);

        setFillCircle(lochmara);
      }
    }

    setWeekId(weekId);
  }

  const fillWeekObjects = (circleC) => {
    circleC.forEach(cs => {
      const weekObject = {
        xAxisCenter: cs.startCircleC,
        visible: false,
        yAxisCenter: yAxis,
        weekId: cs.weekId,
      };

      weekObjects.push(weekObject)
    })
    setWeekTopics(weekObjects);
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="main-container"
    >
      <StartIcon fillColor={fill} toggleColor={toggle} x={startIconX} y={yAxis - 13.3} />
      <EndIcon fillColor={fill} toggleColor={toggle} x={xOfEnd} y={yAxis + 11.5} />

      {pathStarts.map((ps, index) =>
        <PathLine key={index + 1} strokeColor={fill} toggleStroke={toggle} startX={ps} startY={yAxis} length={lineLength} />
      )};

      {circleStartC.map((stc, order) =>
        <CircleIcon key={stc.weekId} fillColor={fillCircle} weekId={stc.weekId} toggleColor={toggleCircle} circleNumber={order +1} cx={stc.startCircleC} cy={yAxis} r={circleRadius} />
      )}

      {
        weekTopics.some(item => item.visible) &&
        <WeekContent startX={weekTopics.find(el => el.visible === true).xAxisCenter} startY={weekTopics.find(el => el.visible === true).yAxisCenter + circleRadius} numberOfTopics={randomNumber > 7 ? randomNumber - 3 : randomNumber} />
      }

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
