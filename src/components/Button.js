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
        storedDates,
    } = props;

    const language = useLanguage();
    const format = useFormat();
    const pickMethod = usePickMethod();
    const formatPattern = choosenDatesCalculation([], null, format, pickMethod, language);
    let text = choosenDates;
    if (!text) {
        text = formatPattern;
    };
    if (pickMethod === "ranges" && storedDates.length > 0) {
        let minDate = storedDates[0][0], maxDate = storedDates[0][0];
        for (let i = 0; i < storedDates.length; i++) {
            console.log(storedDates[i]);
            for (let j = 0; j < storedDates[i].length; j++) {
                console.log(storedDates[i][j]);
                if (storedDates[i][j] < minDate) {
                    minDate = storedDates[i][j];
                } else if (storedDates[i][j] > maxDate) {
                    maxDate = storedDates[i][j];
                }
            }
        }
        text = choosenDatesCalculation(
            [minDate, maxDate],
            null, 
            format, 
            pickMethod, 
            language);
    }

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