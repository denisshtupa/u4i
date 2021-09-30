import React from 'react';
import { frenchGray, lochmara, white } from '../Constants/Constants';

const ToggleOn = ({ x = 300, y = 300, onToggleClick }) => {

    const pathD = `M${x} ${y}h11.575c5.599.212 6.744 9.772 0 10.809H${x}c-4.999-2.325-5.099-8.73 0-10.809z`;

    return (
        <svg>
            <g fillOpacity="1" strokeOpacity="1" onClick={onToggleClick} style={{ cursor: "pointer" }}>
                <path
                    fill={lochmara}
                    strokeWidth="0.297"
                    d={pathD}
                ></path>
                <circle
                    cx={x+11.201}
                    cy={y+5.466}
                    r="5.237"
                    fill={white}
                    stroke={frenchGray}
                ></circle>
            </g>
        </svg>
    )
}

export default ToggleOn
