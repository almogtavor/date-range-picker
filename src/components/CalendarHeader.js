import React from "react";
import '../styles/calendar-header.css';
import { choosenDatesCalculation } from "../utils/utils";
import { useFormat, useLanguage } from "../context/InitialParametersContext";

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
    const choosenDates = choosenDatesCalculation(selectedDays, hoveredDay, format);

    return (
        <div 
            className={`selected-dates ${boardsNumClassName }`}
            style={selectedDaysStyle}
        >
            <div className="dates-display" lang={language}>
                { choosenDates }
            </div>
            <button 
                className="clear"
                lang={language}
                onClick={() => setSelectedDays([])}
                style={{"color": selectedColor}}
            >
                {language === "Hebrew" ? "נקה" : "Clear"}
            </button>
        </div>)
}