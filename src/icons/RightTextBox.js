import React from 'react';

const RightTextBox = ({ x = 200, y = 200 }) => {
    const pathD = `M${x},${y}l5.368,-9.622v-5.927h154.471v30.818h-154.401v-6.066z`;

    const lineHeight = 8;

    return (
        <svg>
            <defs>
                <filter
                    id="filter6337"
                    width="1.006"
                    height="1.016"
                    x="-0.003"
                    y="-0.008"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur stdDeviation="0.149"></feGaussianBlur>
                </filter>
            </defs>
            <g>
                <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="0.265"
                    d={pathD}
                    filter="url(#filter6337)"
                    opacity="0.25"
                ></path>
                <text
                    style={{ lineHeight: "1.25" }}
                    fill="#000"
                    fillOpacity="1"
                    stroke="none"
                    strokeWidth="0.109"
                    fontFamily="sans-serif"
                    fontSize="4.351"
                >
                    <tspan x={x+11} y={y-4} strokeWidth="0.109">
                        Denis text{" "}
                    </tspan>
                    <tspan x={x+11} y={y-4+lineHeight}  strokeWidth="0.109">
                        test lines
                    </tspan>
                    {/* <tspan x={x+9} y={y+11+lineHeight*2}  strokeWidth="0.109">
                        three
                    </tspan> */}
                </text>
            </g>
        </svg>
    )
}

export default RightTextBox
