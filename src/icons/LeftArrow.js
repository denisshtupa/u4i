import React from 'react';
import { frenchGray } from './Constants/Constants';

const LeftArrow = ({ x = 100, y = 400, onPreviousWeek }) => {

    const pathD = `M${x} ${y}l-19.058,19.523c-0.906,0.799,-2.018,3.296,0.31,4.958l19.073,17.88c3.544,0.04,7.509,1.684,6.678,-6.105l-14.905,-14.563l14.874,-16.377c-0.467,-2.687,0.367,-6.43,-6.972,-5.315z`
    return (
        <svg>
            <g style={{ cursor: "pointer" }} onClick={onPreviousWeek}>
                <path
                    fill={frenchGray}
                    fillOpacity="0.8"
                    d={pathD}
                ></path>
            </g>
        </svg>
    )
}

export default LeftArrow
