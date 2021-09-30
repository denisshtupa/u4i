import React from 'react'
import { pathStrokeWidth, pistachio } from '../Constants/Constants';

const BranchRight = ({ x = 285, y = 130, verticalLineLength = 40, koefDev = 1 }) => {
    const deviation = 30;

    const pathD = `M${x} ${y}L${x + deviation * koefDev} ${y + deviation}v${verticalLineLength}l${-deviation *koefDev} ${deviation}`;

    // d="M15 0l15 15v40L15 70"
    
    return (
        <svg>
            <g>
                <path
                    fill="none"
                    stroke={pistachio}
                    strokeWidth={pathStrokeWidth}
                    d={pathD}
                ></path>
            </g>
        </svg>
    )
}

export default BranchRight
