import React, { useState } from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/header.css';

const leftArrow = require('../images/arrow-left.png');
const rightArrow = require('../images/arrow-right.png');

export const Header = (props) => {
    const {
        selectedColor, 
        viewedMonth, 
        viewedYear, 
        setViewedYear, 
        setViewedMonth, 
        setMode, 
        language, 
        startYear, 
        endYear,
        nearViewedMonths,
    } = props;

    const [isHover, setIsHover] = useState({
        "month": false, 
        "year": false,
        "leftArrow": false,
        "rightArrow": false,
    });

    const isNearMonthBiggerAtOne = () => {
        if (nearViewedMonths.right.year) {
            return (
                new Date(viewedYear, viewedMonth + 2, 0) > 
                new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0)
            );
        } else {
            return false;
        }
    }

    const isNearMonthLowerAtOne = () => {
        if (nearViewedMonths.left.year) {
            return (
                new Date(viewedYear, viewedMonth - 2, 0) < 
                new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 0)
            );
        } else {
            return false;
        }
    }

    const monthHandler = () => {
        setMode("Months");
    };

    const yearHandler = () => {
        setMode("Years");
    };

    const decreaseMonth = () => {
        if (!isNearMonthLowerAtOne()) {
            if (viewedMonth === 0) {
                if (viewedYear - 1 > startYear) {
                    setViewedYear((viewedYear - 1));
                    setViewedMonth(Math.abs((viewedMonth + 12 - 1) % 12));    
                }
            } else {
                setViewedMonth(Math.abs((viewedMonth + 12 - 1) % 12));
            }
        }
    };
    
    const increaseMonth = () => {
        if (!isNearMonthBiggerAtOne()) {
            if (viewedMonth === 11) {
                if (viewedYear + 1 < endYear) {
                    setViewedYear((viewedYear + 1));
                    setViewedMonth(Math.abs((viewedMonth + 1) % 12));    
                }
            } else {
                setViewedMonth(Math.abs((viewedMonth + 1) % 12));
            }
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
        // TODO: check if this is really needed.
    }  

    return (
    <div className="header" style={language === "Hebrew" ? { "flexDirection": "row-reverse"}: {}}>
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
                className={`arrow ${(language === "Hebrew" ? isNearMonthBiggerAtOne() : isNearMonthLowerAtOne()) && "disabled"}`}
                onMouseEnter={() => hoverHandle("leftArrow", true)} 
                onMouseOut={() => hoverHandle("leftArrow", false)}
                style={
                    isHover.leftArrow && 
                        (language === "Hebrew" ? 
                            !isNearMonthBiggerAtOne() : 
                            !isNearMonthLowerAtOne()) ? 
                        {"backgroundColor": selectedColor + "60"} : 
                        {}
                }
            >
                <img alt="" src={leftArrow} height="18px"/>
            </div>
            <div 
                onClick={language === "Hebrew" ? decreaseMonth : increaseMonth} 
                className={`arrow ${(language === "Hebrew" ? isNearMonthLowerAtOne() : isNearMonthBiggerAtOne()) && "disabled"}`}
                onMouseEnter={() => hoverHandle("rightArrow", true)} 
                onMouseOut={() => hoverHandle("rightArrow", false) }
                style={
                    isHover.rightArrow && 
                        (language === "Hebrew" ? 
                            !isNearMonthLowerAtOne() :  
                            !isNearMonthBiggerAtOne()) ? 
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