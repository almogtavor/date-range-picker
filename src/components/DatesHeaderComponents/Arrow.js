import React, { useState } from "react";
import '../../styles/DatesHeaderStyles/arrow.css';
import { useEndDate, useStartDate, useLanguage } from "../../context/InitialParametersContext";

const arrowImages = {
    "leftArrow": require('../../images/arrow-left.png'),
    "rightArrow": require('../../images/arrow-right.png'),
} 

export const Arrow = (props) => {
    const {
        nearViewedMonths,
        viewedMonth,
        viewedYear,
        setViewedMonth,
        setViewedYear,
        selectedColor, 
        arrowSide,
    } = props;

    const arrowSideImg = arrowImages[arrowSide];
    const language = useLanguage();
    const startDate = useStartDate();
    const endDate = useEndDate();
    const [isHover, setIsHover] = useState(false);
    let changeMonth, canChange;

    const canIncrease = () => {
        const isNearMonthNotBlocks = (nearViewedMonths.right.year) ?            
                new Date(viewedYear, viewedMonth + 2, 0) <= 
                new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0) : 
                true;
        const isSmallerThanEndDate = new Date(viewedYear, viewedMonth + 1, 0) < endDate;
        return isNearMonthNotBlocks && isSmallerThanEndDate;
    }

    const canDecrease = () => {
        const isNearMonthNotBlocks = (nearViewedMonths.left.year) ?            
                new Date(viewedYear, viewedMonth - 2, 0) >= 
                new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 0) : 
                true;
        const isBiggerThanStartDate = new Date(viewedYear, viewedMonth - 1, 0) > startDate;
        return isNearMonthNotBlocks && isBiggerThanStartDate;
    }

    const decreaseMonth = () => {
        if (canDecrease()) {
            if (viewedMonth === 0) {
                setViewedYear((viewedYear - 1));   
            }
            setViewedMonth(Math.abs((viewedMonth + 12 - 1) % 12));
        }
    };
    
    const increaseMonth = () => {
        if (canIncrease()) {
            if (viewedMonth === 11) {
                setViewedYear((viewedYear + 1));
            }
            setViewedMonth(Math.abs((viewedMonth + 1) % 12));
        }
    };

    const hoverHandle = (hasEntered) => () => {
        setIsHover(hasEntered)
    }

    if ((language === "Hebrew" && arrowSide === "leftArrow") || (language !== "Hebrew" && arrowSide === "rightArrow")) {
        changeMonth = increaseMonth;
        canChange = canIncrease;
    } else {
        changeMonth = decreaseMonth;
        canChange = canDecrease;
    }
    const style = isHover && canChange() ?
            {"backgroundColor": selectedColor + "60"} : 
            {};
    const arrowClassName = `arrow ${!canChange() && "disabled"}`;

    return (
            <div 
                onClick={changeMonth} 
                className={arrowClassName}
                onMouseEnter={hoverHandle(true)} 
                onMouseOut={hoverHandle(false)}
                style={style}
            >
                <img alt="" src={arrowSideImg} height="18px"/>
            </div>
    );
}