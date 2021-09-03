import React, { useState } from "react";
import { lochmara, frenchGray, white } from "./Constants/Constants";

const StartIconG = ({ fillColor = lochmara, height = 0, width = 0, textColor = white, toggleColor = () => { } }) => {

  let pathD = `M -0.00751881,0 H 1.7932331 L 2.4285715,0.5 1.7932331,1 h -1.80075191 z`;



  const defaultHeight = 1;
  const defaultWidth = 2.436;
  const aspectRatio = defaultWidth / defaultHeight;


  var svgHeight = defaultHeight;
  var svgWidth = defaultWidth;

  // If height or width is given, then adjust the dimmensions, while maintaining the aspect ratio.
  if (height !== 0 && width === 0) {
    svgHeight = height;
    svgWidth = svgHeight * aspectRatio;
  } else if (height === 0 && width !== 0) {
    svgWidth = width;
    svgHeight = svgWidth / aspectRatio;
  }
  else if (height !== 0 && width !== 0) {
    svgWidth = width;
    svgHeight = height;
    if (svgWidth >= svgHeight * aspectRatio) {
      svgWidth = svgHeight * aspectRatio;
    } else {
      svgHeight = svgWidth / aspectRatio;
    }
  }

  const viewBox = `0 0 ${defaultWidth} ${defaultHeight}`;


  return (
    <div style={{width: svgWidth, height: svgHeight}}>
      <svg height={svgHeight} width={svgWidth} viewBox={viewBox}>
        <path
          fill={fillColor}
          d={pathD}
        ></path>
      </svg>

    </div>

  );
}

export default StartIconG;
