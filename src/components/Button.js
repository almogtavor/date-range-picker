import React from "react";
import '../styles/button.css';
import { choosenDatesCalculation } from "../utils/utils";
import { useFormat } from "../context/InitialParametersContext";

const calendarIcon = require('../images/calendar-icon5.png');

export const Button = (props) => {
    const {
        showCalendar,
        setShowCalendar,
        choosenDates,
    } = props;

    const format = useFormat();

    return (
        <button className="button" onClick={() => setShowCalendar(!showCalendar)}>
            { choosenDates ? choosenDates : format +  " - " + format}
            <img
                    alt=""
                    src={calendarIcon}
                    className="calendar-icon"
            />
        </button>)
}