import React from 'react'
import { fontFamily, fontSize, lochmara } from '../Constants/Constants'

const TextSvg = ({x = 78, y = 125, text = "10 min", textColor = lochmara, toggleColor }) => {

    return (
        <svg>
            <g onClick={toggleColor}
                style={{ cursor: "pointer" }}>
                <text
                    x={x}
                    y={y}
                    fill={textColor}
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                >
                    {text}
                </text>
            </g>
        </svg>
    )
}

export default TextSvg
