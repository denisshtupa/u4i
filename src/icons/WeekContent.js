import React, { useState } from 'react';
import { pistachio, white } from './Constants/Constants';
import LabIcon from './LabIcon';
import PathLine from './PathLine';
import PlayIcon from './PlayIcon';
import TextSvg from './TextSvg';
import ToggleOff from './ToggleOff';
import ToggleOn from './ToggleOn';
import UsersAvatarIcon from './UsersAvatarIcon';

const WeekContent = ({ strokeColor = pistachio, startX, startY, numberOfTopics = 5 }) => {
    const [fill, setFill] = useState(pistachio);

    const [toggleDetails, setToggleDetails] = useState(false);

    const verticalDirection = `v`;
    const lineLength = 70;
    const circleIconStep = 85;
    const circleRadius = 15;

    const random = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    const calculateNumberOfPaths = () => {
        let pathIndexes = [];
        for (var i = 0; i < numberOfTopics; i++) {
            let topicLineObject = {
                direction: verticalDirection,
                optional: random() > 2 ? true : false,
                lineLength: lineLength,
                index: i
            }
            pathIndexes.push(topicLineObject)
        }

        return pathIndexes;
    }

    const showIcons = () => {
        return calculateNumberOfPaths().map(icon => iconType(icon));
    }

    const iconType = (icon) => {
        let randomNumber = Math.floor(Math.random() * 3) + 1;

        switch (randomNumber) {
            case 1:
                return (<><PlayIcon key={Math.floor(Math.random() * 30000) + 1} cx={startX} cy={startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index} strokeColor={fill} toggleColor={toggle} /> <TextSvg x={startX - 60} y={(startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index) + 3} key={Math.floor(Math.random() * 30000) + 1} /> </>);
            case 2:
                return (<><UsersAvatarIcon key={Math.floor(Math.random() * 30000) + 1} cx={startX} cy={startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index} strokeColor={fill} toggleColor={toggle} /> <TextSvg x={startX - 60} y={(startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index) + 3} text={`${random() * randomNumber * 4} min`} key={Math.floor(Math.random() * 30000) + 1} /> </>);
            case 3:
                return (<><LabIcon key={Math.floor(Math.random() * 30000) + 1} cx={startX} cy={startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index} strokeColor={fill} toggleColor={toggle} /> <TextSvg x={startX - 60} y={(startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index) + 3} text={`45min`} key={Math.floor(Math.random() * 30000) + 1} /> </>);
            default:
                return (<><PlayIcon key={Math.floor(Math.random() * 30000) + 1} cx={startX} cy={startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index} strokeColor={fill} toggleColor={toggle} /> <TextSvg x={startX - 60} y={(startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index) + 3} key={Math.floor(Math.random() * 30000) + 1} /> </>);
        }
    }

    const toggle = () => {
        if (fill === pistachio) {
            setFill(white);
        } else if (fill === white) {
            setFill(pistachio);
        }
    }

    const onToggleDetails = () => {
        debugger
        toggleDetails === true ? setToggleDetails(false) : setToggleDetails(true);
    }


    return (
        <svg >
            {
                showIcons()
            }

            {/* <LabIcon cx={startX} cy={startY + circleIconStep} strokeColor={fill} toggleColor={toggle} />

            <PlayIcon cx={startX} cy={startY + circleIconStep * 2 + circleRadius} strokeColor={fill} toggleColor={toggle} />

            <PlayIcon cx={startX} cy={startY + circleIconStep * 3 + circleRadius * 2} strokeColor={fill} toggleColor={toggle} />

            <UsersAvatarIcon cx={startX} cy={startY + circleIconStep * 4 + circleRadius * 3} strokeColor={fill} toggleColor={toggle} /> */}

            {
                calculateNumberOfPaths().map(topic =>
                    <PathLine strokeColor={strokeColor} length={topic.lineLength} startX={startX} startY={startY + circleIconStep * topic.index + circleRadius * topic.index} direction={topic.direction} optional={topic.optional} key={Math.floor(Math.random() * 30000) + 1} />
                )
            }

            {
                <>
                    {toggleDetails && <ToggleOn onToggleClick={onToggleDetails}/>}

                    {!toggleDetails && <ToggleOff onToggleClick={onToggleDetails}/>}
                </>
            }

            {/* <PathLine strokeColor={strokeColor} startX={startX} startY={startY}  direction={verticalDirection}></PathLine>

            <PathLine strokeColor={strokeColor} startX={startX} startY={startY + circleIconStep + circleRadius} length={lineLength} direction={verticalDirection}></PathLine>

            <PathLine strokeColor={strokeColor} startX={startX} startY={startY + circleIconStep * 2 + circleRadius * 2} length={lineLength} direction={verticalDirection} optional={true}></PathLine>
            
            <PathLine strokeColor={strokeColor} startX={startX} startY={startY + circleIconStep * 3 + circleRadius * 3} length={lineLength} direction={verticalDirection} optional={true}></PathLine> */}
        </svg>
    )
}

export default WeekContent
