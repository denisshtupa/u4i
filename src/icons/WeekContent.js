import React, { useState } from 'react';
import { lochmara, pistachio, white } from './Constants/Constants';
import LabIcon from './LabIcon';
import PathLine from './PathLine';
import PlayIcon from './PlayIcon';
import UsersAvatarIcon from './UsersAvatarIcon';

const WeekContent = ({ strokeColor = pistachio, startX, startY }) => {
    const [fill, setFill] = useState(pistachio);

    const direction = `v`;
    const lineLength = 40;
    const circleIconStep = 55;
    const circleRadius = 15;

    const toggle = () => {
        if (fill === pistachio) {
            setFill(white);
        } else if (fill === white) {
            setFill(pistachio);
        }
    }

    return (
        <svg >
            <PathLine strokeColor={strokeColor} startX={startX} startY={startY} length={lineLength} direction={direction}></PathLine>
            <UsersAvatarIcon />

            <LabIcon cx={startX} cy={startY + 55} strokeColor={fill} toggleColor={toggle} />

            <PathLine strokeColor={strokeColor} startX={startX} startY={startY + circleIconStep + circleRadius} length={lineLength} direction={direction}></PathLine>

            <PlayIcon strokeColor={fill} cx={startX} cy={startY + circleIconStep * 2 + circleRadius} toggleColor={toggle} />

            <PathLine strokeColor={strokeColor} startX={startX} startY={startY + circleIconStep * 2 + circleRadius * 2} length={lineLength} direction={direction} optional={true}></PathLine>

            <PlayIcon strokeColor={fill} cx={startX} cy={startY + circleIconStep * 3 + circleRadius*2} toggleColor={toggle} />

        </svg>
    )
}

export default WeekContent
