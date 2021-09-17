import React from 'react';
import { frenchGray, lochmara, white } from './Constants/Constants';

const ToggleOn = ({ x = 300, y = 300, onToggleClick }) => {

    const pathD = `M${x} ${y}h9.661c3.529,0.297,3.194,6.481,0,6.785h-9.66c-3.42,-0.51,-3.519,-6.833,0,-6.785z`;
    
    // d="M32.423 21.274h9.661c3.529.297 3.194 6.481 0 6.785h-9.66c-3.42-.51-3.519-6.833 0-6.785z"

    return (
        <svg>
            <g fillOpacity="1" strokeOpacity="1" onClick={onToggleClick}
                style={{ cursor: "pointer" }}>
                <path
                    fill={lochmara}
                    strokeWidth="0.297"
                    d={pathD}
                ></path>
                <circle
                    cx={x + 11.966}
                    cy={y + 5.466}
                    r="5.237"
                    fill={white}
                    stroke={frenchGray}
                    strokeWidth="0.486"
                ></circle>
            </g>
        </svg>
    )
}

export default ToggleOn
