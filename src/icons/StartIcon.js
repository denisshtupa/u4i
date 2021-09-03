import React from "react";
import { white, fontFamily, fontSize } from "./Constants/Constants";

const StartIcon = ({ fillColor, textColor = white, toggleColor, x = 78, y = 125 }) => {

  const pathD = `M${x} ${y}
      h47.807
      l15.936 
      13.28-15.936 13.28
      H${x}z`;

  return (
    <svg>
      <g onClick={toggleColor}
        style={{ cursor: "pointer" }} id="start">
        <path
          fill={fillColor}
          d={pathD}
        ></path>
        <text
          x={x + 15}
          y={y + 15.5}
          fill={textColor}
          fontFamily={fontFamily}
          fontSize={fontSize}
        >
          Start
        </text>
      </g>
    </svg>
  );
}

export default StartIcon;
