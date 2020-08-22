import React, { useState } from "react";
import '../styles/header.css';

const language = "Hebrew";
const leftArrow = require('../images/arrow-left.png');
const rightArrow = require('../images/arrow-right.png');

const months = {
    "English": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    "Hebrew": [
        "ינאור",
        "פברואר",
        "מרץ",
        "אפריל",
        "מאי",
        "יוני",
        "יולי",
        "אוגוסט",
        "ספטמבר",
        "אוקטובר",
        "נובמבר",
        "דצמבר"
    ]
};

export const Header = (selectedColor) => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const monthHandler = () => {
        setMonth(month => ({ displayMonthSelector: true }));
    };

    const decreaseMonth = () => {
        setMonth(Math.abs((month + 12 - 1) % 12));
    };
    
    const increaseMonth = () => {
        setMonth(Math.abs((month + 1) % 12));
    };

    return (
    <div className="header">
        <div className="header--info">
            <span className="header--month" onClick={monthHandler}>
                {months.English[month]}
            </span>
            <span className="header--year">{year}</span>
            </div>
            <div className="header-icons">
            <span onClick={decreaseMonth}>
                <img alt="" src={leftArrow} height="15px"/>
            </span>
            <span onClick={increaseMonth}>
                <img alt="" src={rightArrow}  height="15px"/>
            </span>
        </div>
    </div>
    );
}