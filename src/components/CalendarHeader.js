import React from "react";
import '../styles/calendar-header.css';
import { choosenDatesCalculation } from "../utils/utils";

export const CalendarHeader = (props) => {
    const {
        setSelectedDays,
        selectedDays, 
        hoveredDay, 
        language,
        boardsNum,
        selectedColor,
        format,
    } = props;

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
            <div className={`dates-display ${language === "Hebrew" && "hebrew"}`}>
                { choosenDates }
            </div>
            <button 
                className="clear"
                onClick={() => setSelectedDays([])}
                style={{"color": selectedColor}}
            >
                {language === "Hebrew" ? "נקה" : "Clear"}
            </button>
        </div>)
}