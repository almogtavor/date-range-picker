import React from "react";
import '../styles/button.css';
import { choosenDatesCalculation } from "../utils/utils";
import { useFormat } from "../context/InitialParametersContext";

const calendarIcon = require('../images/calendar-icon5.png');

export const Button = (props) => {
    const {
        selectedDays, 
        hoveredDay,
        showCalendar,
        setShowCalendar,
    } = props;

    const format = useFormat();
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