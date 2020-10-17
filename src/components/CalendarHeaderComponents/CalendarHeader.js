import React from "react";
import '../../styles/CalendarHeaderStyles/calendar-header.css';
import { choosenDatesCalculation, calculateDaysCount, removeItemFromArray, getOpacityColorStyle } from "../../utils/generalUtils";
import { useFormat, useLanguage, usePickMethod } from "../../context/InitialParametersContext";
import { updateViewedMonths } from '../../utils/generalUtils';
import DatesDisplayContainer from "../../containers/CalendarHeaderContainers/DatesDisplayContainer";

export const CalendarHeader = (props) => {
    const {
        setSelectedDays,
        selectedDays, 
        hoveredDay, 
        selectedColor,
        boardsNum,
        storedDates,
        choosenDatesList,
        setChoosenDatesList,
        setStoredDates,
        setViewedMonth,
        setViewedYear,
    } = props;

    const language = useLanguage();
    const format = useFormat();
    const pickMethod = usePickMethod();
    const clearButtonClassName = "clear";
    const clearStyle = {"color": selectedColor};
    const widthPercentage = ((boardsNum * 100) > 300 ? 300 : (boardsNum * 100));
    
    let clearButtonText = "Clear";
    if (language === "Hebrew") {
        clearButtonText = "נקה";
    }
    const templateStyle = {
        "width": widthPercentage + "%", 
    };
    const selectedDaysStyle = getOpacityColorStyle(selectedColor, 60);

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
 
    const handleClearClick = () => {
        if (pickMethod === "ranges") {
            let clearedChoosenDatesList = removeItemFromArray(choosenDatesList, choosenDates);
            let clearedStoredDates = removeItemFromArray(storedDates, selectedDays);
            setChoosenDatesList([...clearedChoosenDatesList]);
            setStoredDates([...clearedStoredDates]);
            if (storedDates.length < 1) {
                setSelectedDays([]);
            } else {
                setSelectedDays(storedDates[0]);
                updateViewedMonths(boardsNum, language, setViewedMonth, setViewedYear, storedDates[0][0], storedDates[0][1])
            }
        } else {
            setSelectedDays([]);
        }
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
                    <DatesDisplayContainer
                        choosenDates={choosenDates}
                        selectedDaysStyle={selectedDaysStyle}
                    />
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