import React from "react";
import '../styles/button.css';
import { setShowCalendar } from '../actions';
import { useFormat, usePickMethod, useLanguage } from "../context/InitialParametersContext";
import { choosenDatesCalculation } from "../utils/generalUtils";

const calendarIcon = require('../images/calendar-icon6.png');

export const Button = (props) => {
    const {
        generalStateDispatch,
        generalState,
    } = props;

    const showCalendar = generalState.showCalendar;
    const buttonDatesText = generalState.buttonDatesText;
    const language = useLanguage();
    const format = useFormat();
    const pickMethod = usePickMethod();
    const formatPattern = choosenDatesCalculation([], null, format, pickMethod, language);
    let text = buttonDatesText;
    if (!text) {
        text = formatPattern;
    };
    
    const handleClick = () => {
        generalStateDispatch(setShowCalendar(!showCalendar))
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