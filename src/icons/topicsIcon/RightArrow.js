import React from 'react';
import { frenchGray } from '../Constants/Constants';

const RightArrow = ({ x = 200, y = 400, onNextWeek }) => {
    const pathD = `M${x} ${y}l13.528,14.363l-14.225,15.34c-0.002,4.399,1.437,7.487,7.53,6.345l18.757,-20.29c1.267,-1.248,1.736,-2.542,-0.14,-3.974l-18.756,-18.756c-5.87,-0.644,-7.888,1.853,-6.693,6.972z`;
    return (
        <svg>
            <g style={{ cursor: "pointer" }} onClick={onNextWeek}>
                <path
                    fill={frenchGray}
                    fillOpacity="0.8"
                    d={pathD}
                ></path>
            </g>
        </svg>
    )
}

export default RightArrow
