import React from "react";
import '../styles/button.css';
import { choosenDatesCalculation } from "../utils/utils";

const calendarIcon = require('../images/calendar-icon3.png');

export const Button = (props) => {
    const {
        selectedDays, 
        hoveredDay, 
        language,
        showCalendar,
        setShowCalendar,
    } = props;

    const choosenDates = choosenDatesCalculation(selectedDays, hoveredDay, language);

    return (
        <button className="button" onClick={() => setShowCalendar(!showCalendar)}>
            { !showCalendar ? choosenDates : "YYYY-MM-DD-YYYY-MM-DD"}
            <img
                    alt=""
                    src={calendarIcon}
                    className="calendar-icon"
            />
        </button>)
}