import React, { useState } from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/header.css';

const language = "Hebrew";
const leftArrow = require('../images/arrow-left.png');
const rightArrow = require('../images/arrow-right.png');

export const Header = (props) => {
    const {selectedColor, viewedMonth, viewedYear, setViewedMonth} = props;
    const [isHover, setIsHover] = useState({"month": false, "year": false});

    const monthHandler = () => {
        setViewedMonth(month => ({ displayMonthSelector: true }));
    };

    const decreaseMonth = () => {
        setViewedMonth(Math.abs((viewedMonth + 12 - 1) % 12));
    };
    
    const increaseMonth = () => {
        setViewedMonth(Math.abs((viewedMonth + 1) % 12));
    };

    const yearHoverEnterHandle = () => {
        setIsHover({"month": false, "year": true});
    }

    const monthHoverEnterHandle = () => {
        setIsHover({"month": true, "year": false});
    }
    
    const hoverOutHandle = () => {
        setIsHover({"month": false, "year": false});
    }

    return (
    <div className="header">
        <div className="header--info">
            <div 
                className="header--month" 
                onMouseEnter={monthHoverEnterHandle} 
                onMouseOut={hoverOutHandle} 
                onClick={monthHandler} 
                style={isHover.month ? {"backgroundColor": selectedColor + "60"} : {}}
            >
                {calendarConfig.months.English[viewedMonth]}
            </div>
            <div 
                className="header--year" 
                onMouseEnter={yearHoverEnterHandle} 
                onMouseOut={hoverOutHandle} 
                onClick={monthHandler} 
                style={isHover.year ? {"backgroundColor": selectedColor + "60"} : {}}
            >
                {viewedYear}
            </div>
            </div>
            <div className="header-icons">
            <div onClick={decreaseMonth}>
                <img alt="" src={leftArrow} height="15px"/>
            </div>
            <div onClick={increaseMonth}>
                <img alt="" src={rightArrow}  height="15px"/>
            </div>
        </div>
    </div>
    );
}