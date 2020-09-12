import React from "react";
import '../styles/day.css';

export const DayElement = (props) => {
    const {
        date,
        id,
        selectedDays, 
        setSelectedDays,
        setViewedMonth,
        setViewedYear,
        isOfCurrentViewedMonth,
        hoveredDay,
        setHoveredDay,
        selectedColor,
        dayOfWeek,
        genericStyle,
        startDate,
        endDate,
        language,
        setRightViewedMonth,
        setRightViewedYear,
        setLeftViewedMonth,
        setLeftViewedYear,
        rightViewedMonth,
        rightViewedYear,
        leftViewedMonth,
        leftViewedYear,
    } = props;


    const dayNum = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const isToday = date.toLocaleDateString() === new Date().toLocaleDateString() ?  true : false;
    const isDisabled = date < startDate || date > endDate;
    let isSelected = false;
    let isInRange = false;

    selectedDays.forEach(element => {
       if (date.toLocaleDateString() === element.toLocaleDateString() && !isSelected) {
            isSelected = true;
        }
    });

    if ((selectedDays.length > 0) && !isInRange) {
        if (hoveredDay && selectedDays.length === 1) {
            if ((date >= selectedDays[0] && date <= hoveredDay) || 
                (date <= selectedDays[0] && date >= hoveredDay)) {
                isInRange = true;
            } 
        } else {
            if (selectedDays.length === 2) {
                if ((date >= selectedDays[0] && date <= selectedDays[1]) ||
                 (date <= selectedDays[0] && date >= selectedDays[1])) {
                    isInRange = true;
                } 
            }
        }
    }

    const handleClick = () => {
        if (!isDisabled) {
            if (selectedDays.length === 2) {
                setSelectedDays([date]);
            } else {
                setSelectedDays([...selectedDays, date]);
            }
            isSelected = !isSelected;
            if (!isOfCurrentViewedMonth && selectedDays.length !== 1) {
                setViewedMonth(date.getMonth(), date.getFullYear());
                if (rightViewedYear === year && rightViewedMonth === month) {
                    setRightViewedMonth(rightViewedMonth + 1);
                } else if (leftViewedYear === year && leftViewedMonth === month) {
                    setLeftViewedMonth(leftViewedMonth - 1);
                }
            }

            if (new Date(year, month + 1, 1) < endDate) {
                if (selectedDays.length === 1) {
                    const firstSelectMonth = selectedDays[0].getMonth();
                    const firstSelectYear = selectedDays[0].getFullYear();
                    const {rightId, leftId} = language === "Hebrew" ? {rightId: 0, leftId: 1} : {rightId: 1, leftId: 0}; 
                    
                    if (id === leftId) {
                        if (new Date(year, month, 0) > new Date(firstSelectYear, firstSelectMonth, 0)) {
                            setRightViewedMonth(month, year);
                            setViewedMonth(firstSelectMonth, firstSelectYear);
                        } else if (new Date(year, month, 0) < new Date(firstSelectYear, firstSelectMonth, 0)) {
                            setRightViewedMonth(firstSelectMonth, firstSelectYear);
                            setViewedMonth(month, year);
                        }
                    } else if (id === rightId) {
                        if (new Date(year, month, 0) > new Date(firstSelectYear, firstSelectMonth, 0)) {
                            setLeftViewedMonth(firstSelectMonth, firstSelectYear);
                            setViewedMonth(month, year);
                        } else if (year === firstSelectYear && month === firstSelectMonth) {
                            setLeftViewedMonth(month, year);
                            setViewedMonth(month + 1);
                        } else {
                            setLeftViewedMonth(month, year);
                            setViewedMonth(firstSelectMonth, firstSelectYear);
                        }
                    }
                }
            } 
        }
    };

    const handleEnterHover = () => {
        if (!isDisabled) {
            setHoveredDay(date);
        }
    };

    const handleOutHover = () => {
        if (selectedDays.length === 2) {
            setHoveredDay(null);
        }
    };
    
    return (
    <div 
        className={`day-element ${!isOfCurrentViewedMonth && "non-current"}
            ${isInRange ? "in-range" : "not-in-range"}
            ${isDisabled && "disabled"}
            ${isToday && "today"}
            ${(dayOfWeek === 0 && !isInRange) && "first-day-of-week"}
            ${isSelected && "selected-day"}
            ${(dayOfWeek === 6 && !isInRange) && "last-day-of-week"}`}
        style={isSelected ? {...genericStyle, "background": selectedColor, "borderColor": selectedColor} : genericStyle}
        onClick={handleClick}
        onMouseEnter={handleEnterHover}
        onMouseLeave={handleOutHover} 
    >
        <div 
            className={`${isInRange && "hover-div"}`} 
            style={
                hoveredDay !== null ? 
                    (isInRange && 
                        (date.toLocaleDateString() !== hoveredDay.toLocaleDateString() || selectedDays.length !== 2) ?
                            {"background": selectedColor + "60"} : 
                            {}) :
                isInRange && selectedDays.length === 2 ?
                    {"background": selectedColor + "60"} :
                    {}
            }>
                {dayNum}
        </div>
    </div>)
}

 // ${selectedDays.length === 2 ? 
//     (date.toLocaleDateString() === selectedDays[0].toLocaleDateString()) && selectedDays[0] > selectedDays[1] ? "last-selected" : 
//     (date.toLocaleDateString() === selectedDays[0].toLocaleDateString()) && selectedDays[0] < selectedDays[1] ? "first-selected" :
//     (date.toLocaleDateString() === selectedDays[1].toLocaleDateString()) && selectedDays[0] > selectedDays[1] ? "first-selected" :
//     (date.toLocaleDateString() === selectedDays[1].toLocaleDateString()) && selectedDays[0] < selectedDays[1] && "last-selected" :
// (selectedDays.length === 1 && 
//     (date.toLocaleDateString() === selectedDays[0].toLocaleDateString()) && selectedDays[0] > hoveredDay) ? "last-selected" :
//     selectedDays[0] < hoveredDay && "first-selected"}