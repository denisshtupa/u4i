import React, { useState } from "react";
import { lochmara, frenchGray, white } from "./Constants/Constants";

const StartIcon = ({ fillColor, textColor = white, toggleColor, x=77, y=125 }) => {

  let pathD = `M${x} ${y}
  h49
  l17.55 
  13.60-15.77 
  12
  H76.91z`;

  return (
    <svg>
      <g fillOpacity="1" strokeWidth="0.265" onClick={toggleColor}
        style={{ cursor: "pointer" }} id="start">
        <path
          fill={fillColor}
          stroke="none"
          d={pathD}
        ></path>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "1.25" }}
          x={x+13}
          y={y+15.5}
          fill={textColor}
          fontFamily="sans-serif"
          fontSize="10.583"
          fontStyle="normal"
          fontWeight="normal"
        > Start
        </text>
      </g>
    </svg>

  );
}

export default StartIcon;
