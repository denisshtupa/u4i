import React from 'react';
import { lochmara, white, fontFamily, fontSize, spindle, pistachio } from "./Constants/Constants";


const PlayIcon = ({ cx = 250, cy = 250, strokeColor = pistachio, toggleColor, ...props }) => {
    const radius = 15;
    const pathD = `M${cx - 2.025} ${cy - 6.217}v12.618l6.8-6.309z`
    return (
        <svg>
            {/* <g>
                <ellipse
                    cx={cx}
                    cy={cy}
                    fill={fillColor}
                    stroke={fillColor === pistachio ? "none" : lochmara}
                    strokeWidth="0.172"
                    rx={r}
                    ry={r}
                ></ellipse>
                <path
                    fill={fillColor === pistachio ? white : lochmara}
                    stroke="red"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.149"
                    d={`M${cx + 109} ${cy + 50} 58.383v12.618l6.8-6.309z`}
                ></path>
            </g> */}


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
                // d="M${cx} ${cy}v12.618l6.8-6.309z"
                ></path>
            </g>
        </svg>
    )
}

export default PlayIcon
