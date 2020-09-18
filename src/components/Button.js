import React from "react";
import '../styles/button.css';
import { useFormat, usePickMethod } from "../context/InitialParametersContext";
import { choosenDatesCalculation } from "../utils/utils";

const calendarIcon = require('../images/calendar-icon5.png');

export const Button = (props) => {
    const {
        showCalendar,
        setShowCalendar,
        choosenDates,
    } = props;

    const format = useFormat();
    const pickMethod = usePickMethod();
    const formatPattern = choosenDatesCalculation([], null, format, pickMethod);

    return (
        <button className="button" onClick={() => setShowCalendar(!showCalendar)}>
            { choosenDates ? choosenDates : formatPattern }
            <img
                    alt=""
                    src={calendarIcon}
                    className="calendar-icon"
            />
        </button>)
}