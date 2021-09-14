import React from 'react'
import { lochmara, pistachio, white } from './Constants/Constants';

const UsersAvatarIcon = ({ cx = 250, cy = 250, strokeColor = pistachio, toggleColor, ...props }) => {
    const radius = 15;
    const pathD1 = `M${cx - 0.88} ${cy + 3.24}2h-3.294v-1.086c0-.844.95-1.56 1.78-1.56h1.514m0 2.646h3.293v-1.086c0-.844-.95-1.56-1.78-1.56H${cx - 0.88}m1.587-2.666a1.637 1.637 0 01-1.637 1.637 1.637 1.637 0 01-1.637-1.637 1.637 1.637 0 011.637-1.637 1.637 1.637 0 011.637 1.637z`
    const pathD2 = `M${cx + 2.06} ${cy - 3.71}a1.637 1.637 0 00-1.153.474 1.637 1.637 0 01.484 1.163 1.637 1.637 0 01-.485 1.162 1.637 1.637 0 001.154.475 1.637 1.637 0 001.636-1.637 1.637 1.637 0 00-1.636-1.637zm-.742 4.304c.83 0 1.78.715 1.78 1.56v1.084h2.305v-1.085c0-.844-.95-1.559-1.78-1.559h-1.514z`

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
                    fill={strokeColor === pistachio ? white : lochmara}
                    stroke={strokeColor === pistachio ? white : lochmara}
                    strokeWidth="0.097"
                >
                    <path
                        d={pathD1}
                        opacity="1"
                    ></path>
                    <path
                        d={pathD2}
                        opacity="1"
                    ></path>
                </g>
            </g>
        </svg>
    )
}

export default UsersAvatarIcon
