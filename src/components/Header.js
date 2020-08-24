import React, { useState } from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/header.css';

const leftArrow = require('../images/arrow-left.png');
const rightArrow = require('../images/arrow-right.png');

export const Header = (props) => {
    const {selectedColor, viewedMonth, viewedYear, setViewedMonth, setMode, language} = props;
    const [isHover, setIsHover] = useState({
        "month": false, 
        "year": false,
        "leftArrow": false,
        "rightArrow": false,
    });

    const monthHandler = () => {
        setMode("Months");
    };

    const yearHandler = () => {
        setMode("Years");
    };

    const decreaseMonth = () => {
        setViewedMonth(Math.abs((viewedMonth + 12 - 1) % 12));
    };
    
    const increaseMonth = () => {
        setViewedMonth(Math.abs((viewedMonth + 1) % 12));
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
                onClick={decreaseMonth} 
                className="arrow"
                onMouseEnter={() => hoverHandle("leftArrow", true)} 
                onMouseOut={() => hoverHandle("leftArrow", false)}
                style={isHover.leftArrow ? {"backgroundColor": selectedColor + "60"} : {}}
            >
                <img alt="" src={leftArrow} height="15px"/>
            </div>
            <div 
                onClick={increaseMonth} 
                className="arrow"
                onMouseEnter={() => hoverHandle("rightArrow", true)} 
                onMouseOut={() => hoverHandle("rightArrow", false)}
                style={isHover.rightArrow ? {"backgroundColor": selectedColor + "60"} : {}}
            >
                <img alt="" src={rightArrow}  height="15px"/>
            </div>
        </div>
    </div>
    );
}