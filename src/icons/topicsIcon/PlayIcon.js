import React from 'react';
import { lochmara, white, pistachio } from "../Constants/Constants";


const PlayIcon = ({ cx = 250, cy = 250, strokeColor = pistachio, toggleColor, ...props }) => {

    const radius = 15;
    const pathD = `M${cx - 2.025} ${cy - 6.217}v12.618l6.8-6.309z`
    return (
        <svg>
            <g onClick={toggleColor} style={{ cursor: "pointer" }}>
                <circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill={strokeColor === pistachio ? pistachio : white}
                    stroke={strokeColor === pistachio ? "none" : lochmara}
                    strokeWidth="1.3"
                ></circle>
                <path
                    fill={strokeColor === pistachio ? white : lochmara}
                    stroke={strokeColor === pistachio ? white : lochmara}
                    strokeWidth="0.9"
                    d={pathD}
                ></path>
            </g>
        </svg>
    )
}

export default PlayIcon