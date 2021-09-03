import React from "react";
import { frenchGray, white, fontFamily, fontSize } from "./Constants/Constants";

const EndIcon = ({ fillColor = frenchGray, textColor = frenchGray, toggleColor, x = 430, y = 150 }) => {

    let rectangle = `M${x} ${y}
    v-24.06
    l55.22.395
    v23.665z`;
    
    let triangle = `M${x} ${y-24}
    l10.65 11.438-10.65 12.5`;
    
    return (

        <svg>
            <g onClick={toggleColor}
                style={{ cursor: "pointer" }}
            >
                <path
                    fill={white}
                    stroke={fillColor}
                    d={rectangle}
                ></path>
                <path
                    fill={fillColor}
                    d={triangle}
                ></path>
                <text
                    x={x+21}
                    y={y-9}
                    fill={textColor}
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                > End
                </text>
            </g>
        </svg>

    );
}

export default EndIcon;
