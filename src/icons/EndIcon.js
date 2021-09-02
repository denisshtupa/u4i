import React, { useState } from "react";
import { lochmara, frenchGray, white } from "./Constants/Constants";

const EndIcon = ({ fillColor = frenchGray, textColor = frenchGray, toggleColor, x = 430, y = 150 }) => {

    let rectangle = `M${x} ${y}
    v-24.06
    l55.22.395
    v23.665z`;
    
    let triangle = `M${x} ${y-24}
    l10.65 11.438-10.65 12.5`;
    
    return (

        <svg>
            <g strokeWidth="0.265" fillOpacity="1" onClick={toggleColor}
                style={{ cursor: "pointer" }}
            >
                {/* Clicking inside the path.  handle event ???? */}
                <path
                    fill="none"
                    stroke={fillColor}
                    d={rectangle}

                ></path>
                <path
                    fill={fillColor}
                    stroke="none"
                    d={triangle}
                ></path>
                <text
                    xmlSpace="preserve"
                    style={{ lineHeight: "1.25" }}
                    x={x+18}
                    y={y-9}
                    fill={textColor}
                    stroke="none"
                    fontFamily="sans-serif"
                    fontSize="10.583"
                    fontStyle="normal"
                    fontWeight="normal"
                > End
                </text>
            </g>
        </svg>

    );
}

export default EndIcon;
