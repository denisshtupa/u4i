import React from 'react'
import { lochmara, pathStrokeWidth } from '../Constants/Constants'

const BranchLeft = ({ x = 285, y = 130, verticalLineLength = 40, koefDev = 1 }) => {
    const deviation = 30;
    const pathD = `M${x} ${y}L${x - deviation * koefDev} ${y + deviation}v${verticalLineLength}l${deviation * koefDev} ${deviation}`;
    
    return (
        <svg>
            <g>
                <path
                    fill="none"
                    stroke={lochmara}
                    strokeWidth={pathStrokeWidth}
                    d={pathD}
                ></path>
            </g>
        </svg>
    )
}

export default BranchLeft
