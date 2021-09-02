import React from 'react';
import { lochmara, frenchGray, white, spindle } from "./Constants/Constants";


const CircleIcon = ({ fillColor = lochmara, textColor = white, toggleColor, cx = 215, cy = 138.5, r = 15 }) => {
    return (
        <svg>
            <g fillOpacity="1" onClick={toggleColor}
                style={{ cursor: "pointer" }}>
                <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={fillColor}
                    stroke={fillColor === lochmara ? spindle : "none"}
                    strokeDasharray="none"
                    strokeMiterlimit="0"
                    strokeOpacity="0.3"
                    strokeWidth="5"
                ></circle>
                <text
                    xmlSpace="preserve"
                    style={{ lineHeight: "1.25" }}
                    x={cx-7.5}
                    y={cy+3.8}
                    fill={white}
                    fontFamily="sans-serif"
                    fontSize="10.583"
                    fontStyle="normal"
                    fontWeight="normal"
                >
                    W3
                </text>
            </g>
        </svg>
    )
}

export default CircleIcon
