import React from "react";
import '../styles/button.css';

const calendarIcon = require('../images/calendar-icon3.png');

export const Button = (props) => {
    const {
        choosenDates,
        showCalendar,
        setShowCalendar,
    } = props;

    return (
        <button className="button" onClick={() => setShowCalendar(!showCalendar)}>
            {choosenDates}
            <img
                    alt=""
                    src={calendarIcon}
                    className="calendar-icon"
            />
        </button>)
}