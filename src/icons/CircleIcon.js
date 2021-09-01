import React from 'react';
import { lochmara, frenchGray, white, spindle } from "./Constants/Constants";


const CircleIcon = ({ fillColor = lochmara, textColor = white, toggleColor }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fillOpacity="1" onClick={toggleColor}
                style={{ cursor: "pointer" }}>
                <circle
                    cx="87.618"
                    cy="255.821"
                    r="13.744"
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
                    x="80.118"
                    y="259.765"
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
