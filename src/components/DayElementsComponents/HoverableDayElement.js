import React from "react";
import '../../styles/DayElementsStyles/day.css';
import { useEndDate, useStartDate, usePickMethod } from "../../context/InitialParametersContext";

function inRangeCheck(date, edgeDate1, edgeDate2) {
    return (date >= edgeDate1 && date <= edgeDate2) || 
        (date <= edgeDate1 && date >= edgeDate2);
}

export const HoverableDayElement = (props) => {
    const {
        date,
        selectedDays,
        selectedColor,
        hoveredDay,
        setHoveredDay,
        dayOfWeek,
    } = props;

    const startDate = useStartDate();
    const endDate = useEndDate();
    const dayNum = date.getDate();
    const pickMethod = usePickMethod();
    const isDisabled = date < startDate || date > endDate;
    let isInRange = false;

    let hoverStyle = {};
    const coloredStyle = {"background": selectedColor + "60"};

    const handleEnterHover = () => {
        if (!isDisabled && pickMethod !== "date") {
            setHoveredDay(date);
        }
    };

    const handleOutHover = () => {
        if (selectedDays.length === 2) {
            setHoveredDay(null);
        }
    };

    if (selectedDays.length > 0) {
        if (hoveredDay && selectedDays.length % 2 !== 0) {
            if (pickMethod === "range") {
                if (inRangeCheck(date, selectedDays[0], hoveredDay)) {
                    isInRange = true;
                }
            } else {
                for (let i = 0; i < selectedDays.length - 1; i += 2) {
                    if (inRangeCheck(date, selectedDays[i], selectedDays[i + 1])) {
                        isInRange = true;
                    }
                }
                if (inRangeCheck(date, selectedDays[selectedDays.length - 1], hoveredDay)) {
                    isInRange = true;
                }
            }
        } else if (selectedDays.length % 2 === 0) {
            if (pickMethod === "range") {
                if (inRangeCheck(date, selectedDays[0], selectedDays[1])) {
                    isInRange = true;
                }
            } else {
                for (let i = 0; i < selectedDays.length; i += 2) {
                    if (inRangeCheck(date, selectedDays[i], selectedDays[i + 1])) {
                        isInRange = true;
                    }
                }
            }
        } else if (selectedDays.length === 1 && date === selectedDays[0]) {
            isInRange = true;
        }
    }

    if (isInRange) {
        if (hoveredDay !== null) {
            if (date.toLocaleDateString() !== hoveredDay.toLocaleDateString()
                || selectedDays.length !== 2) {
                hoverStyle = coloredStyle;
            }
        } else if (selectedDays.length === 2) {
                hoverStyle = coloredStyle;
        }
    }

    let className = "hover-div";
    if (!isInRange && pickMethod !== "date") {
        className += " not-in-range";
        if (dayOfWeek === 0) {
            className += " first-day-of-week";
        } else if (dayOfWeek === 6) {
            className += " last-day-of-week";
        }
    } else {
        className += " in-range";
    }
    
    return (
        <div 
            className={className} 
            style={hoverStyle}
            onMouseEnter={handleEnterHover}
            onMouseLeave={handleOutHover}
        >
                {dayNum}
        </div>
    )
}