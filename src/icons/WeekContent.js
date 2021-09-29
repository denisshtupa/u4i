import React, { useState } from 'react';
import { pistachio, white } from './Constants/Constants';
import LabIcon from './LabIcon';
import LeftTextBox from './LeftTextBox';
import PathLine from './PathLine';
import PlayIcon from './PlayIcon';
import RightTextBox from './RightTextBox';
import TextSvg from './TextSvg';
import ToggleOff from './ToggleOff';
import ToggleOn from './ToggleOn';
import UsersAvatarIcon from './UsersAvatarIcon';

const WeekContent = ({ strokeColor = pistachio, startX, startY, xOfEnd, numberOfTopics = 5, numberOfWeeks = 3, visibleItem = {} }) => {
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

    const yOfToggleButton = startY + circleIconStep * calculateNumberOfPaths().length + circleRadius * calculateNumberOfPaths().length;

    const showIcons = () => {
        return calculateNumberOfPaths().map(icon => iconType(icon));
    }

    const iconType = (icon) => {
        console.log("🚀 ~ file: WeekContent.js ~ line 62 ~ iconType ~ icon", icon)

        let randomNumber = Math.floor(Math.random() * 3) + 1;

        switch (randomNumber) {
            case 1:
                return (<>
                            <PlayIcon key={Math.floor(Math.random() * 30000) + 1} cx={startX} cy={startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index} strokeColor={fill} toggleColor={toggle} /> 
                            <TextSvg x={(visibleItem.weekId - 9999) <= (numberOfWeeks/2) ? startX - 50 : startX + 20} y={(startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index) + 3} key={Math.floor(Math.random() * 30000) + 1} /> 
                        </>);
            case 2:
                return (<>
                            <UsersAvatarIcon key={Math.floor(Math.random() * 30000) + 1} cx={startX} cy={startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index} strokeColor={fill} toggleColor={toggle} /> 
                            <TextSvg x={(visibleItem.weekId - 9999) <= (numberOfWeeks/2) ? startX - 50 : startX + 20} y={(startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index) + 3} text={`${random() * randomNumber * 4} min`} key={Math.floor(Math.random() * 30000) + 1} /> 
                        </>);
            case 3:
                return (<>
                            <LabIcon key={Math.floor(Math.random() * 30000) + 1} cx={startX} cy={startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index} strokeColor={fill} toggleColor={toggle} /> 
                            <TextSvg x={(visibleItem.weekId - 9999) <= (numberOfWeeks/2) ? startX - 50 : startX + 20} y={(startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index) + 3} text={`45min`} key={Math.floor(Math.random() * 30000) + 1} /> 
                        </>);
            default:
                return (<>
                            <PlayIcon key={Math.floor(Math.random() * 30000) + 1} cx={startX} cy={startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index} strokeColor={fill} toggleColor={toggle} /> 
                            <TextSvg x={(visibleItem.weekId - 9999) <= (numberOfWeeks/2) ? startX - 50 : startX + 20} y={(startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index) + 3} key={Math.floor(Math.random() * 30000) + 1} /> 
                        </>);
        }
    }
    
    const showDetailsBox = () => {
        return calculateNumberOfPaths().map(textBox => detailsBoxDirection(textBox));
        // console.log("🚀 ~ file: WeekContent.js ~ line 65 ~ showDetailsBox ~ array", array)
        // console.log("🚀 ~ file: WeekContent.js ~ line 69 ~ showDetailsBox ~ numberOfWeeks", numberOfWeeks)
        // console.log("🚀 ~ file: WeekContent.js ~ line 69 ~ showDetailsBox ~ visibleItem", visibleItem)
    }
    
    const detailsBoxDirection = (icon) => {
        debugger
        if((visibleItem.weekId - 9999) <= (numberOfWeeks/2)) {
            const startYd = (startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index);
            console.log("🚀 ~ file: WeekContent.js ~ line 75 ~ detailsBoxDirection ~ startYd", startYd);
            return (<RightTextBox x={startX + 25 } y={startYd}/>)

        } else {
            const startYs = (startY + circleIconStep * (icon.index + 1) + circleRadius * icon.index);
            console.log("🚀 ~ file: WeekContent.js ~ line 79 ~ detailsBoxDirection ~ startYs", startYs);
            return (<LeftTextBox x={startX - 190 } y={startYs - 30}/>)
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
        toggleDetails === true ? setToggleDetails(false) : setToggleDetails(true);
    }

    return (
        <svg >
            {/* Calculate icons */}
            {
                showIcons()
            }
            
            {toggleDetails && 
                showDetailsBox()
            }

            {/* <LeftTextBox />
            
            <RightTextBox /> */}

            {/* Calculate path lines */}
            {
                calculateNumberOfPaths().map(topic =>
                    <PathLine strokeColor={strokeColor} length={topic.lineLength} startX={startX} startY={startY + circleIconStep * topic.index + circleRadius * topic.index} direction={topic.direction} optional={topic.optional} key={Math.floor(Math.random() * 30000) + 1} />
                )
            }


            {/* Toggle section */}
            {
                <>
                    {toggleDetails && (<><ToggleOn x={xOfEnd + 40} y={yOfToggleButton} onToggleClick={onToggleDetails} />
                        <TextSvg x={xOfEnd + 20} y={yOfToggleButton - 15} text={"Hide details"} key={Math.floor(Math.random() * 30000) + 1} /> </>)}

                    {!toggleDetails && (<><ToggleOff x={xOfEnd + 40} y={yOfToggleButton} onToggleClick={onToggleDetails} /> 
                        <TextSvg x={xOfEnd + 20} y={yOfToggleButton - 15} text={"View details"} key={Math.floor(Math.random() * 30000) + 1} /> </>)}
                </>
            }

        </svg>
    )
}

export default WeekContent
