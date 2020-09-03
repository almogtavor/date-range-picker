import React from "react";
import '../styles/button.css';
import { choosenDatesCalculation } from "../utils/utils";

const calendarIcon = require('../images/calendar-icon3.png');

export const Button = (props) => {
    const {
        selectedDays, 
        hoveredDay, 
        language,
        startDate,
        endDate,
        firstDayOfWeekIndex,
        boardsNum,
        selectedDays,
        selectedColor,
        hoveredDay,
        showCalendar,
        setChoosenDates,
    } = props;

    let selectedDaysStyle = {
        "width": ((boardsNum * 100) > 300 ? 300 : (boardsNum * 100)) + "%", 
        "backgroundColor": selectedColor + "60",
    };
  
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
        </div>)
}