import React, { useState } from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/dates-header.css';
import { useEndDate, useStartDate, useLanguage } from "../context/InitialParametersContext";

const leftArrow = require('../images/arrow-left.png');
const rightArrow = require('../images/arrow-right.png');

export const DatesHeader = (props) => {
    const {
        selectedColor, 
        viewedMonth, 
        viewedYear, 
        setViewedYear, 
        setViewedMonth, 
        setMode, 
        nearViewedMonths,
    } = props;

    const language = useLanguage();
    const startDate = useStartDate();
    const endDate = useEndDate();
    const [isHover, setIsHover] = useState({
        "month": false, 
        "year": false,
        "leftArrow": false,
        "rightArrow": false,
    });

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

    const monthHandler = () => {
        setMode("Months");
    };

    const yearHandler = () => {
        setMode("Years");
    };

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

    const hoverHandle = (param, hasEntered) => {
        if (hasEntered) {
            let allFalse = true;
            for (let key in isHover){
                if (isHover[key]) {
                    allFalse = false;
                }
            }
            if (allFalse) {
                setIsHover({...isHover, [param]: hasEntered});
            }
        } else {
            setIsHover({...isHover, [param]: hasEntered});
        }
    }  

    return (
    <div className="header" lang={language}>
        <div className="info">
            <div 
                className="month" 
                onMouseEnter={() => hoverHandle("month", true)} 
                onMouseOut={() => hoverHandle("month", false)} 
                onClick={monthHandler} 
                style={isHover.month ? {"backgroundColor": selectedColor + "60"} : {}}
            >
                {calendarConfig.months[language][viewedMonth]}
            </div>
            <div 
                className="year" 
                onMouseEnter={() => hoverHandle("year", true)} 
                onMouseOut={() => hoverHandle("year", false)} 
                onClick={yearHandler} 
                style={isHover.year ? {"backgroundColor": selectedColor + "60"} : {}}
            >
                {viewedYear}
            </div>
            </div>
            <div className="header-icons">
            <div 
                onClick={language === "Hebrew" ? increaseMonth : decreaseMonth} 
                className={`arrow ${(language === "Hebrew" ? !canIncrease() : !canDecrease()) && "disabled"}`}
                onMouseEnter={() => hoverHandle("leftArrow", true)} 
                onMouseOut={() => hoverHandle("leftArrow", false)}
                style={
                    isHover.leftArrow && 
                        (language === "Hebrew" ? 
                            canIncrease() : 
                            canDecrease()) ? 
                        {"backgroundColor": selectedColor + "60"} : 
                        {}
                }
            >
                <img alt="" src={leftArrow} height="18px"/>
            </div>
            <div 
                onClick={language === "Hebrew" ? decreaseMonth : increaseMonth} 
                className={`arrow ${(language === "Hebrew" ? !canDecrease() : !canIncrease()) && "disabled"}`}
                onMouseEnter={() => hoverHandle("rightArrow", true)} 
                onMouseOut={() => hoverHandle("rightArrow", false) }
                style={
                    isHover.rightArrow && 
                        (language === "Hebrew" ? 
                            canDecrease() :  
                            canIncrease()) ? 
                        {"backgroundColor": selectedColor + "60"} : 
                        {}
                    }
            >
                <img alt="" src={rightArrow}  height="18px"/>
            </div>
        </div>
    </div>
    );
}

export default React.memo(DatesHeader);