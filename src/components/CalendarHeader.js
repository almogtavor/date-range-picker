import React from "react";
import '../styles/calendar-header.css';
import { choosenDatesCalculation } from "../utils/utils";
import { useFormat, useLanguage, usePickMethod } from "../context/InitialParametersContext";

export const CalendarHeader = (props) => {
    const {
        setSelectedDays,
        selectedDays, 
        hoveredDay, 
        selectedColor,
        boardsNum,
    } = props;

    const language = useLanguage();
    const format = useFormat();
    const pickMethod = usePickMethod();

    let selectedDaysStyle = {
        "width": ((boardsNum * 100) > 300 ? 300 : (boardsNum * 100)) + "%", 
        "backgroundColor": selectedColor + "60",
    };
  
    if (language === "Hebrew") {
        selectedDaysStyle["flexDirection"] = "row-reverse";
    }
  
    let boardsNumClassName;
    if (boardsNum === 1) {
        boardsNumClassName = "one-board";
    } else if (boardsNum === 2) {
        boardsNumClassName = "two-boards";
    } else {
        boardsNumClassName = "three-boards";
    }

    const choosenDates = choosenDatesCalculation(selectedDays, hoveredDay, format, pickMethod);

    return (
        <div 
            className="selected-dates"
            style={selectedDaysStyle}
        >
            <div className={`dates-display ${boardsNumClassName}`} lang={language}>
                { choosenDates }
            </div>
            <button 
                className={`clear ${boardsNumClassName}`}
                lang={language}
                onClick={() => setSelectedDays([])}
                style={{"color": selectedColor}}
            >
                {language === "Hebrew" ? "נקה" : "Clear"}
            </button>
        </div>)
}