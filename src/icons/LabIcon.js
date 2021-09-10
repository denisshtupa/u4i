import React from 'react'
import { lochmara, pistachio, white } from './Constants/Constants';

const LabIcon = ({ cx = 250, cy = 250, strokeColor = pistachio, toggleColor, ...props }) => {

    const radius = 15;
    const pathDInk = `M${cx + 0.587} ${cy - 4.093}H${cx - 0.5}v2.079s-2.087 4.234-2.504 5.126c-.417.892-.004.945.496.945h3.095m0-8.15h1.087v2.079s2.086 4.234 2.504 5.126c.417.892.004.945-.496.945h-3.095`;
    const pathDSine = `M${cx - 1.034} ${cy + 1.5}s.758 1.082 1.603 0 1.603 0 1.603 0`;

    return (
        <svg>
            <g onClick={toggleColor} style={{ cursor: "pointer" }}>
                <circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill={strokeColor === pistachio ? pistachio : white}
                    stroke={strokeColor === pistachio ? "none" : lochmara}
                    strokeWidth="1.3"
                ></circle>
                <g
                    fill="none"
                    stroke={strokeColor === pistachio ? white : lochmara}
                    strokeOpacity="1"
                >
                    <path
                        strokeWidth="0.9"
                        d={pathDInk}
                    // d="M187.587 90.707H186.5v2.079s-2.087 4.234-2.504 5.126c-.417.892-.004.945.496.945h3.095m0-8.15h1.087v2.079s2.086 4.234 2.504 5.126c.417.892.004.945-.496.945h-3.095"
                    ></path>
                    <path
                        strokeWidth="0.7"
                        d={pathDSine}
                    // d="M185.966 96.006s.758 1.082 1.603 0 1.603 0 1.603 0"
                    ></path>
                </g>
            </g>
        </svg>
    )
}

export default LabIcon
