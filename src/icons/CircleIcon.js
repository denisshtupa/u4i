import React, { useEffect, useState } from 'react';
import { lochmara, white, fontFamily, fontSize, spindle } from "./Constants/Constants";

const CircleIcon = ({ fillColor = lochmara, textColor = white, percentage = 80, circleNumber = "1", toggleColor, cx = 215, cy = 138.5, r = 15 }) => {

    const circleWeek = "W";
    
    let perc = Math.floor(Math.random() * 90) + 1;

    const [opacity, setOpacity] = useState(false);

    const handleOpacity = () => {
        opacity ? setOpacity(false) : setOpacity(true);
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         progressB();
    //     }, 1000);
    // },[])

    return (
        <svg >
            <g onClick={toggleColor} onMouseEnter={handleOpacity} onMouseLeave={handleOpacity} style={{ cursor: "pointer", ...(opacity && { opacity: 0.8 }) }}>
                <circle

                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={fillColor}
                    stroke={fillColor === lochmara ? spindle : "none"}
                    // strokeLinecap="round"
                    // strokeOpacity="1"
                    strokeWidth="3"
                    strokeDasharray={`${perc}, 200`}
                    // strokeDashoffset={80}
                    transform={`rotate(-90 ${cx} ${cy})`}
                >
                    <animate
                        attributeName="stroke-dasharray"
                        values={`0 314;${perc} 200`}
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
