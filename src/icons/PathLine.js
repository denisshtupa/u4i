import { lochmara, pathStrokeWidth } from './Constants/Constants';
import React from 'react';

const PathLine = ({ strokeColor = lochmara, toggleStroke, startX = 140, startY = 138.5, length = 60, direction = "h", optional = false, ...props }) => {

    return (
        <svg>
            <g onClick={toggleStroke} style={{ cursor: "pointer" }}>
                <path
                    stroke={strokeColor}
                    strokeWidth={pathStrokeWidth}
                    strokeDasharray={optional ? "3.8 1.3" : "none"}
                    d={`M${startX} ${startY}${direction}${length}`}
                ></path>
            </g>
        </svg>
    )
}

export default PathLine






