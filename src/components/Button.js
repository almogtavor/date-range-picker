import React from "react";
import '../styles/button.css';
import { useFormat, usePickMethod, useLanguage } from "../context/InitialParametersContext";
import { choosenDatesCalculation } from "../utils/utils";

const calendarIcon = require('../images/calendar-icon6.png');

export const Button = (props) => {
    const {
        showCalendar,
        setShowCalendar,
        choosenDates,
    } = props;

    const language = useLanguage();
    const format = useFormat();
    const pickMethod = usePickMethod();
    const formatPattern = choosenDatesCalculation([], null, format, pickMethod, language);
    let text = choosenDates;
    if (!text) {
        text = formatPattern;
     };

    const handleClick = () => {
        setShowCalendar(!showCalendar)
    }

    return (
    <>        
        <button className="button" onClick={handleClick}>
            { text }
            <img
                    alt=""
                    src={calendarIcon}
                    className="calendar-icon"
            />
        </button>
    </>)
}