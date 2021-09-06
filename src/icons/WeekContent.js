import React from 'react';
import { lochmara, pistachio } from './Constants/Constants';
import LabIcon from './LabIcon';
import PathLine from './PathLine';
import PlayIcon from './PlayIcon';
import UsersAvatarIcon from './UsersAvatarIcon';

const WeekContent = ({ strokeColor = pistachio, startX, startY }) => {
    const direction = `v`;
    const lineLength = 40;

    return (
        <svg >
            <PathLine strokeColor={strokeColor} startX={startX} startY={startY} length={lineLength} direction={direction}></PathLine>

            <PlayIcon fillColor={strokeColor} />

            <UsersAvatarIcon />

            <LabIcon cx={startX} cy={startY+55}/>

        </svg>
    )
}

export default WeekContent
