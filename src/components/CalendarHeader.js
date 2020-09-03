import React from "react";
import '../styles/calendar-header.css';
import { choosenDatesCalculation } from "../utils/utils";

export const CalendarHeader = (props) => {
    const {
        selectedDays, 
        hoveredDay, 
        language,
        boardsNum,
        selectedColor,
    } = props;

    let selectedDaysStyle = {
        "width": ((boardsNum * 100) > 300 ? 300 : (boardsNum * 100)) + "%", 
        "backgroundColor": selectedColor + "60",
    };

    console.log(selectedDaysStyle);
  
    if (language === "Hebrew") {
    selectedDaysStyle["flexDirection"] = "row-reverse";
    }
  
    const choosenDates = choosenDatesCalculation(selectedDays, hoveredDay, language);

    return (
        <div 
            className="selected-dates" 
            style={selectedDaysStyle}
        >
            <div className={`dates-display ${language === "Hebrew" && "hebrew"}`}>
            {
                choosenDates
            }
            </div>
            <button>Clear All</button>
        </div>)
}