import React from "react";
import '../styles/button.css';
import { choosenDatesCalculation } from "../utils/utils";

const calendarIcon = require('../images/calendar-icon5.png');

export const Button = (props) => {
    const {
        selectedDays, 
        hoveredDay, 
        language,
        showCalendar,
        setShowCalendar,
        format,
    } = props;

    const choosenDates = choosenDatesCalculation(selectedDays, hoveredDay, format);

    return (
        <button className="button" onClick={() => setShowCalendar(!showCalendar)}>
            { choosenDates }
            <img
                    alt=""
                    src={calendarIcon}
                    className="calendar-icon"
            />
        </button>)
}