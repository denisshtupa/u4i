import { lochmara, frenchGray } from './Constants/Constants';
import React from 'react';


const PathLine = ({ strokeColor = lochmara, toggleStroke, source = "77.976", target = "230.61",  length = "h122.271" }) => {

    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
        >
            <g onClick={toggleStroke} style={{ cursor: "pointer" }}>
                <path
                    fill="none"
                    fillOpacity="1"
                    stroke={strokeColor}
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    strokeWidth="2"
                    d={"M" + source + " " + target + length}
                ></path>
            </g>
        </svg>
    )
}

export default PathLine






