import React from 'react';
import { frenchGray, white } from './Constants/Constants';

const ToggleOff = ({ x = 300, y = 300, onToggleClick }) => {
    
    const pathD = `M${x} ${y}h11.976c5.792.212 6.977 9.771 0 10.809H${x}c-4.239-.814-4.362-10.886 0-10.809z`
    
    return (
        <svg>
            <g fillOpacity="1" strokeOpacity="1" onClick={onToggleClick} style={{ cursor: "pointer" }}>
                <path
                    fill={frenchGray}
                    strokeWidth="0.302"
                    d={pathD}
                ></path>
                <circle
                    cx={x+0.719}
                    cy={y+5.395}
                    r="5.237"
                    fill={white}
                    stroke={frenchGray}
                    strokeWidth="0.486"
                ></circle>
            </g>
        </svg>
    )
}

export default ToggleOff