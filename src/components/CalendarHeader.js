import React from "react";
import '../styles/calendar-header.css';
import { choosenDatesCalculation, calculateDaysCount } from "../utils/utils";
import { useFormat, useLanguage, usePickMethod } from "../context/InitialParametersContext";

export const CalendarHeader = (props) => {
    const {
        setSelectedDays,
        selectedDays, 
        hoveredDay, 
        selectedColor,
        boardsNum,
    } = props;

    console.log(props);

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

    let choosenDates = choosenDatesCalculation(selectedDays, hoveredDay, format, pickMethod);
    if (pickMethod !== "date") {
        if (selectedDays.length === 2) {
            choosenDates += calculateDaysCount(selectedDays[0], selectedDays[1]);    
        } else if (hoveredDay !== null) {
            choosenDates += calculateDaysCount(selectedDays[0], hoveredDay);    
        }
    }
    const datesDisplayClassName = `dates-display ${boardsNumClassName}`;
    const clearButtonClassName = `clear ${boardsNumClassName}`;
    const clearStyle = {"color": selectedColor};
    let clearButtonText = "Clear";
    if (language === "Hebrew") {
        clearButtonText = "נקה";
    }

    const handleClearClick = () => {
        setSelectedDays([]);
    }

    return (
        <div 
            className="selected-dates"
            style={ selectedDaysStyle }
        >
            <div className={datesDisplayClassName} lang={language}>
                { choosenDates }
            </div>
            <button 
                className={clearButtonClassName}
                lang={language}
                onClick={handleClearClick}
                style={clearStyle}
            >
                {clearButtonText}
            </button>
        </div>)
}