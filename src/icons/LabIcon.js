import React from 'react'

const LabIcon = ({ cx = 150, cy = 150, ...props}) => {
    
    const radius = 15;
    const pathD = `M${cx-37.5} ${cy+11.5}H${cx-39.5}v2.079s-2.087 4.234-2.504 5.126c-.417.892-.004.945.496.945h3.095m0-8.15h1.087v2.079s2.086 4.234 2.504 5.126c.417.892.004.945-.496.945h-3.095`;

    
    
    return (
        <svg>
            <g>
                <circle
                    cx={cx}
                    cy={cy}
                    r={15}
                    fill="#b6b5bd"
                    stroke="#b6b5bd"
                    strokeWidth="0.743"
                ></circle>
                <g
                    fill="none"
                    stroke="#000"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    transform="matrix(1.28332 0 0 1.28332 -31.764 -79.429)"
                >
                    <path
                        strokeWidth="0.7"
                        d={pathD}
                        // d="M67.587 100.707H66.5v2.079s-2.087 4.234-2.504 5.126c-.417.892-.004.945.496.945h3.095m0-8.15h1.087v2.079s2.086 4.234 2.504 5.126c.417.892.004.945-.496.945h-3.095"
                    ></path>
                    <path
                        strokeWidth="0.5"
                        d={`M${cx-40} ${cy+17}s.758 1.082 1.603 0 1.603 0 1.603 0`}
                    ></path>
                </g>
            </g>
        </svg>
    )
}

export default LabIcon
