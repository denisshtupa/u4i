import React, { useState } from "react";
import { lochmara, frenchGray, white } from "./Constants/Constants";

const StartIcon = ({ fillColor, textColor = white, toggleColor }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <g fillOpacity="1" strokeWidth="0.265" onClick={toggleColor}
        style={{ cursor: "pointer" }}>
        <path
          fill={fillColor}
          stroke="none"
          d="M77.307 125.032h46.147l17.552 13.607-15.777 12.622H76.912z"
        ></path>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "1.25" }}
          x="91.112"
          y="140.809"
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
