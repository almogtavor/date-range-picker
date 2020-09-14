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

    console.log(boardsNum);
    let selectedDaysStyle = {
        "width": ((boardsNum * 100) > 300 ? 300 : (boardsNum * 100)) + "%", 
        "backgroundColor": selectedColor + "60",
    };
  
    if (language === "Hebrew") {
        selectedDaysStyle["flexDirection"] = "row-reverse";
    }
  
    const choosenDates = choosenDatesCalculation(selectedDays, hoveredDay, format);

    return (
        <div 
            className="selected-dates" 
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