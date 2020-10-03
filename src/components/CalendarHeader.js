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

    const language = useLanguage();
    const format = useFormat();
    const pickMethod = usePickMethod();
    const datesDisplayClassName = "dates-display";
    const clearButtonClassName = "clear";
    const clearStyle = {"color": selectedColor};
    let clearButtonText = "Clear";
    if (language === "Hebrew") {
        clearButtonText = "נקה";
    }
    const templateStyle = {
        "width": ((boardsNum * 100) > 300 ? 300 : (boardsNum * 100)) + "%", 
    };
    let selectedDaysStyle = {
        "backgroundColor": selectedColor + "60"
    };

    // language not included in funciton call because of the css ltr property of hebrew case
    let choosenDates = choosenDatesCalculation(selectedDays, hoveredDay, format, pickMethod);
    if (pickMethod !== "date") {
        if (selectedDays.length === 2) {
            choosenDates += calculateDaysCount(selectedDays[0], selectedDays[1], language);    
        } else if (hoveredDay !== null && selectedDays.length === 1) {
            choosenDates += calculateDaysCount(selectedDays[0], hoveredDay, language) ;
        } else {
            
        }
    }
    console.log(choosenDates)

    const handleClearClick = () => {
        setSelectedDays([]);
    }

    return (
        <div 
            className="calendar-header-template"
            style={ templateStyle }
        >
            <div 
                className="calendar-header-background"
                style={ selectedDaysStyle }
            >
                <div 
                    className="calendar-header-elements-wrap"
                    lang={language}
                >
                    <div 
                        className={datesDisplayClassName} 
                        lang={language}
                    >
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
                </div>
            </div>
        </div>
    )
}

function areEqual(prevProps, nextProps) {
    return nextProps.selectedDays.length === 0 &&
        prevProps.selectedDays === nextProps.selectedProps &&
        prevProps.selectedColor === nextProps.selectedColor;
}

export default React.memo(CalendarHeader, areEqual);