import React from 'react'
import { fontFamily, white } from './Constants/Constants'

const LeftTextBox = ({ x = 200, y = 200 }) => {
  
  const pathD = `M${x} ${y}l154.471-.14v20.485l5.753 9.203-5.753 8.646v20.345l-154.401.07z`;
  const lineHeight = 8;
  return (
    <svg>
      <defs>
        <filter
          id="filter5134"
          width="1.011"
          height="1.032"
          x="-0.005"
          y="-0.016"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="0.149"></feGaussianBlur>
        </filter>
      </defs>
      <g>
        <g>
          <path
            fill="none"
            stroke="#000"
            strokeWidth="0.265"
            d={pathD}
            filter="url(#filter5134)"
            opacity="0.25"
          ></path>
          <text
            style={{ lineHeight: "1.25" }}
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeWidth="0.150"
            fontFamily="sans-serif"
            fontSize="5"
          >
            <tspan x={x+9} y={y+11} strokeWidth="0.108">
              what does tsa{" "}
            </tspan>
            <tspan x={x+9} y={y+11+lineHeight} strokeWidth="0.108">
              sdad esa
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}

export default LeftTextBox
