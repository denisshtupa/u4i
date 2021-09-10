import { lochmara, frenchGray } from './Constants/Constants';
import React from 'react';


const PathLine = ({ strokeColor = lochmara, toggleStroke, startX = 140, startY = 138.5, length = 60, direction = "h", optional = false, ...props }) => {

    return (

        <svg>
            <g onClick={toggleStroke} style={{ cursor: "pointer" }}>
                <path
                    stroke={strokeColor}
                    strokeMiterlimit="4"
                    strokeOpacity="0.9"
                    strokeWidth="2.5"
                    strokeDasharray={ optional ? "4 1.5" : "none"}
                    d={`M${startX} ${startY}${direction}${length}`}
                ></path>
            </g>
        </svg>
    )
}

export default PathLine






