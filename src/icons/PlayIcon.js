import React from 'react';
import { lochmara, white, fontFamily, fontSize, spindle, pistachio } from "./Constants/Constants";


const PlayIcon = ({ fillColor = lochmara, textColor = white, weekId = 1, percentage = 80, circleNumber = "1", toggleColor, cx = 245, cy = 150, r = 15 }) => {
    return (
        <svg>
            <g>
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
                    d={`M${cx+109} ${cy+50} 58.383v12.618l6.8-6.309z`}
                ></path>
            </g>
        </svg>
    )
}

export default PlayIcon
