import React, { useState } from 'react';
import { lochmara, white, fontFamily, fontSize, spindle } from "./Constants/Constants";

const CircleIcon = ({ fillColor = lochmara, textColor = white, weekId = 1, percentage = 80, circleNumber = "1", toggleColor, cx = 215, cy = 138.5, r = 15 }) => {
    const [opacity, setOpacity] = useState(false);

    const circleWeek = "W";
    const random = Math.floor(Math.random() * 99) + 1;
    
    const handleOpacity = () => {
        opacity ? setOpacity(false) : setOpacity(true);
    }

    return (
        <svg >
            <g onClick={() => toggleColor(weekId, cx, cy)} id={weekId} onMouseEnter={handleOpacity} onMouseLeave={handleOpacity} style={{ cursor: "pointer", ...(opacity && { opacity: 0.8 }) }}>
                <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={fillColor}
                    stroke={fillColor === lochmara ? spindle : "none"}
                    strokeWidth="3"
                    strokeDasharray={`${random}, 200`}
                    transform={`rotate(-90 ${cx} ${cy})`}
                >
                    <animate
                        attributeName="stroke-dasharray"
                        values={`0 314;${random} 200`}
                        dur="2s"
                        fill="freeze" />
                </circle>

                <text
                    style={{ lineHeight: "1.25" }}
                    x={circleNumber > 9 ? cx - 10 : cx - 7.7}
                    y={cy + 3.1}
                    fill={textColor}
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    letterSpacing="0.5px"
                >
                    {`${circleWeek}${circleNumber}`}
                </text>
            </g>
        </svg>
    )
}

export default CircleIcon
