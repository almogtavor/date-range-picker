import React, { useState } from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/header.css';
import { setViewedYear } from "../actions";

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
        nearViewedMonths
    } = props;

    const [isHover, setIsHover] = useState({
        "month": false, 
        "year": false,
        "leftArrow": false,
        "rightArrow": false,
    });


    const isNearMonthBiggerAtOne = () => {
        if (nearViewedMonths.right.year) {
            return (((nearViewedMonths.right.month === viewedMonth + 1) && (nearViewedMonths.right.year === viewedYear)) || 
                ((nearViewedMonths.right.month === 0 && viewedMonth === 11) && nearViewedMonths.right.year === viewedYear + 1));
        } else {
            return false;
        }
    }

    const isNearMonthLowerAtOne = () => {
        if (nearViewedMonths.left.year) {
            return (((nearViewedMonths.left.month === viewedMonth - 1) && (nearViewedMonths.left.year === viewedYear)) || 
                ((nearViewedMonths.left.month === 11 && viewedMonth === 0) && nearViewedMonths.left.year === viewedYear - 1));
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
    <div className="header">
        <div className="info" style={language === "Hebrew" ? { "flexDirection": "row-reverse"}: {}}>
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
                onClick={!isNearMonthLowerAtOne() && (language === "Hebrew" ? increaseMonth : decreaseMonth)} 
                className={`arrow ${isNearMonthLowerAtOne() && "disabled"}`}
                onMouseEnter={() => hoverHandle("leftArrow", true)} 
                onMouseOut={() => hoverHandle("leftArrow", false)}
                style={isHover.leftArrow && !isNearMonthLowerAtOne() ? {"backgroundColor": selectedColor + "60"} : {}}
            >
                <img alt="" src={leftArrow} height="15px"/>
            </div>
            <div 
                onClick={!isNearMonthBiggerAtOne() && (language === "Hebrew" ? decreaseMonth : increaseMonth)} 
                className={`arrow ${isNearMonthBiggerAtOne() && "disabled"}`}
                onMouseEnter={() => hoverHandle("rightArrow", true)} 
                onMouseOut={() => hoverHandle("rightArrow", false)}
                style={isHover.rightArrow && !isNearMonthBiggerAtOne() ? {"backgroundColor": selectedColor + "60"} : {}}
            >
                <img alt="" src={rightArrow}  height="15px"/>
            </div>
        </div>
    </div>
    );
}