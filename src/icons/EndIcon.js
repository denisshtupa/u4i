import React, { useState } from "react";
import { Fragment } from "react";
import { lochmara, frenchGray, white } from "./Constants/Constants";

const EndIcon = ({ fillColor = frenchGray, textColor = frenchGray, toggleColor }) => {

    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
        >
            <g strokeWidth="0.265" fillOpacity="1" onClick={toggleColor}
                style={{ cursor: "pointer" }}
            >
                {/* Clicking inside the path do not handle event */}
                <path
                    fill="none"
                    stroke={fillColor}
                    d="M78.49 193.661v-24.06l55.22.395v23.665z"

                ></path>
                <path
                    fill={fillColor}
                    stroke="none"
                    d="M78.49 169.602l10.65 11.438-10.65 12.621"
                ></path>
                <text
                    xmlSpace="preserve"
                    style={{ lineHeight: "1.25" }}
                    x="98.211"
                    y="185.378"
                    fill={textColor}
                    stroke="none"
                    fontFamily="sans-serif"
                    fontSize="10.583"
                    fontStyle="normal"
                    fontWeight="normal"
                >
                    End
                </text>
            </g>
        </svg>

    );
}

export default EndIcon;
