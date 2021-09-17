import React from 'react';

const ToggleOff = ({ x = 300, y = 300, onToggleClick }) => {
    return (
        <svg>
            <g fillOpacity="1" strokeOpacity="1" onClick={onToggleClick}
                style={{ cursor: "pointer" }}>
                <path
                    fill="#b6b5bd"
                    stroke="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeWidth="0.302"
                    d="M33.047 21.274h11.976c5.792.212 6.977 9.771 0 10.809H33.047c-4.239-.814-4.362-10.886 0-10.809z"
                ></path>
                <circle
                    cx="33.766"
                    cy="26.669"
                    r="5.237"
                    fill="#fff"
                    stroke="#727177"
                    strokeDasharray="none"
                    strokeMiterlimit="4"
                    strokeWidth="0.486"
                ></circle>
            </g>
        </svg>
    )
}

export default ToggleOff